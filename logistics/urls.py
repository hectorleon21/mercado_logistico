from django.urls import path
from . import views
from .views import NewsDetailView, EventDetailView, CourseDetailView, ResourceDetailView, ArticleDetailView, RequirementDetailView, ProposalDetailView
# from .views import event_news_list  # Asegúrate de importar la vista


urlpatterns = [
    path('', views.index, name='index'),
    path('new/', views.new_index, name='new_index'),
    path('directorio/', views.directory, name='directorio'),
    path('providers/', views.provider_list, name='provider_list'),
    path('providers/add/', views.provider_create, name='provider_create'),
    path('provider-list-ajax/', views.provider_list_ajax, name='provider_list_ajax'),
    # path('newsletter/', views.newsletter, name='newsletter'),
    path('noticias-articulos/', views.noticias_articulos, name='noticias_articulos'),
    path('api/newsletter-subscription/', views.newsletter_subscription, name='newsletter_subscription'),
    path('news/<int:pk>/', NewsDetailView.as_view(), name='news-detail'),
    path('evento/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'),
    path('noticia/<int:pk>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('articulo/<int:pk>/', ArticleDetailView.as_view(), name='article-detail'),
    path('courses/<int:pk>/', views.CourseDetailView.as_view(), name='course-detail'),
    path('courses/', views.courses, name='courses'),
    path('admin/get-provider-info/<int:provider_id>/', views.get_provider_info, name='get-provider-info'),
    path('admin/get-providers-list/', views.get_providers_list, name='get-providers-list'),
    # path('event-news/', event_news_list, name='event-news-list'),
    path('recursos/', views.resources, name='resources'),
    path('recurso/<int:pk>/', ResourceDetailView.as_view(), name='resource-detail'),
    path('contratar-ofrecer/', views.contratar_ofrecer, name='contratar_ofrecer'),
    path('requerimiento/<int:pk>/', RequirementDetailView.as_view(), name='requirement-detail'),
    path('propuesta/<int:pk>/', ProposalDetailView.as_view(), name='proposal-detail'),
    path('proveedor/<int:pk>/', views.ProviderDetailView.as_view(), name='provider-detail'),
    # Ruta temporal para verificar los datos de Requerimientos y Propuestas
    path('check-data/', views.check_requirements_proposals, name='check_data'),
    # Ruta para depuración directa de Contratar/Ofrecer
    path('debug-contratar-ofrecer/', views.debug_contratar_ofrecer, name='debug_contratar_ofrecer'),
    # Ruta para depuración de recursos
    path('debug-recursos/', views.debug_resources, name='debug_resources'),
    
    # Rutas de autenticación
    path('api/login/', views.user_login, name='user_login'),
    path('api/logout/', views.user_logout, name='user_logout'),
    path('api/check-auth/', views.check_auth, name='check_auth'),
]