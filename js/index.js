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
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy; CoderHouse | JavaScript | ${banner} | ${anio}</a>`

// Asincronía y Callbacks
// setTimeout

// console.log('Iniciamos el proceso') // 1er

// setTimeout(  /// Pide dos parametros - Una Funcion Callback y el Tiempo en Milisegundos
//     () =>{ // Defino funcion Callback
//     console.log('Continuemos el Proceso') // 2do // Lo ejecuta de forma Asincronica
// },
//     5000 // Tiempo = 5 seg
// )

// console.log('Fin del Proceso') // 3ro

// const btn = d.getElementById('btn')

// btn.addEventListener('click', () => {
//     setTimeout(() => {
//         alert('Me demore un poquito.!')
//     }, 2000)
// })

// const btn = document.querySelector('#btn')
// const popup = document.querySelector('#popup-mensaje')

// btn.addEventListener('click', () => {
//     popup.classList.add('popup-active')

//     setTimeout(() => {
//         popup.classList.remove('popup-active')
//     }, 2500)
// })


// for (let letra of "Hola") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

// for (let letra of "Mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }


// console.log('Iniciamos el proceso')

// setTimeout(() =>{
//     console.log('Continuemos el Proceso')
// }, 0)

// console.log('Fin del Proceso') 

// Call Stack o Pila de Ejecucion


// for (let letra of "Hola Coders.!") {
//     setTimeout(() => {
//         let fin = setInterval(() => {
//             console.log(letra)
//         }, 1000)
//         clearInterval(fin)
//     }, 1000)
//     // clearTimeout(fin)
// }
// let fin = setInterval(() => {
//     console.log('letra')
// }, 1000)
// clearInterval(fin)

// let contador = 0
// let intervalo = setInterval(() => {
//     contador++
//     console.log(contador)

//     if(contador >=10) {
//         clearInterval(intervalo)
//         console.log('Chau Intervalo:!')
//     }
// }, 1000)

/// Promesas

// new Promise( (resolve, reject) => { // Asi como se define
//    // Cuerpo de una Promesa
// })

// const promesa = (resuelta) => {
//     return new Promise( (resolve, reject) => { 
//         if(resuelta === true) {
//             resolve('Promesa Resulta!')
//         } else {
//             reject('Promesa Rechazada!')
//         }
//     })
// }

// console.log(promesa(true)) 
// console.log(promesa(false)) 

// promesa = (true)
//     .then((respuesta) => {
//         console.log(respuesta)
//     })
//     .catch((error) => {
//         console.log(error)
//     })

function cargarDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true
            if(exito){
                const datos = {mensaje: "Datos cargados exitosamente"}
                resolve(datos)
            } else {
                const error = new Error("Error al cargar los Datos")
                reject(error)
            }
        }, 1000)
    })
}

cargarDatos()
    .then(datos =>{
        console.log(datos.mensaje)
    })
    .catch(error => {
        console.error(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })
