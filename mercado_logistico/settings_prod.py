from .settings import *

DEBUG = False
ALLOWED_HOSTS = [
    'mercado-logistico.onrender.com',
    '.onrender.com',
]

STATIC_ROOT = '/tmp/static'
MEDIA_ROOT = '/tmp/media'

# Configuraciones de email para producción
EMAIL_BACKEND = 'django.core.mail.backends.smtp.EmailBackend'
EMAIL_HOST = 'smtp.gmail.com'
EMAIL_PORT = 587
EMAIL_USE_TLS = True
EMAIL_HOST_USER = 'hecosleco@gmail.com'
EMAIL_HOST_PASSWORD = 'cbdy wtcp dvfx wlmj'
DEFAULT_FROM_EMAIL = 'hecosleco@gmail.com'

# Clave secreta de producción
SECRET_KEY = 'django-insecure-h7k9#m2ny4s@px8z*5$_9#j3t$_q+v!z&k4wq!8e^5ph_5k2p&'