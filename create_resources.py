import os
import django
import random
import datetime
from django.utils import timezone
from django.core.files.base import ContentFile

# Configurar el entorno de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mercado_logistico.settings')
django.setup()

from logistics.models import Resource

# Lista de títulos de recursos logísticos ficticios
TITULOS = [
    "Optimización de la Cadena de Suministro en la Era Digital",
    "Guía Completa de Logística de Última Milla",
    "Estrategias de Inventario Just-In-Time",
    "Blockchain en la Cadena de Suministro Global",
    "El Futuro de los Almacenes Automatizados",
    "Gestión de Flotas de Transporte Eficiente",
    "Métricas Clave en Operaciones Logísticas",
    "Sostenibilidad en la Cadena de Suministro",
    "Logística Inversa: Prácticas Recomendadas",
    "Planificación de la Demanda y Forecasting",
    "Análisis de Big Data en Operaciones Logísticas",
    "Gestión de Riesgos en la Cadena de Suministro",
    "Implementación Exitosa de WMS",
    "Transformación Digital en Logística",
    "Estrategias Cross-Docking",
    "Optimización de Rutas de Transporte",
    "Mejores Prácticas en Gestión de Almacenes",
    "Inteligencia Artificial en Supply Chain",
    "KPIs para Operaciones de Transporte",
    "Tendencias en Embalaje Sostenible",
    "Logística Omnicanal: Retos y Soluciones",
    "IoT en la Gestión de Inventarios",
    "Automatización de Procesos Logísticos",
    "Análisis de Costos en Operaciones Logísticas",
    "Lean Management en Centros de Distribución",
    "Estrategia de Abastecimiento Global",
    "Transporte Intermodal Optimizado",
    "Gestión de Proveedores en Supply Chain",
    "Modelos de Distribución Avanzados",
    "Logística 4.0: El Nuevo Paradigma",
    "Implementación de S&OP en Empresas",
    "Gestión de Crisis en la Cadena de Suministro",
    "Segmentación de Clientes y Estrategia Logística",
    "Planificación de Capacidad en Almacenes",
    "Analítica Predictiva en Supply Chain",
    "Negociación con Transportistas",
    "Gestión de Proyectos Logísticos",
    "Logística Verde y Huella de Carbono",
    "Tecnologías de Seguimiento y Trazabilidad",
    "Integración de Sistemas en Supply Chain",
    "Modelos de Inventario Multi-Echelon",
    "Estrategias de Entrada a Mercados Internacionales",
    "Transformación de la Cadena de Suministro",
    "Metodología Six Sigma en Logística",
    "Innovación en Procesos de Picking",
    "Gestión de Devoluciones Eficiente",
    "Colaboración en la Cadena de Suministro",
    "Tecnologías Emergentes en Logística",
    "Seguridad y Compliance en Transporte",
    "Experiencia del Cliente en Logística",
    "Planificación de Red de Distribución",
    "Cultura Lean en Operaciones",
    "Gestión del Cambio en Proyectos Logísticos",
    "Documentación Internacional y Aduanas",
    "Reducción del Time-to-Market",
    "Ciberseguridad en la Cadena de Suministro",
    "Planificación de Escenarios Logísticos",
    "Tendencias en Almacenamiento Vertical",
    "Control de Calidad en Procesos Logísticos",
    "Incoterms y Logística Internacional",
]

# Lista de autores ficticios
AUTORES = [
    "Carlos Rodríguez", "María López", "Alejandro Martínez", "Ana García", 
    "Juan Sánchez", "Laura Pérez", "Fernando González", "Sofía Fernández",
    "Javier Torres", "Carmen Díaz", "Miguel Ruiz", "Lucía Gómez",
    "David Moreno", "Elena Castro", "Pablo Jiménez", "Patricia Álvarez",
    "Roberto Gutiérrez", "Cristina Romero", "Alberto Navarro", "Beatriz Muñoz",
    "Instituto Logístico SCM", "Global Supply Chain Research", "Consultora LogisTech",
    "Centro de Innovación Logística", "Universidad de Logística Aplicada"
]

# Tipos de recursos
TIPOS_RECURSO = ['LI', 'DO', 'AR', 'IN', 'HC']

def crear_archivo_ficticio(tipo):
    """Crear un archivo ficticio según el tipo de recurso"""
    contenido = f"Este es un contenido de ejemplo para un recurso de tipo {tipo}."
    if tipo == 'LI':
        return ContentFile(contenido.encode(), name="libro_ejemplo.pdf")
    elif tipo == 'DO':
        return ContentFile(contenido.encode(), name="documento_ejemplo.pdf")
    elif tipo == 'AR':
        return ContentFile(contenido.encode(), name="articulo_ejemplo.pdf")
    elif tipo == 'IN':
        return ContentFile(contenido.encode(), name="infografia_ejemplo.png")
    elif tipo == 'HC':
        return ContentFile(contenido.encode(), name="hoja_calculo_ejemplo.xlsx")
    return None

def generar_recursos_ficticios(cantidad):
    """Generar recursos ficticios en la base de datos"""
    
    # Borrar recursos existentes
    # Si no quieres borrar los recursos existentes, comenta esta línea
    Resource.objects.all().delete()
    
    print(f"Generando {cantidad} recursos ficticios...")
    
    # Fecha base para created_at
    fecha_base = timezone.now() - datetime.timedelta(days=365)
    
    for i in range(cantidad):
        # Generar datos aleatorios
        titulo = random.choice(TITULOS) if i < len(TITULOS) else f"{random.choice(TITULOS)} - Versión {i-len(TITULOS)+1}"
        tipo = random.choice(TIPOS_RECURSO)
        autor = random.choice(AUTORES)
        email = f"{autor.lower().replace(' ', '.')}@ejemplo.com"
        telefono = f"+51 9{random.randint(10000000, 99999999)}"
        destacado = random.random() < 0.2  # 20% de probabilidad de ser destacado
        
        # Calcular fecha de creación (para distribuir en el tiempo)
        dias_atras = random.randint(0, 364)
        fecha_creacion = fecha_base + datetime.timedelta(days=dias_atras)
        
        # Crear el recurso
        recurso = Resource(
            title=titulo,
            resource_type=tipo,
            author=autor,
            author_email=email,
            author_phone=telefono,
            is_featured=destacado,
            created_at=fecha_creacion,
            updated_at=fecha_creacion
        )
        
        # Agregar archivo ficticio
        archivo = crear_archivo_ficticio(tipo)
        recurso.file.save(archivo.name, archivo, save=False)
        
        # Guardar el recurso
        recurso.save()
        print(f"Recurso creado: {titulo} ({tipo})")
    
    print(f"\nSe crearon {cantidad} recursos ficticios.")
    print(f"Recursos destacados: {Resource.objects.filter(is_featured=True).count()}")
    print(f"Distribución por tipo:")
    for tipo, nombre in Resource.RESOURCE_TYPES:
        print(f"- {nombre}: {Resource.objects.filter(resource_type=tipo).count()}")

if __name__ == "__main__":
    generar_recursos_ficticios(60) 