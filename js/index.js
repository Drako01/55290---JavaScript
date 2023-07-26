// const d = document
const cuerpo = document.body
const cabeza = document.head
const titulo = document.createElement('title')
const cabecera = document.getElementById('header')
const prueba = document.getElementById('prueba')
const h1 = document.createElement('h1')
const h2 = document.getElementsByTagName('H2')[0]
const logo = document.getElementsByClassName('logo')[0]
const producto = document.getElementById('producto')
const cantidad = document.getElementById('cantidad')
const inputProd = document.getElementById('inputProducto')
const inputCant = document.getElementById('inputCantidad')

/// console.log(h2.innerHTML)
titulo.innerText = 'Comisión #55290'
//h1.innerHTML = 'Hola Coders..!!!' // Agrego texto
h1.innerHTML = `<strong>Hola Coders..!!!</strong>
                    <p>Como estan????</p>
                ` // Backsticks => Introduce literalmente lo que le agregue


cabeza.appendChild(titulo) // Siempre lo agrega al final
prueba.appendChild(h1)
h1.style.color = 'red'
prueba.style.backgroundColor = '#191919'
//logo.style.backgroundColor = 'black'
cuerpo.style.backgroundColor = 'black'

prueba.remove()

producto.value = 'Harina'
producto.innerText = 'Producto'
cantidad.innerText = 'Cantidad'


producto.style.backgroundColor = 'yellow'

cantidad.style.backgroundColor = 'blue'
cantidad.style.color = 'white'
producto.style.padding = '.5rem 1rem'
cantidad.style.padding = '.5rem 1rem'

inputProd.value = 'Probando en inputProd.!!'
inputCant.value = 'Probando en inputCant.!!'
console.log(inputProd.value)
// cabecera

// const links = [ 'Home', 'Contact', 'Location' ]

// for ( const link of links) {
//     const li = document.createElement('li')
//     li.innerHTML = link
//     cabecera.appendChild(li)
// }

// const productos = {
//     id: 1,
//     nombre: 'Queso',
//     precio: 5000
// }

// const concatenado1 = "id: " + productos.id + " es el Producto: " + productos.nombre + " $" + productos.precio

// console.log(concatenado1)

// const concatenadoTemplateString = `Id: ${productos.id} es el Producto: ${productos.nombre} $${productos.precio}`
// console.log(concatenadoTemplateString)

// cabecera.innerHTML = `  <h1>Id: ${productos.id}</h1>
//                         <h3>Producto: ${productos.nombre} </h3>
//                         <h4>Precio: $${productos.precio}</h4>`

// const productos = [
//     {
//         id: 1,
//         nombre: 'Queso',
//         precio: 5000
//     },
//     {
//         id: 2,
//         nombre: 'harina',
//         precio: 650
//     },
//     {
//         id: 3,
//         nombre: 'Manteca',
//         precio: 1200
//     },
//     {
//         id: 4,
//         nombre: 'Leche',
//         precio: 550
//     }
// ]

// let ul = document.createElement('ul')

// productos.forEach((prod) =>{
//     ul.innerHTML += `<li><h1>Id: ${prod.id}</h1>
//     <h3>Producto: ${prod.nombre} </h3>
//     <h4>Precio: $${prod.precio}</h4>
//     </li>
//     `
// })
// cabecera.appendChild(ul)


// const coder = document.querySelector('#coderhouse')
const coders = document.querySelectorAll('.coderhouse')[0]
console.log(coders)