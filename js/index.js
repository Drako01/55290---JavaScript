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

// Operadores y condicionales avanzados
// Sugar sintax
// Operador ++
// let num = 0

// num++

// console.log(num)

// Operador Ternario

// let stock = 10

// if ( stock > 0 ) {
//     console.log("Hay Stock.!")
// } else {
//     console.log("No hay Stock.!!")
// }

// condicion ? casoVerdadero : casoFalso

// stock > 0 ? console.log("Hay Stock.!") : console.log("No hay Stock.!!")

// const producto = { // Defino un objeto
//     nombre: "Azucar",
//     precio: 750,
//     stock: 0
// }

// const validar = (producto.stock > 0 ) ? true : false

// validar ? console.log("Hay Stock.!") : console.log("No hay Stock.!!")

// producto.stock > 0  ? console.log("Hay Stock.!") : console.log("No hay Stock.!!")

// Operador Logico AND &&

// const carrito = [1] // Carrito lleno
// const carrito = [] // Carrito vacio

// carrito.length === 0 && console.log("El carrito esta vacio.!")

// const persona = {
//     nombre: "Dylan",
//     apellido: "Seligmann",
//     edad: 28
// }

// const apto = persona.edad >= 18 && console.log("Es apto")

// Operador Logico OR ||

// console.log( 0 || "Hola") // Debe ser distinto de 0
// console.log( 10 || "Hola") // Imprime el 10
// console.log( null || "Hola") // Distinto de null
// console.log(undefined || "Hola") // Distinto de undefined
// console.log("Hola mundo!!" || "Hola") // Recibe String - Imprime el String
// console.log("" || "Hola") // El string no debe estar vacio
// console.log(NaN || "Hola") // Debe ser distinto a NaN
// console.log(true || "Hola") // Imprime el true
// console.log(false || "Hola") // Debe ser distinto de false

// console.log('\n') // Imprime renglo vacio o salto de linea

// const persona1 = {
//     nombre: "Dylan",
//     apellido: "Seligmann",
//     edad: 28
// }

// const persona2 = null // No existe

// console.log( persona1 || "La persona no existe.!")

// console.log( persona2 || "La persona no existe.!!")

// const carrito = {
//     id: 1,
//     nombre: "Azucar",
//     precio: 750
// } // Esta guardado en el localStorage

// let cart

// localStorage.setItem('Carrito', JSON.stringify(carrito)) 

// let verifique = JSON.parse( localStorage.getItem('Carrito'))
// console.log(verifique)

// if ( verifique ) {
//     cart = verifique
// } else {
//     cart = []
// }

// const cart = JSON.parse(localStorage.getItem('Carrito')) || []

// console.log(cart)

// Operador logico Nullish

// console.log( 0 ?? "Hola") 
// console.log( 10 ?? "Hola")
// console.log( null ?? "Hola") // Imprime Hola
// console.log(undefined ?? "Hola")  // Imprime Hola
// console.log("Hola mundo!!" ?? "Hola") 
// console.log("" ?? "Hola")
// console.log(NaN ?? "Hola") 
// console.log(true ?? "Hola") 
// console.log(false ?? "Hola") 

// Acceso condicional a un Objeto

// const persona1 = {
//     nombre: "Dylan",
//     apellido: "Seligmann",
//     edad: 28,
//     estudios: {
//         primario: 'Completo',
//         secundario: 'Completo',
//         terciario: 'Incompleto'
//     }
// }

// console.log( persona1?.estudios?.primario || "No Existe")

// console.log( persona1?.estudios?.universitarios || "No existe")


/// Desestructuracion

// const alumno = {
//     nombre: "Dylan",
//     apellido: "Seligmann",
//     edad: 28,
//     estudios: {
//         primario: 'Completo',
//         secundario: 'Completo',
//         terciario: 'Incompleto'
//     }
// }

// console.log(alumno.nombre, alumno.apellido)
// let nombre = alumno.nombre
// let apellido = alumno.apellido
// console.log(nombre, apellido)

// const { nombre, apellido, estudios: { primario, secundario } } = alumno // Desestructuro los datos del Objeto


// console.log(`Nombre completo: ${nombre} ${apellido} - Nivel Primario: ${primario} y Nivel Secundario: ${secundario}`)

// Alias

// const producto = {
//     prod_id: 1,
//     prod_name: "Azucar",
//     prod_price: 750
// }

// Aplico Alias

// const {
//     prod_id: id,
//     prod_name: nombre,
//     prod_price: precio
// } = producto

// console.log(id, nombre, precio)

// const alumno = {
//     nombre: "Dylan",
//     apellido: "Seligmann",
//     edad: 28,
//     estudios: {
//         primario: 'Completo',
//         secundario: 'Completo',
//         terciario: 'Incompleto'
//     }
// }

// const {
//     nombre: names,
//     apellido: last_name,
//     edad: age,
//     estudios: {
//         primario: primary,
//         secundario: secondary,
//         terciario: terciary
//     }

// } = alumno

// console.log(`Nombre completo: ${names} ${last_name} - 
// Nivel Primario: ${primary} y Nivel Secundario: ${secondary}`)

// Desestructuracion en Parametros

// const producto = {
//     prod_id: 2,
//     prod_name: "Azucar",
//     prod_price: 752
// }

// const desestructurar = (param) => { // Funcion para desestructurar un objeto
//     const { prod_id, prod_name } = param
//     console.log( prod_id, prod_name)
// }

// desestructurar(producto)

// const desestructurar = ( {prod_id, prod_name } ) => {
//     console.log( prod_id, prod_name)
// }

// desestructurar(producto)


// window.addEventListener('click', ({x,y}) =>{
//     console.log(x,y)
// })

// Desestructuracion de Arrays

// const array = ["Alejandro", "Lucas", "Dylan", "Jose"]
// console.error(array)
// // const [ , , a , b ] = array

// // console.log( a, b )

// const arrayA = { ...a } = array // Spread Operator
// console.log(arrayA) // No trae los indices de los elementos del Array

// const arrayB = { ...array }
// console.warn(arrayB)// Viene con los indices de los elementos del Array

// let num = 0

// num++
// console.log(num)

let variable = 2

variable > 10 ? console.log("Es mayor a 10") : console.log("No es mayor a 10")
