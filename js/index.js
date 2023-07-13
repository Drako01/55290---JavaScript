// Arrays



let hola = "Hola" // length me cuenta la cantidad de caracteres del String

const arrayUno = [
    "Hola", "Como", "estan", "?"
] // length me cuenta la cantidad de elementos del Array

// console.log(arrayUno)
// console.log(arrayUno.length)
// console.log(hola.length)

const arrayDos = [
    1, 2, 3, 4, 5, 6, 6, 122, 5, 12, 7, 99, 12, 22, 5656
]

// console.log(arrayDos)

const arrayTres = [
    "Hola", 3, false, true, "Que tal"
]
// console.log(arrayTres)

// console.log(arrayUno[0]) // Me imprime "Hola"
// console.log(arrayUno[4]) // Cuando quiero acceder a un valor que no esta en el Array me da undefined

// console.log(arrayDos[6])

let resultado = arrayDos[2] + arrayDos[6] + arrayDos[7]
// console.log(resultado)

// for(let indice = 0; indice <= 8; indice++){
//     console.log(arrayDos[indice])
// }

// for(let indice = 0; indice < arrayDos.length; indice++){
//     console.log(arrayDos[indice])
// }

// for(let i = 0; i < 8; i++){
//     console.log(arrayUno[i])
// }

arrayUno.push("Mauricio")


// for(let i = 0; i < arrayUno.length; i++){
//     console.log(arrayUno[i])
// }

arrayUno.unshift("Primero") // Es muy peligroso el unshift, porque cambia todos los indices
arrayUno.unshift("Apagar la luz")



// arrayUno.shift() // Sirve para eliminar el 1er Elemento del Array
// arrayUno.pop() // sirve para eliminar el ultimo elemento del Array



arrayUno.splice(1,3) // Esto elimina varios elementos consecutivos del Array



// console.log(arrayUno)
// console.log(arrayUno[0])

// console.log( arrayUno.join(" "))

// console.log( arrayUno.join(" Chocolate "))

// console.log( arrayUno.join(""))

// console.log( arrayUno.join("******"))

const arrayCuatro = arrayUno.concat(arrayDos)

// console.log(arrayCuatro)

const arrayCinco = arrayCuatro.slice(5,12)
// console.log(arrayCinco)

// console.log(arrayCinco.indexOf(6))
// console.log(arrayCinco.indexOf(16))
// console.log(arrayUno)
// console.log(arrayUno.indexOf("Hola"))
// console.log(arrayUno.indexOf("?"))

// console.log(arrayCinco.includes(6))
// console.log(arrayCinco.includes(16))

// console.log(arrayUno.includes("Hola"))
// console.log(arrayUno.includes("?"))

arrayCinco.reverse() // Extremadamente Peligroso

// console.log(arrayCinco)

// Array con Objetos

const objeto1 = {
    id: 1,
    producto: "Manteca"
}
const objeto2 = {
    id: 2,
    producto: "Chocolate"
}

const arraySeis = [
    objeto1,
    objeto2,
    {
        id: 3,
        producto: "Sal"
    }
]

arraySeis.push(
    {
        id: 4,
        producto: "Azucar"
    },
    {
        id: 5,
        producto: "Huevos"
    }
)

// console.log(arraySeis)

// for ( const i of arraySeis ) {
//     console.log( i.id )
//     console.log( i.producto )
// }


// Uso de Clases

class Producto {
    constructor(id, nombre, precio) {
        this.id = id
        this.nombre = nombre.toUpperCase()
        this.precio = parseFloat(precio)
        this.stock = false
    }
    obtenerPrecio() {
        console.log("El precio del producto: " + this.nombre + " es:" + this.precio + "$ ARS")
    }
    obtenerStock() {
        if(this.stock === true) {
            console.log("hay Stock de: " + this.nombre)
        } else {
            console.log("No hay Stock de: " + this.nombre)
        }
    }
    calcularPrecioConIVA() {
        this.precio = this.precio * 1.21
    }
}

const productos = []

productos.push(
    new Producto(
        1,
        "Azucar",
        425.50,
    )
)
productos.push(
    new Producto(
        2,
        "Leche",
        525.50,
    )
)
productos.push(
    new Producto(
        3,
        "Maiz",
        125.50,
        true // Corregir
    )
)



console.log(productos)

for ( const prod of productos ) {
    prod.obtenerPrecio()
}

for ( const prod of productos ) {
    prod.obtenerStock()
}

for ( const prod of productos ) {
    console.log(prod.calcularPrecioConIVA()) // Corregir
}

