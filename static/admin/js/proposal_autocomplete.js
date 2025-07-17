(function($) {
    $(document).ready(function() {
        // Cuando el usuario selecciona un proveedor
        $('#id_company_search').on('change', function() {
            var providerId = $(this).val();
            if (providerId) {
                // Actualizar el campo oculto
                $('#id_provider_id').val(providerId);
                
                // Obtener los datos del proveedor
                $.ajax({
                    url: '/admin/get-provider-info/' + providerId + '/',
                    success: function(data) {
                        $('#id_company').val(data.name);
                        $('#id_phone').val(data.phone_number);
                        $('#id_email').val(data.email);
                    }
                });
            }
        });
    });
})(django.jQuery);