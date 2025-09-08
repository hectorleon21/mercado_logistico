import random
from datetime import datetime, timedelta
from django.core.management.base import BaseCommand
from django.utils import timezone
from django.utils.timezone import now
from logistics.models import Requirement, Proposal

class Command(BaseCommand):
    help = 'Genera datos de prueba para los modelos Requirement y Proposal'

    def add_arguments(self, parser):
        parser.add_argument('--requirements', type=int, default=16, help='Número de requerimientos a crear')
        parser.add_argument('--proposals', type=int, default=16, help='Número de propuestas a crear')

    def handle(self, *args, **options):
        num_requirements = options['requirements']
        num_proposals = options['proposals']
        
        # Datos de ejemplo para generar contenido aleatorio
        empresas = [
            'Logística Express', 'Trans Global', 'Cargo Master', 'Supply Chain Solutions',
            'Distribuciones Rápidas', 'Logística Integral', 'Transportes Unidos', 'GeoLogistics',
            'Fast Delivery', 'Worldwide Cargo', 'National Logistics', 'Transporte Seguro',
            'Almacenes Modernos', 'Rutas Eficientes', 'Operadora Logística', 'Distribución Total',
            'Envíos Rápidos', 'Consorcio Logístico', 'Grupo Transportador', 'Servicios Integrales'
        ]
        
        titulos_req = [
            'Necesitamos operador logístico', 'Buscamos servicio de transporte', 'Requerimos almacenaje temporal',
            'Urgente: Distribución de productos', 'Necesitamos asesoría en cadena de suministro',
            'Buscamos proveedor de embalaje', 'Se requiere servicio de importación', 'Necesitamos gestión de inventario',
            'Requerimos transporte de carga pesada', 'Buscamos solución para última milla', 
            'Necesitamos servicio de picking y packing', 'Requerimos cross-docking urgente',
            'Licitación para transporte refrigerado', 'Buscamos optimización de rutas', 
            'Necesitamos análisis de cadena de suministro', 'Requerimos servicio de fulfillment',
            'Buscamos auditoría logística', 'Necesitamos gestión de devoluciones',
            'Requerimos sistema de trazabilidad', 'Se necesita servicio de courier internacional'
        ]
        
        titulos_prop = [
            'Ofrecemos servicios de transporte', 'Disponemos de almacén para renta', 'Servicio de distribución nacional',
            'Soluciones de última milla', 'Asesoría en cadena de suministro', 'Gestión integral de logística',
            'Servicios de importación y exportación', 'Sistema avanzado de inventario', 'Transporte multimodal disponible',
            'Plataforma e-commerce integrada', 'Servicio profesional de picking', 'Cross-docking eficiente',
            'Transporte refrigerado certificado', 'Software de optimización de rutas', 'Consultoria supply chain',
            'Servicio completo de fulfillment', 'Auditoría de procesos logísticos', 'Gestión de retornos y devoluciones',
            'Implementación de trazabilidad', 'Red de courier internacional'
        ]
        
        descripciones_req = [
            'Nuestra empresa necesita contratar un operador logístico confiable para gestionar la distribución de nuestros productos a nivel nacional. Buscamos experiencia en el sector retail y capacidad para manejar volúmenes variables.',
            'Requerimos servicio de transporte para nuestra mercancía. Se necesita disponibilidad inmediata y vehículos en buen estado. El servicio debe incluir seguimiento en tiempo real.',
            'Buscamos almacenaje temporal para nuestros productos durante la temporada alta. Necesitamos aproximadamente 1000 m² con seguridad 24/7 y control de temperatura.',
            'Necesitamos un servicio completo de distribución para nuestra cadena de tiendas. El proveedor debe tener experiencia en retail y capacidad para entregas programadas.',
            'Requerimos asesoría especializada para optimizar nuestra cadena de suministro. Buscamos consultores con experiencia en nuestro sector que puedan identificar áreas de mejora.',
            'Estamos buscando proveedores de materiales de embalaje sustentables que cumplan con nuestros estándares de calidad y compromiso ambiental.',
            'Necesitamos contratar servicios de importación para nuestros insumos desde Asia. Se requiere experiencia en trámites aduaneros y logística internacional.',
            'Buscamos implementar un sistema de gestión de inventarios eficiente. Necesitamos un proveedor que pueda integrar su solución con nuestro ERP actual.',
            'Requerimos servicio de transporte especial para maquinaria pesada. Los equipos pesan entre 5 y 20 toneladas y necesitan manipulación especializada.',
            'Estamos interesados en mejorar nuestro servicio de última milla. Buscamos proveedores innovadores con soluciones tecnológicas de seguimiento.',
            'Necesitamos contratar servicios de picking y packing para nuestro e-commerce. El volumen es de aproximadamente 500 pedidos diarios con picos estacionales.',
            'Buscamos servicio de cross-docking para optimizar nuestra red de distribución. Necesitamos instalaciones estratégicamente ubicadas cerca de las principales ciudades.',
            'Abrimos licitación para servicio de transporte refrigerado para nuestra línea de productos perecederos. Se requiere mantener la cadena de frío entre 2°C y 8°C.',
            'Necesitamos implementar un sistema de optimización de rutas para nuestra flota. Buscamos soluciones que integren datos de tráfico en tiempo real.',
            'Requerimos un análisis completo de nuestra cadena de suministro. Buscamos identificar cuellos de botella y oportunidades de mejora en nuestros procesos.',
            'Estamos buscando un proveedor de servicios de fulfillment para nuestro canal de venta online. Necesitamos capacidad de integración con nuestra plataforma e-commerce.'
        ]
        
        descripciones_prop = [
            'Ofrecemos servicios integrales de transporte con cobertura nacional. Contamos con una flota moderna y sistema de seguimiento GPS. Nuestros conductores están altamente capacitados para garantizar entregas seguras y puntuales.',
            'Disponemos de 5000 m² de almacenamiento con diferentes configuraciones según sus necesidades. Nuestras instalaciones cuentan con seguridad 24/7, control de temperatura y humedad, y sistemas automáticos contra incendios.',
            'Nuestra empresa brinda servicios de distribución con cobertura en todo el país. Contamos con centros de distribución estratégicamente ubicados que nos permiten ofrecer tiempos de entrega competitivos y costos optimizados.',
            'Somos especialistas en soluciones de última milla con tecnología de punta. Nuestro sistema permite seguimiento en tiempo real, comunicación directa con el cliente final y flexibilidad en horarios de entrega.',
            'Ofrecemos consultoría especializada en cadena de suministro. Nuestro equipo de expertos puede ayudarle a optimizar sus procesos, reducir costos y mejorar los niveles de servicio a través de análisis exhaustivos.',
            'Brindamos gestión logística integral que incluye almacenaje, transporte, distribución y gestión de inventarios. Adaptamos nuestros servicios a las necesidades específicas de su negocio.',
            'Somos expertos en comercio internacional con más de 15 años de experiencia. Ofrecemos servicios completos de importación y exportación, incluyendo gestión aduanera y transporte internacional.',
            'Nuestro sistema de gestión de inventarios le permite tener control total sobre sus existencias. Utilizamos tecnología de punta con lectores RFID y sistemas WMS que se integran fácilmente con su ERP.',
            'Contamos con equipos especializados para transporte multimodal. Podemos gestionar carga de diferentes características y dimensiones utilizando la combinación más eficiente de medios de transporte.',
            'Nuestra plataforma e-commerce se integra perfectamente con sus sistemas actuales, ofreciendo una experiencia fluida tanto para su empresa como para sus clientes finales.',
            'Ofrecemos servicios profesionales de picking con alta precisión. Nuestro sistema reduce los errores a menos del 0.1% y optimiza los tiempos de preparación de pedidos.',
            'Disponemos de instalaciones diseñadas específicamente para operaciones de cross-docking. Nuestra ubicación estratégica y procesos eficientes permiten reducir los tiempos de tránsito.',
            'Contamos con una flota de vehículos refrigerados con certificación ATP. Mantenemos estrictos controles de temperatura y disponemos de registros en tiempo real para garantizar la integridad de sus productos.',
            'Nuestro software de optimización de rutas incorpora múltiples variables como tráfico, restricciones vehiculares y ventanas horarias para generar las rutas más eficientes para su operación.',
            'Ofrecemos servicios de consultoría en supply chain management. Nuestro enfoque se basa en análisis de datos para identificar oportunidades de mejora y desarrollar soluciones a medida.',
            'Nuestro servicio de fulfillment incluye recepción, almacenamiento, empaque y envío de sus productos. Contamos con integración nativa con las principales plataformas de e-commerce del mercado.'
        ]
        
        telefonos = ['945123456', '987654321', '912345678', '923456789', '934567890', '956789012', '967890123', '978901234']
        dominios = ['gmail.com', 'outlook.com', 'yahoo.com', 'hotmail.com', 'empresa.com', 'logistica.com', 'transport.com']
        
        # Generar requerimientos
        total_reqs_created = 0
        for i in range(num_requirements):
            try:
                empresa = random.choice(empresas)
                titulo = random.choice(titulos_req)
                descripcion = random.choice(descripciones_req)
                telefono = random.choice(telefonos)
                email = f"contacto_{random.randint(100, 999)}@{random.choice(dominios)}"
                
                # Fecha de validez entre 1-6 meses en el futuro
                dias_validez = random.randint(30, 180)
                valid_until = (timezone.now() + timedelta(days=dias_validez)).date()
                
                # Fecha de creación entre 1-30 días en el pasado
                dias_creacion = random.randint(1, 30)
                created_at = timezone.now() - timedelta(days=dias_creacion)
                
                req = Requirement(
                    company=empresa,
                    title=titulo,
                    description=descripcion,
                    phone=telefono,
                    email=email,
                    valid_until=valid_until,
                    is_active=True,
                    created_at=created_at
                )
                req.save(force_insert=True)
                total_reqs_created += 1
                
                self.stdout.write(f"Creado requerimiento: {titulo} - {empresa}")
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error al crear requerimiento: {str(e)}"))
        
        # Generar propuestas
        total_props_created = 0
        for i in range(num_proposals):
            try:
                empresa = random.choice(empresas)
                titulo = random.choice(titulos_prop)
                descripcion = random.choice(descripciones_prop)
                telefono = random.choice(telefonos)
                email = f"ventas_{random.randint(100, 999)}@{random.choice(dominios)}"
                
                # Fecha de validez entre 1-6 meses en el futuro
                dias_validez = random.randint(30, 180)
                valid_until = (timezone.now() + timedelta(days=dias_validez)).date()
                
                # Fecha de creación entre 1-30 días en el pasado
                dias_creacion = random.randint(1, 30)
                created_at = timezone.now() - timedelta(days=dias_creacion)
                
                prop = Proposal(
                    company=empresa,
                    title=titulo,
                    description=descripcion,
                    phone=telefono,
                    email=email,
                    valid_until=valid_until,
                    is_active=True,
                    created_at=created_at
                )
                prop.save(force_insert=True)
                total_props_created += 1
                
                self.stdout.write(f"Creada propuesta: {titulo} - {empresa}")
            except Exception as e:
                self.stdout.write(self.style.ERROR(f"Error al crear propuesta: {str(e)}"))
        
        self.stdout.write(self.style.SUCCESS(f'Generados {total_reqs_created} requerimientos y {total_props_created} propuestas exitosamente')) 