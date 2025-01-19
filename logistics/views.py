# C:\Django\cms_env\logistic_manager\logistics\views.py

from django.core.paginator import Paginator

from django.shortcuts import render, redirect
from django.http import JsonResponse
from django.template.loader import render_to_string
from .models import Provider, Service, Event, News, Course
from .forms import ProviderForm
from django.db.models import Q  # Para la búsqueda
from itertools import chain
from django.contrib import messages

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NewsletterSubscriptionSerializer
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.views.generic import DetailView


def index(request):
    print("Cargando la página de inicio")  # Esto imprimirá en la consola
    return render(request, 'logistics/index.html')  # Asegúrate de que esta ruta sea correcta

def courses(request):
    # Obtener términos de búsqueda
    search_query = request.GET.get('q', '')
    course_type = request.GET.get('type', '')
    modality = request.GET.get('modality', '')

    # Query base
    courses = Course.objects.all()

    # Aplicar filtros de búsqueda
    if search_query:
        courses = courses.filter(
            Q(name__icontains=search_query) |
            Q(institution__icontains=search_query) |
            Q(description__icontains=search_query)
        )

    if course_type:
        courses = courses.filter(course_type=course_type)

    if modality:
        courses = courses.filter(modality=modality)

    # Paginación
    paginator = Paginator(courses, 6)  # 6 cursos por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'selected_type': course_type,
        'selected_modality': modality,
        'course_types': Course.COURSE_TYPES,
        'modalities': Course.MODALITIES,
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        courses_html = render_to_string(
            'logistics/partials/courses_list.html',
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_courses.html',
            {'page_obj': page_obj}
        )
        return JsonResponse({
            'courses_html': courses_html,
            'pagination_html': pagination_html,
        })

    return render(request, 'logistics/courses.html', context)

class NewsDetailView(DetailView):
    model = News
    template_name = 'news/detail.html'  # Cambia este nombre según tu plantilla
    context_object_name = 'news'  # Para acceder a la noticia con la variable 'news'

class EventDetailView(DetailView):
    model = Event
    template_name = 'logistics/event_detail.html'
    context_object_name = 'event'

class NewsDetailView(DetailView):
    model = News
    template_name = 'logistics/news_detail.html'
    context_object_name = 'news'

@api_view(['POST'])
def newsletter_subscription(request):
    try:
        print("Datos recibidos:", request.data)
        print("País recibido:", request.data.get('pais'))  # Ver específicamente el campo region
        serializer = NewsletterSubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            print("Datos validados:", serializer.validated_data)  # Ver datos validados
            subscription = serializer.save()

            print("Subscription guardada:")  # Ver el valor guardado
            
            # Preparar y enviar el correo de confirmación
            subject = 'Confirmación de Suscripción al Newsletter'
            html_message = render_to_string('logistics/emails/subscription_confirmation.html', {
                'nombre': subscription.nombre,
                'empresa': subscription.empresa,
                'rubros': subscription.rubros_interes,
                'correo': subscription.correo,
                'pais': subscription.pais,
                'ciudad': subscription.ciudad,
                'sector': subscription.sector,
            })
            plain_message = strip_tags(html_message)
            
            try:
                send_mail(
                    subject,
                    plain_message,
                    'mshleon@hotmail.com',
                    [subscription.correo],
                    html_message=html_message,
                    fail_silently=False,
                )
            except Exception as email_error:
                print("Error al enviar email:", str(email_error))
                # No devolvemos el error al usuario pero lo registramos
                
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            print("Errores de validación:", serializer.errors)  # Ver errores si los hay
        
        print("Errores de validación:", serializer.errors)
        # Personalizar mensajes de error
        if 'correo' in serializer.errors:
            if 'unique' in str(serializer.errors['correo']):
                return Response(
                    {"error": "Este correo electrónico ya está suscrito al newsletter."},
                    status=status.HTTP_400_BAD_REQUEST
                )
            return Response(
                {"error": "Por favor, ingresa un correo electrónico válido."},
                status=status.HTTP_400_BAD_REQUEST
            )
        
        return Response(
            {"error": "Por favor, verifica los datos ingresados."},
            status=status.HTTP_400_BAD_REQUEST
        )
    except Exception as e:
        print("Error:", str(e))
        return Response(
            {"error": "Ocurrió un error al procesar la suscripción. Por favor, intenta nuevamente."},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR
        )

def run_news_scraper(request):
    try:
        news_scraper = NewsScraperCommand()
        news_items = news_scraper.handle()
        messages.success(request, f"Scraping ejecutado exitosamente. Se encontraron {len(news_items)} noticias.")
    except Exception as e:
        messages.error(request, f"Error ejecutando el scraper: {str(e)}")
    return redirect('admin:logistics_news_changelist')

def newsletter(request):
    # Obtener términos de búsqueda separados
    events_search_query = request.GET.get('events_q', '')
    news_search_query = request.GET.get('news_q', '')

    # Query base para eventos y noticias
    events = Event.objects.order_by('-date')
    news = News.objects.filter(is_published=True).order_by('-date')

    # Aplicar filtro de búsqueda si existe
    # Aplicar filtros de búsqueda si existen
    if events_search_query:
        events = events.filter(
            Q(name__icontains=events_search_query) |
            Q(description__icontains=events_search_query) |
            Q(location__icontains=events_search_query)
        )

    if news_search_query:
        news = news.filter(
            Q(title__icontains=news_search_query) |
            Q(description__icontains=news_search_query)
        )

    # Paginación para eventos
    events_paginator = Paginator(events, 4)  # 4 eventos por página
    events_page_number = request.GET.get('events_page', 1)
    events_page_obj = events_paginator.get_page(events_page_number)

    # Paginación para noticias
    news_paginator = Paginator(news, 6)  # 4 noticias por página
    news_page_number = request.GET.get('news_page', 1)
    news_page_obj = news_paginator.get_page(news_page_number)

    # Preparar contexto para las plantillas
    context = {
        'events_page_obj': events_page_obj,
        'news_page_obj': news_page_obj,
        'events_search_query': events_search_query,
        'news_search_query': news_search_query,
        'total_events': events.count(),
        'total_news': news.count(),
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        response_data = {}

        # Si se está solicitando la paginación de eventos
        if 'events_page' in request.GET or 'events_q' in request.GET:
            response_data['events_html'] = render_to_string(
                'logistics/partials/events_list.html',
                {'events_page_obj': events_page_obj},
                request=request
            )
            response_data['events_pagination_html'] = render_to_string(
                'logistics/partials/pagination_events.html',
                {'events_page_obj': events_page_obj},
                request=request
            )

        # Si se está solicitando la paginación de noticias
        if 'news_page' in request.GET or 'news_q' in request.GET:
            response_data['news_html'] = render_to_string(
                'logistics/partials/news_list.html',
                {'news_page_obj': news_page_obj},
                request=request
            )
            response_data['news_pagination_html'] = render_to_string(
                'logistics/partials/pagination_news.html',
                {'news_page_obj': news_page_obj},
                request=request
            )

        return JsonResponse(response_data)

    # Renderizar página completa
    return render(request, 'logistics/newsletter.html', context)



def newsletter_ajax(request):
    # Obtener el término de búsqueda
    search_query = request.GET.get('q', '')
    page = request.GET.get('page', 1)

    # Query base para eventos y noticias
    events = Event.objects.order_by('-date')
    news = News.objects.order_by('-date')

    # Aplicar filtro de búsqueda si existe
    if search_query:
        events = events.filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query)
        )
        news = news.filter(
            Q(title__icontains=search_query) |
            Q(description__icontains=search_query)
        )

    # Paginación
    paginator = Paginator(list(chain(events, news)), 10)  # Combina eventos y noticias
    page_obj = paginator.get_page(page)

    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        events_news_html = render_to_string(
            'logistics/partials/events_news_list.html',
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_events.html',
            {'page_obj': page_obj}
        )
        return JsonResponse({
            'events_news_list_html': events_news_html,
            'pagination_html': pagination_html
        })

    return render(request, 'logistics/newsletter.html', {
        'page_obj': page_obj,
        'search_query': search_query
    })

def directorio(request):
    print("Request method:", request.method)
    print("GET parameters:", request.GET)
    print("AJAX header:", request.headers.get('X-Requested-With'))
    
    query = request.GET.get('q', '')  # Obtener el término de búsqueda
    service = request.GET.get('service', '')  # Obtener el servicio seleccionado
    providers = Provider.objects.all()  # Obtener todos los proveedores por defecto

    # Filtrar por búsqueda si existe
    if query:
        providers = providers.filter(
            Q(name__icontains=query) |  # Buscar en nombre
            Q(description__icontains=query)  # Buscar en descripción
        )

    # Filtrar por servicio si está seleccionado
    if service:
        providers = providers.filter(services__name=service)

    # Paginación
    paginator = Paginator(providers, 4)  # Mostrar 4 proveedores por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    # Obtener todos los servicios con flag_directorio activado
    flagged_services = Service.objects.filter(flag_directorio=True)

    # Crear contexto con todas las variables necesarias
    context = {
        'page_obj': page_obj,
        'search_query': query,  # Pasa el término de búsqueda actual
        'selected_service': service,  # Añadimos el servicio seleccionado
        'flagged_services': flagged_services,  # Pasa los servicios con flag activado
    }

    # Verificar si es una solicitud AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Renderizar parciales para AJAX
        providers_list_html = render_to_string(
            'logistics/partials/provider_list_detailed_partial.html',  # Plantilla detallada
            context
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_partial.html', 
            context
        )
        return JsonResponse({
            'providers_list_html': providers_list_html,
            'pagination_html': pagination_html,
        })
    
    # Renderizar la página completa
    return render(request, 'logistics/directorio.html', context)

def provider_list(request):
    # Obtener el número de página de la solicitud GET
    page_number = request.GET.get('page', 1)
    
    # Obtener todos los proveedores
    providers = Provider.objects.all()
    
    # Configurar la paginación
    page_size = 10
    paginator = Paginator(providers, page_size)
    
    try:
        # Intentar obtener la página solicitada
        page_obj = paginator.page(page_number)
    except PageNotAnInteger:
        # Si el número de página no es un entero, mostrar la primera página
        page_obj = paginator.page(1)
    except EmptyPage:
        # Si la página está fuera de rango, mostrar la última página
        page_obj = paginator.page(paginator.num_pages)
    
    # Verificar si es una solicitud AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Renderizar parciales para AJAX
        providers_list_html = render_to_string(
            'logistics/partials/provider_list_partial.html', 
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_partial.html', 
            {'page_obj': page_obj}
        )
        return JsonResponse({
            'providers_list_html': providers_list_html,
            'pagination_html': pagination_html,
        })
    
    # Renderizar la página completa
    return render(request, 'logistics/directorio.html', {
        'page_obj': page_obj,
    })

def provider_list_ajax(request):
    search_query = request.GET.get('q', '')
    providers = Provider.objects.all()

    if search_query:
        providers = providers.filter(
            Q(name__icontains=search_query) | Q(services__name__icontains=search_query)
        ).distinct()

    providers_html = render_to_string('logistics/partials/provider_list.html', {'providers': providers})
    
    return JsonResponse({'html': providers_html})
   
def provider_create(request):
    if request.method == 'POST':
        form = ProviderForm(request.POST, request.FILES)  # Captura el formulario enviado
        if form.is_valid():
            form.save()  # Guarda el nuevo proveedor
            return redirect('provider_list')  # Redirige a la lista de proveedores
    else:
        form = ProviderForm()  # Crea un formulario vacío
    return render(request, 'logistics/provider_form.html', {'form': form})  # Muestra el formulario
