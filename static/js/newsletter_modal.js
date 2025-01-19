// E:\Desarrollo\MercadoLogisticoDev\Web\mercado_logistico\static\js\newsletter_modal.js
document.addEventListener('DOMContentLoaded', function() {
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

    // Manejar el envío del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const rubrosSelect = document.getElementById('rubros');
        const rubrosSeleccionados = Array.from(rubrosSelect.selectedOptions).map(option => option.value);

        if (rubrosSeleccionados.length === 0) {
            messageDiv.textContent = 'Por favor, selecciona al menos un rubro de interés';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
            return;
        }

        const formData = {
            nombre: document.getElementById('nombre').value,
            apellidos: document.getElementById('apellidos').value,
            empresa: document.getElementById('empresa').value,
            rol: document.getElementById('rol').value,
            correo: document.getElementById('correo').value,
            rubros_interes: rubrosSeleccionados,
            pais: document.getElementById('pais').value,
            ciudad: document.getElementById('ciudad').value,
            sector: document.getElementById('sector').value
        };

        // Mostrar spinner antes de enviar
        showSpinner();

        fetch('/api/newsletter-subscription/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json().then(data => ({ status: response.status, data })))
        .then(({status, data}) => {
            hideSpinner(); // Ocultar spinner después de recibir respuesta
            
            if (status === 201) {
                messageDiv.textContent = '¡Gracias por suscribirte! Te hemos enviado un correo de confirmación.';
                messageDiv.className = 'message success';
                setTimeout(closeModal, 5000);
            } else {
                if (data.error && data.error.includes('ya está suscrito')) {
                    messageDiv.textContent = 'Este correo ya está suscrito al newsletter.';
                } else {
                    messageDiv.textContent = 'Ocurrió un error. Por favor, intenta nuevamente.';
                }
                messageDiv.className = 'message error';
            }
            messageDiv.style.display = 'block';
        })
        .catch(error => {
            hideSpinner(); // Ocultar spinner en caso de error
            console.error('Error:', error);
            messageDiv.textContent = 'Ocurrió un error. Por favor, intenta nuevamente.';
            messageDiv.className = 'message error';
            messageDiv.style.display = 'block';
        });
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