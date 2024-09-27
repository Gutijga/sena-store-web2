let totalProductos = 0;
let carrito = [];

// Función para incrementar la cantidad de productos
function incremento(cantidadId, totalId, precio) {
    let cantidad = document.getElementById(cantidadId);
    let total = document.getElementById(totalId);

    let nuevaCantidad = parseInt(cantidad.textContent) + 1;
    cantidad.textContent = nuevaCantidad;
    total.textContent = '$' + (nuevaCantidad * precio);
}

// Función para decrementar la cantidad de productos
function decremento(cantidadId, totalId, precio) {
    let cantidad = document.getElementById(cantidadId);
    let total = document.getElementById(totalId);

    let nuevaCantidad = Math.max(0, parseInt(cantidad.textContent) - 1);
    cantidad.textContent = nuevaCantidad;
    total.textContent = '$' + (nuevaCantidad * precio);
}

// Función para agregar productos al carrito
function agregarAlCarrito(cantidadId, precio, nombreProducto) {
    let cantidad = parseInt(document.getElementById(cantidadId).textContent);
    
    if (cantidad > 0) {
        totalProductos += cantidad;
        document.getElementById('cart-count').textContent = totalProductos;

        // Guardamos el producto en el carrito
        let producto = {
            nombre: nombreProducto,
            cantidad: cantidad,
            precio: precio * cantidad
        };
        carrito.push(producto);

        // Guardar carrito y cantidad total en sessionStorage
        sessionStorage.setItem('carrito', JSON.stringify(carrito));
        sessionStorage.setItem('cartCount', totalProductos);

        // Reseteamos la cantidad a 0 después de agregar
        document.getElementById(cantidadId).textContent = 0;

        // Actualizamos el contenido del carrito desplegable
        actualizarCarrito();
    }
}

// Función para actualizar el contenido del carrito
function actualizarCarrito() {
    const cartItemsElement = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    let totalPrecio = 0;
    let cartHTML = '';

    carrito.forEach((producto, index) => {
        // Crear HTML para cada producto en bloques separados
        cartHTML += `
            <div style="margin-bottom: 15px;">
                <strong>${index + 1}. ${producto.nombre}</strong><br>
                <span>Cantidad: ${producto.cantidad}</span><br>
                <span>Precio: $${producto.precio}</span>
            </div>
        `;
        totalPrecio += producto.precio;  // Sumar al total
    });

    cartItemsElement.innerHTML = cartHTML;

    // Mostrar el precio total
    cartTotalElement.textContent = 'Precio total: $' + totalPrecio;

    // Actualizar las variables globales
    totalProductos = carrito.reduce((sum, producto) => sum + producto.cantidad, 0);
    document.getElementById('cart-count').textContent = totalProductos;
}

// Función para cargar el carrito desde sessionStorage al iniciar
function cargarCarrito() {
    // Verifica si ya hay productos en el carrito (guardados en sessionStorage)
    let carritoGuardado = sessionStorage.getItem('carrito');
    let cantidadGuardada = sessionStorage.getItem('cartCount');
    
    // Si existe, actualiza el carrito y la cantidad
    if (carritoGuardado && cantidadGuardada) {
        carrito = JSON.parse(carritoGuardado);
        totalProductos = parseInt(cantidadGuardada);
        document.getElementById('cart-count').textContent = totalProductos;
        actualizarCarrito(); // Actualizar el contenido visual del carrito
    } else {
        document.getElementById('cart-count').textContent = 0;
    }
}

// Ejecutar cargarCarrito cuando la página se cargue
window.onload = cargarCarrito;
