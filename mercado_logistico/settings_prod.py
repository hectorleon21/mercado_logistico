from .settings import *

DEBUG = True
ALLOWED_HOSTS = [
    'mercado-logistico.onrender.com',
    '.onrender.com',
]

# Configuración de archivos estáticos con whitenoise
MIDDLEWARE.insert(1, 'whitenoise.middleware.WhiteNoiseMiddleware')
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'

STATIC_URL = '/static/'
STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'static'),
]
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

# Resto de tus configuraciones...
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'hecosleco@gmail.com'
EMAIL_HOST_PASSWORD = 'cbdy wtcp dvfx wlmj'
DEFAULT_FROM_EMAIL = 'hecosleco@gmail.com'

SECRET_KEY = 'django-insecure-h7k9#m2ny4s@px8z*5$_9#j3t$_q+v!z&k4wq!8e^5ph_5k2p&'