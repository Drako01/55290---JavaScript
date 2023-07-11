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
function Persona(nombre, apellido, edad, pais) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
    this.pais = pais
}

const persona = new Persona("Alejandro", 
                    "Delgado", 
                    39, 
                    "Argentina"
                    )

console.log(persona)

const persona1 = new Persona("Nicolas", 
                    "Tomatis", 
                    31, 
                    "Argentina"
                    )

console.log(persona1)