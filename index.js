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

for (let i = 1; i <= 10; i++) {
    //Si la variable i es igual 5 interrumpo el for. 
    if(i == 5){
        continue;
    }
    console.log(i);
}