// if (true){
//     console.log("Es verdadero") // Este codigo si se va a ejecutar
// }

// if (false){
//     console.log("Esto es Falso") // Este codigo no se va a ejecutar
// }

// const numero = 0 // Un solo = Significa Asignacion
// console.log(numero)

// if ( numero != 0 ){ // Dos == Significa Igual
//     console.log("Es verdadero, a Vale: " + numero)
// } else {
//     console.log("Es Falso, numero Vale = " + numero)
// }

// let nombreUsuario = prompt("Ingrese su Nombre")

// if ( nombreUsuario != "" ) {
//     alert("Bienvenido " + nombreUsuario)
// } else { 
//     alert("No ha ingresado nada.!")
// }

// const number = prompt("Ingrese un Numero")

// if ( number == 0 ){
//     console.log("Usted ingreso el Numero " + number)
// } else if ( number < 0 ) {
//     console.log("Usted ingreso un Numero negativo")
// } else if ( number > 0 ) {
//     console.log("Usted ingreso un Numero positivo")
// } else {
//     console.log("Usted no ingreso un Numero Valido")
// }

// Ejercicio 1:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es positivo, negativo o cero.
// Ejercicio 2:
// Escribe un script que solicite al usuario dos números e imprima en la consola el número mayor de los dos.
// Ejercicio 3:
// Escribe un script que solicite al usuario su edad e imprima en la consola si es mayor de edad o no (considerando 18 años como la mayoría de edad).
// Ejercicio 4:
// Escribe un script que solicite al usuario un número e imprima en la consola si ese número es par o impar.
// Ejercicio 5:
// Escribe un script que solicite al usuario tres números e imprima en la consola el número más grande de los tres.


// Ejercicio 1:
// let numeroAsignado = prompt("");
// if (numeroAsignado == 0) {
//     console.log("el numero ingresado es 0")
// }
// else if (numeroAsignado < 0) {
//     console.log("el numero asignado es Negativo")
// }
// else if (numeroAsignado > 0) {
//     console.log("el numero asignado es Positivo")
// }
// else {
//     console.log("NO INGRESASTE NADA")
// }

// const number = prompt("Ingrese un numero")

// if (number == 0) {
//     console.log("Ustede eligió el número " + number)
// } else if (number > 0){
//     console.log ("Usted eligió un número positivo")
// } else {
//     console.log ("Usted eligió un número negativo")
// }

// const number1 = 0
// const number2 = 2

// if ( number1 == 0 && number2 == 1 ) { // las 2 && Significan y
//     console.log("Se cumplieron Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( number1 == 0 || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }

// if ( !(number1 == 0) || number2 == 1 ) { // Las || Significan o
//     console.log("Se cumplio una o Ambas condiciones.!")
// } else {
//     console.log("La condicion es Falsa.!")
// }


let nombre = prompt("Ingrese un Nombre")
if ((nombre != "") && (nombre == "ANA") || (nombre == "ana")){
    alert("El nombre ingresado es Ana")
} else {
    alert("Error al ingresar el Nombre")
}