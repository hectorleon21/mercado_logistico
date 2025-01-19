# C:\Django\cms_env\logistic_manager\logistics\models.py
from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import URLValidator
from PIL import Image
import os
from io import BytesIO
from django.core.files.uploadedfile import InMemoryUploadedFile
import sys
from ckeditor.fields import RichTextField
from .validators import validate_image_size
from django.utils import timezone
from django.utils.html import strip_tags
from django.urls import reverse
from image_cropping import ImageRatioField
from django.core.files.uploadedfile import InMemoryUploadedFile


class Course(models.Model):
    COURSE_TYPES = [
        ('MA', 'Maestría'),
        ('DI', 'Diplomado'),
        ('ES', 'Especialización'),
        ('WE', 'Webinar'),
    ]
    
    MODALITIES = [
        ('PR', 'Presencial'),
        ('ON', 'Online'),
        ('SI', 'Sincrónica'),
        ('AS', 'Asincrónica'),
    ]

    name = models.CharField(max_length=255, verbose_name="Nombre del Curso")
    institution = models.CharField(max_length=255, verbose_name="Entidad o Institución")
    course_type = models.CharField(
        max_length=2,
        choices=COURSE_TYPES,
        verbose_name="Tipo de Curso"
    )
    modality = models.CharField(
        max_length=2,
        choices=MODALITIES,
        verbose_name="Modalidad"
    )
    start_date = models.DateField(verbose_name="Fecha de Inicio")
    description = RichTextField(verbose_name="Descripción del Curso")
    is_new = models.BooleanField(default=True, verbose_name="Es Nuevo")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    image = models.ImageField(
        upload_to='course_images/',
        null=True,
        blank=True,
        verbose_name="Imagen del Curso",
        validators=[validate_image_size],
        help_text="Tamaño recomendado: 800x400 píxeles. Máximo 2MB."
    )
    # Añadir campo para el cropping
    cropping = ImageRatioField('image', '400x300')

    def save(self, *args, **kwargs):
        if self.image:
            img = Image.open(self.image)
            
            # Convertir a RGB si es necesario
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Guardar la imagen tal como está, sin redimensionarla ni recortarla
            output = BytesIO()
            img.save(output, format='JPEG', quality=85)
            output.seek(0)

            # Reemplazar la imagen cargada con la imagen procesada
            self.image = InMemoryUploadedFile(
                output,
                'ImageField',
                f"{os.path.splitext(self.image.name)[0]}.jpg",
                'image/jpeg',
                sys.getsizeof(output),
                None
            )

        super().save(*args, **kwargs)

    class Meta:
        verbose_name = "Curso"
        verbose_name_plural = "Cursos"
        ordering = ['-start_date']

    def __str__(self):
        return f"{self.name} - {self.get_course_type_display()}"
    
class News(models.Model):
    title = models.CharField(max_length=255, verbose_name="Título")
    date = models.DateField(verbose_name="Fecha")
    description = RichTextField(verbose_name="Descripción")
    source = models.CharField(  # Nuevo campo
        max_length=100,
        verbose_name="Fuente",
        default=""
    )
    source_website = models.URLField(  # Nuevo campo
        verbose_name="Sitio web fuente",
        default="",
        blank=True
    )
    author = models.CharField(  # Nuevo campo
        max_length=255,
        verbose_name="Autor",
        blank=True,
        null=True
    )
    image = models.ImageField(
        upload_to='news_images/',
        null=True,
        blank=True,
        verbose_name="Imagen de la Noticia",
        validators=[validate_image_size],
        help_text="Tamaño recomendado: 800x400 píxeles. Máximo 2MB."
    )
    source_url = models.URLField(
        verbose_name="URL de origen",
        blank=True,
        null=True,
        help_text="URL de donde se extrajo la noticia"
    )
    is_scraped = models.BooleanField(
        default=False,
        verbose_name="Extraída automáticamente"
    )
    is_published = models.BooleanField(
        default=False,
        verbose_name="Publicada"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    include_in_newsletter = models.BooleanField(
        default=False,
        verbose_name="Incluir en Newsletter",
        help_text="Marcar si esta noticia debe ser incluida en el próximo newsletter"
    )

    class Meta:
        verbose_name = "Noticia"
        verbose_name_plural = "Noticias"
        ordering = ['-date']

    def generate_summary(self, char_limit=400):
        """
        Genera un resumen de la noticia, limitando su longitud a `char_limit`
        y eliminando las etiquetas HTML.
        """
        # Quitar las etiquetas HTML y truncar el texto
        plain_text = strip_tags(self.description)  # Usamos `description` en vez de `content`
        return plain_text[:char_limit] + "..." if len(plain_text) > char_limit else plain_text
    
    def get_absolute_url(self):
        return reverse('news-detail', args=[str(self.id)])  # Cambia 'news-detail' a la URL correspondiente
    
    def __str__(self):
        return self.title
    
    def save(self, *args, **kwargs):
        if self.image:
            img = Image.open(self.image)
            
            # Convertir a RGB si es necesario
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Dimensiones objetivo (igual que Event)
            target_width = 800
            target_height = 400
            
            # Obtener dimensiones originales
            width, height = img.size
            
            # Calcular proporciones
            img_ratio = width / height
            target_ratio = target_width / target_height
            
            if img_ratio > target_ratio:
                new_height = target_height
                new_width = int(new_height * img_ratio)
            else:
                new_width = target_width
                new_height = int(new_width / img_ratio)
            
            # Redimensionar manteniendo proporción
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Recortar al tamaño exacto desde el centro
            left = (new_width - target_width) // 2
            top = (new_height - target_height) // 2
            right = left + target_width
            bottom = top + target_height
            
            img = img.crop((left, top, right, bottom))
            
            # Guardar en memoria con calidad optimizada
            output = BytesIO()
            img.save(output, format='JPEG', quality=85)
            output.seek(0)
            
            # Reemplazar el archivo original
            self.image = InMemoryUploadedFile(
                output,
                'ImageField',
                f"{os.path.splitext(self.image.name)[0]}.jpg",
                'image/jpeg',
                sys.getsizeof(output),
                None
            )

        super().save(*args, **kwargs)

# Newsletter semanal
class Newsletter(models.Model):
    title = models.CharField(
        max_length=200, 
        verbose_name="Título del Newsletter"
    )
    created_date = models.DateTimeField(
        auto_now_add=True,
        verbose_name="Fecha de Creación"
    )
    sent_date = models.DateTimeField(
        null=True, 
        blank=True,
        verbose_name="Fecha de Envío"
    )
    news_items = models.ManyToManyField(
        News,
        related_name='newsletters',
        verbose_name="Noticias Incluidas"
    )
    content = RichTextField(  # Cambiar de TextField a RichTextField
        verbose_name="Contenido del Newsletter",
        help_text="Contenido HTML del newsletter generado"
    )
    is_sent = models.BooleanField(
        default=False,
        verbose_name="Enviado"
    )
    recipients_count = models.IntegerField(
        default=0,
        verbose_name="Número de Destinatarios"
    )

    class Meta:
        verbose_name = "Newsletter"
        verbose_name_plural = "Newsletters"
        ordering = ['-created_date']

    def __str__(self):
        return self.title
        # return f"{self.title} - {self.created_date.strftime('%d/%m/%Y')}"
    
class NewsletterSubscription(models.Model):
    PAISES_CHOICES = [
        ('México', 'México'),
        ('Colombia', 'Colombia'),
        ('España', 'España'),
        ('Argentina', 'Argentina'),
        ('Venezuela', 'Venezuela'),
        ('Perú', 'Perú'),
        ('Chile', 'Chile'),
        ('Guatemala', 'Guatemala'),
        ('Ecuador', 'Ecuador'),
        ('Cuba', 'Cuba'),
        ('Bolivia', 'Bolivia'),
        ('República Dominicana', 'República Dominicana'),
        ('Honduras', 'Honduras'),
        ('El Salvador', 'El Salvador'),
        ('Paraguay', 'Paraguay'),
        ('Nicaragua', 'Nicaragua'),
        ('Costa Rica', 'Costa Rica'),
        ('Puerto Rico', 'Puerto Rico'),
        ('Panamá', 'Panamá'),
        ('Uruguay', 'Uruguay'),
        ('Otro', 'Otro'),
    ]

    SECTOR_CHOICES = [
    ('Aficiones y casinos', 'Aficiones y casinos'),
    ('Agricultura y ganadería', 'Agricultura y ganadería'),
    ('Agua y aguas residuales', 'Agua y aguas residuales'),
    ('Alimentos', 'Alimentos'),
    ('Arquitectura', 'Arquitectura'),
    ('Arte y cultura', 'Arte y cultura'),
    ('Asistencia y cuidados', 'Asistencia y cuidados'),
    ('Banca y AFP', 'Banca y AFP'),
    ('Bebidas alcohólicas', 'Bebidas alcohólicas'),
    ('Bebidas sin alcohol', 'Bebidas sin alcohol'),
    ('Centros comerciales y outlets', 'Centros comerciales y outlets'),
    ('Combustibles fósiles', 'Combustibles fósiles'),
    ('Comercio al por mayor', 'Comercio al por mayor'),
    ('Comercio electrónico', 'Comercio electrónico'),
    ('Comercio internacional', 'Comercio internacional'),
    ('Construcción naval', 'Construcción naval'),
    ('Cosmética y cuidado personal', 'Cosmética y cuidado personal'),
    ('Deporte, fitness y ocio', 'Deporte, fitness y ocio'),
    ('Educación y ciencia', 'Educación y ciencia'),
    ('Electrónica', 'Electrónica'),
    ('Energía y medio ambiente', 'Energía y medio ambiente'),
    ('Equipamiento del hogar', 'Equipamiento del hogar'),
    ('Estado de salud', 'Estado de salud'),
    ('Ferreterías y Bricolage', 'Ferreterías y Bricolage'),
    ('Finanzas, seguros y bienes inmuebles', 'Finanzas, seguros y bienes inmuebles'),
    ('Gestión de residuos', 'Gestión de residuos'),
    ('Hospitales, farmacias y médicos', 'Hospitales, farmacias y médicos'),
    ('Industria aeroespacial', 'Industria aeroespacial'),
    ('Industria de defensa', 'Industria de defensa'),
    ('Industria de software', 'Industria de software'),
    ('Industria farmacéutica', 'Industria farmacéutica'),
    ('Ingeniería', 'Ingeniería'),
    ('Ingeniería civil', 'Ingeniería civil'),
    ('Juegos de azar', 'Juegos de azar'),
    ('Juguetes', 'Juguetes'),
    ('Mascotas', 'Mascotas'),
    ('Material de oficina', 'Material de oficina'),
    ('Metalurgia y electrónica', 'Metalurgia y electrónica'),
    ('Minería, metales y minerales', 'Minería, metales y minerales'),
    ('Ministerios y Gobierno', 'Ministerios y Gobierno'),
    ('Mobiliario', 'Mobiliario'),
    ('Operador Logístico', 'Operador Logístico'),
    ('Papel y pasta de papel', 'Papel y pasta de papel'),
    ('Parques y actividades al aire libre', 'Parques y actividades al aire libre'),
    ('Pesca y acuicultura', 'Pesca y acuicultura'),
    ('Plástico y caucho', 'Plástico y caucho'),
    ('Producción de vehículos', 'Producción de vehículos'),
    ('Productos de limpieza', 'Productos de limpieza'),
    ('Productos minerales no metálicos', 'Productos minerales no metálicos'),
    ('Productos químicos y materias primas', 'Productos químicos y materias primas'),
    ('Publicidad y marketing', 'Publicidad y marketing'),
    ('Refinerías de petróleo', 'Refinerías de petróleo'),
    ('Ropa y complementos', 'Ropa y complementos'),
    ('Salud e higiene', 'Salud e higiene'),
    ('Sector inmobiliario', 'Sector inmobiliario'),
    ('Tecnología médica', 'Tecnología médica'),
    ('Tecnología medioambiental', 'Tecnología medioambiental'),
    ('Tecnología y telecomunicaciones', 'Tecnología y telecomunicaciones'),
    ('Turismo y hostelería', 'Turismo y hostelería'),
    ('Otro', 'Otro'),
    ]

    nombre = models.CharField(max_length=100)
    apellidos = models.CharField(max_length=100)
    empresa = models.CharField(max_length=200)
    rol = models.CharField(max_length=100)
    correo = models.EmailField(unique=True)
    rubros_interes = models.JSONField()  # Almacenará la lista de rubros como JSON
    fecha_suscripcion = models.DateTimeField(auto_now_add=True)
    pais = models.CharField(
        max_length=100,
        choices=PAISES_CHOICES,
        verbose_name="País",
        null=True,
        blank=True,
    )
    ciudad = models.CharField(
        max_length=100,
        verbose_name="Ciudad",
        null=True,
        blank=True,
    )
    sector = models.CharField(
        max_length=100,
        choices=SECTOR_CHOICES,
        verbose_name="Sector",
        null=True,
        blank=True,
    )

    class Meta:
        verbose_name = "Suscripción al Newsletter"
        verbose_name_plural = "Suscripciones al Newsletter"

    def __str__(self):
        return f"{self.nombre} {self.apellidos} - {self.empresa}"

class Rubro(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre del Rubro")
    description = models.TextField(verbose_name="Descripción", blank=True)

    def __str__(self):
        return self.name


class NewsSource(models.Model):
    name = models.CharField(max_length=100, verbose_name="Nombre del sitio")
    url = models.URLField(verbose_name="URL del sitio")
    selector = models.TextField(
        verbose_name="Selector CSS/XPath",
        help_text="Selector para extraer noticias"
    )
    is_active = models.BooleanField(
        default=True,
        verbose_name="Activo"
    )
    last_scrape = models.DateTimeField(
        null=True,
        blank=True,
        verbose_name="Última extracción"
    )

    class Meta:
        verbose_name = "Fuente de noticias"
        verbose_name_plural = "Fuentes de noticias"

    def __str__(self):
        return self.name
    
class Service(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripción")
    flag_directorio = models.BooleanField(default=False, verbose_name="Tag en Directorio")

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Servicio"
        verbose_name_plural = "Servicios"

    
class Provider(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre")
    description = models.TextField(verbose_name="Descripción")
    services = models.ManyToManyField(Service, related_name='providers', verbose_name="Servicios")
    address = models.CharField(max_length=255, verbose_name="Dirección")
    phone_number = models.CharField(max_length=20, verbose_name="Teléfono")
    email = models.EmailField(verbose_name="Correo electrónico")
    website = models.URLField(
        max_length=255,
        blank=True,
        null=True,
        verbose_name="Sitio Web",
        validators=[URLValidator(schemes=['http', 'https'])]
    )
    image = models.ImageField(
        upload_to='provider_images/',
        null=True,
        blank=True,
        verbose_name="Logo",
        validators=[validate_image_size],
        help_text="Tamaño recomendado: 300x200 píxeles. Máximo 2MB."
    )

    def save(self, *args, **kwargs):
        if self.image:
            img = Image.open(self.image)
            
            # Convertir a RGB si es necesario
            if img.mode != 'RGB':
                img = img.convert('RGB')
            
            # Dimensiones objetivo
            target_width = 300
            target_height = 200
            
            # Obtener dimensiones originales
            width, height = img.size
            
            # Calcular proporciones
            img_ratio = width / height
            target_ratio = target_width / target_height
            
            if img_ratio > target_ratio:
                # Si la imagen es más ancha proporcionalmente
                new_height = target_height
                new_width = int(new_height * img_ratio)
            else:
                # Si la imagen es más alta proporcionalmente
                new_width = target_width
                new_height = int(new_width / img_ratio)
            
            # Redimensionar manteniendo proporción
            img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)
            
            # Recortar al tamaño exacto desde el centro
            left = (new_width - target_width) // 2
            top = (new_height - target_height) // 2
            right = left + target_width
            bottom = top + target_height
            
            img = img.crop((left, top, right, bottom))
            
            # Guardar en memoria con calidad optimizada
            output = BytesIO()
            img.save(output, format='JPEG', quality=85)
            output.seek(0)
            
            # Reemplazar el archivo original
            self.image = InMemoryUploadedFile(
                output,
                'ImageField',
                f"{os.path.splitext(self.image.name)[0]}.jpg",
                'image/jpeg',
                sys.getsizeof(output),
                None
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Proveedor"
        verbose_name_plural = "Proveedores"

class Event(models.Model):
    name = models.CharField(max_length=255, verbose_name="Nombre")
    date = models.DateField(verbose_name="Fecha")
    location = models.CharField(max_length=255, verbose_name="Lugar")
    description = RichTextField(verbose_name="Descripción")
    image = models.ImageField(
        upload_to='event_images/',
        null=True,
        blank=True,
        verbose_name="Imagen del Evento",
        validators=[validate_image_size],
        help_text="Tamaño recomendado: 800x400 píxeles. Máximo 2MB."
    )
    # Añadir campo para el cropping
    cropping = ImageRatioField('image', '400x300')

    created_at = models.DateTimeField(
        auto_now_add=True, 
        verbose_name="Fecha de creación",
        help_text="Se establecerá automáticamente al crear el evento"
    )
    updated_at = models.DateTimeField(
        auto_now=True, 
        verbose_name="Última actualización",
        help_text="Se actualizará automáticamente al modificar el evento"
    )

    def save(self, *args, **kwargs):
        if self.image:
            img = Image.open(self.image)
            
            # Convertir a RGB si es necesario
            if img.mode != 'RGB':
                img = img.convert('RGB')

            # Guardar la imagen tal como está, sin redimensionarla ni recortarla
            output = BytesIO()
            img.save(output, format='JPEG', quality=85)  # Usar la calidad adecuada
            output.seek(0)

            # Reemplazar la imagen cargada con la imagen procesada
            self.image = InMemoryUploadedFile(
                output,
                'ImageField',
                f"{os.path.splitext(self.image.name)[0]}.jpg",
                'image/jpeg',
                sys.getsizeof(output),
                None
            )

        super().save(*args, **kwargs)

    def __str__(self):
        return f"{self.name} - {self.date}"

    class Meta:
        verbose_name = "Evento"
        verbose_name_plural = "Eventos"
        ordering = ['-date']  # Ordenar por fecha, más reciente primero