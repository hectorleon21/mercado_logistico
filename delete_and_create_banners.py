# Script para eliminar banners existentes y crear nuevos
import os
import sys
import django
from datetime import date, timedelta

# Configurar entorno Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mercado_logistico.settings')
django.setup()

# Importar modelos necesarios
from logistics.models import Banner

def main():
    # Eliminar banners existentes
    print("Eliminando banners existentes...")
    count, _ = Banner.objects.all().delete()
    print(f"Se eliminaron {count} banners.")
    
    # Importar y ejecutar el script para crear nuevos banners
    print("\nCreando nuevos banners...")
    from create_banners import main as create_banners_main
    create_banners_main()
    
    print("\nProceso completado!")

if __name__ == "__main__":
    main()

 