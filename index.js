// for ( let i = 10; i >= 0; i-- ) {
//     console.log(i)
// }

// let nombre = "Alejandro Di Stefano" // Variable Global

// // console.log(nombre.length)

// for ( let i = 0; i < nombre.length; i++ ) { // i es una Variable Local
//     console.log(i)
// }

// let i = "dfdfgdfg"
// console.log(i)


// let ingresarNumero = parseInt(prompt("Ingresar Numero"));
// // En cada repetición, calculamos el número ingresado x el número de repetición (i)
// for (let i = 0; i <= 10; i+=2) {
//     let resultado = ingresarNumero * i ;
//     console.log(ingresarNumero +" x "+ i +" = "+ resultado);
// }


// for (let i = 1; i <= 5; i++) {
//     // En cada repetición solicitamos un nombre.
//     let ingresarNombre = prompt("Ingresar nombre");
//     // Informamos el turno asignado usando el número de repetición (i).
//     console.log(" Turno  N° " + i + " Nombre: " + ingresarNombre);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     //Si la variable i es igual 5 interrumpo el for. 
//     if(i == 5){
//         continue;
//     }
//     console.log(i);
// }

// let repetir = false

// while(repetir){
//     console.log("Imprimo hasta el Infinito.!!!!!")
// }

// let entrada = prompt("Ingresar un dato");
// //Repetimos con While hasta que el usuario ingresa "ESC"
// while (entrada != "ESC") {
//     console.log("El usuario ingresó " + entrada);
//     //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
//     entrada = prompt("Ingresar otro dato");
// }


// let numero

// do {
//     numero = parseInt(prompt("Ingresar un Numero"))
// }
// while(isNaN(numero))
// console.log("El numero ingresado es: " + numero)

// let repetir = false;
// do {
//     console.log("¡Solo una vez!");
// } while (repetir)

// let numero = 0;
// do {
//     //Repetimos con do...while mientras el usuario ingresa un n°
//     numero = prompt("Ingresar Número");
//     console.log(numero);
//     //Si el parseo no resulta un número se interrumpe el bucle.   
// } while (parseInt(numero));

let entrada = prompt("Ingresar un nombre");
//Repetimos hasta que se ingresa "ESC"
while (entrada != "ESC") {
    switch (entrada) {
        case "":
            alert("HOLA " + entrada);
            break;
        case "JUAN":
            alert("HOLA JUAN");
            break;
        default:
            alert("¿QUIÉN SOS?")
            break;
    }
    entrada = prompt("Ingresar un nombre");
}
