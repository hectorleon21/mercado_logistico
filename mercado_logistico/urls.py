from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from logistics.admin import admin_site  # Importar el AdminSite personalizado

# Configuración de las URLs del proyecto
urlpatterns = [
    path('admin/', admin_site.urls),  # Usar el admin_site personalizado en lugar de admin.site.urls
    path('', include('logistics.urls')),  # Incluir las URLs de la app "logistics"
]

# Configuración para servir archivos estáticos y multimedia en modo de desarrollo
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)