from django.contrib import admin
from django.forms import forms
from django import forms
from django.shortcuts import redirect
from django.utils.safestring import mark_safe
from django.utils import timezone
from django.template.loader import render_to_string
from django.conf import settings
from django.contrib.auth.models import User, Group
from django.contrib.auth.admin import UserAdmin, GroupAdmin
from django.urls import path, reverse
from django.core.mail import send_mail
from image_cropping import ImageCroppingMixin
from PIL import Image

from .models import Provider, Service, Event, News, Rubro, NewsletterSubscription, Newsletter, Course, Article, Requirement, Proposal, Resource, Banner
from django.contrib import messages
from .scraper import NewsScraperManager
from .forms import NewsletterForm


class ProposalAdminForm(forms.ModelForm):
    class Meta:
        model = Proposal
        fields = '__all__'
        widgets = {
            'company': forms.TextInput(attrs={'class': 'autocomplete-company'}),
        }

# Primero, definimos todas las clases de formularios
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

# Clase base para los anuncios
class AnuncioAdminBase(admin.ModelAdmin):
    def get_app_list(self, request):
        """
        Personaliza el menú de la aplicación para mostrar 'Anuncios'
        """
        app_list = super().get_app_list(request)
        return app_list

# Luego, definimos todas las clases de ModelAdmin (sin decoradores)
class CourseAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ('name', 'institution', 'institution_type', 'course_type', 'modality', 'price', 'start_date', 'is_new')
    list_filter = ('course_type', 'modality', 'institution_type', 'topic', 'is_new')
    search_fields = ('name', 'institution', 'description')
    date_hierarchy = 'start_date'
    readonly_fields = ('created_at', 'updated_at')
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('name', 'institution_type', 'institution', 'course_type', 'modality', 'price', 'start_date')
        }),
        ('Contenido', {
            'fields': ('description', 'topic', 'image', 'cropping')
        }),
        ('Estado', {
            'fields': ('is_new',)
        }),
        ('Metadatos', {
            'classes': ('collapse',),
            'fields': ('created_at', 'updated_at')
        }),
    )

class NewsletterAdmin(admin.ModelAdmin):
    form = NewsletterForm
    list_display = ['title', 'created_date', 'sent_date', 'is_sent', 'recipients_count', 'included_news']
    list_filter = ['is_sent', 'created_date', 'sent_date']
    readonly_fields = ['created_date', 'sent_date', 'recipients_count', 'newsletter_preview']
    fields = ['title', 'content', 'news_items', 'created_date', 'sent_date', 'recipients_count', 'newsletter_preview']
    
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

class NewsletterSubscriptionAdmin(admin.ModelAdmin):
    list_display = ('nombre_completo', 'rol', 'correo', 'sector', 'fecha_suscripcion', 'user')
    list_filter = ('rol', 'fecha_suscripcion', 'sector')  
    search_fields = ('nombre_completo', 'correo', 'rol', 'sector')
    readonly_fields = ('fecha_suscripcion', 'user')

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields['sector'].widget = forms.Select(choices=NewsletterSubscription.SECTOR_CHOICES)
        return form

class RubroAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']
    search_fields = ['name', 'description']

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
    readonly_fields = ('preview_image',)

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('run-scraper/', self.admin_site.admin_view(self.run_scraper_view), name='run-scraper'),
        ]
        return custom_urls + urls

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
        return redirect('admin:logistics_news_changelist')
    
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

class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'author', 'preview_image', 'is_published', 'include_in_newsletter')
    list_filter = ('is_published', 'date', 'include_in_newsletter')
    search_fields = ('title', 'description', 'author', 'tags')
    date_hierarchy = 'date'
    ordering = ('-date',)
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('title', 'date', 'description')
        }),
        ('Autor y Etiquetas', {
            'fields': ('author', 'tags')
        }),
        ('Imagen', {
            'fields': ('image', 'preview_image'),
            'description': 'Vista previa generada automáticamente'
        }),
        ('Estado', {
            'fields': ('is_published', 'include_in_newsletter')
        }),
    )
    readonly_fields = ('preview_image',)
    
    def preview_image(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="100" height="60" style="object-fit: cover;" />')
        return "No hay imagen"
    preview_image.short_description = "Vista previa"

class RequirementAdmin(AnuncioAdminBase):
    list_display = ('title', 'company', 'phone', 'email', 'valid_until', 'is_active', 'created_at')
    list_filter = ('is_active', 'valid_until')
    search_fields = ('title', 'company', 'description', 'email')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Información de la Empresa', {
            'fields': ('company', 'title', 'description')
        }),
        ('Información de Contacto', {
            'fields': ('phone', 'email')
        }),
        ('Estado y Vigencia', {
            'fields': ('valid_until', 'is_active')
        }),
    )

class ProposalAdmin(AnuncioAdminBase):
    form = ProposalAdminForm
    list_display = ('title', 'company', 'phone', 'email', 'valid_until', 'is_active', 'created_at')
    list_filter = ('is_active', 'valid_until')
    search_fields = ('title', 'company', 'description', 'email')
    date_hierarchy = 'created_at'
    
    fieldsets = (
        ('Información de la Empresa', {
            'fields': ('company', 'title', 'description')
        }),
        ('Información de Contacto', {
            'fields': ('phone', 'email')
        }),
        ('Estado y Vigencia', {
            'fields': ('valid_until', 'is_active')
        }),
    )
    
    class Media:
        js = ('admin/js/proposal_company_autocomplete.js',)

class ProviderAdmin(admin.ModelAdmin):
    form = ProviderAdminForm
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
        ('Restricciones', {
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

class ServiceAdmin(admin.ModelAdmin):
    list_display = ['name', 'flag_directorio', 'provider_count']
    list_filter = ['flag_directorio']
    search_fields = ['name', 'description']

    def provider_count(self, obj):
        return obj.providers.count()
    provider_count.short_description = 'Número de Proveedores'

class EventAdmin(ImageCroppingMixin, admin.ModelAdmin):
    list_display = ['name', 'date', 'location', 'preview_image_thumbnail', 'created_at']
    list_filter = ['date', 'created_at']
    search_fields = ['name', 'description', 'location']
    readonly_fields = ['created_at', 'updated_at', 'preview_image']
    
    fieldsets = (
        ('Información Principal', {
            'fields': ('name', 'date', 'location', 'description')
        }),
        ('Imagen', {
            'fields': ('image', 'cropping', 'preview_image'),
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
        if not change:
            obj.created_at = timezone.now()
        obj.updated_at = timezone.now()
        super().save_model(request, obj, form, change)

    class Media:
        css = {
            'all': [
                'admin/css/events.css',
                'cropping/css/jquery.Jcrop.min.css',
                'admin/css/admin_custom.css',
            ]
        }
        js = [
            'admin/js/jquery.init.js',
            'cropping/js/jquery.Jcrop.min.js',
            'cropping/js/jquery.Jcrop.js',
            'cropping/js/cropping.js',
        ]

# Ahora definimos el AdminSite personalizado
class CustomAdminSite(admin.AdminSite):
    site_header = "Mercado Logístico"
    site_title = "Panel de Administración"
    index_title = "Bienvenido al panel de administración"

    def get_app_list(self, request):
        app_list = super().get_app_list(request)
        
        # Buscar la aplicación 'logistics'
        logistics_app = next((app for app in app_list if app['app_label'] == 'logistics'), None)
        
        if logistics_app:
            # Crear un nuevo grupo para "Anuncios"
            anuncios_group = {
                'name': 'Anuncios',
                'app_label': 'anuncios',
                'app_url': '/admin/anuncios/',
                'has_module_perms': True,
                'models': []
            }
            
            # Crear un nuevo grupo para "Banners"
            banners_group = {
                'name': 'Banners',
                'app_label': 'banners',
                'app_url': '/admin/banners/',
                'has_module_perms': True,
                'models': []
            }
            
            # Mover Requerimientos y Propuestas al grupo anuncios
            requerimientos_model = None
            propuestas_model = None
            
            # Mover Banner al nuevo grupo
            banner_model = None
            
            for model in logistics_app['models'][:]:
                if model['object_name'] == 'Requirement':
                    requerimientos_model = model
                    logistics_app['models'].remove(model)
                elif model['object_name'] == 'Proposal':
                    propuestas_model = model
                    logistics_app['models'].remove(model)
                elif model['object_name'] == 'Banner':
                    banner_model = model
                    logistics_app['models'].remove(model)
            
            if requerimientos_model:
                anuncios_group['models'].append(requerimientos_model)
            if propuestas_model:
                anuncios_group['models'].append(propuestas_model)
            
            # Agregar sub-modelos para cada tipo de banner
            if banner_model:
                # Añadir vista general de banners
                banners_group['models'].append(banner_model)
                
                # Clonar el modelo base para cada tipo de banner
                educacion_banner = banner_model.copy()
                directorio_banner = banner_model.copy()
                contratar_banner = banner_model.copy()
                
                # Personalizar para cada tipo
                educacion_banner['name'] = 'Banner de Educación'
                educacion_banner['admin_url'] += '?section=EDUCACION'
                educacion_banner['add_url'] += '?section=EDUCACION'
                
                directorio_banner['name'] = 'Banner de Directorio'
                directorio_banner['admin_url'] += '?section=DIRECTORIO'
                directorio_banner['add_url'] += '?section=DIRECTORIO'
                
                contratar_banner['name'] = 'Banner de Contratar/Ofrecer'
                contratar_banner['admin_url'] += '?section=CONTRATAR_OFRECER'
                contratar_banner['add_url'] += '?section=CONTRATAR_OFRECER'
                
                # Agregar al grupo de banners
                banners_group['models'].append(educacion_banner)
                banners_group['models'].append(directorio_banner)
                banners_group['models'].append(contratar_banner)
            
            # Insertar los nuevos grupos después de logistics
            if anuncios_group['models'] or banners_group['models']:
                logistics_index = app_list.index(logistics_app)
                if banners_group['models']:
                    app_list.insert(logistics_index + 1, banners_group)
                if anuncios_group['models']:
                    app_list.insert(logistics_index + (2 if banners_group['models'] else 1), anuncios_group)
        
        return app_list

# Crear la instancia de AdminSite
admin_site = CustomAdminSite(name='custom_admin')

# Registrar los modelos con el admin_site
admin_site.register(User, UserAdmin)
admin_site.register(Group, GroupAdmin)
admin_site.register(Course, CourseAdmin)
admin_site.register(Newsletter, NewsletterAdmin)
admin_site.register(NewsletterSubscription, NewsletterSubscriptionAdmin)
admin_site.register(Rubro, RubroAdmin)
admin_site.register(News, NewsAdmin)
admin_site.register(Article, ArticleAdmin)
admin_site.register(Provider, ProviderAdmin)
admin_site.register(Service, ServiceAdmin)
admin_site.register(Event, EventAdmin)
admin_site.register(Requirement, RequirementAdmin)
admin_site.register(Proposal, ProposalAdmin)

class ResourceAdmin(admin.ModelAdmin):
    list_display = ('title', 'resource_type', 'author', 'is_featured', 'created_at')
    list_filter = ('resource_type', 'is_featured')
    search_fields = ('title', 'author')
    readonly_fields = ('created_at', 'updated_at')
    fieldsets = (
        ('Información Principal', {
            'fields': ('title', 'resource_type', 'file', 'image')
        }),
        ('Información del Autor', {
            'fields': ('author', 'author_email', 'author_phone')
        }),
        ('Opciones Adicionales', {
            'fields': ('original_link', 'is_featured')
        }),
        ('Información del Sistema', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        }),
    )

admin_site.register(Resource, ResourceAdmin)

class BannerAdmin(admin.ModelAdmin):
    list_display = ('title', 'advertiser', 'is_active', 'start_date', 'end_date', 'preview_image')
    list_filter = ('is_active', 'start_date', 'end_date')
    search_fields = ('title', 'advertiser')
    readonly_fields = ('created_at', 'updated_at', 'preview_image')
    
    def get_fieldsets(self, request, obj=None):
        """Personalizar fieldsets según la vista"""
        section = request.GET.get('section')
        
        # Campos base
        common_fields = (
            ('Información General', {
                'fields': ('title', 'advertiser', 'is_active', 'section'),
                'description': f'Banner para la sección: {section if section else "General"}'
            }),
            ('Imagen y Enlace', {
                'fields': ('image', 'preview_image', 'url')
            }),
            ('Período de Visualización', {
                'fields': ('start_date', 'end_date')
            }),
            ('Información del Sistema', {
                'fields': ('created_at', 'updated_at'),
                'classes': ('collapse',)
            }),
        )
        
        return common_fields
    
    def preview_image(self, obj):
        if obj.image:
            return mark_safe(f'<img src="{obj.image.url}" width="300" style="max-height: 100px; object-fit: contain;" />')
        return "No hay imagen"
    preview_image.short_description = "Vista previa"
    
    def get_queryset(self, request):
        """Filtrar banners según la URL"""
        qs = super().get_queryset(request)
        section = request.GET.get('section')
        if section:
            return qs.filter(section=section)
        return qs
    
    def get_form(self, request, obj=None, **kwargs):
        """Pre-seleccionar la sección según la URL y ocultar el campo"""
        form = super().get_form(request, obj, **kwargs)
        section = request.GET.get('section')
        
        if section and 'section' in form.base_fields:
            # En lugar de eliminar el campo, lo convertimos en un campo oculto
            # y establecemos su valor inicial
            form.base_fields['section'].widget = forms.HiddenInput()
            form.base_fields['section'].initial = section
            print(f"DEBUG - Campo section configurado como oculto con valor inicial {section}")
        
        return form
    
    def save_model(self, request, obj, form, change):
        """Asegurar que se guarde la sección correcta"""
        section = request.GET.get('section')
        print(f"DEBUG - Guardando banner con section={section}")
        
        if section:
            # Asignar explícitamente la sección desde la URL
            obj.section = section
            print(f"DEBUG - Asignado section={section} al objeto")
        elif not obj.section:  # Si no hay section en la URL ni en el objeto
            # Establecer valor por defecto para evitar que quede vacío
            obj.section = 'EDUCACION'  # Valor por defecto
            print(f"DEBUG - No se encontró section en URL. Usando valor por defecto EDUCACION")
            
        # Imprimir el valor final de section antes de guardar
        print(f"DEBUG - Valor final de section antes de guardar: {obj.section}")
            
        # Guardar el objeto
        super().save_model(request, obj, form, change)
    
    def changelist_view(self, request, extra_context=None):
        """Personalizar el título según la sección"""
        extra_context = extra_context or {}
        section = request.GET.get('section')
        
        if section:
            section_display = dict(Banner.SECTION_CHOICES).get(section, section)
            extra_context['title'] = f'Banner de {section_display}'
        
        return super().changelist_view(request, extra_context)
    
    def add_view(self, request, form_url='', extra_context=None):
        """Personalizar el título de agregar según la sección"""
        extra_context = extra_context or {}
        section = request.GET.get('section')
        
        if section:
            section_display = dict(Banner.SECTION_CHOICES).get(section, section)
            extra_context['title'] = f'Añadir Banner de {section_display}'
        
        return super().add_view(request, form_url, extra_context)

# Registrar el modelo Banner
admin_site.register(Banner, BannerAdmin)