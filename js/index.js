// console.log(Math.E)
// console.log(Math.PI)

// const arrayNumber = [ 1, 2 , 5, 56 , 9]

// console.log(Math.max( 1, 2 , 5, 56 , 9))

// console.log(Math.min( 1, 2 , -5, 56 , 9))

// console.log(Math.max( 1, 2 , 5, Infinity, 56 , 9))

// console.log(Math.min( 1, 2 , -5, -Infinity, 56 , 9))

const pi = Math.PI

const po = 6.76565565656235653235532358656323

// console.log(pi)
// // Devolver el 1er Entero mayor 
// console.log( Math.ceil(pi)) // 4
// console.log( Math.ceil(po)) // 7

// //  Devuelve el entero sin decimales
// console.log( Math.floor(pi))
// console.log( Math.floor(po))

// Retorna un valor redondeado
// console.log( Math.round(pi))
// console.log( Math.round(po)) 

// const raizCuadrada = 164 ** (1/2) // Calcular Raices cuadras a la vieja usanza

// console.log(raizCuadrada)

// // Usando Math:
// console.log(Math.sqrt(16)) // 4
// console.log(Math.sqrt(0)) // 0
// console.log(Math.sqrt(1)) // 1
// console.log(Math.sqrt(-16)) // NaN

// console.log( Math.random() )
// console.log( Math.random() )
// console.log( Math.random() )
// console.log( Math.random() )
// console.log( Math.random() )
// console.log( Math.random() )
// console.log( Math.random() )


// console.log( Math.random() * 10 ) // De 0 a 10

// console.log( Math.random() * 100 )
// console.log( Math.random() * 50 )
// console.log( Math.random() * 10 + 5 )

// Clase Date

// const diaDeHoy = new Date()
//console.log(diaDeHoy)

// console.log(new Date(1992, 1, 22)) // Los meses los toma de 0 a 11
// console.log(new Date(2023, 0, 1))
// console.log(new Date(2023, 11, 24, 23, 59, 59)) // 1 Segundo antes de Navidad
// console.log( diaDeHoy.toDateString() ) 
// console.log( diaDeHoy.toLocaleString() ) 
// console.log( diaDeHoy.toLocaleDateString() )
// console.log( diaDeHoy.toTimeString() )

// console.log( "Copyright - CoderHouse - Todos los derechos reservados | Año " + diaDeHoy.getFullYear() ) // 2023
// console.log(diaDeHoy.getMonth()) // 6 = Julio
// console.log(diaDeHoy.getDay()) // 4 = Jueves

// const navidad = new Date(2023, 11, 25) // Habemus Navidad
// //console.log(navidad)

// console.log(navidad - diaDeHoy) // Nos da en Milisegundos

// const milisegundos = 1 * 24 * 60 * 60 * 1000 // 86400000 Milisegundos tiene 1 dia
// console.log(milisegundos)

// console.log((navidad - diaDeHoy) / milisegundos) // Cantidad de Dias

// console.log("Para Navidad faltan " + Math.round((navidad - diaDeHoy) / milisegundos) + " dias.!")

// obtener Jueves 20 de Julio del 2023 --- Hacer para la Clase que viene


const inicio = new Date() /// Momento instantaneo

for (let i = 0; i < 1000; i++) {
    console.log(" Consoles logs")
}

const final = new Date() /// Momento instantaneo

console.log("El proceso tardo: " + (final - inicio)/1000 + " Segundos")
