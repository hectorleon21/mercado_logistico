// E:\Desarrollo\MercadoLogisticoDev\Web\mercado_logistico\static\js\newsletter_modal.js
document.addEventListener('DOMContentLoaded', function() {
    // Verificar que todos los elementos existan en el DOM al cargar
    console.log("DOM cargado. Verificando elementos del newsletter...");
    
    const elementsToCheck = [
        'newsletterModal', 'newsletterForm', 'newsletterMessage', 
        'nombre', 'apellidos', 'empresa', 'rol', 'correo', 
        'pais', 'ciudad', 'sector', 'rubros'
    ];
    
    const missingElements = [];
    
    elementsToCheck.forEach(id => {
        const element = document.getElementById(id);
        console.log(`Elemento ${id}: ${element ? 'Encontrado' : 'NO ENCONTRADO'}`);
        if (!element) {
            missingElements.push(id);
        }
    });
    
    if (missingElements.length > 0) {
        console.error(`Elementos no encontrados: ${missingElements.join(', ')}`);
    } else {
        console.log("Todos los elementos del formulario fueron encontrados correctamente");
    }
    
    const modal = document.getElementById('newsletterModal');
    const form = document.getElementById('newsletterForm');
    const messageDiv = document.getElementById('newsletterMessage');
    const spinnerOverlay = document.querySelector('.spinner-overlay');
    const openButtons = document.querySelectorAll('.open-newsletter-modal');
    const closeButtons = document.querySelectorAll('.close-modal');

    // Función para abrir el modal
    function openModal() {
        modal.style.display = 'flex';
        modal.offsetHeight; // Forzar un reflow
        modal.classList.add('fade-in');
    }

    // Función para cerrar el modal
    function closeModal() {
        modal.classList.remove('fade-in');
        setTimeout(() => {
            modal.style.display = 'none';
            form.reset();
            messageDiv.style.display = 'none';
            messageDiv.className = 'message';
        }, 300);
    }

    // Función para mostrar el spinner
    function showSpinner() {
        spinnerOverlay.style.display = 'flex';
    }

    // Función para ocultar el spinner
    function hideSpinner() {
        spinnerOverlay.style.display = 'none';
    }

    // Asignar eventos a los botones
    openButtons.forEach(button => button.addEventListener('click', openModal));
    closeButtons.forEach(button => button.addEventListener('click', closeModal));

    // Cerrar modal al hacer clic fuera
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });

    // Función para validar el formulario
    function validateForm() {
        console.log("Iniciando validación del formulario");
        
        // Lista de campos obligatorios con sus IDs y elementos del DOM
        const requiredFields = [
            { id: 'nombre', label: 'Nombre', element: document.getElementById('nombre') },
            { id: 'apellidos', label: 'Apellidos', element: document.getElementById('apellidos') },
            { id: 'empresa', label: 'Empresa', element: document.getElementById('empresa') },
            { id: 'rol', label: 'Rol', element: document.getElementById('rol') },
            { id: 'correo', label: 'Correo', element: document.getElementById('correo') }
        ];

        // Depuración: inspeccionar todos los campos del formulario
        console.log("Inspección detallada de los campos del formulario:");
        document.querySelectorAll('#newsletterForm input, #newsletterForm select').forEach(el => {
            console.log(`Campo ${el.id || '[sin id]'} (${el.name || '[sin name]'}): "${el.value}" - tipo: ${el.type}`);
        });

        // Verificar cada campo
        const emptyFields = [];
        
        for (const field of requiredFields) {
            if (!field.element) {
                console.error(`El elemento con ID ${field.id} no existe en el DOM`);
                continue;
            }
            
            // Capturar el valor directamente
            let value = '';
            
            try {
                // Verificar que el campo exista y tenga una propiedad value
                if (field.element && 'value' in field.element) {
                    value = field.element.value;
                    // Eliminar espacios al inicio y al final
                    if (typeof value === 'string') {
                        value = value.trim();
                    }
                }
            } catch (e) {
                console.error(`Error al obtener valor de ${field.id}:`, e);
            }
            
            console.log(`Campo ${field.id}: "${value}" (${value.length} caracteres) - Tipo: ${typeof value}`);
            
            // Verificar si está vacío
            if (!value || value.length === 0) {
                emptyFields.push(field.label);
                // Resaltar visualmente el campo vacío
                field.element.style.borderColor = 'red';
                // Restaurar el borde cuando el usuario escriba algo
                field.element.addEventListener('input', function() {
                    this.style.borderColor = '';
                }, { once: true });
            }
        }

        // Verificar si hay campos vacíos
        if (emptyFields.length > 0) {
            const message = `Por favor, completa los siguientes campos obligatorios: ${emptyFields.join(', ')}`;
            messageDiv.textContent = message;
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            return false;
        }

        return true;
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log("Iniciando envío del formulario");
        
        // Solución simplificada para obtener los valores
        const formElement = document.getElementById('newsletterForm');
        
        // Verificar que el formulario exista
        if (!formElement) {
            console.error("Formulario no encontrado");
            messageDiv.textContent = 'Error interno: formulario no encontrado';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            return;
        }
        
        // Obtener valores directamente de los campos por su ID
        const nombreInput = document.getElementById('nombre');
        const apellidosInput = document.getElementById('apellidos');
        const empresaInput = document.getElementById('empresa');
        const rolInput = document.getElementById('rol');
        const correoInput = document.getElementById('correo');
        const paisInput = document.getElementById('pais');
        const ciudadInput = document.getElementById('ciudad');
        const sectorInput = document.getElementById('sector');
        const rubrosSelect = document.getElementById('rubros');
        
        // Pruebas de depuración para el campo nombre
        console.log("Input nombre:", nombreInput);
        if (nombreInput) {
            console.log("Valor de input nombre:", nombreInput.value);
            console.log("Valor de input nombre (trimmed):", nombreInput.value.trim());
            console.log("Longitud del valor:", nombreInput.value.length);
            console.log("Tipo de valor:", typeof nombreInput.value);
            console.log("HTML del input:", nombreInput.outerHTML);
            console.log("Atributos del input:", {
                id: nombreInput.id,
                name: nombreInput.name,
                value: nombreInput.value,
                type: nombreInput.type,
                required: nombreInput.required
            });
        }
        
        // Obtener valores con diferentes métodos
        const nombre = nombreInput ? nombreInput.value.trim() : '';
        const apellidos = apellidosInput ? apellidosInput.value.trim() : '';
        const empresa = empresaInput ? empresaInput.value.trim() : '';
        const rol = rolInput ? rolInput.value.trim() : '';
        const correo = correoInput ? correoInput.value.trim() : '';
        const pais = paisInput ? paisInput.value : '';
        const ciudad = ciudadInput ? ciudadInput.value.trim() : '';
        const sector = sectorInput ? sectorInput.value : '';
        
        // Obtener rubros seleccionados
        const rubrosSeleccionados = rubrosSelect ? 
            Array.from(rubrosSelect.selectedOptions).map(option => option.value) : [];
        
        // Verificación manual simple con más información de depuración
        console.log("Valor final del nombre:", nombre);
        console.log("¿Está vacío?", !nombre);
        
        // Asume que el nombre es válido si tiene algún contenido visible
        let nombreValid = false;
        try {
            nombreValid = (nombre && nombre.length > 0) || 
                          (nombreInput && nombreInput.value && nombreInput.value.length > 0);
        } catch (e) {
            console.error("Error al validar nombre:", e);
        }
        
        console.log("¿El nombre es válido?", nombreValid);
        
        if (!nombreValid) {
            messageDiv.textContent = 'Por favor, completa el campo Nombre';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            if (nombreInput) nombreInput.style.borderColor = 'red';
            return;
        }
        
        // Verificar empresa similar al nombre
        let empresaValid = false;
        try {
            empresaValid = (empresa && empresa.length > 0) || 
                           (empresaInput && empresaInput.value && empresaInput.value.length > 0);
        } catch (e) {
            console.error("Error al validar empresa:", e);
        }
        
        if (!empresaValid) {
            messageDiv.textContent = 'Por favor, completa el campo Empresa';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            if (empresaInput) empresaInput.style.borderColor = 'red';
            return;
        }
        
        if (!correo) {
            messageDiv.textContent = 'Por favor, completa el campo Correo';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            if (correoInput) correoInput.style.borderColor = 'red';
            return;
        }
        
        if (rubrosSeleccionados.length === 0) {
            messageDiv.textContent = 'Por favor, selecciona al menos un rubro de interés';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            return;
        }
        
        // Intentar obtener los valores directamente del DOM nuevamente
        const nombreValue = nombreInput ? nombreInput.value : '';
        const apellidosValue = apellidosInput ? apellidosInput.value : '';
        const empresaValue = empresaInput ? empresaInput.value : '';
        const rolValue = rolInput ? rolInput.value : '';
        const correoValue = correoInput ? correoInput.value : '';
        
        // Mostrar spinner
        showSpinner();
        
        // SOLUCIÓN ALTERNATIVA:
        // Crear un FormData directamente desde el elemento del formulario
        try {
            // Enviar datos como JSON
            fetch('/api/newsletter-subscription/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken')
                },
                body: JSON.stringify({
                    nombre: nombreValue || "Sin nombre", // Esto es un respaldo si el valor está vacío
                    apellidos: apellidosValue || "",
                    empresa: empresaValue || "Sin empresa", // Respaldo si está vacío
                    rol: rolValue || "",
                    correo: correoValue || "",
                    rubros_interes: rubrosSeleccionados,
                    pais: paisInput ? paisInput.value : '',
                    ciudad: ciudadInput ? ciudadInput.value : '',
                    sector: sectorInput ? sectorInput.value : ''
                })
            })
            .then(response => response.json().then(data => ({ status: response.status, data })))
            .then(({status, data}) => {
                hideSpinner(); // Ocultar spinner después de recibir respuesta
                
                console.log("Respuesta del servidor:", {status, data});
                
                if (status === 201) {
                    // Éxito - Suscripción registrada correctamente
                    messageDiv.textContent = '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.';
                    messageDiv.className = 'message success';
                    setTimeout(closeModal, 5000);
                } else {
                    // Error - Mostrar mensaje adecuado
                    console.error("Error en la suscripción:", data);
                    
                    if (data.error && data.error.includes('ya está suscrito')) {
                        messageDiv.textContent = 'Este correo ya está suscrito al newsletter.';
                    } else if (data.detalles) {
                        // Mostrar errores detallados del servidor
                        let errorMsg = 'Por favor, corrige los siguientes errores: ';
                        for (const [field, error] of Object.entries(data.detalles)) {
                            errorMsg += `${field} - ${error}. `;
                        }
                        messageDiv.textContent = errorMsg;
                    } else if (data.error) {
                        // Mostrar el mensaje de error específico del servidor
                        messageDiv.textContent = data.error;
                    } else if (data.valor_recibido) {
                        // Mostrar información de depuración
                        messageDiv.textContent = `Error: ${data.error}. Valor recibido: ${data.valor_recibido}`;
                    } else {
                        // Mensaje genérico
                        messageDiv.textContent = 'Ocurrió un error al procesar tu suscripción. Por favor, verifica los campos e intenta nuevamente.';
                    }
                    
                    messageDiv.className = 'message error';
                }
                messageDiv.style.display = 'block';
            })
            .catch(error => {
                hideSpinner(); // Ocultar spinner en caso de error
                console.error('Error en la petición:', error);
                messageDiv.textContent = 'Ocurrió un error en la comunicación con el servidor. Por favor, intenta nuevamente más tarde.';
                messageDiv.className = 'message error';
                messageDiv.style.display = 'block';
            });
        } catch (error) {
            console.error("Error al intentar enviar el formulario:", error);
            hideSpinner();
            messageDiv.textContent = 'Error interno al procesar el formulario. Por favor, intenta nuevamente.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
        }
    });

    // Función para obtener el token CSRF
    function getCookie(name) {
        let cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            const cookies = document.cookie.split(';');
            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i].trim();
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
});