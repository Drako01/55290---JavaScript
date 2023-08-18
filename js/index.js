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
        const productId = item.id
        card.innerHTML = `
        <div class="card" style="width: 18rem; height: 33rem;">
        <img class="card-img-top" src=${item.thumbnail} alt=${item.title}>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p>${item.id}</p>
                <p class="card-text">Proveedor: ${item.official_store_name}</p>
                <p class="card-text">Precio: ${item.price}</p>
                <button class="btn btn-secondary" id="add-to-cart-btn" data-product-id="${productId}">Agregar al Carrito</button>
            </div>
        </div>            
        `
        const addToCardButton = card.querySelector('#add-to-cart-btn')
        addToCardButton.addEventListener('click', () => addToCard(productId))
        cards.append(card)
    }
}
peticion1()

const addToCard = (productId) => {
    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [] 
    if(!cart.includes(productId)) {
        cart.push(productId)
        localStorage.setItem('cart', JSON.stringify(cart))
        console.log(`El producto con id: ${productId} fue agregado!`)
    } else {
        console.log(`El producto con id: ${productId} No existe!`)
    }
}