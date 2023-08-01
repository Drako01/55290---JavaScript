// Ejercicios de Storage & JSON

// Ejercicio extra #2

// Generar 20 productos aleatorios y guardarlos en el localStorage
const productos = [];
function generarProductosJSON() {

    for (let i = 1; i <= 20; i++) {
        const producto = {
            id: i,
            nombre: `Producto ${i}`,
            precio: Math.floor(Math.random() * 100) + 1, // Precio entre 1 y 100 (números aleatorios)
            stock: Math.floor(Math.random() * 100), // Stock entre 0 y 100 (números aleatorios)
        };
        productos.push(producto);
    }    
}
generarProductosJSON();
const productosJSON = JSON.stringify(productos);

// Almacenar los productos en el localStorage
function guardarProductosEnLocalStorage(productos) {
    localStorage.setItem('productos', productos);
}
guardarProductosEnLocalStorage(productosJSON);