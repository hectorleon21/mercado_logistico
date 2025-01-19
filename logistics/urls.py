from django.urls import path
from . import views
from .views import NewsDetailView  # Asegúrate de importar la vista
# from .views import event_news_list  # Asegúrate de importar la vista


urlpatterns = [
    path('', views.index, name='index'),
    path('directorio/', views.directorio, name='directorio'),
    path('providers/', views.provider_list, name='provider_list'),
    path('providers/add/', views.provider_create, name='provider_create'),
    path('provider-list-ajax/', views.provider_list_ajax, name='provider_list_ajax'),
    path('newsletter/', views.newsletter, name='newsletter'),
    path('api/newsletter-subscription/', views.newsletter_subscription, name='newsletter_subscription'),
    path('news/<int:pk>/', NewsDetailView.as_view(), name='news-detail'),
    path('evento/<int:pk>/', views.EventDetailView.as_view(), name='event-detail'),
    path('noticia/<int:pk>/', views.NewsDetailView.as_view(), name='news-detail'),
    path('courses/', views.courses, name='courses'),
    # path('event-news/', event_news_list, name='event-news-list'),
]