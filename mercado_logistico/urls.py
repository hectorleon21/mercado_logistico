from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

# Configuración de las URLs del proyecto
urlpatterns = [
    path('admin/', admin.site.urls),  # Ruta para el admin de Django
    path('', include('logistics.urls')),  # Incluir las URLs de la app "logistics"
]

# Configuración para servir archivos estáticos y multimedia en modo de desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
