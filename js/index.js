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
function Persona(objeto) {
    this.nombre = objeto.nombre
    this.apellido = objeto.apellido
    this.edad = objeto.edad
    this.pais = objeto.pais
}

const persona1 = new Persona( // Nueva INSTANCIA de Persona
    {
        nombre: "Nicolas",
        apellido: "Tomatis",
        edad: 31,
        pais: "Argentina"
    }
)
const persona2 = new Persona(
    {
        nombre: "Diego",
        apellido: "Torres",
        edad: 50,
        pais: "Argentina"
    }
)
const persona3 = new Persona(
    {
        nombre: "Nicolas",
        apellido: "Tomatis",
        edad: 31,
        pais: "Argentina"
    }
)
const persona4 = new Persona(
    {
        nombre: "Lionel",
        apellido: "Messi",
        edad: 36,
        pais: "Argentina"
    }
)
console.log(persona1, persona2, persona3)
console.error(persona4)

function Auto(objeto){ // Me pide un Objeto
    this.chasis = objeto.chasis
    this.motor = objeto.motor
    this.color = objeto.color
    this.marca = objeto.marca
}

const auto1 = new Auto(
    {
        chasis: 155665232355,
        motor: 1.6,
        color: "Azul",
        marca: "Ford"
    }
)

console.log(auto1)