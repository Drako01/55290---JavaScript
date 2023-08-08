const d = document // Guardo el objeto document en una constante
const cuerpo = d.body // Guardo el objeto body en una constante
cuerpo.style.backgroundColor = '#222' // Cambio el color de fondo del body
const cabeza = document.head
const titulo = document.createElement('title')
const cabecera = document.getElementById('header')
const banner = titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo)
const fotter = document.querySelector('#p-footer');
const anio = new Date().getFullYear();
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy; CoderHouse | JavaScript | ${banner} | ${anio}</a>`

// Operadores y condicionales avanzados II

// const personas = ["Alejandro", "Diego", "Pedro", "Andrea", "Silvia"]

// console.log(...personas)

// const numeros = [ 1, 2, 55, 32, 75, 0, 21, 8]

// console.log( Math.max(1, 2, 55, 32, 75, 0, 21, 8))

// console.log( Math.max(...numeros))
// console.log(...numeros)

const personas1 = ["Alejandro", "Diego"]
const personas2 = ["Pedro", "Andrea", "Silvia"]

// console.log(personas1, personas2)

// console.log(...personas1, ...personas2) //3ro

// console.log(personas1.concat(personas2)) //4to

const personas = [...personas1, ...personas2]

// console.log(personas)

const personasObjeto = {
    ...personas
}

// console.log(personasObjeto)

const productos = {
    nombre: "Azucar",
    precio: 750,
    categoria: "Almacen"
}
// console.log('productos: ', productos)
const stock = {
    ...productos,
    stock: 20,
    tienda: "Alejandro"
}


// console.log('stock: ', stock)

const alejandro = {
    ...stock,
    autor: "Yo",
    ...personasObjeto
}

// console.log('alejandro: ', alejandro)


/// Rest parameters

function suma(...numeros){
    return numeros.reduce((acumulador, num) => acumulador + num, 0)
}

// console.log(suma(1,2,3,4,8,5)) // 23

