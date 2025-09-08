# Script para crear banners de ejemplo para las secciones del sitio
import os
import sys
import django
from datetime import date, timedelta
from PIL import Image, ImageDraw, ImageFont
from io import BytesIO
import random

# Configurar el entorno de Django
# Para que funcione cuando se ejecuta directamente sin shell de Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mercado_logistico.settings')
django.setup()

from django.core.files.base import ContentFile
from logistics.models import Banner

def crear_imagen_banner(texto, color_fondo, nombre_archivo):
    """Crea una imagen de banner con el texto indicado"""
    try:
        ancho, alto = 940, 200  # Ajustado de 320px a 200px
        
        # Crear imagen con fondo de color
        imagen = Image.new('RGB', (ancho, alto), color_fondo)
        dibujo = ImageDraw.Draw(imagen)
        
        # Agregar texto central, aunque no tenemos una fuente instalada por defecto
        # trataremos de usar una fuente del sistema o un texto simple
        try:
            # Las rutas de fuentes pueden variar según el sistema
            fuente = ImageFont.truetype("arial.ttf", 40)
            
            # Versión más moderna para calcular el tamaño del texto
            try:
                # Para versiones más nuevas de PIL/Pillow
                bbox = dibujo.textbbox((0, 0), texto, font=fuente)
                ancho_texto = bbox[2] - bbox[0]
                alto_texto = bbox[3] - bbox[1]
            except AttributeError:
                # Fallback para versiones antiguas
                ancho_texto = dibujo.textlength(texto, font=fuente)
                alto_texto = 40  # Aproximado para la altura de fuente 40
            
            posicion = ((ancho - ancho_texto) // 2, (alto - alto_texto) // 2)
            dibujo.text(posicion, texto, fill="white", font=fuente)
        except Exception as e:
            # Si no podemos usar una fuente, dibujamos un rectángulo con texto simple
            print(f"No se pudo usar la fuente: {e}")
            dibujo.rectangle([(ancho//4, alto//3), (ancho*3//4, alto*2//3)], outline="white", width=3)
            dibujo.text((ancho//2-100, alto//2-20), texto, fill="white")
        
        # Guardar la imagen en memoria
        buffer = BytesIO()
        imagen.save(buffer, format="JPEG")
        buffer.seek(0)
        
        return buffer.getvalue(), nombre_archivo
    except Exception as e:
        print(f"Error al crear la imagen: {e}")
        return None, None

def crear_banner_desde_imagen_existente(seccion, titulo, anunciante, imagen_path, url=None):
    """Crea un banner utilizando una imagen existente del proyecto"""
    try:
        # Verificar si ya existe un banner similar
        if Banner.objects.filter(section=seccion, title=titulo).exists():
            print(f"Ya existe un banner para {seccion} con el título '{titulo}'")
            return
        
        # Determinar fechas (desde hoy hasta un mes después)
        hoy = date.today()
        fin = hoy + timedelta(days=30)
        
        # Crear el objeto Banner
        banner = Banner(
            title=titulo,
            section=seccion,
            advertiser=anunciante,
            is_active=True,
            start_date=hoy,
            end_date=fin,
            url=url
        )
        
        # Abrir la imagen existente
        if os.path.exists(imagen_path):
            img = Image.open(imagen_path)
            
            # Redimensionar la imagen al tamaño requerido para banner (más compacto)
            img = img.resize((940, 200), Image.LANCZOS)
            
            # Guardar la imagen en memoria
            buffer = BytesIO()
            img.save(buffer, format="JPEG")
            buffer.seek(0)
            
            # Asignar la imagen al banner
            nombre_archivo = f"banner_{seccion.lower()}_{random.randint(1000, 9999)}.jpg"
            banner.image.save(nombre_archivo, ContentFile(buffer.getvalue()), save=False)
            banner.save()
            
            print(f"Banner creado para {seccion}: {titulo}")
        else:
            print(f"No se encontró la imagen: {imagen_path}")
    
    except Exception as e:
        print(f"Error al crear el banner: {e}")

def crear_banner_con_imagen_nueva(seccion, titulo, anunciante, color_fondo, url=None):
    """Crea un banner generando una nueva imagen con texto"""
    try:
        # Verificar si ya existe un banner similar
        if Banner.objects.filter(section=seccion, title=titulo).exists():
            print(f"Ya existe un banner para {seccion} con el título '{titulo}'")
            return
        
        # Determinar fechas (desde hoy hasta un mes después)
        hoy = date.today()
        fin = hoy + timedelta(days=30)
        
        # Crear el objeto Banner
        banner = Banner(
            title=titulo,
            section=seccion,
            advertiser=anunciante,
            is_active=True,
            start_date=hoy,
            end_date=fin,
            url=url
        )
        
        # Crear una imagen nueva
        contenido_imagen, nombre_archivo = crear_imagen_banner(
            f"Banner {seccion}", 
            color_fondo,
            f"banner_{seccion.lower()}_{random.randint(1000, 9999)}.jpg"
        )
        
        if contenido_imagen:
            # Asignar la imagen al banner
            banner.image.save(nombre_archivo, ContentFile(contenido_imagen), save=False)
            banner.save()
            print(f"Banner creado para {seccion}: {titulo}")
        else:
            print(f"No se pudo crear la imagen para el banner de {seccion}")
    
    except Exception as e:
        print(f"Error al crear el banner: {e}")

def main():
    # Eliminar banners existentes para evitar duplicados
    print("Eliminando banners existentes...")
    Banner.objects.all().delete()
    print("Banners existentes eliminados.")
    
    # Rutas alternativas a imágenes existentes (probar múltiples ubicaciones)
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Opciones para la ruta de educación
    ruta_educacion_opciones = [
        os.path.join(script_dir, 'static', 'images', 'portada_educacion.jpg'),
        os.path.join(script_dir, 'static', 'images', 'portada_educacion.png'),
        os.path.join(script_dir, '..', 'static', 'images', 'portada_educacion.jpg'),
        os.path.join('static', 'images', 'portada_educacion.jpg')
    ]
    
    # Opciones para la ruta de directorio
    ruta_directorio_opciones = [
        os.path.join(script_dir, 'static', 'images', 'portada_directorio.jpg'),
        os.path.join(script_dir, 'static', 'images', 'portada_directorio.png'),
        os.path.join(script_dir, '..', 'static', 'images', 'portada_directorio.jpg'),
        os.path.join('static', 'images', 'portada_directorio.jpg')
    ]
    
    # Buscar la imagen de educación
    ruta_educacion = None
    for ruta in ruta_educacion_opciones:
        print(f"Probando ruta: {ruta}")
        if os.path.exists(ruta):
            ruta_educacion = ruta
            print(f"✓ Imagen de educación encontrada en: {ruta_educacion}")
            break
    
    # Buscar la imagen de directorio
    ruta_directorio = None
    for ruta in ruta_directorio_opciones:
        print(f"Probando ruta: {ruta}")
        if os.path.exists(ruta):
            ruta_directorio = ruta
            print(f"✓ Imagen de directorio encontrada en: {ruta_directorio}")
            break
    
    # Crear banner de Educación con imagen existente
    if ruta_educacion:
        crear_banner_desde_imagen_existente(
            seccion='EDUCACION', 
            titulo='Cursos y Maestrías en Logística', 
            anunciante='Universidad Logística',
            imagen_path=ruta_educacion,
            url='http://127.0.0.1:8000/courses/'
        )
    else:
        print("⚠️ No se encontró la imagen para el banner de Educación")
        # Crear con imagen generada como alternativa
        crear_banner_con_imagen_nueva(
            seccion='EDUCACION',
            titulo='Cursos y Maestrías en Logística',
            anunciante='Universidad Logística',
            color_fondo="#4A7AF0",
            url='http://127.0.0.1:8000/courses/'
        )
    
    # Crear banner de Directorio con imagen existente
    if ruta_directorio:
        crear_banner_desde_imagen_existente(
            seccion='DIRECTORIO', 
            titulo='Encuentra los mejores proveedores', 
            anunciante='Mercado Logístico',
            imagen_path=ruta_directorio,
            url='http://127.0.0.1:8000/directorio/'
        )
    else:
        print("⚠️ No se encontró la imagen para el banner de Directorio")
        # Crear con imagen generada como alternativa
        crear_banner_con_imagen_nueva(
            seccion='DIRECTORIO',
            titulo='Encuentra los mejores proveedores',
            anunciante='Mercado Logístico',
            color_fondo="#008855",
            url='http://127.0.0.1:8000/directorio/'
        )
    
    # Crear banner de Contratar/Ofrecer con imagen generada
    crear_banner_con_imagen_nueva(
        seccion='CONTRATAR_OFRECER',
        titulo='Oportunidades en Logística',
        anunciante='Bolsa de Trabajo Logística',
        color_fondo="#0099cc",
        url='http://127.0.0.1:8000/contratar-ofrecer/'
    )
    
    print("Proceso completado.")

if __name__ == "__main__":
    main() 