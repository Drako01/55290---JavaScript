let letra = "c" // Le asignamos con un string que va con comillas
let letras = "d"

letra = "e"
letra = "f"
let g = "Hola"
letra = 5 // 5 es un Number y no lleva comillas - Eso lo diferencia de un String como por ejemplo "5"

const numerito = '0'

const numerito5 = 0



//console.log(letra)
//console.log(numerito)


// let nombreUsuario = prompt("Ingrese su nombre")

// console.log(nombreUsuario)


// let nombreUsuario1 = "Su nombre es Pirulo"

// console.log(nombreUsuario1)

// alert("Hola Gente " + nombreUsuario)

// let nombreUsuario = prompt("Ingrese su nombre")
// alert("Su nombre es: " + nombreUsuario)

// let usuario = prompt("Ingrese su nombre y apellido")

// alert("hola! bienvenido " + usuario)
// let añoActual = new Date().getFullYear();

// let añoNacimiento = prompt("¿En que año naciste?");

// let edad = añoActual - añoNacimiento;
// alert("Tienes " + edad + " años.");

let nombre = prompt("Bienvenido, ingrese su nombre para comenzar su registro")
let apellido = prompt("Bienvenido " + nombre + ", ingrese su apellido")
let correoElectronico = prompt("Muy bien " + nombre + ", ingrese su correo electronico para finalizar su registro")
alert("Su registro se ha realizado con exito, en instantes recibira la confirmacion en su correo electronico:" + correoElectronico)
