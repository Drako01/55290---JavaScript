// function consologueo() {
//     console.log("Hola Coders.!!!")
// }

// Las Funciones declaradas de esta forma tienen un Scope Global

//consologueo()

// function solicitarNombreDeUsuario() {
//     let nombreDeUsuario = prompt("Ingrese su Nombre de Usuario")
//     console.log("El nombre del Usuario es: " + nombreDeUsuario)
// }


// console.log(nombreDeUsuario) // nombreDeUsuario Tiene un Scope Local
//solicitarNombreDeUsuario()

// for (i = 0; i <= 5; i++) {
//     solicitarNombreDeUsuario()
// }

// const num1 = 5
// const num2 = 6
// const num3 = 12

// const resultado = num1 + num2 + num3

// console.log(resultado)

// function funcionConParametros( parametro1, parametro2, parametro3 ){
//     console.log( parametro1 + " " + parametro2  + " " + parametro3)
// }

// funcionConParametros("Hola", false , 5 )

// let resultado  // Tiene Scope Global
//console.log(resultado) // resultado No tiene valor asignado

// function suma( num1 , num2 ){
//     resultado = num1 + num2
// }
// //console.log(resultado) // resultado No tiene valor asignado, porque para que funcione hay que llamar 1ro a la funcion suma()


// suma(4 , 8) // Llamo a la funcion y le asigno valores a cada uno de sus parametros

// console.log(resultado) // Imprime el resultado de suma()


// function sumar( num1 , num2 ){
//     return num1 + num2 // Retorname el resultado de esta Suma
// }

// let resultado = sumar( 10 , 25 )

// console.log(resultado)
// ------------------------------------------------------------

// Hagamos una Calculadora

// function calculadora(num1, operacion, num2) {
//     // Evitemos la division por 0
//     if (operacion === "/" && num2 === 0) {
//         return console.error("NO SE PUEDE DIVIDIR POR CERO.!!!!")
//     }
//     switch (operacion) {
//         case "+":
//             return num1 + num2;
//             break;
//         case "-":
//             return num1 - num2;
//             break;
//         case "*":
//             return num1 * num2;
//             break;
//         case "/":
//             return num1 / num2;
//             break;
//         default:
//             return 0;
//             break;
//     }
// }

// console.log(calculadora(10, "/", 0))

// const suma = function ( a, b ) { return a + b } // Funcion Anonima > Se asigna a una Variable Globla o Local
// const resta = function ( a , b ) { return a - b }
// console.log(suma(22,35))
// console.log(resta(22,35))


// Funcion Flecha > Nace a partir de ES6

const suma = (a ,b) => { return a + b }
console.log(suma(22,35))

