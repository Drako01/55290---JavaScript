const d = document // Guardo el objeto document en una constante
const cuerpo = d.body // Guardo el objeto body en una constante
cuerpo.style.backgroundColor = '#222' // Cambio el color de fondo del body
const cabeza = d.head
const titulo = d.createElement('title')
const cabecera = d.getElementById('header')
const banner = titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo)
const fotter = d.querySelector('#p-footer');
const anio = new Date().getFullYear();
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy CoderHouse | JavaScript | ${banner} | ${anio}</a>`

/// Async Await 
// Ejemplo Usando la API de Mercado Libre

const peticion = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
    const datos = await respuesta.json()
    const data = await datos.results
    console.log(data)
}
peticion()

const cards = d.getElementById('cards')

const peticion1 = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
    const datos = await respuesta.json()
    const data = await datos.results
    for (item of data) {
        const card = d.createElement('div')
        const productData = {
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.thumbnail
        };
        card.innerHTML = `
        <div class="card" style="width: 18rem; height: 33rem;">
        <img class="card-img-top" src=${item.thumbnail} alt=${item.title}>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p>${item.id}</p>
                <p class="card-text">Proveedor: ${item.official_store_name}</p>
                <p class="card-text">Precio: ${item.price}</p>
                <button class="btn btn-secondary" id="add-to-cart-btn" data-product='${JSON.stringify(productData)}'>Agregar al Carrito</button>
            </div>
        </div>            
        `
        const addToCartButton = card.querySelector('#add-to-cart-btn');
        addToCartButton.addEventListener('click', () => addToCart(productData));

        cards.append(card);
    }
}
peticion1()

const addToCart = (productData) => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    if (!cart.find(item => item.id === productData.id)) {
        cart.push(productData);
        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(`Producto con ID ${productData.id} agregado al carrito.`);
    } else {
        console.log(`El producto con ID ${productData.id} ya está en el carrito.`);
    }
};