// let nombre = "Alejandro"
// let apellido = "Delgado"
// let edad = 39
// let pais = "Argentina"

// console.log(nombre)


// Definimos el Objeto persona
// const persona = {
//     nombre: "Alejandro",
//     apellido: "Delgado",
//     edad: 39,
//     pais: "Argentina"
// }

// console.log(persona.nombre)
// console.log(persona.apellido)

// const persona1 = {
//     nombre: "Mariana",
//     apellido: "Perez",
//     edad: 30,
//     pais: "Uruguay"
// }
// console.error(persona1)
//console.log(persona1.edad)

//console.log(persona["pais"])

// persona1.nombre = "Leticia"

//console.log(persona1.nombre)

// console.warn(persona)
// console.warn(persona1)

// Definimos una Funcion Constructora
// function Persona(nombre, apellido, edad, pais) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
// }

// const persona = new Persona("Alejandro", 
//                     "Delgado", 
//                     39, 
//                     "Argentina"
//                     )

// console.log(persona)

// const persona1 = new Persona("Nicolas", 
//                     "Tomatis", 
//                     31, 
//                     "Argentina"
//                     )

// console.log(persona1)

// Otra forma de Definir un Objeto
// function Persona(objeto) {
//     this.nombre = objeto.nombre
//     this.apellido = objeto.apellido
//     this.edad = objeto.edad
//     this.pais = objeto.pais
// }

// const persona1 = new Persona( // Nueva INSTANCIA de Persona
//     {
//         nombre: "Nicolas",
//         apellido: "Tomatis",
//         edad: 31,
//         pais: "Argentina"
//     }
// )
// const persona2 = new Persona(
//     {
//         nombre: "Diego",
//         apellido: "Torres",
//         edad: 50,
//         pais: "Argentina"
//     }
// )
// const persona3 = new Persona(
//     {
//         nombre: "Nicolas",
//         apellido: "Tomatis",
//         edad: 31,
//         pais: "Argentina"
//     }
// )
// const persona4 = new Persona(
//     {
//         nombre: "Lionel",
//         apellido: "Messi",
//         edad: 36,
//         pais: "Argentina"
//     }
// )
// console.log(persona1, persona2, persona3)
// console.error(persona4)

// function Auto(objeto){ // Me pide un Objeto
//     this.chasis = objeto.chasis
//     this.motor = objeto.motor
//     this.color = objeto.color
//     this.marca = objeto.marca
// }

// const auto1 = new Auto(
//     {
//         chasis: 155665232355,
//         motor: 1.6,
//         marca: "Ford",
//         color: "Azul"        
//     }
// )

// // console.log(auto1)

// function Persona(nombre, apellido, pais, edad) {
//     this.nombre = nombre
//     this.apellido = apellido
//     this.edad = edad
//     this.pais = pais
// }

// const persona = new Persona("Alejandro", 
//                     "Delgado", 
//                     39, 
//                     "Argentina"
//                     )

// console.log(persona)

// function Auto(objeto, objeto1){ // Metodo Constructor
//     this.chasis = objeto.chasis
//     this.motor = objeto.motor
//     this.color = objeto.color
//     this.marca = objeto.marca
//     this.puertas = objeto.puertas
//     this.estado = objeto1.estado
//     this.modelo = objeto1.modelo

//     this.cantidadPuertas = function () {
//         console.info("Tengo " + this.puertas + " Puertas")
//     }
// }

// const autito = new Auto(
//     {
//         chasis: 15555623563233,
//         motor: "V8",
//         color: "Rojo",
//         marca: "Ferrari",
//         puertas: 3
//     },
//     {
//         estado: "Chocado",
//         modelo: 2020
//     }
// )

// console.log(autito)
// autito.cantidadPuertas()

// console.log(autito.motor)

// Recorro el Objeto y me fijo si existe esta Clave
// console.log("origen" in autito) // Si da false es porque no existe
// console.log("motor" in autito) // Si da true es porque existe

// for ( const i in autito){ // Este ciclo for usa a la const i para recorrer e instancia a cada clave del objeto
//     console.log(autito[i])
// }

// Clases

class Auto{
    constructor(marca, modelo, color) {
        this.marca = marca
        this.modelo = modelo
        this.color = color
    }
    mostrarMarca(){
        console.log("La marca del Auto es: " + this.marca)
    }
    mostrarModelo(){
        console.warn("El modelo es: " + this.modelo)
    }
}

const autito = new Auto(
    "Ford Mustang",
    2023,
    "Gris Plomo"
)

console.log(autito)
autito.mostrarMarca()
autito.mostrarModelo()