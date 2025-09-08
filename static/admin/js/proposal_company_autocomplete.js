(function($) {
    $(document).ready(function() {
        // Función para obtener los proveedores mediante AJAX
        function fetchProviders() {
            $.getJSON('/admin/get-providers-list/', function(data) {
                setupAutocomplete(data);
            });
        }

        // Configurar el autocompletado
        function setupAutocomplete(providers) {
            var providerNames = providers.map(function(provider) {
                return {
                    label: provider.name,
                    value: provider.name,
                    phone: provider.phone_number,
                    email: provider.email
                };
            });

            $('.autocomplete-company').autocomplete({
                source: providerNames,
                minLength: 2,
                select: function(event, ui) {
                    // Autocompletar los campos de teléfono y correo cuando se selecciona una empresa
                    $('#id_phone').val(ui.item.phone);
                    $('#id_email').val(ui.item.email);
                }
            });
        }

        // Iniciar el proceso
        fetchProviders();
    });
})(django.jQuery);