document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM para los filtros
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const modalidadSelect = document.getElementById('modalidad-select');
    const institucionSelect = document.getElementById('institucion-select');
    const fechaInicio = document.getElementById('fecha-inicio');
    const precioSlider = document.getElementById('precio-slider');
    const precioRangeChecks = document.querySelectorAll('.precio-range-check');
    const tematicaChecks = document.querySelectorAll('.tematica-check');
    const btnAplicar = document.querySelector('.btn-aplicar');
    const btnLimpiar = document.querySelector('.btn-limpiar');
    const toggleMoreFilters = document.getElementById('toggle-more-filters');
    const courseListContainer = document.getElementById('course-list-container');
    const tipoEstudioStats = document.querySelectorAll('.tipo-estudio-stats .stat-item');
    const calendarioContainer = document.getElementById('calendario-container');

    // Estado de los filtros
    let activeFilters = {
        search: '',
        courseType: '',
        topicCodes: [],
        modalidad: '',
        institucion: '',
        fechaInicio: '',
        precioMin: 0,
        precioMax: 5000,
        precioRanges: [],
        usePrecioMaxOnly: false
    };

    // Inicializar variables de fecha
    const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    const ahora = new Date();
    let currentMonth = ahora.getMonth();
    let currentYear = ahora.getFullYear();
    
    // Nombres cortos de los días en español (empezando por Lunes)
    const dayNames = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"];

    // Función para cargar cursos con AJAX
    function loadCourses() {
        // Construir URL con parámetros de filtros
        let url = new URL(window.location.origin + window.location.pathname);
        
        // Añadir parámetros de búsqueda
        if (activeFilters.search) {
            url.searchParams.append('q', activeFilters.search);
        }
        
        // Añadir tipo de curso
        if (activeFilters.courseType) {
            url.searchParams.append('type', activeFilters.courseType);
        }
        
        // Añadir modalidad
        if (activeFilters.modalidad && activeFilters.modalidad !== 'todas') {
            url.searchParams.append('modality', activeFilters.modalidad);
        }
        
        // Añadir institución
        if (activeFilters.institucion && activeFilters.institucion !== 'todas') {
            url.searchParams.append('institution_type', activeFilters.institucion);
        }
        
        // Añadir fecha
        if (activeFilters.fechaInicio) {
            url.searchParams.append('start_date', activeFilters.fechaInicio);
        }
        
        // Añadir precio - ahora manejar múltiples rangos
        if (activeFilters.precioRanges && activeFilters.precioRanges.length > 0) {
            // Si hay rangos seleccionados, enviarlos serializados
            url.searchParams.append('price_ranges', JSON.stringify(activeFilters.precioRanges));
        } else if (activeFilters.usePrecioMaxOnly && activeFilters.precioMax < 5000) {
            // Si se usó el slider
            url.searchParams.append('price_min', 0);
            url.searchParams.append('price_max', activeFilters.precioMax);
        }
        
        // Añadir temáticas (códigos de temas)
        if (activeFilters.topicCodes.length > 0) {
            url.searchParams.append('service', activeFilters.topicCodes.join(','));
        }

        // Mostrar indicador de carga
        courseListContainer.innerHTML = '<div class="loading-indicator">Cargando cursos...</div>';
        
        // Realizar petición AJAX
        fetch(url, {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Verificar si el HTML ya contiene la estructura de cuadrícula
            let coursesHTML = data.courses_html;
            if (coursesHTML.indexOf('<div class="cursos-grid">') === -1) {
                // Si no tiene la estructura de cuadrícula, envolverlo
                coursesHTML = '<div class="cursos-grid">' + coursesHTML + '</div>';
            }
            
            // Actualizar el contenido manteniendo la estructura
            courseListContainer.innerHTML = coursesHTML;
            
            // Actualizar la paginación si existe
            const paginationContainer = document.querySelector('.pagination-container');
            if (paginationContainer && data.pagination_html) {
                paginationContainer.innerHTML = data.pagination_html;
            }
            
            // Actualizar contador de resultados
            document.querySelector('.stats-values').textContent = data.total_courses + ' cursos disponibles';
            
            // Actualizar la URL sin recargar la página
            history.pushState(activeFilters, '', url);
        })
        .catch(error => {
            console.error('Error al cargar los cursos:', error);
            courseListContainer.innerHTML = '<div class="error">Error al cargar los cursos. Por favor, intenta de nuevo.</div>';
        });
    }

    // Event Listeners
    
    // Buscar al hacer clic en el botón o presionar Enter
    searchButton.addEventListener('click', function() {
        activeFilters.search = searchInput.value.trim();
        loadCourses();
    });
    
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            activeFilters.search = searchInput.value.trim();
            loadCourses();
        }
    });
    
    // Filtrar por tipo de estudio
    tipoEstudioStats.forEach(item => {
        item.addEventListener('click', function() {
            const statLabel = this.querySelector('.stat-label').textContent.trim();
            
            // Desactivar selección anterior
            tipoEstudioStats.forEach(i => i.classList.remove('active'));
            this.classList.add('active');
            
            // Establecer el tipo de curso
            if (statLabel === 'Todos') {
                activeFilters.courseType = '';
            } else if (statLabel === 'Maestría') {
                activeFilters.courseType = 'MA';
            } else if (statLabel === 'Diplomado') {
                activeFilters.courseType = 'DI';
            } else if (statLabel === 'Especialización') {
                activeFilters.courseType = 'ES';
            } else if (statLabel === 'Webinar') {
                activeFilters.courseType = 'WE';
            }
            
            loadCourses();
        });
    });
    
    // Filtrar por modalidad
    modalidadSelect.addEventListener('change', function() {
        const modalidadValue = this.value;
        
        if (modalidadValue === 'presencial') {
            activeFilters.modalidad = 'PR';
        } else if (modalidadValue === 'semipresencial-sinc') {
            activeFilters.modalidad = 'SS';
        } else if (modalidadValue === 'semipresencial-asinc') {
            activeFilters.modalidad = 'SA';
        } else if (modalidadValue === 'online-sinc') {
            activeFilters.modalidad = 'OS';
        } else if (modalidadValue === 'online-asinc') {
            activeFilters.modalidad = 'OA';
        } else if (modalidadValue === 'online') {
            activeFilters.modalidad = 'ON';
        } else {
            activeFilters.modalidad = '';
        }
        
        loadCourses();
    });
    
    // Filtrar por institución
    institucionSelect.addEventListener('change', function() {
        const institucionValue = this.value;
        
        if (institucionValue === 'universidad') {
            activeFilters.institucion = 'UN';
        } else if (institucionValue === 'instituto') {
            activeFilters.institucion = 'IS';
        } else if (institucionValue === 'escuela') {
            activeFilters.institucion = 'EP';
        } else if (institucionValue === 'centro') {
            activeFilters.institucion = 'CC';
        } else {
            activeFilters.institucion = '';
        }
        
        loadCourses();
    });
    
    // IMPLEMENTACIÓN DEL CALENDARIO
    // Mostrar/ocultar el calendario al hacer clic en el campo de fecha
    fechaInicio.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (calendarioContainer.style.display === 'block') {
            calendarioContainer.style.display = 'none';
        } else {
            // Generar el selector de mes con el año actual y mes actual como punto de partida
            generarSelectorMes(currentMonth, currentYear);
            calendarioContainer.style.display = 'block';
        }
    });
    
    // Cerrar el calendario al hacer clic fuera de él
    document.addEventListener('click', function(e) {
        if (calendarioContainer.style.display === 'block' && 
            !calendarioContainer.contains(e.target) && 
            e.target !== fechaInicio) {
            calendarioContainer.style.display = 'none';
        }
    });
    
    // Función para generar el selector de mes
    function generarSelectorMes(mes, año) {
        // Limpiar el contenedor
        calendarioContainer.innerHTML = '';
        
        // Crear encabezado del calendario
        const header = document.createElement('div');
        header.className = 'calendario-header';
        
        const mesAnio = document.createElement('div');
        mesAnio.className = 'mes-anio';
        mesAnio.textContent = año;
        
        const navMes = document.createElement('div');
        navMes.className = 'nav-mes';
        
        // Obtener mes y año actuales
        const ahora = new Date();
        const mesActual = ahora.getMonth();
        const añoActual = ahora.getFullYear();
        
        // Sólo permitir retroceder si no estamos en el año actual
        if (año > añoActual) {
            const prevMes = document.createElement('div');
            prevMes.className = 'prev-mes';
            prevMes.innerHTML = '&lt;';
            prevMes.addEventListener('click', function(e) {
                // Evitar propagación para que no se cierre el calendario
                e.stopPropagation();
                // Ir al año anterior
                currentYear = año - 1;
                generarSelectorMes(0, currentYear);
            });
            navMes.appendChild(prevMes);
        }
        
        const nextMes = document.createElement('div');
        nextMes.className = 'next-mes';
        nextMes.innerHTML = '&gt;';
        nextMes.addEventListener('click', function(e) {
            // Evitar propagación para que no se cierre el calendario
            e.stopPropagation();
            // Ir al año siguiente
            currentYear = año + 1;
            generarSelectorMes(0, currentYear);
        });
        navMes.appendChild(nextMes);
        
        header.appendChild(mesAnio);
        header.appendChild(navMes);
        calendarioContainer.appendChild(header);
        
        // Crear grid de 4x3 para mostrar los meses
        const gridMeses = document.createElement('div');
        gridMeses.className = 'grid-meses';
        gridMeses.style.display = 'grid';
        gridMeses.style.gridTemplateColumns = 'repeat(3, 1fr)';
        gridMeses.style.gap = '10px';
        gridMeses.style.padding = '15px';
        
        // Agregar los meses disponibles (todos para años futuros, solo meses actuales y futuros para año actual)
        for (let i = 0; i < 12; i++) {
            // Si estamos en el año actual, solo mostrar meses actuales o futuros
            if (año === añoActual && i < mesActual) {
                continue;
            }
            
            const mesElement = document.createElement('div');
            mesElement.className = 'mes-item';
            mesElement.style.padding = '8px';
            mesElement.style.textAlign = 'center';
            mesElement.style.borderRadius = '4px';
            mesElement.style.backgroundColor = (i === mes && año === currentYear) ? '#0099cc' : '#f5f7f9';
            mesElement.style.color = (i === mes && año === currentYear) ? 'white' : '#333';
            mesElement.style.fontWeight = (i === mes && año === currentYear) ? 'bold' : 'normal';
            mesElement.style.cursor = 'pointer';
            mesElement.style.transition = 'all 0.2s ease';
            mesElement.textContent = monthNames[i];
            
            // Efecto hover
            mesElement.addEventListener('mouseenter', function() {
                if (!(i === mes && año === currentYear)) {
                    this.style.backgroundColor = '#e0e0e0';
                }
            });
            
            mesElement.addEventListener('mouseleave', function() {
                if (!(i === mes && año === currentYear)) {
                    this.style.backgroundColor = '#f5f7f9';
                }
            });
            
            mesElement.addEventListener('click', function(e) {
                // Evitar propagación para que no se cierre el calendario antes de tiempo
                e.stopPropagation();
                seleccionarMes(i, año);
            });
            
            gridMeses.appendChild(mesElement);
        }
        
        // Agregar la grilla al contenedor
        calendarioContainer.appendChild(gridMeses);
    }
    
    // Función para seleccionar un mes
    function seleccionarMes(mes, año) {
        // Actualizar el valor del campo con el mes y año seleccionados
        fechaInicio.value = monthNames[mes] + ' ' + año;
        
        // Ocultar el calendario
        calendarioContainer.style.display = 'none';
        
        // Actualizar los filtros activos con el formato YYYY-MM para el backend
        const mesFormateado = (mes + 1).toString().padStart(2, '0');
        activeFilters.fechaInicio = `${año}-${mesFormateado}`;
        
        // Actualizar valores actuales
        currentMonth = mes;
        currentYear = año;
        
        // Cargar los cursos con el nuevo filtro
        loadCourses();
    }
    
    // Filtrar por temática
    tematicaChecks.forEach(check => {
        check.addEventListener('change', function() {
            const topicCode = this.dataset.topicCode;
            const topicName = this.dataset.topicName;
            
            if (this.checked) {
                // Añadir a la lista si no está
                if (!activeFilters.topicCodes.includes(topicCode)) {
                    activeFilters.topicCodes.push(topicCode);
                }
            } else {
                // Eliminar de la lista
                activeFilters.topicCodes = activeFilters.topicCodes.filter(code => code !== topicCode);
            }
            
            // Cargar cursos con los nuevos filtros
            loadCourses();
        });
    });
    
    // Filtrar por precio (checkboxes de rangos)
    precioRangeChecks.forEach(check => {
        check.addEventListener('change', function() {
            // Definir el rango seleccionado
            const id = this.id;
            let rango = {};
            
            if (id === 'precio-1') {
                rango = {min: 0, max: 500};
            } else if (id === 'precio-2') {
                rango = {min: 500, max: 1000};
            } else if (id === 'precio-3') {
                rango = {min: 1000, max: 2000};
            } else if (id === 'precio-4') {
                rango = {min: 2000, max: 3500};
            } else if (id === 'precio-5') {
                rango = {min: 3500, max: 10000};
            }
            
            if (this.checked) {
                // Añadir el rango a la lista si no existe
                activeFilters.precioRanges.push(rango);
            } else {
                // Eliminar el rango de la lista
                activeFilters.precioRanges = activeFilters.precioRanges.filter(r => 
                    !(r.min === rango.min && r.max === rango.max)
                );
            }
            
            // Cargar cursos con los nuevos filtros
            loadCourses();
        });
    });
    
    // Manejar cambios en el slider de precio
    precioSlider.addEventListener('input', function() {
        // Actualizar el valor mostrado
        const precioActual = parseInt(this.value);
        const precioActualElemento = document.getElementById('precio-actual-valor');
        precioActualElemento.textContent = `S/ ${precioActual}`;
        
        // Calcular la posición del indicador
        const porcentaje = (precioActual / 5000) * 100;
        const rangeWidth = this.offsetWidth;
        const thumbOffset = (rangeWidth * porcentaje) / 100;
        
        // La posición incluye un ajuste para centrar el indicador en el círculo del slider
        precioActualElemento.style.left = `calc(${porcentaje}% - ${10}px)`;
        
        // Actualizar solo el precio máximo cuando se mueve el slider
        activeFilters.precioMax = parseInt(this.value);
        
        // Si se ha movido el slider, usar el valor directo y no los rangos
        activeFilters.usePrecioMaxOnly = true;
        
        // Desmarcar todos los checkboxes de rangos predefinidos
        precioRangeChecks.forEach(cb => cb.checked = false);
        activeFilters.precioRanges = [];
    });
    
    precioSlider.addEventListener('change', function() {
        // Cargar cursos cuando el usuario suelta el slider
        loadCourses();
    });
    
    // Aplicar filtros al hacer clic en el botón
    btnAplicar.addEventListener('click', function() {
        loadCourses();
    });
    
    // Limpiar todos los filtros
    btnLimpiar.addEventListener('click', function() {
        // Resetear todos los controles de la interfaz
        searchInput.value = '';
        modalidadSelect.value = 'todas';
        institucionSelect.value = 'todas';
        fechaInicio.value = '';
        precioSlider.value = 5000;
        
        // Desmarcar todos los checkboxes
        precioRangeChecks.forEach(check => check.checked = false);
        tematicaChecks.forEach(check => check.checked = false);
        
        // Resetear filtros activos
        activeFilters = {
            search: '',
            courseType: '',
            topicCodes: [],
            modalidad: '',
            institucion: '',
            fechaInicio: '',
            precioMin: 0,
            precioMax: 5000,
            precioRanges: [],
            usePrecioMaxOnly: false
        };
        
        // Actualizar el indicador del slider de precio
        const precioActualElemento = document.getElementById('precio-actual-valor');
        if (precioActualElemento) {
            precioActualElemento.textContent = 'S/ 5000';
            precioActualElemento.style.left = 'calc(100% - 10px)';
        }
        
        // Recargar cursos
        loadCourses();
    });
    
    // Toggle para mostrar/ocultar los filtros
    toggleMoreFilters.addEventListener('click', function(e) {
        e.preventDefault();
        const filtrosCard = document.querySelector('.filtros-card');
        
        // Controlar la visibilidad de la tarjeta de filtros
        if (filtrosCard.style.display === 'none') {
            filtrosCard.style.display = 'block';
            this.innerHTML = 'Ver menos filtros <i class="fas fa-chevron-up"></i>';
        } else {
            filtrosCard.style.display = 'none';
            this.innerHTML = 'Ver más filtros <i class="fas fa-chevron-down"></i>';
        }
    });
    
    // Inicializar con valores de la URL si existen
    function initFromURL() {
        const params = new URLSearchParams(window.location.search);
        
        if (params.has('q')) {
            searchInput.value = params.get('q');
            activeFilters.search = params.get('q');
        }
        
        if (params.has('type')) {
            activeFilters.courseType = params.get('type');
            // Seleccionar visualmente el tipo correspondiente
            tipoEstudioStats.forEach(item => {
                const statLabel = item.querySelector('.stat-label').textContent.trim();
                if ((statLabel === 'Maestría' && activeFilters.courseType === 'MA') ||
                    (statLabel === 'Diplomado' && activeFilters.courseType === 'DI') ||
                    (statLabel === 'Especialización' && activeFilters.courseType === 'ES') ||
                    (statLabel === 'Curso Corto' && activeFilters.courseType === 'CC') ||
                    (statLabel === 'Webinar' && activeFilters.courseType === 'WE') ||
                    (statLabel === 'Seminario' && activeFilters.courseType === 'SE')) {
                    item.classList.add('active');
                }
            });
        }
        
        if (params.has('modality')) {
            const modality = params.get('modality');
            activeFilters.modalidad = modality;
            
            if (modality === 'PR') modalidadSelect.value = 'presencial';
            else if (modality === 'SS') modalidadSelect.value = 'semipresencial-sinc';
            else if (modality === 'SA') modalidadSelect.value = 'semipresencial-asinc';
            else if (modality === 'OS') modalidadSelect.value = 'online-sinc';
            else if (modality === 'OA') modalidadSelect.value = 'online-asinc';
            else if (modality === 'ON') modalidadSelect.value = 'online';
        }
        
        if (params.has('institution_type')) {
            const instType = params.get('institution_type');
            activeFilters.institucion = instType;
            
            if (instType === 'UN') institucionSelect.value = 'universidad';
            else if (instType === 'IS') institucionSelect.value = 'instituto';
            else if (instType === 'EP') institucionSelect.value = 'escuela';
            else if (instType === 'CC') institucionSelect.value = 'centro';
        }
        
        if (params.has('start_date')) {
            const startDate = params.get('start_date');
            activeFilters.fechaInicio = startDate;
            
            // Convertir formato YYYY-MM a nombre del mes y año
            if (startDate && startDate.includes('-')) {
                const partes = startDate.split('-');
                if (partes.length >= 2) {
                    const año = parseInt(partes[0]);
                    // Los meses en JavaScript son 0-indexed, pero en la URL son 1-indexed
                    const mes = parseInt(partes[1]) - 1;
                    
                    if (!isNaN(año) && !isNaN(mes) && mes >= 0 && mes < 12) {
                        // Actualizar los valores actuales
                        currentMonth = mes;
                        currentYear = año;
                        fechaInicio.value = `${monthNames[mes]} ${año}`;
                    }
                }
            }
        }
        
        if (params.has('service')) {
            const services = params.get('service').split(',');
            activeFilters.topicCodes = services;
            
            // Marcar los checkboxes correspondientes
            tematicaChecks.forEach(check => {
                if (services.includes(check.dataset.topicCode)) {
                    check.checked = true;
                }
            });
        }
    }
    
    // Inicializar
    initFromURL();

    // Inicializar posición del indicador
    function inicializarIndicadorPrecio() {
        const precioActual = parseInt(precioSlider.value);
        const precioActualElemento = document.getElementById('precio-actual-valor');
        
        if (precioActualElemento) {
            precioActualElemento.textContent = `S/ ${precioActual}`;
            
            // Calcular la posición inicial del indicador
            const porcentaje = (precioActual / 5000) * 100;
            precioActualElemento.style.left = `calc(${porcentaje}% - ${10}px)`;
        }
    }
    
    // Ejecutar inicialización cuando se carga la página
    inicializarIndicadorPrecio();
    
    // Inicializar el estado de visibilidad de los filtros
    const filtrosCard = document.querySelector('.filtros-card');
    if (filtrosCard && toggleMoreFilters) {
        // Asegurarse de que se muestre inicialmente
        filtrosCard.style.display = 'block';
        toggleMoreFilters.innerHTML = 'Ver menos filtros <i class="fas fa-chevron-up"></i>';
    }
}); 