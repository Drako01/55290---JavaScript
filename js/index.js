// // Recibe un parámetro y retorna una función
// function esMayorQue(numero) { // Función que retorna una función
//     return (mayor) => mayor > numero // Función anónima
// }

// let mayorQueNumero = esMayorQue(10) // mayorQueNumero es una función

// console.log( mayorQueNumero(12) )  // true
// console.log( mayorQueNumero(8) )  // false

// function asignarOperacion(op) { // Función que devuelve una función
//     if (op == "sumar") { // Si el parámetro es sumar
//         return (a, b) => a + b  // Devuelve una función que suma dos números
//     } else if (op == "restar") { // Si el parámetro es restar
//         return (a, b) => a - b // Devuelve una función que resta dos números
//     }
// }

// let suma = asignarOperacion("sumar")
// let resta = asignarOperacion("restar")

// console.log( suma(4, 6) )  
// console.log( resta(5, 3) )

// // Recibe función como parámetro

// function porCadaUno(myArray, myFuncion) {  // myFuncion es una función que recibe un elemento del array y hace algo con él 
//     for (const i of myArray) { // Recorre el array y por cada elemento i en myArray ejecuta la función myFuncion
//         myFuncion(i) // Ejecuta la función myFuncion con el elemento como parámetro
//     }
// }

// // Ejemplo de uso de la función porCadaUno
// const arrayNumeros= [1, 2, 3, 4, 5] // Array de números

// porCadaUno(arrayNumeros, console.log) // Imprime cada elemento del array

// let total = 0

// function acumular(numero) { // Función que suma los números
//     total += numero // Suma el número al total
// }

// porCadaUno(arrayNumeros, acumular) // Ejecuta la función acumular por cada elemento del array
// console.log(total)  // Imprime el total

// const numeroDuplicado = []

// porCadaUno(arrayNumeros, (num)=> { // Función que duplica los números
//     numeroDuplicado.push(num * 2) // Duplica el número y lo agrega al array duplicado
// })

// console.log(numeroDuplicado) // Imprime el array duplicado

// porCadaUno(numeroDuplicado, acumular)

// console.log(total)

// Metodo forEach()
// const arrayNumeros= [1, 2, 3, 4, 5, "Hola", "Mundo"]

// arrayNumeros.forEach((numero) => {console.log("Elemento: " + numero)})

// Metodo find()

// const productos = [
//     {
//         nombre: "Harina",
//         precio: 450
//     },
//     {
//         nombre: "Azucar",
//         precio: 620
//     }
// ]

// const busqueda1 = productos.find(
//     (siSu) => siSu.nombre === "Harina"
// )
// const busqueda2 = productos.find(
//     (siSu) => siSu.nombre === "Azucar"
// )
// const busqueda3 = productos.find(
//     (siSu) => siSu.precio < 600
// )
// const busqueda4 = productos.find(
//     (siSu) => siSu.precio < 100
// )

// console.log(busqueda1)
// console.log(busqueda2)
// console.log(busqueda3)
// console.log(busqueda4) // undefined


// Metodo filter()

// const productos = [
//     {
//         nombre: "Harina",
//         precio: 450
//     },
//     {
//         nombre: "Azucar",
//         precio: 620
//     },
//     {
//         nombre: "Queso",
//         precio: 5500
//     }
// ]

// const resultado1 = productos.filter(
//     (siSu) => siSu.nombre.includes('a') 
// )
// const resultado2 = productos.filter(
//     (siSu) => siSu.precio > 1000 
// )

// console.log(resultado1)
// console.log(resultado2)

// Metodo some()

// const resultado1 = productos.some(
//     (hayAlgun) => hayAlgun.nombre.includes('i')
// )

// const resultado2 = productos.some(
//     (hayAlgun) => hayAlgun.precio > 1000 
// )

// console.log(resultado1)
// console.log(resultado2)

// Metodo map()
// const productos = [
//     {
//         nombre: "Harina",
//         precio: 450
//     },
//     {
//         nombre: "Azucar",
//         precio: 620
//     },
//     {
//         nombre: "Queso",
//         precio: 5500
//     }
// ]

//console.log(productos)

// const nombres = productos.map( (soloEl) => soloEl.nombre )

// console.log(nombres)

// const actualizarPrecios = productos.map(
//     (si) => {
//         return {
//             nombre: si.nombre,
//             precio: si.precio * 1.30
//         }
//     }

// )

// console.log(actualizarPrecios)

// Metodo reduce()

const arrayNumeros = [1, 2, 3, 4, 5]

const total = arrayNumeros.reduce((ac, el) => ac + el, 0) 

console.log(total)

// Metodo sort()

//const arrayNumeros = [21, 2, 35, 14, 125, 1, 80, 15]

//arrayNumeros.sort((a, b) => a - b )
//arrayNumeros.sort((a, b) => b - a)

// console.log(arrayNumeros)

