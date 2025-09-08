# Para ejecutar, ir a entorno virtual y ejecutar python logistics/import_providers.py

import os
import sys
import django
import pandas as pd
from django.core.files import File

# Agregar el directorio del proyecto al PATH de Python
current_dir = os.path.dirname(os.path.abspath(__file__))
project_dir = os.path.dirname(current_dir)
sys.path.append(project_dir)

# Configurar el entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mercado_logistico.settings')
django.setup()

# Ahora podemos importar los modelos de Django
from logistics.models import Provider, Service

def import_providers_from_excel(excel_path):
    # Ruta a la imagen genérica
    default_image_path = os.path.join('media', 'provider_images', 'no-image.jpg')
    
    # Leer el archivo Excel
    print(f"Intentando leer archivo Excel desde: {excel_path}")
    df = pd.read_excel(excel_path)
    print(f"Excel leído correctamente. Filas encontradas: {len(df)}")
    
    # Contador para seguimiento
    created_count = 0
    errors = []

    try:
        # Iterar sobre cada fila del Excel
        for index, row in df.iterrows():
            try:
                # Crear el proveedor
                provider = Provider.objects.create(
                    name=row['nombre'],
                    description=row['descripcion'],
                    phone_number=str(row['telefonos']),
                    email=row['correos'],
                    website=row['website'] if pd.notna(row['website']) else None,
                    address=row['direccion']
                )
                
                # Asignar imagen por defecto
                if os.path.exists(default_image_path):
                    with open(default_image_path, 'rb') as img_file:
                        provider.image.save(
                            os.path.basename(default_image_path),
                            File(img_file),
                            save=True
                        )
                
                # Asociar el servicio "Logística General" (ID: 3)
                provider.services.add(3)
                
                created_count += 1
                print(f"Proveedor creado: {provider.name}")
                
            except Exception as e:
                errors.append(f"Error en fila {index + 2}: {str(e)}")
                continue
        
        # Resumen final
        print(f"\nProceso completado:")
        print(f"Proveedores creados: {created_count}")
        if errors:
            print("\nErrores encontrados:")
            for error in errors:
                print(error)
            
    except Exception as e:
        print(f"Error general: {str(e)}")

# Uso del script
if __name__ == "__main__":
    excel_path = "E:/Desarrollo/Automatizadores/Scripts sueltos/proveedores_logisticos.xlsx"
    print(f"Directorio actual: {os.getcwd()}")
    print(f"Directorio del proyecto: {project_dir}")
    import_providers_from_excel(excel_path)