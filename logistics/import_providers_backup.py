import pandas as pd
from logistics.models import Provider, Service

def import_providers_from_excel(excel_path):
    # Leer el archivo Excel
    df = pd.read_excel(excel_path)
    
    # Contador para seguimiento
    created_count = 0
    errors = []

    try:
        # Iterar sobre cada fila del Excel
        for index, row in df.iterrows():
            try:
                # Crear el proveedor
                provider = Provider.objects.create(
                    name=row['nombre'],              # Ajusta estos nombres según las columnas de tu Excel
                    description=row['descripcion'],
                    phone_number=str(row['telefonos']),  # Convertir a string por si acaso
                    email=row['correos'],
                    website=row['website'] if pd.notna(row['website']) else None,  # Manejar valores vacíos
                    address=row['direccion']
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
    excel_path = "E:\Desarrollo\Automatizadores\Scripts sueltos/proveedores_logisticos.xlsx"
    import_providers_from_excel(excel_path)