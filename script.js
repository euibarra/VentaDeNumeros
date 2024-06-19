// Espera a que el DOM esté completamente cargado antes de ejecutar el script
document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los elementos con la clase 'filter' y los almacena en 'filters'
    const filters = document.querySelectorAll('.filter');
    // Selecciona todos los elementos con la clase 'product' y los almacena en 'products'
    const products = document.querySelectorAll('.product');
    // Selecciona el botón con el id 'reset-button' y lo almacena en 'resetButton'
    const resetButton = document.getElementById('reset-button');
    
    // Función para aplicar los filtros seleccionados
    function applyFilters() {
        // Añade un event listener a cada filtro
        filters.forEach(function(filter) {
            filter.addEventListener('change', function() {
                // Array para almacenar los filtros seleccionados
                let selectedFilters = [];
                       
                // Recorre todos los filtros y añade los seleccionados al array 'selectedFilters'
                filters.forEach(function(f) {
                    if (f.checked) {
                        selectedFilters.push(f.getAttribute('data-filter'));
                    }
                });

                // Recorre todos los productos y muestra/oculta según los filtros seleccionados
                products.forEach(function(product) {
                    // Obtiene la categoría del producto
                    let productCategory = product.getAttribute('data-categoria');
                    // Variable para determinar si el producto es visible
                    let isVisible = false;

                    // Comprueba si el producto debe ser visible según los filtros seleccionados
                    selectedFilters.forEach(function(selectedFilter) {
                        if (selectedFilter === 'todos' || selectedFilter === productCategory) {
                            isVisible = true;
                        }
                    });

                    // Muestra u oculta el producto según el valor de 'isVisible'
                    if (isVisible) {
                        product.style.display = 'block';
                    } else {
                        product.style.display = 'none';
                    }
                });
            });
        });
    }

    // Función para resetear los filtros y mostrar todos los productos
    function resetFilters() {
        // Desmarca todos los filtros
        filters.forEach(function(filter) {
            filter.checked = false;
        });

        // Muestra todos los productos
        products.forEach(function(product) {
            product.style.display = 'block';
        });
    }

    // Event listener para el botón de resetear filtros
    resetButton.addEventListener('click', function() {
        resetFilters();
    });

    // Aplicar filtros por defecto al cargar la página
    applyFilters();
});