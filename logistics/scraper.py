import requests
from bs4 import BeautifulSoup
from django.utils import timezone
from .models import News, NewsSource
import logging
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry
from datetime import datetime, timedelta
from django.utils.timezone import now, make_aware


logger = logging.getLogger(__name__)

class NewsScraperBase:
    def __init__(self):
        # Configurar session con reintentos
        self.session = requests.Session()
        retries = Retry(
            total=5,  # número total de reintentos
            backoff_factor=0.5,  # tiempo entre reintentos
            status_forcelist=[500, 502, 503, 504]  # códigos HTTP a reintentar
        )
        adapter = HTTPAdapter(max_retries=retries)
        self.session.mount('http://', adapter)
        self.session.mount('https://', adapter)

    def clean_text(self, text):
        if text:
            return ' '.join(text.split())
        return ''

    def get_soup(self, url):
        try:
            headers = {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
                'Accept-Language': 'en-US,en;q=0.5',
                'Connection': 'keep-alive',
            }
            response = self.session.get(url, headers=headers, timeout=30)  # Aumentado el timeout
            response.raise_for_status()
            return BeautifulSoup(response.content, 'html.parser')
        except Exception as e:
            logger.error(f"Error fetching {url}: {str(e)}")
            return None

    def parse_date(self, date_str):
        return timezone.now()

class RevistaLogistecScraper(NewsScraperBase):
    SOURCE_NAME = "Revista Logistec"  # Nombre de la fuente
    SOURCE_URL = "https://www.revistalogistec.com/"

    def get_article_urls(self):
        """Obtiene todas las URLs de noticias de la página principal"""
        print("Obteniendo URLs de noticias...")
        soup = self.get_soup('https://www.revistalogistec.com/')
        if not soup:
            return []

        # Encontrar el contenedor principal de noticias
        news_container = soup.find('div', id='column-wrap-id-1625666157592')
        if not news_container:
            return []

        # Obtener todos los enlaces de noticias
        urls = []
        news_links = news_container.find_all('h4', class_='nspHeader')
        for link in news_links:
            a_tag = link.find('a')
            if a_tag and a_tag.get('href'):
                url = a_tag['href']
                if not url.startswith('http'):
                    url = 'https://www.revistalogistec.com' + url
                urls.append(url)
                print(f"URL encontrada: {url}")

        return urls

    def scrape_article(self, url):
        """Extrae la información de una noticia específica"""
        print(f"Procesando artículo: {url}")
        soup = self.get_soup(url)
        if not soup:
            return None

        try:
            # Obtener título
            title = soup.find('h1', attrs={'itemprop': 'headline'})
            title = self.clean_text(title.text) if title else ''

            # Obtener fecha
            date_elem = soup.find('time', attrs={'itemprop': 'datePublished'})
            date_str = date_elem.get('datetime') if date_elem else None
            date = self.parse_date(date_str) if date_str else now()

            # Filtrar por rango de fecha (últimos 7 días)
            seven_days_ago = now() - timedelta(days=7)
            if date < seven_days_ago:
                print(f"Noticia omitida por fecha ({date} fuera del rango de 7 días).")
                return None

            # Obtener autor
            author_elem = soup.find('span', attrs={'itemprop': 'name'})
            author = self.clean_text(author_elem.text) if author_elem else ''

            # Obtener imágenes
            carousel = soup.find('div', class_='carousel-inner')
            image_url = None
            if carousel:
                # Intentar primero encontrar la imagen activa
                active_item = carousel.find('div', class_='carousel-item active')
                if active_item and active_item.find('img'):
                    image_url = active_item.find('img').get('src')
                else:
                    # Si no hay imagen activa, tomar la primera imagen
                    first_image = carousel.find('img')
                    if first_image:
                        image_url = first_image.get('src')

                # Completar la URL de la imagen si es necesario
                if image_url and not image_url.startswith('http'):
                    image_url = 'https://www.revistalogistec.com' + image_url

            # Obtener contenido
            content = soup.find('div', attrs={'itemprop': 'articleBody'})
            description = self.clean_text(content.text) if content else ''

            # Agregar la fuente al diccionario de retorno
            return {
                'title': title,
                'description': description,
                'date': date,
                'source_url': url,
                'image_url': image_url,
                'source': self.SOURCE_NAME,
                'source_website': self.SOURCE_URL,
                'author': author
            }

        except Exception as e:
            print(f"Error procesando artículo {url}: {str(e)}")
            return None

    def scrape(self):
        """Proceso principal de scraping"""
        news_list = []

        # Paso 1: Obtener URLs de noticias
        urls = self.get_article_urls()
        print(f"Se encontraron {len(urls)} URLs de noticias")

        # Paso 2: Procesar cada noticia
        for url in urls:
            article_data = self.scrape_article(url)
            if article_data:
                news_list.append(article_data)

        return news_list

    def parse_date(self, date_str):
        """Convierte la fecha en formato ISO 8601 al formato datetime consciente de la zona horaria"""
        try:
            naive_date = datetime.fromisoformat(date_str)  # Convierte la fecha
            return make_aware(naive_date)  # Hacer la fecha consciente de la zona horaria
        except Exception as e:
            print(f"Error parseando fecha: {str(e)}")
            return now()  # Devuelve la fecha y hora actual si falla

class Logistica360Scraper(NewsScraperBase):
    SOURCE_NAME = "Logística 360"
    SOURCE_URL = "https://logistica360.pe/"

    def get_article_urls(self):
        """Obtiene todas las URLs de noticias de la página principal"""
        print("Obteniendo URLs de noticias de Logística 360...")
        soup = self.get_soup(self.SOURCE_URL)
        if not soup:
            return []

        urls = []
        # Buscar todos los contenedores de títulos
        title_containers = soup.find_all('div', class_='vc_gitem-post-data-source-post_title')
        for container in title_containers:
            link = container.find('a', class_='vc_gitem-link')
            if link and link.get('href'):
                urls.append(link['href'])
                print(f"URL encontrada: {link['href']}")

        return urls

    def scrape(self):
        """Proceso principal de scraping"""
        news_list = []
        
        # Paso 1: Obtener URLs de noticias
        urls = self.get_article_urls()
        print(f"Se encontraron {len(urls)} URLs de noticias en Logística 360")

        # Paso 2: Procesar cada noticia
        for url in urls:
            article_data = self.scrape_article(url)
            if article_data:
                news_list.append(article_data)

        return news_list

    def scrape_article(self, url):
        """Extrae la información de una noticia específica"""
        print(f"Procesando artículo: {url}")
        soup = self.get_soup(url)
        if not soup:
            return None

        try:
            # Obtener título
            title_elem = soup.find('h1', class_='blogTitle')
            title = self.clean_text(title_elem.text) if title_elem else ''

            # Obtener fecha
            date_container = soup.find('div', class_='subTitleDates')
            date_text = date_container.find('h3').text if date_container else ''
            date = self.parse_date_logistica360(date_text) if date_text else now()

            # Filtrar por rango de fecha (últimos 7 días)
            seven_days_ago = now() - timedelta(days=7)
            if date < seven_days_ago:
                print(f"Noticia omitida por fecha ({date} fuera del rango de 7 días).")
                return None

            # Obtener autor
            author_container = soup.find('div', class_='subTitleAuthor')
            if author_container and author_container.find('h3'):
                author_text = author_container.find('h3').text
                author = author_text.replace('Escrito por:', '').strip()
            else:
                author = ''

            # Obtener imagen
            image_url = None
            image_container = soup.find('div', class_='blogImage')
            if image_container:
                img_tag = image_container.find('img')
                if img_tag:
                    # Evitar imágenes base64/svg
                    src = img_tag.get('src', '')
                    if not src.startswith('data:'):
                        image_url = src
                    else:
                        # Si el src es un placeholder, intentar con data-src o srcset
                        data_src = img_tag.get('data-src')  # Algunos sitios usan data-src
                        if data_src:
                            image_url = data_src
                        else:
                            # Intentar obtener del srcset
                            srcset = img_tag.get('srcset', '')
                            if srcset and not srcset.startswith('data:'):
                                # Tomar la primera URL del srcset
                                image_url = srcset.split(',')[0].strip().split(' ')[0]

                    print("URL encontrada:", image_url)  # Debug

            # Obtener contenido
            content_container = soup.find('div', class_='blogContent')
            description = self.clean_text(content_container.text) if content_container else ''

            return {
                'title': title,
                'description': description,
                'date': date,
                'source_url': url,
                'image_url': image_url,
                'source': self.SOURCE_NAME,
                'source_website': self.SOURCE_URL,
                'author': author
            }
        except Exception as e:
            print(f"Error procesando artículo {url}: {str(e)}")
            return None

    def parse_date_logistica360(self, date_str):
        """Convierte la fecha del formato 'octubre 7, 2024' a objeto datetime"""
        try:
            # Diccionario para convertir nombres de meses en español a números
            months_es = {
                'enero': '1', 'febrero': '2', 'marzo': '3', 'abril': '4',
                'mayo': '5', 'junio': '6', 'julio': '7', 'agosto': '8',
                'septiembre': '9', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
            }
            
            # Limpiar y separar la fecha
            date_str = date_str.lower().replace(',', '').strip()
            month, day, year = date_str.split()
            
            # Convertir mes a número
            month_num = months_es[month]
            
            # Crear objeto datetime
            naive_date = datetime.strptime(f"{year}-{month_num}-{day}", "%Y-%m-%d")
            return make_aware(naive_date)
        except Exception as e:
            print(f"Error parseando fecha: {str(e)}")
            return now()  # Devuelve la fecha y hora actual si falla
        
class LogistaPeScraper(NewsScraperBase):
    SOURCE_NAME = "Logista.pe"
    SOURCE_URL = "https://logista.pe/"

    def get_article_urls(self):
        """Obtiene todas las URLs de noticias de la página principal"""
        print("Obteniendo URLs de noticias de Logista.pe...")
        soup = self.get_soup(self.SOURCE_URL)
        if not soup:
            return []

        urls = []
        # Encontrar el contenedor principal
        news_container = soup.find('div', {'data-id': '2a46c2a'})
        if news_container:
            # Buscar todos los contenedores de títulos
            title_containers = news_container.find_all('div', class_='jeg_postblock_content')
            for container in title_containers:
                link = container.find('a')
                if link and link.get('href'):
                    url = link['href']
                    urls.append(url)
                    print(f"URL encontrada: {url}")

        return urls

    def scrape_article(self, url):
        """Extrae la información de una noticia específica"""
        print(f"Procesando artículo: {url}")
        soup = self.get_soup(url)
        if not soup:
            return None

        try:
            # Obtener título
            title_elem = soup.find('h2', class_='elementor-heading-title')
            title = self.clean_text(title_elem.text) if title_elem else ''

            # Obtener fecha
            date_elem = soup.find('span', class_='elementor-post-info__item--type-date')
            date_str = date_elem.text.strip() if date_elem else None
            date = self.parse_date(date_str) if date_str else timezone.now()

            # Obtener imagen - Modificamos esta parte para buscar específicamente en post-featured-image
            image_url = None
            image_container = soup.find('div', {'data-widget_type': 'theme-post-featured-image.default'})
            if image_container:
                img_tag = image_container.find('img')
                if img_tag:
                    # Intentar obtener la imagen más grande del srcset
                    srcset = img_tag.get('srcset', '')
                    if srcset:
                        # El srcset tiene formato: "url1 size1w, url2 size2w, ..."
                        # Tomamos la URL de la imagen más grande
                        srcset_items = [item.strip().split() for item in srcset.split(',')]
                        largest_image = max(srcset_items, key=lambda x: int(x[1].replace('w', '')))
                        image_url = largest_image[0]
                    else:
                        # Si no hay srcset, usar src
                        image_url = img_tag.get('src')

            # Obtener contenido
            content_container = soup.find('div', class_='elementor-widget-container')
            description = ''
            if content_container:
                paragraphs = content_container.find_all('p')
                if paragraphs:
                    description = ' '.join([self.clean_text(p.text) for p in paragraphs])

            return {
                'title': title,
                'description': description,
                'date': date,
                'source_url': url,
                'image_url': image_url,
                'source': self.SOURCE_NAME,
                'source_website': self.SOURCE_URL,
                'author': ''
            }

        except Exception as e:
            print(f"Error procesando artículo {url}: {str(e)}")
            return None

    def parse_date(self, date_str):
        """Convierte la fecha del formato 'diciembre 5, 2024' a objeto datetime"""
        try:
            # Diccionario para convertir nombres de meses en español a números
            months_es = {
                'enero': '1', 'febrero': '2', 'marzo': '3', 'abril': '4',
                'mayo': '5', 'junio': '6', 'julio': '7', 'agosto': '8',
                'septiembre': '9', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
            }
            
            # Limpiar y separar la fecha
            date_str = date_str.lower().replace(',', '').strip()
            month, day, year = date_str.split()
            
            # Convertir mes a número
            month_num = months_es[month]
            
            # Crear objeto datetime
            from datetime import datetime
            return datetime.strptime(f"{year}-{month_num}-{day}", "%Y-%m-%d")
        except Exception as e:
            print(f"Error parseando fecha: {str(e)}")
            return timezone.now()

    def scrape(self):
        """Proceso principal de scraping"""
        news_list = []
        
        # Paso 1: Obtener URLs de noticias
        urls = self.get_article_urls()
        print(f"Se encontraron {len(urls)} URLs de noticias en {self.SOURCE_NAME}")

        # Paso 2: Procesar cada noticia
        for url in urls:
            try:
                article_data = self.scrape_article(url)
                if article_data:
                    if article_data.get('image_url'):
                        print(f"URL de imagen encontrada: {article_data['image_url']}")
                    else:
                        print(f"No se encontró imagen válida para: {url}")
                    news_list.append(article_data)
                else:
                    print(f"No se pudo extraer información de: {url}")
            except Exception as e:
                print(f"Error procesando {url}: {str(e)}")

        return news_list

class LogisticsMgmtScraper(NewsScraperBase):
    SOURCE_NAME = "Logistics Management"
    SOURCE_URL = "https://www.logisticsmgmt.com"
    BASE_URL = "https://www.logisticsmgmt.com"

    def get_article_urls(self):
        """Obtiene todas las URLs de noticias de la página de últimas noticias."""
        print("Obteniendo URLs de noticias de Logistics Management...")
        url = f"{self.BASE_URL}/latest"
        soup = self.get_soup(url)
        if not soup:
            return []

        urls = []
        # Buscar enlaces con "/article/" en el href
        links = soup.find_all('a', href=True)
        for link in links:
            href = link['href']
            if '/article/' in href:
                full_url = f"{self.BASE_URL}{href}"
                if full_url not in urls:
                    urls.append(full_url)
                    print(f"URL encontrada: {full_url}")

        return urls

    def scrape_article(self, url):
        """Extrae la información de una noticia específica."""
        print(f"Procesando artículo: {url}")
        soup = self.get_soup(url)
        if not soup:
            return None

        try:
            # Título
            title_elem = soup.find('h1', {'class': 'head', 'itemprop': 'headline'})
            title = title_elem.find('span', {'itemprop': 'name'}).text.strip() if title_elem else ''

            # Fecha
            date_elem = soup.find('span', {'itemprop': 'datePublished'})
            date_str = date_elem.get('content', '').strip() if date_elem else ''
            date = self.parse_date(date_str)

            # Filtrar por rango de fecha (últimos 7 días)
            seven_days_ago = timezone.now() - timedelta(days=7)
            if date < seven_days_ago:
                print(f"Noticia omitida por fecha ({date} fuera del rango de 7 días).")
                return None

            # Autor
            author_elem = soup.find('span', {'itemprop': 'author'})
            author_link = author_elem.find('a') if author_elem else None
            author = author_link.text.strip() if author_link else "Desconocido"

            # Imagen
            image_elem = soup.find('div', {'class': 'image', 'itemtype': 'https://schema.org/ImageObject'})
            img_tag = image_elem.find('img') if image_elem else None
            image_url = img_tag['src'] if img_tag else None

            # Contenido
            content_container = soup.find('div', {'class': 'minimum-body-height'})
            paragraphs = content_container.find_all('p') if content_container else []
            description = ' '.join([p.get_text(strip=True) for p in paragraphs])

            if not title or not description:
                print(f"Artículo incompleto: {url}")
                return None

            return {
                'title': title,
                'description': description,
                'date': date,
                'source_url': url,
                'image_url': image_url,
                'source': self.SOURCE_NAME,
                'source_website': self.SOURCE_URL,
                'author': author
            }

        except Exception as e:
            print(f"Error procesando artículo {url}: {str(e)}")
            return None

    def parse_date(self, date_str):
        """Convierte la fecha en formato ISO 8601 (YYYY-MM-DD) a un objeto datetime consciente de la zona horaria."""
        try:
            naive_date = datetime.strptime(date_str, "%Y-%m-%d")
            return make_aware(naive_date)  # Hacer la fecha consciente de la zona horaria
        except Exception as e:
            print(f"Error parseando fecha: {str(e)}")
            return timezone.now()  # Devuelve la fecha y hora actual si falla

    def scrape(self):
        """Proceso principal del scraper."""
        news_list = []
        titles_seen = set()  # Conjunto para evitar duplicados de títulos

        urls = self.get_article_urls()
        print(f"Se encontraron {len(urls)} URLs de noticias en {self.SOURCE_NAME}")

        for url in urls:
            article_data = self.scrape_article(url)
            if article_data:
                title = article_data['title']
                if title in titles_seen:
                    print(f"Noticia omitida por título duplicado: {title}")
                    continue
                titles_seen.add(title)

                print(f"Artículo procesado: {title}")
                news_list.append(article_data)

        return news_list

class TheLogisticsWorldScraper(NewsScraperBase):
    SOURCE_NAME = "The Logistics World"
    SOURCE_URL = "https://thelogisticsworld.com/"

    def get_article_urls(self):
        """Obtiene todas las URLs de noticias de la página principal"""
        print("Obteniendo URLs de noticias de The Logistics World...")
        soup = self.get_soup(self.SOURCE_URL)
        if not soup:
            return []

        urls = []
        # Encontrar todos los contenedores de noticias
        news_containers = soup.find_all('div', class_='noticia__texto__contenedor')
        for container in news_containers:
            link = container.find('a', class_='noticia__titulo__link')
            if link and link.get('href'):
                url = link['href']
                urls.append(url)
                print(f"URL encontrada: {url}")

        return urls

    def scrape(self):
        """Proceso principal de scraping"""
        news_list = []

        # Paso 1: Obtener URLs de noticias
        urls = self.get_article_urls()
        print(f"Se encontraron {len(urls)} URLs de noticias en The Logistics World")

        # Paso 2: Procesar cada noticia
        for url in urls:
            article_data = self.scrape_article(url)
            if article_data:
                news_list.append(article_data)

        return news_list

    def scrape_article(self, url):
        """Extrae la información de una noticia específica"""
        print(f"Procesando artículo: {url}")
        soup = self.get_soup(url)
        if not soup:
            return None

        try:
            # Obtener título
            title_elem = soup.find('header', class_='entry-header').find('h1', class_='entry-title')
            title = self.clean_text(title_elem.text) if title_elem else ''

            # Obtener fecha
            date_elem = soup.find('header', class_='entry-header').find('div', class_='meta__fecha')
            date_text = date_elem.text.strip() if date_elem else ''
            date = self.parse_date_logisticsworld(date_text) if date_text else now()

            # Filtrar por rango de fecha (últimos 7 días)
            seven_days_ago = now() - timedelta(days=7)
            if date < seven_days_ago:
                print(f"Noticia omitida por fecha ({date} fuera del rango de 7 días).")
                return None

            # Obtener autor
            author_elem = soup.find('header', class_='entry-header').find('a', class_='meta__autor')
            author = self.clean_text(author_elem.text) if author_elem else ''

            # Obtener imagen
            image_url = None
            image_container = soup.find('div', class_='entry__imagen')
            if image_container:
                img_tag = image_container.find('img')
                if img_tag:
                    image_url = img_tag.get('data-full-url')
            print(f"URL de imagen encontrada: {image_url}")  # Debug

            # Obtener contenido
            content_container = soup.find('div', class_='entry-content')
            description = ''
            if content_container:
                paragraphs = content_container.find_all('p')
                description = ' '.join([self.clean_text(p.text) for p in paragraphs])

            return {
                'title': title,
                'description': description,
                'date': date,
                'source_url': url,
                'image_url': image_url,
                'source': self.SOURCE_NAME,
                'source_website': self.SOURCE_URL,
                'author': author
            }
        except Exception as e:
            print(f"Error procesando artículo {url}: {str(e)}")
            return None

    def parse_date_logisticsworld(self, date_str):
        """Convierte la fecha del formato '6 de diciembre de 2024' a objeto datetime"""
        try:
            # Diccionario para convertir nombres de meses en español a números
            months_es = {
                'enero': '1', 'febrero': '2', 'marzo': '3', 'abril': '4',
                'mayo': '5', 'junio': '6', 'julio': '7', 'agosto': '8',
                'septiembre': '9', 'octubre': '10', 'noviembre': '11', 'diciembre': '12'
            }

            # Limpiar y separar la fecha
            date_parts = date_str.lower().replace('de', '').strip().split()
            day, month, year = date_parts[0], months_es[date_parts[1]], date_parts[2]

            # Crear objeto datetime
            naive_date = datetime.strptime(f"{year}-{month}-{day}", "%Y-%m-%d")
            return make_aware(naive_date)
        except Exception as e:
            print(f"Error parseando fecha: {str(e)}")
            return now()  # Devuelve la fecha y hora actual si falla
        
class NewsScraperManager:
    def __init__(self):
        self.scrapers = [
            RevistaLogistecScraper(),
            Logistica360Scraper(),  # Agregamos el nuevo scraper
            LogistaPeScraper(),
            LogisticsMgmtScraper(),
            TheLogisticsWorldScraper(),
        ]

    def scrape_all(self):
        all_news = []
        for scraper in self.scrapers:
            try:
                print(f"Ejecutando scraper: {scraper.__class__.__name__}")  # Debug
                news = scraper.scrape()
                all_news.extend(news)
            except Exception as e:
                print(f"Error en scraper {scraper.__class__.__name__}: {str(e)}")  # Debug
                logger.error(f"Error with scraper {scraper.__class__.__name__}: {str(e)}")
        
        return all_news

    def save_news(self, news_items):
        saved_count = 0
        for item in news_items:
            try:
                if not News.objects.filter(source_url=item['source_url']).exists():
                    # Crear la noticia con el nuevo campo source
                    news = News.objects.create(
                        title=item['title'],
                        description=item['description'],
                        date=item['date'],
                        source_url=item['source_url'],
                        source=item['source'],  # Agregamos la fuente
                        source_website=item['source_website'],
                        author=item.get('author', ''),  # Usando get para manejar casos donde no hay autor
                        is_scraped=True,
                        is_published=False
                    )

                    # Manejar la imagen si existe
                    if item.get('image_url'):
                        try:
                            response = requests.get(item['image_url'])
                            if response.status_code == 200:
                                from django.core.files.base import ContentFile
                                image_name = item['image_url'].split('/')[-1]
                                news.image.save(
                                    image_name,
                                    ContentFile(response.content),
                                    save=True
                                )
                        except Exception as e:
                            print(f"Error guardando imagen: {str(e)}")

                    saved_count += 1
            except Exception as e:
                print(f"Error guardando noticia: {str(e)}")
                logger.error(f"Error saving news item: {str(e)}")
        
        print(f"Noticias guardadas: {saved_count}")