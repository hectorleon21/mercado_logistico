from rest_framework import serializers
from .models import NewsletterSubscription
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

class NewsletterSubscriptionSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True)
    password_confirm = serializers.CharField(write_only=True, required=True)
    
    class Meta:
        model = NewsletterSubscription
        fields = ['nombre_completo', 'rol', 'correo', 'sector', 'password', 'password_confirm']
        error_messages = {
            'correo': {
                'unique': 'Este correo electrónico ya está registrado en el newsletter.',
            },
        }

    def validate(self, data):
        # Validar que las contraseñas coincidan
        if data.get('password') != data.get('password_confirm'):
            raise serializers.ValidationError({"password_confirm": "Las contraseñas no coinciden"})

        # Usar el validador de contraseñas de Django
        try:
            validate_password(data.get('password'))
        except ValidationError as e:
            raise serializers.ValidationError({"password": e.messages})

        return data
        
    def create(self, validated_data):
        # Eliminar password_confirm ya que no es parte del modelo
        validated_data.pop('password_confirm', None)
        
        # Crear la suscripción (el método save del modelo manejará la creación del usuario)
        return NewsletterSubscription.objects.create(**validated_data)
