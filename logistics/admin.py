from django.contrib import admin
from django.forms import forms  # Añadir esta línea
from django import forms  # O mejor usar esta línea
from django.shortcuts import redirect  # Añade esta línea
from django.utils.safestring import mark_safe
from django.utils import timezone
from django.template.loader import render_to_string  # Añade esta línea
from django.conf import settings  # Añade esta línea
from .models import Provider, Service, Event, News, Rubro, NewsletterSubscription, Newsletter, Course
from django.contrib import messages
from .scraper import NewsScraperManager
from .forms import NewsletterForm
from django.urls import path, reverse
from django.core.mail import send_mail
from image_cropping import ImageCroppingMixin
from PIL import Image

@admin.register(Course)
class CourseAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('name', 'institution', 'course_type', 'modality', 'start_date', 'is_new')
    list_filter = ('course_type', 'modality', 'is_new')
    search_fields = ('name', 'institution', 'description')
    date_hierarchy = 'start_date'
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('name', 'institution', 'course_type', 'modality', 'start_date')
        }),
        ('Contenido', {
            'fields': ('description', 'image', 'cropping')
        }),
        ('Estado', {
            'fields': ('is_new',)
        }),
        ('Metadatos', {
            'classes': ('collapse',),
            'fields': ('created_at', 'updated_at')
        }),
    )

@admin.register(Newsletter)
class NewsletterAdmin(admin.ModelAdmin):
    form = NewsletterForm
    list_display = ['title', 'created_date', 'sent_date', 'is_sent', 'recipients_count', 'included_news']
    list_filter = ['is_sent', 'created_date', 'sent_date']
    readonly_fields = ['created_date', 'sent_date', 'recipients_count', 'newsletter_preview']
    fields = ['title', 'content', 'news_items', 'created_date', 'sent_date', 'recipients_count', 'newsletter_preview']  # Añade esta línea
    
    def included_news(self, obj):
        return ", ".join([news.title for news in obj.news_items.all()])

    included_news.short_description = "Noticias Incluidas"

    def newsletter_preview(self, obj):
        if obj.content:
            return mark_safe(f'<div class="newsletter-preview">{obj.content}</div>')
        return "No hay contenido para previsualizar"
    newsletter_preview.short_description = "Vista Previa del Newsletter"

    def changelist_view(self, request, extra_context=None):
        extra_context = extra_context or {}
        extra_context['show_generate_button'] = True
        return super().changelist_view(request, extra_context=extra_context)

    class Media:
        css = {
            'all': ('admin/css/admin_custom.css',)
        }
    
    def get_urls(self):
        from django.urls import path
        urls = super().get_urls()
        custom_urls = [
            path('generate-newsletter/', 
                 self.admin_site.admin_view(self.generate_newsletter), 
                 name='generate-newsletter'),
            path('send-newsletter/<int:newsletter_id>/', 
                 self.admin_site.admin_view(self.send_newsletter), 
                 name='send-newsletter'),
        ]
        return custom_urls + urls

    def generate_newsletter(self, request):

        
        # Calcular fechas
        end_date = timezone.now()
        start_date = (end_date - timezone.timedelta(days=7)).replace(hour=0, minute=0, second=0)
        end_date = end_date.replace(hour=23, minute=59, second=59)
        
        print("="*50, flush=True)
        print(f"DEBUG - start_date: {start_date}", flush=True)
        print(f"DEBUG - end_date: {end_date}", flush=True)
        print("="*50, flush=True)

        # Obtener todas las noticias marcadas para newsletter
        marked_news = News.objects.filter(
            include_in_newsletter=True,
            is_published=True,
        ).order_by('-date')

        print("\nNoticias encontradas:", flush=True)
        print("-"*30, flush=True)
        for news in marked_news:
            print(f"""
            Título: {news.title}
            Published: {news.is_published}
            Newsletter: {news.include_in_newsletter}
            Date: {news.date}
            """, flush=True)
            print("-"*30, flush=True)

        print(f"\nTotal noticias encontradas: {marked_news.count()}", flush=True)
        print("="*50, flush=True)

        if not marked_news:
            self.message_user(
                request, 
                "No hay noticias marcadas para incluir en el newsletter.", 
                messages.WARNING
            )
            return redirect('admin:logistics_newsletter_changelist')
        
        try:
            # Crear un nuevo newsletter con el título corregido
            newsletter = Newsletter.objects.create(
                title=f"Newsletter Semanal ({start_date.date().strftime('%d/%m/%Y')} - {end_date.date().strftime('%d/%m/%Y')})",
                created_date=timezone.now()
            )
            
            # Asociar las noticias al newsletter
            newsletter.news_items.set(marked_news)
            
            # Preparar las noticias con los resúmenes y enlaces
            news_items_data = []
            for news in marked_news:
                # Construir la URL absoluta de la imagen si existe
                image_url = None
                if news.image and news.image.name:  # Verificar que exista la imagen y tenga un nombre
                    try:
                        image_url = request.build_absolute_uri(news.image.url)
                    except Exception as e:
                        print(f"Error al obtener URL de imagen: {str(e)}")

                news_items_data.append({
                    'title': news.title,
                    'summary': news.generate_summary(),
                    'url': request.build_absolute_uri(reverse('news-detail', args=[news.id])),
                    'image_url': image_url,
                    'id': news.id,
                    'date': news.date
                })
            
            # Generar el contenido HTML del newsletter
            content = render_to_string('logistics/emails/newsletter_template.html', {
                'newsletter': newsletter,
                'subscriber_email': '{{ subscriber_email }}',
                'news_items': news_items_data,
                'request': request
            })
            newsletter.content = content
            
            # Actualizar el contador de destinatarios
            subscribers_count = NewsletterSubscription.objects.count()
            newsletter.recipients_count = subscribers_count
            newsletter.save()

            self.message_user(
                request,
                f"Newsletter generado exitosamente con {marked_news.count()} noticias.",
                messages.SUCCESS
            )
            
            # Redirigir a la página de edición del newsletter
            return redirect('admin:logistics_newsletter_change', object_id=newsletter.pk)

        except Exception as e:
            print(f"Error al generar newsletter: {str(e)}")
            self.message_user(
                request,
                f"Error al generar el newsletter: {str(e)}",
                messages.ERROR
            )
            return redirect('admin:logistics_newsletter_changelist')
    
    # Añadir botones en la interfaz de admin
    def change_view(self, request, object_id, form_url='', extra_context=None):
        extra_context = extra_context or {}
        if object_id:
            newsletter = self.get_object(request, object_id)
            if newsletter and not newsletter.is_sent:
                extra_context['show_send_button'] = True
        return super().change_view(
            request, object_id, form_url, extra_context=extra_context
        )


    def send_newsletter(self, request, newsletter_id):
        try:
            newsletter = Newsletter.objects.get(pk=newsletter_id)
            if newsletter.is_sent:
                self.message_user(
                    request,
                    "Este newsletter ya fue enviado anteriormente.",
                    messages.WARNING
                )
                return redirect('admin:logistics_newsletter_change', object_id=newsletter_id)

            # Obtener todos los suscriptores
            subscribers = NewsletterSubscription.objects.all()
            
            for subscriber in subscribers:
                # Personalizar el contenido para cada suscriptor
                personalized_content = newsletter.content.replace(
                    '{{ subscriber_email }}', 
                    subscriber.correo
                )
                
                # Enviar el correo
                send_mail(
                    subject=newsletter.title,
                    message='',  # Versión texto plano
                    from_email=settings.DEFAULT_FROM_EMAIL,
                    recipient_list=[subscriber.correo],
                    html_message=personalized_content,
                    fail_silently=False,
                )

            # Actualizar el estado del newsletter
            newsletter.is_sent = True
            newsletter.sent_date = timezone.now()
            newsletter.recipients_count = subscribers.count()
            newsletter.save()

            # Desmarcar las noticias enviadas
            newsletter.news_items.update(include_in_newsletter=False)

            self.message_user(
                request,
                f"Newsletter enviado exitosamente a {subscribers.count()} suscriptores.",
                messages.SUCCESS
            )
        except Exception as e:
            self.message_user(
                request,
                f"Error al enviar el newsletter: {str(e)}",
                messages.ERROR
            )

        return redirect('admin:logistics_newsletter_changelist')


@admin.register(NewsletterSubscription)
class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    # list_display = ('nombre', 'apellidos', 'empresa', 'rol', 'correo', 'fecha_suscripcion')
    # list_filter = ('rol', 'fecha_suscripcion')
    # search_fields = ('nombre', 'apellidos', 'empresa', 'correo')
    # readonly_fields = ('fecha_suscripcion',)
    list_display = ('nombre', 'apellidos', 'empresa', 'rol', 'correo', 'pais', 'ciudad', 'sector', 'fecha_suscripcion')  # Añadir 'region'
    list_filter = ('rol', 'fecha_suscripcion', 'pais', 'sector')  
    search_fields = ('nombre', 'apellidos', 'empresa', 'correo', 'pais', 'ciudad', 'sector')  # Búsqueda por 'region'
    readonly_fields = ('fecha_suscripcion',)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['pais'].widget = forms.Select(choices=NewsletterSubscription.PAISES_CHOICES)
        form.base_fields['sector'].widget = forms.Select(choices=NewsletterSubscription.SECTOR_CHOICES)
        return form

@admin.register(Rubro)
class RubroAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']  # Qué campos mostrar en la lista
    search_fields = ['name', 'description']  # Campos que puedes buscar

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'source', 'author', 'preview_image', 'is_published', 'is_scraped', 'include_in_newsletter')
    list_filter = ('source', 'is_published', 'is_scraped', 'date', 'include_in_newsletter')
    search_fields = ('title', 'description', 'author')
    date_hierarchy = 'date'
    ordering = ('-date',)
    actions = ['run_scraper']
    fieldsets = (
        ('Información Principal', {
            'fields': ('title', 'date', 'description')
        }),
        ('Origen', {
            'fields': ('source', 'source_website', 'author', 'source_url')
        }),
        ('Imagen', {
            'fields': ('image', 'preview_image'),
            'description': 'Vista previa generada automáticamente'
        }),
        ('Estado', {
            'fields': ('is_published', 'is_scraped', 'include_in_newsletter')
        }),
    )
    readonly_fields = ('preview_image',)  # Esto asegura que la vista previa no sea editable

    # Agrega URLs personalizadas
    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('run-scraper/', self.admin_site.admin_view(self.run_scraper_view), name='run-scraper'),
        ]
        return custom_urls + urls

    # Vista para ejecutar el scraping desde el botón
    def run_scraper_view(self, request):
        try:
            manager = NewsScraperManager()
            news_items = manager.scrape_all()
            manager.save_news(news_items)
            self.message_user(
                request,
                f"Scraping ejecutado exitosamente. Se encontraron {len(news_items)} noticias.",
                messages.SUCCESS
            )
        except Exception as e:
            self.message_user(
                request,
                f"Error ejecutando el scraping: {str(e)}",
                messages.ERROR
            )
        return redirect('admin:logistics_news_changelist')  # Redirige a la lista de noticias
    
    def preview_image(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" height="60" style="object-fit: cover;" />')
        return "No hay imagen"
    preview_image.short_description = "Vista previa"

    def run_scraper(self, request, queryset):
        try:
            manager = NewsScraperManager()
            news_items = manager.scrape_all()
            manager.save_news(news_items)
            self.message_user(
                request, 
                f"Scraping ejecutado exitosamente. Se encontraron {len(news_items)} noticias.",
                messages.SUCCESS
            )
        except Exception as e:
            self.message_user(
                request,
                f"Error ejecutando el scraper: {str(e)}",
                messages.ERROR
            )
    run_scraper.short_description = "Ejecutar scraping de noticias"

# Primero, crear una clase de formulario personalizada
class ProviderAdminForm(forms.ModelForm):
    class Meta:
        model = Provider
        fields = '__all__'

    def clean_email(self):
        return self.cleaned_data.get('email', '')

    def clean_phone_number(self):
        return self.cleaned_data.get('phone_number', '')

    def clean_website(self):
        return self.cleaned_data.get('website', '')

@admin.register(Provider)
class ProviderAdmin(admin.ModelAdmin):
    form = ProviderAdminForm  # Usar el formulario personalizado
    list_display = ['name', 'phone_number', 'email', 'website', 'view_services']
    list_filter = ['services']
    search_fields = ['name', 'description', 'address', 'email']
    filter_horizontal = ['services']
    readonly_fields = ['preview_image']
    fieldsets = (
        ('Información Principal', {
            'fields': ('name', 'description', 'services')
        }),
        ('Imagen', {
            'fields': ('image', 'preview_image'),
            'description': 'Tamaño recomendado: 300x200 píxeles. Máximo 2MB.'
        }),
        ('Información de Contacto', {
            'fields': ('address', 'phone_number', 'email', 'website')
        }),
        ('Restricciones', {  # 🔹 Nuevo campo "Solo Miembros"
            'fields': ('only_members',)
        }),
    )

    def preview_image(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="300" height="200" style="object-fit: cover;"/>')
        return "No hay imagen cargada"
    preview_image.short_description = 'Vista previa'

    def view_services(self, obj):
        return ", ".join([service.name for service in obj.services.all()])
    view_services.short_description = 'Servicios'

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'flag_directorio', 'provider_count']
    list_filter = ['flag_directorio']
    search_fields = ['name', 'description']

    def provider_count(self, obj):
        return obj.providers.count()
    provider_count.short_description = 'Número de Proveedores'
  
@admin.register(Event)
class EventAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ['name', 'date', 'location', 'preview_image_thumbnail', 'created_at']
    list_filter = ['date', 'created_at']
    search_fields = ['name', 'description', 'location']
    readonly_fields = ['created_at', 'updated_at', 'preview_image']  # Incluye 'preview_image'
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('name', 'date', 'location', 'description')
        }),
        ('Imagen', {
            'fields': ('image', 'cropping', 'preview_image'),  # Incluye 'preview_image' y 'cropping' juntos
            'description': 'Selecciona el área de la imagen que quieres mostrar.'
        }),
        ('Información del Sistema', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',),
            'description': 'Estos campos se actualizarán automáticamente al guardar.'
        }),
    )

    ordering = ['-date']
    date_hierarchy = 'date'

    def preview_image(self, obj):
        """Genera una vista previa completa de la imagen cargada."""
        if obj.image:
            return mark_safe(f'''
                <div class="preview-container">
                    <img src="{obj.image.url}" 
                         style="object-fit: contain; width: 100%; height: auto; border: 1px solid #ddd;" />
                </div>
            ''')
        return "No hay imagen cargada"

    preview_image.short_description = 'Vista Previa Completa'

    def preview_image_thumbnail(self, obj):
        """Genera una miniatura de la imagen para la lista de eventos."""
        if obj.image:
            return mark_safe(f'''
                <img src="{obj.image.url}" 
                     width="100" 
                     height="50" 
                     style="object-fit: cover; border: 1px solid #ddd;" />
            ''')
        return "Sin imagen"

    preview_image_thumbnail.short_description = 'Miniatura'

    def save_model(self, request, obj, form, change):
        """Asegura que las fechas se actualicen correctamente."""
        if not change:  # Si es un nuevo objeto
            obj.created_at = timezone.now()
        obj.updated_at = timezone.now()
        super().save_model(request, obj, form, change)

    class Media:
        css = {
            'all': [
                'admin/css/events.css',  # CSS personalizado
                'cropping/css/jquery.Jcrop.min.css',
                'admin/css/admin_custom.css',  # Archivo CSS actualizado
            ]
        }
        js = [
            'admin/js/jquery.init.js',
            'cropping/js/jquery.Jcrop.min.js',
            'cropping/js/jquery.Jcrop.js',
            'cropping/js/cropping.js',
        ]