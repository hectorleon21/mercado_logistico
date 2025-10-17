# C:\Django\cms_env\logistic_manager\logistics\views.py

from django.utils.timezone import now
from django.utils import timezone
from django.core.paginator import Paginator
from django.shortcuts import render, redirect
from django.http import JsonResponse, HttpResponse
from django.template.loader import render_to_string
from .models import Provider, Service, Event, News, Course, Article, Resource, Rubro, NewsletterSubscription, Newsletter, Requirement, Proposal, Banner
from .forms import ProviderForm
from django.db.models import Q  # Para la búsqueda
from itertools import chain
from django.contrib import messages
from django.contrib.admin.views.decorators import staff_member_required

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import NewsletterSubscriptionSerializer
from django.core.mail import send_mail
from django.utils.html import strip_tags
from django.views.generic import DetailView
from datetime import datetime, timedelta
import json
import unicodedata
import traceback
from django.conf import settings
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_protect
from django.contrib.auth.models import User
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes, force_str
from django.template.loader import get_template

def normalize(text):
    """
    Normaliza un texto para búsquedas insensibles a tildes.
    Convierte el texto a minúsculas y elimina acentos.
    """
    if not text:
        return ''
    return unicodedata.normalize('NFKD', text).encode('ASCII', 'ignore').decode('ASCII').lower()

def index(request):
    print("Cargando la página de inicio")  # Esto imprimirá en la consola
    return render(request, 'logistics/new_index.html')  # Cambiado para usar el nuevo template

def new_index(request):
    print("Cargando la nueva página de inicio")
    return render(request, 'logistics/new_index.html')

def courses(request):
    # Obtener términos de búsqueda y filtros
    search_query = request.GET.get('q', '')
    course_type = request.GET.get('type', '')
    modality = request.GET.get('modality', '')
    service = request.GET.get('service', '')
    institution_type = request.GET.get('institution_type', '')
    start_date = request.GET.get('start_date', '')
    price_min = request.GET.get('price_min', None)
    price_max = request.GET.get('price_max', None)
    price_ranges = request.GET.get('price_ranges', None)

    # Obtener la fecha actual
    today = now().date()
    print(f"DEBUG: Fecha actual: {today}")

    # Obtener banners activos para la sección de Educación
    active_banners = Banner.objects.filter(
        section='EDUCACION',
        is_active=True,
        start_date__lte=today,
        end_date__gte=today
    ).order_by('?')  # Orden aleatorio para variar la presentación
    
    print(f"DEBUG: Banners encontrados para Educación: {active_banners.count()}")
    for banner in active_banners:
        print(f"DEBUG: Banner {banner.id}: {banner.title} (activo: {banner.is_active}, desde: {banner.start_date}, hasta: {banner.end_date})")

    # Query base
    courses = Course.objects.all()

    # --- BÚSQUEDA INSENSIBLE A TILDES ---
    if search_query:
        normalized_words = [normalize(w) for w in search_query.strip().split() if w]
        filtered_ids = [
            c.id for c in courses
            if all(
                any(word in normalize(field) for field in [c.name, c.institution, c.description])
                for word in normalized_words
            )
        ]
        courses = courses.filter(id__in=filtered_ids)

    # Filtrar por tipo de curso
    if course_type:
        courses = courses.filter(course_type=course_type)

    # Filtrar por modalidad
    if modality:
        courses = courses.filter(modality=modality)

    # Filtrar por tipo de institución
    if institution_type:
        courses = courses.filter(institution_type=institution_type)

    # Filtrar por precio
    try:
        # Si se enviaron rangos múltiples
        if price_ranges:
            ranges = json.loads(price_ranges)
            
            if ranges and len(ranges) > 0:
                # Construir consulta combinada para todos los rangos
                price_filter = Q()
                for rango in ranges:
                    min_val = float(rango['min'])
                    max_val = float(rango['max'])
                    
                    # Para el rango que incluye 0, considerar también NULL
                    if min_val == 0:
                        range_q = Q(price__isnull=True) | Q(price__gte=min_val, price__lte=max_val)
                    else:
                        range_q = Q(price__gte=min_val, price__lte=max_val)
                    
                    # Combinar con OR
                    price_filter |= range_q
                
                courses = courses.filter(price_filter)
                print(f"Filtrando por múltiples rangos de precio: {ranges}")
            else:
                print("No se especificaron rangos de precio válidos, mostrando todos los cursos")
        else:
            # Filtrado simple por mínimo y máximo - solo aplicar si se especificó
            if price_min is not None and price_max is not None:
                price_min = float(price_min)
                price_max = float(price_max)
                price_filter = Q()
                
                # Considerar el caso de cursos con precio NULL (gratis o consultar)
                if price_min == 0:
                    # Si el mínimo es 0, incluir cursos con precio NULL o con precio entre 0 y max
                    price_filter = Q(price__isnull=True) | Q(price__gte=price_min, price__lte=price_max)
                else:
                    # Solo incluir cursos con precio en el rango
                    price_filter = Q(price__gte=price_min, price__lte=price_max)
                    
                courses = courses.filter(price_filter)
                
                print(f"Filtrando por precio: min={price_min}, max={price_max}")
            else:
                print("No se especificó filtro de precio, mostrando todos los cursos")
    except (ValueError, TypeError, json.JSONDecodeError) as e:
        # Si hay un error en la conversión, ignoramos el filtro de precio
        print(f"Error al filtrar por precio: {e}")

    # Filtrar por fecha de inicio
    if start_date:
        try:
            # Revisar si es formato YYYY-MM (mes) o YYYY-MM-DD (fecha específica)
            if len(start_date.split('-')) == 2:  # Formato YYYY-MM
                year, month = map(int, start_date.split('-'))
                # Filtrar por mes: desde el primer día hasta el último día del mes
                first_day = datetime(year, month, 1).date()
                # Calcular el último día del mes
                if month == 12:
                    last_day = datetime(year + 1, 1, 1).date() - timedelta(days=1)
                else:
                    last_day = datetime(year, month + 1, 1).date() - timedelta(days=1)
                
                courses = courses.filter(start_date__gte=first_day, start_date__lte=last_day)
                print(f"Filtrando por mes: {month}/{year}, desde {first_day} hasta {last_day}")
            else:  # Formato YYYY-MM-DD
                start_date_obj = datetime.strptime(start_date, '%Y-%m-%d').date()
                courses = courses.filter(start_date__gte=start_date_obj)
        except ValueError:
            # Si hay un error en el formato de fecha, ignoramos este filtro
            pass

    # Filtrar por temática si se proporciona un servicio
    if service:
        # Puede venir como una lista separada por comas (códigos de temas)
        topic_codes = service.split(',')
        service_query = Q()
        
        for topic_code in topic_codes:
            service_query |= Q(topic=topic_code)
            
        courses = courses.filter(service_query)

    # Calcular el total de cursos después de aplicar todos los filtros
    total_courses = courses.count()

    # Preparar datos de tipos de cursos para mostrar estadísticas
    course_types = []
    # Usar Course.objects.all() para contar todos los cursos por tipo, sin aplicar filtros
    all_courses = Course.objects.all()
    total_all_courses = all_courses.count()
    
    for code, name in Course.COURSE_TYPES:
        # Contar todos los cursos de este tipo
        count = all_courses.filter(course_type=code).count()
        percentage = round((count / total_all_courses) * 100) if total_all_courses > 0 else 0
        course_types.append({
            'code': code,
            'name': name,
            'count': count,
            'percentage': percentage
        })

    # Separar cursos en futuros y pasados
    future_courses = courses.filter(start_date__gte=today).order_by('start_date')  # Cursos futuros (ordenados del más próximo al más lejano)
    past_courses = courses.filter(start_date__lt=today).order_by('-start_date')  # Cursos pasados (ordenados del más reciente al más antiguo)

    # Concatenar listas: primero los futuros, luego los pasados
    ordered_courses = list(future_courses) + list(past_courses)

    # Paginación
    paginator = Paginator(ordered_courses, 16)  # 16 cursos por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    # Obtener temas para filtro de temática (usando las opciones del modelo Course)
    topics = [{'code': code, 'name': name} for code, name in Course.TOPICS]

    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'selected_type': course_type,
        'selected_modality': modality,
        'selected_service': service,
        'selected_institution_type': institution_type,
        'selected_price_min': price_min,
        'selected_price_max': price_max,
        'selected_start_date': start_date,
        'course_types': course_types,
        'total_courses': total_courses,
        'total_all_courses': total_all_courses,  # Agregar total de todos los cursos
        'topics': topics,
        'banners': active_banners,  # Agregar banners al contexto
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        courses_html = render_to_string(
            'logistics/partials/courses_list.html',
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_courses.html',
            {'page_obj': page_obj, 'search_query': search_query, 'selected_service': service}
        )

        return JsonResponse({
            'courses_html': courses_html,
            'pagination_html': pagination_html,
            'total_courses': total_courses,
            'total_all_courses': total_all_courses,  # Agregar total de todos los cursos
        })

    return render(request, 'logistics/courses.html', context)

@staff_member_required
def get_provider_info(request, provider_id):
    """Vista para obtener información de un proveedor vía AJAX."""
    try:
        provider = Provider.objects.get(pk=provider_id)
        data = {
            'name': provider.name,
            'phone_number': provider.phone_number,
            'email': provider.email,
        }
        return JsonResponse(data)
    except Provider.DoesNotExist:
        return JsonResponse({'error': 'Proveedor no encontrado'}, status=404)
    
@staff_member_required
def get_providers_list(request):
    """Vista para obtener la lista de proveedores para autocompletado."""
    providers = Provider.objects.all().values('name', 'phone_number', 'email')
    return JsonResponse(list(providers), safe=False)

class CourseDetailView(DetailView):
    model = Course
    template_name = "logistics/course_detail.html"
    context_object_name = "course"
    
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

class ArticleDetailView(DetailView):
    model = Article
    template_name = 'logistics/article_detail.html'
    context_object_name = 'article'

class ResourceDetailView(DetailView):
    model = Resource
    template_name = 'logistics/resource_detail.html'
    context_object_name = 'resource'

class RequirementDetailView(DetailView):
    model = Requirement
    template_name = 'logistics/requirement_detail.html'
    context_object_name = 'requirement'
    
class ProposalDetailView(DetailView):
    model = Proposal
    template_name = 'logistics/proposal_detail.html'
    context_object_name = 'proposal'

def resources(request):
    # Obtener términos de búsqueda
    search_query = request.GET.get('q', '')
    resource_type = request.GET.get('type', '')
    
    # Query base
    resources = Resource.objects.all()

    # --- BÚSQUEDA INSENSIBLE A TILDES Y POR PALABRAS CLAVE ---
    if search_query:
        normalized_words = [normalize(w) for w in search_query.strip().split() if w]
        filtered_ids = [
            r.id for r in resources
            if all(
                any(word in normalize(field) for field in [r.title, r.author])
                for word in normalized_words
            )
        ]
        resources = resources.filter(id__in=filtered_ids)

    if resource_type:
        resources = resources.filter(resource_type=resource_type)

    # Paginación - 48 recursos por página (6 por fila x 8 filas)
    paginator = Paginator(resources, 48)  # 48 recursos por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    # Obtener recursos para la sección de novedades
    featured_resources = Resource.objects.filter(is_featured=True).order_by('-created_at')[:4]

    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'selected_type': resource_type,
        'resource_types': Resource.RESOURCE_TYPES,
        'featured_resources': featured_resources,
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        resources_html = render_to_string(
            'logistics/partials/resources_list.html',
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_resources.html',
            {
                'page_obj': page_obj,
                'search_query': search_query,
                'selected_type': resource_type
            }
        )

        return JsonResponse({
            'resources_html': resources_html,
            'pagination_html': pagination_html,
        })

    return render(request, 'logistics/resources.html', context)

def articles(request):
    # Obtener términos de búsqueda
    search_query = request.GET.get('q', '')
    
    # Query base
    articles = Article.objects.filter(is_published=True)

    # --- BÚSQUEDA INSENSIBLE A TILDES Y POR PALABRAS CLAVE ---
    if search_query:
        normalized_words = [normalize(w) for w in search_query.strip().split() if w]
        filtered_ids = [
            a.id for a in articles
            if all(
                any(word in normalize(field) for field in [a.title, a.description, a.author, a.tags])
                for word in normalized_words
            )
        ]
        articles = articles.filter(id__in=filtered_ids)

    # Ordenar por fecha descendente (más reciente primero)
    articles = articles.order_by('-date')

    # Paginación
    paginator = Paginator(articles, 9)  # 9 artículos por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'search_query': search_query,
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        articles_html = render_to_string(
            'logistics/partials/articles_list.html',
            {'page_obj': page_obj}
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_articles.html',
            {'page_obj': page_obj}
        )

        return JsonResponse({
            'articles_html': articles_html,
            'pagination_html': pagination_html,
        })

    return render(request, 'logistics/articles.html', context)

@api_view(['POST'])
def newsletter_subscription(request):
    try:
        # Registrar todos los datos recibidos para depuración
        print("\n--- INICIO PROCESAMIENTO DE NEWSLETTER ---")
        print("Datos recibidos (Raw Data):", request.data)
        print("Headers:", request.headers)
        print("Content-Type:", request.headers.get('Content-Type', 'No especificado'))
        
        # Validamos manualmente primero para dar mensajes más específicos
        if 'nombre_completo' not in request.data or not request.data.get('nombre_completo'):
            return Response({
                'error': 'El campo nombre_completo es obligatorio y no puede estar vacío',
                'valor_recibido': repr(request.data.get('nombre_completo')),
                'tipo': type(request.data.get('nombre_completo')).__name__
            }, status=400)
            
        if 'correo' not in request.data or not request.data.get('correo'):
            return Response({
                'error': 'El campo correo es obligatorio y no puede estar vacío',
                'valor_recibido': repr(request.data.get('correo')),
                'tipo': type(request.data.get('correo')).__name__
            }, status=400)
            
        if 'password' not in request.data or not request.data.get('password'):
            return Response({
                'error': 'El campo password es obligatorio',
                'valor_recibido': '(ocultado por seguridad)',
            }, status=400)
        
        if 'password_confirm' not in request.data or not request.data.get('password_confirm'):
            return Response({
                'error': 'El campo password_confirm es obligatorio',
                'valor_recibido': '(ocultado por seguridad)',
            }, status=400)
        
        # Procesar con el serializador
        serializer = NewsletterSubscriptionSerializer(data=request.data)
        if serializer.is_valid():
            print("Datos validados:", serializer.validated_data)
            subscription = serializer.save()
            
            print("Subscription guardada con ID:", subscription.id)
            
            # Depuración: imprimir los datos antes de renderizar la plantilla
            print("Datos para el correo:")
            print(f"Nombre Completo: {subscription.nombre_completo}")
            print(f"Rol: {subscription.rol}")
            print(f"Correo: {subscription.correo}")
            print(f"Sector: {subscription.sector}")
            
            # Preparar y enviar el correo de confirmación
            subject = 'Confirmación de Suscripción al Newsletter'
            
            # Obtener el primer nombre para personalizar el saludo
            first_name = subscription.nombre_completo.split()[0] if subscription.nombre_completo else ""
            
            # Renderizar la plantilla con todos los datos
            html_message = render_to_string('logistics/emails/subscription_confirmation.html', {
                'nombre_completo': subscription.nombre_completo,
                'first_name': first_name,
                'rol': subscription.rol,
                'sector': subscription.sector,
                'correo': subscription.correo
            })
            plain_message = strip_tags(html_message)
            from_email = settings.DEFAULT_FROM_EMAIL
            to_email = subscription.correo

            try:
                print(f"Enviando correo a {to_email}")
                send_mail(subject, plain_message, from_email, [to_email], html_message=html_message)
                print("Correo enviado correctamente")
            except Exception as mail_error:
                print(f"Error al enviar correo: {mail_error}")
                # No fallamos si el correo no se envía, solo lo registramos
                traceback.print_exc()

            return Response({
                "mensaje": "Suscripción realizada correctamente. ¡Ya puedes acceder con tu correo y contraseña!",
                "email": subscription.correo
            }, status=201)
        else:
            print("Errores de validación:", serializer.errors)
            # Mostrar errores de validación detallados
            return Response({
                "error": "Datos de suscripción inválidos",
                "detalles": serializer.errors
            }, status=400)
    except Exception as e:
        print(f"Error inesperado: {e}")
        traceback.print_exc()
        return Response({"error": f"Ocurrió un error inesperado: {str(e)}"}, status=500)

def run_news_scraper(request):
    try:
        news_scraper = NewsScraperCommand()
        news_items = news_scraper.handle()
        messages.success(request, f"Scraping ejecutado exitosamente. Se encontraron {len(news_items)} noticias.")
    except Exception as e:
        messages.error(request, f"Error ejecutando el scraper: {str(e)}")
    return redirect('admin:logistics_news_changelist')

def noticias_articulos(request):
    # Obtener términos de búsqueda
    events_search_query = request.GET.get('events_q', '')
    news_search_query = request.GET.get('news_q', '')
    articles_search_query = request.GET.get('articles_q', '')
    today = now().date()

    print(f"DEBUG: Procesando vista noticias_articulos con filtros - events_q: {events_search_query}, news_q: {news_search_query}, articles_q: {articles_search_query}")

    # --- NOTICIAS (3x3 grid = 9 por página) ---
    # Obtener todas las noticias sin filtro inicial de is_published para verificar si hay datos
    news_all = News.objects.all().order_by('-date')
    print(f"DEBUG: Total de noticias (sin filtros): {news_all.count()}")
    
    # Ahora añadir el filtro regular
    news = News.objects.filter(is_published=True).order_by('-date')
    print(f"DEBUG: Total de noticias (con filtro is_published=True): {news.count()}")
    
    # Búsqueda por palabras clave para noticias
    if news_search_query:
        normalized_words = [normalize(w) for w in news_search_query.strip().split() if w]
        filtered_ids = [
            n.id for n in news
            if all(
                any(word in normalize(field) for field in [n.title, n.description])
                for word in normalized_words
            )
        ]
        news = news.filter(id__in=filtered_ids)
        print(f"DEBUG: Total de noticias (después de búsqueda): {news.count()}")

    # Paginación para noticias (9 por página: 3x3 grid)
    news_paginator = Paginator(news, 9)
    news_page_number = request.GET.get('news_page', 1)
    news_page_obj = news_paginator.get_page(news_page_number)
    print(f"DEBUG: Número de noticias en página {news_page_number}: {len(news_page_obj)}")

    # --- EVENTOS (4x2 grid = 8 por página) ---
    # Obtener todos los eventos sin filtros para verificar
    events_all = Event.objects.all()
    print(f"DEBUG: Total de eventos (sin filtros): {events_all.count()}")
    
    # Obtener eventos futuros y pasados con los filtros aplicados
    future_events = Event.objects.filter(date__gte=today).order_by('date')
    past_events = Event.objects.filter(date__lt=today).order_by('-date')
    print(f"DEBUG: Eventos futuros: {future_events.count()}, Eventos pasados: {past_events.count()}")

    # Búsqueda por palabras clave para eventos
    if events_search_query:
        normalized_words = [normalize(w) for w in events_search_query.strip().split() if w]
        
        # Filtrar eventos futuros
        future_filtered_ids = [
            e.id for e in future_events
            if all(
                any(word in normalize(field) for field in [e.name, e.description, e.location])
                for word in normalized_words
            )
        ]
        future_events = future_events.filter(id__in=future_filtered_ids)
        
        # Filtrar eventos pasados
        past_filtered_ids = [
            e.id for e in past_events
            if all(
                any(word in normalize(field) for field in [e.name, e.description, e.location])
                for word in normalized_words
            )
        ]
        past_events = past_events.filter(id__in=past_filtered_ids)
        print(f"DEBUG: Después de búsqueda - Eventos futuros: {future_events.count()}, Eventos pasados: {past_events.count()}")

    # Primero obtener las queries completas como listas
    ordered_events = list(future_events) + list(past_events)
    print(f"DEBUG: Total de eventos (ordenados): {len(ordered_events)}")
    
    # Paginación para eventos (8 por página: 4x2 grid)
    events_paginator = Paginator(ordered_events, 8)
    events_page_number = request.GET.get('events_page', 1)
    events_page_obj = events_paginator.get_page(events_page_number)
    print(f"DEBUG: Número de eventos en página {events_page_number}: {len(events_page_obj)}")

    # --- ARTÍCULOS (3x2 grid = 6 por página) ---
    # Obtener todos los artículos sin filtros para verificar
    articles_all = Article.objects.all()
    print(f"DEBUG: Total de artículos (sin filtros): {articles_all.count()}")
    
    # Obtener artículos filtrados
    articles = Article.objects.filter(is_published=True).order_by('-date')
    print(f"DEBUG: Total de artículos (con filtro is_published=True): {articles.count()}")
    
    # Búsqueda por palabras clave para artículos
    if articles_search_query:
        normalized_words = [normalize(w) for w in articles_search_query.strip().split() if w]
        filtered_ids = [
            a.id for a in articles
            if all(
                any(word in normalize(field) for field in [a.title, a.description, a.author, a.tags])
                for word in normalized_words
            )
        ]
        articles = articles.filter(id__in=filtered_ids)
        print(f"DEBUG: Total de artículos (después de búsqueda): {articles.count()}")

    # Paginación para artículos (6 por página: 3x2 grid)
    articles_paginator = Paginator(articles, 6)
    articles_page_number = request.GET.get('articles_page', 1)
    articles_page_obj = articles_paginator.get_page(articles_page_number)
    print(f"DEBUG: Número de artículos en página {articles_page_number}: {len(articles_page_obj)}")

    # Contexto para la plantilla
    context = {
        'events_page_obj': events_page_obj,
        'news_page_obj': news_page_obj,
        'articles_page_obj': articles_page_obj,
        'events_search_query': events_search_query,
        'news_search_query': news_search_query,
        'articles_search_query': articles_search_query,
        'total_news': news.count(),
        'total_events': len(ordered_events),
        'total_articles': articles.count(),
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        response_data = {}

        # Si es una búsqueda o paginación de noticias
        if 'news_page' in request.GET or 'news_q' in request.GET:
            response_data['news_html'] = render_to_string(
                'logistics/partials/news_list.html',
                {'news_page_obj': news_page_obj, 'news_search_query': news_search_query},
                request=request
            )
            response_data['news_pagination_html'] = render_to_string(
                'logistics/partials/pagination_news.html',
                {'news_page_obj': news_page_obj, 'news_search_query': news_search_query},
                request=request
            )

        # Si es una búsqueda o paginación de eventos
        if 'events_page' in request.GET or 'events_q' in request.GET:
            response_data['events_html'] = render_to_string(
                'logistics/partials/events_list.html',
                {'events_page_obj': events_page_obj, 'events_search_query': events_search_query},
                request=request
            )
            response_data['events_pagination_html'] = render_to_string(
                'logistics/partials/pagination_events.html',
                {'events_page_obj': events_page_obj, 'events_search_query': events_search_query},
                request=request
            )
            
        # Si es una búsqueda o paginación de artículos
        if 'articles_page' in request.GET or 'articles_q' in request.GET:
            response_data['articles_html'] = render_to_string(
                'logistics/partials/articles_list.html',
                {'articles_page_obj': articles_page_obj, 'articles_search_query': articles_search_query},
                request=request
            )
            response_data['articles_pagination_html'] = render_to_string(
                'logistics/partials/pagination_articles.html',
                {'articles_page_obj': articles_page_obj, 'articles_search_query': articles_search_query},
                request=request
            )

        return JsonResponse(response_data)

    print(f"DEBUG: Renderizando la página completa con {len(news_page_obj)} noticias, {len(events_page_obj)} eventos, {len(articles_page_obj)} artículos")
    return render(request, 'logistics/noticias_articulos.html', context)

def newsletter(request):
    events_search_query = request.GET.get('events_q', '')
    news_search_query = request.GET.get('news_q', '')
    today = now().date()

    # Obtener eventos futuros y pasados con los filtros aplicados
    future_events = Event.objects.filter(date__gte=today).order_by('date')  # Ordenados por fecha ascendente (próximos primero)
    past_events = Event.objects.filter(date__lt=today).order_by('-date')    # Ordenados por fecha descendente (más recientes primero)

    if events_search_query:
        future_events = future_events.filter(
            Q(name__icontains=events_search_query) |
            Q(description__icontains=events_search_query) |
            Q(location__icontains=events_search_query)
        )
        past_events = past_events.filter(
            Q(name__icontains=events_search_query) |
            Q(description__icontains=events_search_query) |
            Q(location__icontains=events_search_query)
        )

    # Primero obtener las queries completas como listas
    ordered_events = list(future_events) + list(past_events)
    
    # Paginación para eventos
    events_per_page = 4
    events_paginator = Paginator(ordered_events, events_per_page)
    events_page_number = request.GET.get('events_page', 1)
    events_page_obj = events_paginator.get_page(events_page_number)

    # Obtener noticias filtradas
    news = News.objects.filter(is_published=True).order_by('-date')
    if news_search_query:
        news = news.filter(
            Q(title__icontains=news_search_query) |
            Q(description__icontains=news_search_query)
        )

    # Paginación para noticias
    news_paginator = Paginator(news, 6)  # 6 noticias por página
    news_page_number = request.GET.get('news_page', 1)
    news_page_obj = news_paginator.get_page(news_page_number)

    context = {
        'events_page_obj': events_page_obj,
        'news_page_obj': news_page_obj,
        'events_search_query': events_search_query,
        'news_search_query': news_search_query,
        'total_events': len(ordered_events),
        'total_news': news.count(),
        'total_future_events': future_events.count(),  # Agregado para referencia
        'total_past_events': past_events.count(),      # Agregado para referencia
    }

    # Manejar solicitudes AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        response_data = {}

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

    # Renderizar la página completa
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

def directory(request):
    print("Request method:", request.method)
    print("GET parameters:", request.GET)
    print("AJAX header:", request.headers.get('X-Requested-With'))
    
    query = request.GET.get('q', '')  # Obtener el término de búsqueda
    service = request.GET.get('service', '')  # Obtener el servicio seleccionado
    
    # Filtrar proveedores según autenticación del usuario
    if request.user.is_authenticated:
        # Usuario autenticado: mostrar todos los proveedores
        providers = Provider.objects.all()
    else:
        # Usuario no autenticado: ocultar proveedores solo para miembros
        providers = Provider.objects.filter(only_members=False)

    # --- BÚSQUEDA INSENSIBLE A TILDES Y POR PALABRAS CLAVE ---
    if query:
        normalized_words = [normalize(w) for w in query.strip().split() if w]
        filtered_ids = [
            p.id for p in providers
            if all(
                any(word in normalize(field) for field in [p.name, p.description])
                for word in normalized_words
            )
        ]
        providers = providers.filter(id__in=filtered_ids)

    # Filtrar por servicio si está seleccionado
    if service:
        providers = providers.filter(services__name=service)

    # Paginación
    paginator = Paginator(providers, 32)  # Mostrar 32 proveedores por página
    page_number = request.GET.get('page', 1)
    page_obj = paginator.get_page(page_number)

    # Obtener todos los servicios con flag_directorio activado
    flagged_services = Service.objects.filter(flag_directorio=True)

    # Obtener la fecha actual
    today = now().date()
    
    # Obtener banners activos para la sección de Directorio
    active_banners = Banner.objects.filter(
        section='DIRECTORIO',
        is_active=True,
        start_date__lte=today,
        end_date__gte=today
    ).order_by('?')  # Orden aleatorio para variar la presentación

    # Crear contexto con todas las variables necesarias
    context = {
        'page_obj': page_obj,
        'search_query': query,  # Pasa el término de búsqueda actual
        'selected_service': service,  # Añadimos el servicio seleccionado
        'flagged_services': flagged_services,  # Pasa los servicios con flag activado
        'banners': active_banners,
    }

    # Verificar si es una solicitud AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Renderizar parciales para AJAX
        directory_list_html = render_to_string(
            'logistics/partials/directory_list.html',
            context,
            request=request
        )
        pagination_html = render_to_string(
            'logistics/partials/pagination_directory.html',
            context,
            request=request
        )
        return JsonResponse({
            'directory_html': directory_list_html,
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

def contratar_ofrecer(request):
    # Obtener términos de búsqueda
    search_query = request.GET.get('q', '')
    filter_type = request.GET.get('filter', 'todos')
    
    # Obtener la fecha actual
    today = now().date()
    
    # Obtener banners activos para la sección de Contratar/Ofrecer
    active_banners = Banner.objects.filter(
        section='CONTRATAR_OFRECER',
        is_active=True,
        start_date__lte=today,
        end_date__gte=today
    ).order_by('?')  # Orden aleatorio para variar la presentación
    
    # Consultas base para requerimientos y propuestas
    requirements = Requirement.objects.all().order_by('-created_at')
    proposals = Proposal.objects.all().order_by('-created_at')
    
    # Aplicar filtro por tipo si es necesario
    if filter_type == 'requerimiento':
        proposals = Proposal.objects.none()
    elif filter_type == 'propuesta':
        requirements = Requirement.objects.none()
    
    # Aplicar búsqueda si hay término
    if search_query:
        # Búsqueda insensible a tildes usando normalize
        normalized_words = [normalize(w) for w in search_query.strip().split() if w]
        
        # Filtrar requerimientos
        req_filtered_ids = [
            r.id for r in requirements
            if all(
                any(word in normalize(field) for field in [r.title, r.description, r.company])
                for word in normalized_words
            )
        ]
        requirements = requirements.filter(id__in=req_filtered_ids)
        
        # Filtrar propuestas
        prop_filtered_ids = [
            p.id for p in proposals
            if all(
                any(word in normalize(field) for field in [p.title, p.description, p.company])
                for word in normalized_words
            )
        ]
        proposals = proposals.filter(id__in=prop_filtered_ids)
    
    # Convertir a formato uniforme para combinar
    all_items = []
    
    for req in requirements:
        all_items.append({
            'id': req.id,
            'title': req.title,
            'description': req.description,
            'company': req.company,
            'phone': req.phone,
            'email': req.email,
            'created_at': req.created_at,
            'is_active': req.is_active,
            'valid_until': req.valid_until,
            'es_requerimiento': True,
        })
    
    for prop in proposals:
        all_items.append({
            'id': prop.id,
            'title': prop.title,
            'description': prop.description,
            'company': prop.company,
            'phone': prop.phone,
            'email': prop.email,
            'created_at': prop.created_at,
            'is_active': prop.is_active,
            'valid_until': prop.valid_until,
            'es_requerimiento': False,
        })
    
    # Ordenar por fecha de creación (más recientes primero)
    all_items.sort(key=lambda x: x['created_at'], reverse=True)
    
    # Paginar los resultados
    paginator = Paginator(all_items, 32)  # 32 items por página
    page_number = request.GET.get('page', 1)
    
    try:
        page_obj = paginator.page(page_number)
    except (PageNotAnInteger, EmptyPage):
        page_obj = paginator.page(1)
    
    # Preparar datos para renderizar o devolver JSON
    context = {
        'page_obj': page_obj,
        'search_query': search_query,
        'filter_type': filter_type,
        'banners': active_banners,
    }
    
    # Verificar si es una solicitud AJAX
    if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
        # Renderizar solo los items y la paginación como HTML
        items_html = render_to_string('logistics/partials/contratar_ofrecer_list.html', context, request=request)
        pagination_html = render_to_string('logistics/partials/pagination_contratar_ofrecer.html', context, request=request)
        
        # Devolver JSON con el HTML
        return JsonResponse({
            'items_html': items_html,
            'pagination_html': pagination_html,
            'count': paginator.count,
            'has_next': page_obj.has_next(),
            'has_previous': page_obj.has_previous(),
        })
    
    # Si no es AJAX, renderizar la página completa
    return render(request, 'logistics/contratar_ofrecer.html', context)

class ProviderDetailView(DetailView):
    model = Provider
    template_name = "logistics/provider_detail.html"
    context_object_name = "provider"

def check_requirements_proposals(request):
    """Vista temporal para verificar los datos de Requerimientos y Propuestas"""
    requirements = Requirement.objects.all()
    proposals = Proposal.objects.all()
    
    req_count = requirements.count()
    prop_count = proposals.count()
    
    req_data = []
    for req in requirements:
        req_data.append({
            'id': req.id,
            'company': req.company,
            'title': req.title,
            'created_at': req.created_at,
            'is_active': req.is_active
        })
    
    prop_data = []
    for prop in proposals:
        prop_data.append({
            'id': prop.id,
            'company': prop.company,
            'title': prop.title,
            'created_at': prop.created_at,
            'is_active': prop.is_active
        })
    
    # Respuesta en texto plano para evitar problemas de renderizado
    response_text = f"DATOS DE REQUERIMIENTOS Y PROPUESTAS\n\n"
    response_text += f"Total Requerimientos: {req_count}\n"
    response_text += f"Total Propuestas: {prop_count}\n\n"
    
    if req_count > 0:
        response_text += "REQUERIMIENTOS:\n"
        for i, req in enumerate(req_data, 1):
            response_text += f"{i}. {req['title']} - {req['company']} (Creado: {req['created_at']}, Activo: {req['is_active']})\n"
    else:
        response_text += "No hay requerimientos en la base de datos.\n"
    
    response_text += "\n"
    
    if prop_count > 0:
        response_text += "PROPUESTAS:\n"
        for i, prop in enumerate(prop_data, 1):
            response_text += f"{i}. {prop['title']} - {prop['company']} (Creado: {prop['created_at']}, Activo: {prop['is_active']})\n"
    else:
        response_text += "No hay propuestas en la base de datos.\n"
    
    return HttpResponse(response_text, content_type="text/plain")

def debug_contratar_ofrecer(request):
    """Vista para depuración directa de requerimientos y propuestas"""
    # Obtener todos los requerimientos y propuestas sin filtros
    requirements = Requirement.objects.all()
    proposals = Proposal.objects.all()
    
    # Convertir a formato más legible
    req_data = []
    for req in requirements:
        req_data.append({
            'id': req.id,
            'title': req.title,
            'company': req.company,
            'created_at': req.created_at,
            'is_active': req.is_active,
            'valid_until': req.valid_until
        })
    
    prop_data = []
    for prop in proposals:
        prop_data.append({
            'id': prop.id,
            'title': prop.title,
            'company': prop.company,
            'created_at': prop.created_at,
            'is_active': prop.is_active,
            'valid_until': prop.valid_until
        })
    
    # Generar filas de tabla para requisitos
    req_rows = ""
    for r in req_data:
        req_rows += f"""
        <tr>
            <td>{r['id']}</td>
            <td>{r['title']}</td>
            <td>{r['company']}</td>
            <td>{r['created_at']}</td>
            <td>{r['is_active']}</td>
            <td>{r['valid_until']}</td>
        </tr>
        """
    
    # Generar filas de tabla para propuestas
    prop_rows = ""
    for p in prop_data:
        prop_rows += f"""
        <tr>
            <td>{p['id']}</td>
            <td>{p['title']}</td>
            <td>{p['company']}</td>
            <td>{p['created_at']}</td>
            <td>{p['is_active']}</td>
            <td>{p['valid_until']}</td>
        </tr>
        """
    
    # Crear respuesta en HTML para mejor legibilidad
    html_content = f"""
    <html>
    <head>
        <title>Debug Contratar/Ofrecer</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 20px; }}
            h1, h2 {{ color: #0099cc; }}
            .debug-section {{ margin-bottom: 30px; }}
            table {{ border-collapse: collapse; width: 100%; }}
            th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
            th {{ background-color: #f2f2f2; }}
            tr:nth-child(even) {{ background-color: #f9f9f9; }}
        </style>
    </head>
    <body>
        <h1>Depuración de Contratar/Ofrecer</h1>
        
        <div class="debug-section">
            <h2>Requerimientos ({len(req_data)})</h2>
            {'' if req_data else 'No hay requerimientos en la base de datos.'}
            {f'''
            <table>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Empresa</th>
                    <th>Creado</th>
                    <th>Activo</th>
                    <th>Válido hasta</th>
                </tr>
                {req_rows}
            </table>
            ''' if req_data else ''}
        </div>
        
        <div class="debug-section">
            <h2>Propuestas ({len(prop_data)})</h2>
            {'' if prop_data else 'No hay propuestas en la base de datos.'}
            {f'''
            <table>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Empresa</th>
                    <th>Creado</th>
                    <th>Activo</th>
                    <th>Válido hasta</th>
                </tr>
                {prop_rows}
            </table>
            ''' if prop_data else ''}
        </div>
        
        <div class="debug-section">
            <h2>Verificación de Funcionamiento</h2>
            <p>Esta vista muestra todos los requerimientos y propuestas sin aplicar ningún filtro.</p>
            <p>Si ves registros aquí pero no en la página principal, puede haber un problema con los filtros o la plantilla.</p>
            <p><a href="/contratar-ofrecer/">Volver a la página principal</a></p>
        </div>
    </body>
    </html>
    """
    
    return HttpResponse(html_content)

def debug_resources(request):
    """Vista de depuración para diagnosticar problemas con los recursos"""
    
    # Verificar cuántos recursos hay en total
    all_resources = Resource.objects.all()
    total_resources = all_resources.count()
    
    # Obtener información detallada de cada recurso
    resources_data = []
    for resource in all_resources:
        resources_data.append({
            'id': resource.id,
            'title': resource.title,
            'resource_type': resource.resource_type,
            'resource_type_display': resource.get_resource_type_display(),
            'author': resource.author,
            'is_featured': resource.is_featured,
            'file_exists': bool(resource.file),
            'image_exists': bool(resource.image),
            'created_at': resource.created_at,
        })
    
    # Verificar recursos destacados
    featured_resources = Resource.objects.filter(is_featured=True)
    featured_count = featured_resources.count()
    
    # Generar filas de tabla manualmente
    table_rows = ""
    if resources_data:
        for r in resources_data:
            table_rows += f"""
            <tr>
                <td>{r['id']}</td>
                <td>{r['title']}</td>
                <td>{r['resource_type_display']} ({r['resource_type']})</td>
                <td>{r['author']}</td>
                <td>{'Sí' if r['is_featured'] else 'No'}</td>
                <td>{'Sí' if r['file_exists'] else 'No'}</td>
                <td>{'Sí' if r['image_exists'] else 'No'}</td>
                <td>{r['created_at']}</td>
            </tr>
            """
    
    # Generar tipos de recursos para mostrar en recomendaciones
    resource_types_list = ", ".join([f"{code} - {name}" for code, name in Resource.RESOURCE_TYPES])
    
    # Construir el contenido HTML
    html_content = f"""
    <html>
    <head>
        <title>Debug de Recursos</title>
        <style>
            body {{ font-family: Arial, sans-serif; margin: 20px; }}
            h1, h2 {{ color: #0099cc; }}
            .debug-section {{ margin-bottom: 30px; }}
            table {{ border-collapse: collapse; width: 100%; }}
            th, td {{ border: 1px solid #ddd; padding: 8px; text-align: left; }}
            th {{ background-color: #f2f2f2; }}
            tr:nth-child(even) {{ background-color: #f9f9f9; }}
        </style>
    </head>
    <body>
        <h1>Depuración de Recursos</h1>
        
        <div class="debug-section">
            <h2>Información General</h2>
            <p>Total de recursos en la base de datos: <strong>{total_resources}</strong></p>
            <p>Recursos destacados (is_featured=True): <strong>{featured_count}</strong></p>
        </div>
        
        <div class="debug-section">
            <h2>Detalles de los Recursos</h2>
            {'' if resources_data else '<p>No hay recursos en la base de datos.</p>'}
            {f'''
            <table>
                <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Tipo</th>
                    <th>Autor</th>
                    <th>Destacado</th>
                    <th>Archivo</th>
                    <th>Imagen</th>
                    <th>Creado</th>
                </tr>
                {table_rows}
            </table>
            ''' if resources_data else ''}
        </div>
        
        <div class="debug-section">
            <h2>Recomendaciones</h2>
            <ul>
                <li>Asegúrate de que hay recursos creados en la base de datos.</li>
                <li>Si quieres que un recurso aparezca en la sección "Novedades", marca la casilla "Mostrar en Novedades" en el admin.</li>
                <li>Verifica que el tipo de recurso sea uno de los soportados: {resource_types_list}</li>
            </ul>
            <p><a href="/resources/">Volver a la página de recursos</a></p>
        </div>
    </body>
    </html>
    """
    
    return HttpResponse(html_content)

@csrf_protect
def user_login(request):
    """
    Vista para manejar el inicio de sesión por medio de AJAX
    """
    if request.method != 'POST':
        return JsonResponse({
            'success': False,
            'error': 'Método no permitido'
        }, status=405)
    
    data = json.loads(request.body)
    email = data.get('email', '')
    password = data.get('password', '')
    
    if not email or not password:
        return JsonResponse({
            'success': False,
            'error': 'Por favor, ingresa tu correo y contraseña'
        }, status=400)
    
    # Intentar autenticar con el correo como nombre de usuario
    user = authenticate(request, username=email, password=password)
    
    if user is not None:
        # Iniciar sesión
        login(request, user)
        
        # Devolver información del usuario
        return JsonResponse({
            'success': True,
            'user': {
                'name': user.get_full_name() or email,
                'email': user.email,
                'is_staff': user.is_staff,
            }
        })
    else:
        # Verificar si existe un usuario con ese correo
        try:
            subscription = NewsletterSubscription.objects.get(correo=email)
            return JsonResponse({
                'success': False,
                'error': 'La contraseña es incorrecta'
            }, status=401)
        except NewsletterSubscription.DoesNotExist:
            return JsonResponse({
                'success': False,
                'error': 'No existe una cuenta con este correo electrónico'
            }, status=401)

@api_view(['POST'])
@csrf_protect
def user_logout(request):
    """
    Vista para cerrar sesión
    """
    try:
        if request.user.is_authenticated:
            user_email = request.user.email
            print(f"Cerrando sesión para usuario: {user_email}")
            logout(request)
            print(f"Sesión cerrada exitosamente para: {user_email}")
            return JsonResponse({
                'success': True,
                'message': 'Sesión cerrada exitosamente'
            })
        else:
            print("Intento de logout sin usuario autenticado")
            return JsonResponse({
                'success': False,
                'error': 'No hay una sesión activa para cerrar'
            }, status=400)
    except Exception as e:
        print(f"Error durante logout: {e}")
        traceback.print_exc()
        return JsonResponse({
            'success': False,
            'error': 'Error interno al cerrar sesión'
        }, status=500)

def check_auth(request):
    """
    Vista para verificar si el usuario está autenticado
    """
    if request.user.is_authenticated:
        return JsonResponse({
            'authenticated': True,
            'user': {
                'name': request.user.get_full_name() or request.user.username,
                'email': request.user.email,
                'is_staff': request.user.is_staff,
            }
        })
    else:
        return JsonResponse({
            'authenticated': False
        })

@api_view(['POST'])
@csrf_protect
def forgot_password(request):
    """
    Vista para manejar la recuperación de contraseña
    """
    try:
        print(f"Iniciando forgot_password para método: {request.method}")
        print(f"Datos de la solicitud: {request.data}")
        
        # Con DRF, usar request.data en lugar de json.loads(request.body)
        email = request.data.get('email', '').strip()
        
        print(f"Email extraído: {email}")
        
        # Validar que el email no esté vacío
        if not email:
            print("Email vacío - retornando error")
            return JsonResponse({
                'success': False,
                'error': 'El correo electrónico es requerido.'
            }, status=400)
        
        # Buscar usuario por email
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            # Por seguridad, no revelar si el email existe o no
            return JsonResponse({
                'success': True,
                'message': 'Si tu correo electrónico está registrado, recibirás un enlace de recuperación.'
            })
        
        # Generar token de recuperación
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        
        # Crear enlace de recuperación
        domain = request.get_host() if request.get_host() else 'localhost:8000'
        
        # Asegurar que el puerto 8443 esté incluido en producción
        if 'mercadologistico.io' in domain and ':8443' not in domain:
            domain = domain + ':8443'
        
        protocol = 'https' if request.is_secure() else 'http'
        reset_link = f"{protocol}://{domain}/reset-password/{uid}/{token}/"
        
        # Preparar contenido del correo
        subject = 'Recuperación de contraseña - Mercado Logístico'
        
        # Plantilla HTML del correo
        html_content = f"""
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recuperación de contraseña</title>
            <style>
                body {{ font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 20px; }}
                .container {{ max-width: 600px; margin: 0 auto; background-color: #fff; padding: 30px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }}
                .header {{ text-align: center; margin-bottom: 30px; }}
                .logo {{ font-size: 24px; font-weight: bold; color: #0099cc; margin-bottom: 10px; }}
                .content {{ color: #333; line-height: 1.6; }}
                .btn {{ display: inline-block; background-color: #0099cc; color: #fff; padding: 12px 24px; text-decoration: none; border-radius: 4px; margin: 20px 0; font-weight: bold; }}
                .footer {{ margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 14px; text-align: center; }}
            </style>
        </head>
        <body>
            <div class="container">
                <div class="header">
                    <div class="logo">Mercado Logístico</div>
                    <h2>Recuperación de contraseña</h2>
                </div>
                <div class="content">
                    <p>Hola {user.get_full_name() or user.username},</p>
                    <p>Hemos recibido una solicitud para restablecer tu contraseña. Si no realizaste esta solicitud, puedes ignorar este correo.</p>
                    <p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p>
                    <p style="text-align: center;">
                        <a href="{reset_link}" class="btn">Restablecer contraseña</a>
                    </p>
                    <p>Este enlace expirará en 1 hora por motivos de seguridad.</p>
                    <p>Si el botón no funciona, copia y pega el siguiente enlace en tu navegador:</p>
                    <p style="word-break: break-all; color: #0099cc;">{reset_link}</p>
                </div>
                <div class="footer">
                    <p>© 2025 Mercado Logístico S.A.C. Todos los derechos reservados.</p>
                    <p>Este es un mensaje automático, por favor no respondas a este correo.</p>
                </div>
            </div>
        </body>
        </html>
        """
        
        # Versión en texto plano
        plain_content = f"""
        Hola {user.get_full_name() or user.username},

        Hemos recibido una solicitud para restablecer tu contraseña. Si no realizaste esta solicitud, puedes ignorar este correo.

        Para restablecer tu contraseña, copia y pega el siguiente enlace en tu navegador:
        {reset_link}

        Este enlace expirará en 1 hora por motivos de seguridad.

        © 2025 Mercado Logístico S.A.C.
        Este es un mensaje automático, por favor no respondas a este correo.
        """
        
        # Enviar correo
        try:
            send_mail(
                subject=subject,
                message=plain_content,
                from_email=getattr(settings, 'DEFAULT_FROM_EMAIL', 'noreply@mercadologistico.com'),
                recipient_list=[email],
                html_message=html_content,
                fail_silently=False,
            )
            
            return JsonResponse({
                'success': True,
                'message': 'Se ha enviado un enlace de recuperación a tu correo electrónico.'
            })
            
        except Exception as email_error:
            print(f"Error enviando correo de recuperación: {email_error}")
            print(f"Tipo de error: {type(email_error).__name__}")
            traceback.print_exc()
            return JsonResponse({
                'success': False,
                'error': f'Error al enviar el correo: {str(email_error)}'
            }, status=500)
            
    except Exception as e:
        print(f"Error en forgot_password: {e}")
        traceback.print_exc()
        return JsonResponse({
            'success': False,
            'error': 'Ocurrió un error interno. Por favor, intenta más tarde.'
        }, status=500)

def reset_password_confirm(request, uidb64, token):
    """
    Vista para mostrar el formulario de restablecimiento de contraseña
    """
    try:
        # Decodificar el ID del usuario
        uid = force_str(urlsafe_base64_decode(uidb64))
        user = User.objects.get(pk=uid)
        
        # Verificar que el token sea válido
        if not default_token_generator.check_token(user, token):
            return render(request, 'logistics/reset_password_invalid.html', {
                'error': 'El enlace de recuperación ha expirado o es inválido.'
            })
        
        # Si todo está bien, mostrar el formulario
        return render(request, 'logistics/reset_password_form.html', {
            'uidb64': uidb64,
            'token': token,
            'user': user
        })
        
    except (TypeError, ValueError, OverflowError, User.DoesNotExist):
        return render(request, 'logistics/reset_password_invalid.html', {
            'error': 'El enlace de recuperación es inválido.'
        })

@api_view(['POST'])
@csrf_protect
def reset_password_submit(request):
    """
    Vista para procesar el cambio de contraseña
    """
    try:
        print(f"Datos recibidos para reset: {request.data}")
        
        uidb64 = request.data.get('uidb64')
        token = request.data.get('token')
        new_password = request.data.get('new_password')
        confirm_password = request.data.get('confirm_password')
        
        # Validaciones básicas
        if not all([uidb64, token, new_password, confirm_password]):
            return JsonResponse({
                'success': False,
                'error': 'Todos los campos son requeridos.'
            }, status=400)
        
        if new_password != confirm_password:
            return JsonResponse({
                'success': False,
                'error': 'Las contraseñas no coinciden.'
            }, status=400)
        
        if len(new_password) < 8:
            return JsonResponse({
                'success': False,
                'error': 'La contraseña debe tener al menos 8 caracteres.'
            }, status=400)
        
        try:
            # Decodificar y obtener usuario
            uid = force_str(urlsafe_base64_decode(uidb64))
            user = User.objects.get(pk=uid)
            
            # Verificar token
            if not default_token_generator.check_token(user, token):
                return JsonResponse({
                    'success': False,
                    'error': 'El enlace de recuperación ha expirado o es inválido.'
                }, status=400)
            
            # Cambiar la contraseña
            user.set_password(new_password)
            user.save()
            
            print(f"Contraseña actualizada para usuario: {user.username}")
            
            return JsonResponse({
                'success': True,
                'message': 'Tu contraseña ha sido actualizada correctamente.'
            })
            
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return JsonResponse({
                'success': False,
                'error': 'El enlace de recuperación es inválido.'
            }, status=400)
            
    except Exception as e:
        print(f"Error en reset_password_submit: {e}")
        traceback.print_exc()
        return JsonResponse({
            'success': False,
            'error': 'Ocurrió un error interno. Por favor, intenta más tarde.'
        }, status=500)

@api_view(['POST'])
def contact_submission(request):
    """
    Vista para manejar el envío del formulario de contacto
    """
    try:
        data = request.data
        
        # Validar datos requeridos
        nombre = data.get('nombre', '').strip()
        email = data.get('email', '').strip()
        empresa = data.get('empresa', '').strip()
        mensaje = data.get('mensaje', '').strip()
        
        # Verificar que los campos requeridos estén presentes
        if not all([nombre, email, empresa]):
            return Response({
                'error': 'Los campos Nombre, Email y Empresa son requeridos'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        # Crear el contenido del email
        subject = f'Nuevo contacto desde Mercado Logístico - {empresa}'
        email_content = f"""
Nuevo contacto recibido desde el formulario de la página web:

DATOS DEL CONTACTO:
------------------
Nombre: {nombre}
Email: {email}
Empresa: {empresa}
Mensaje: {mensaje if mensaje else 'No se proporcionó mensaje'}

Fecha: {timezone.now().strftime('%d/%m/%Y %H:%M:%S')}
        """
        
        # Enviar email
        send_mail(
            subject=subject,
            message=email_content,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=['hecosleco@gmail.com'],
            fail_silently=False,
        )
        
        print(f"Email de contacto enviado exitosamente desde {email} ({empresa})")
        
        return Response({
            'status': 'success',
            'message': 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.'
        }, status=status.HTTP_200_OK)
        
    except Exception as e:
        print(f"Error al enviar email de contacto: {e}")
        return Response({
            'error': 'Error interno del servidor. Inténtalo de nuevo más tarde.'
        }, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
