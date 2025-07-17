(function($) {
    $(document).ready(function() {
        // Función que se ejecuta cuando cambia el selector de proveedor
        function updateContactInfo() {
            var providerId = $('#id_provider').val();
            if (providerId) {
                // Realizar una petición AJAX para obtener los datos del proveedor
                $.getJSON('/admin/get-provider-info/' + providerId + '/', function(data) {
                    // Rellenar automáticamente los campos con la información del proveedor
                    $('#id_company').val(data.name);
                    $('#id_phone').val(data.phone_number);
                    $('#id_email').val(data.email);
                });
            }
        }

        // Vincular la función al evento change del selector de proveedor
        $('#id_provider').change(updateContactInfo);
        
        // También actualizar al cargar la página, por si ya hay un proveedor seleccionado
        updateContactInfo();
    });
})(django.jQuery);