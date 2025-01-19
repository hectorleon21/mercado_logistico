$(document).ready(function() {
    // Función que realiza la búsqueda AJAX
    function searchProviders(query) {
        $.ajax({
            url: providerListAjaxUrl,  // Asegúrate de que 'providerListAjaxUrl' esté bien definido
            data: {
                'q': query
            },
            dataType: 'json',
            success: function(data) {
                $('#provider-list-container').html(data.html);  // Actualiza la lista de proveedores
            }
        });
    }

    // Llamada AJAX cuando se presiona el botón de "Buscar"
    $('#search-button').on('click', function() {
        var query = $('#search-input').val();
        searchProviders(query);
    });

    // Llamada AJAX cuando se presiona la tecla Enter en el input
    $('#search-input').on('keypress', function(e) {
        if (e.which === 13) {  // 13 es el código de la tecla Enter
            e.preventDefault();  // Evita que se envíe el formulario al presionar Enter
            var query = $(this).val();
            searchProviders(query);
        }
    });
});
