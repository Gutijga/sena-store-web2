// Obtener elementos
var carrito = document.getElementById("carrito");
var cartDropdown = document.getElementById("cartDropdown");
var cartCount = document.getElementById("cart-count");
var cartItems = document.getElementById("cart-items");
var cartTotal = document.getElementById("cart-total");

let carritoCompras = []; // Array para almacenar los productos del carrito

// Función para agregar productos al carrito
function agregarAlCarrito(nombre, precio) {
    carritoCompras.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
}

// Actualizar la cantidad de productos y el total en el carrito
function actualizarCarrito() {
    let totalProductos = carritoCompras.length;
    let totalPrecio = carritoCompras.reduce((total, producto) => total + producto.precio, 0);

    // Actualizar la vista del dropdown
    cartCount.textContent = totalProductos;
    cartItems.textContent = 'Cantidad de productos: ' + totalProductos;
    cartTotal.textContent = 'Precio total: $' + totalPrecio;
}

// Mostrar el contenido desplegable del carrito al hacer clic en el carrito
carrito.addEventListener("click", function(event) {
    event.stopPropagation();
    if (cartDropdown.style.display === "block") {
        cartDropdown.style.display = "none";
    } else {
        cartDropdown.style.display = "block";
    }
});

// Cerrar el contenido desplegable si se hace clic fuera del carrito
window.addEventListener("click", function(event) {
    if (!carrito.contains(event.target)) {
        cartDropdown.style.display = "none";
    }
});
