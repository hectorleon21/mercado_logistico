from rest_framework import serializers
from .models import NewsletterSubscription

class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscription
        fields = ['nombre', 'apellidos', 'empresa', 'rol', 'correo', 'rubros_interes', 'pais', 'ciudad', 'sector', 'fecha_suscripcion']
