// Usa forEach para imprimir cada elemento de un array de números.

const arrayNumeros0 = [1, 2, 3, 4, 5];

arrayNumeros0.forEach(numero => console.log(numero));  // Salida por Consola: 1 2 3 4 5


// Utiliza find para encontrar el primer número mayor que 50 en un array de números.

const arrayNumeros1 = [30, 40, 60, 70, 80];

const numeroMayor50 = arrayNumeros1.find(numero => numero > 50);
console.log(numeroMayor50); // Salida por Consola: 60


// Emplea filter para obtener todos los números pares de un array de números.

const arrayNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = arrayNumeros2.filter(numero => numero % 2 === 0);
console.log(numerosPares); // Salida por Consola: [2, 4, 6, 8, 10]


// Utiliza some para verificar si un array de palabras contiene al menos una palabra de más de 10 caracteres.

const arrayPalabras0 = ['manzana', 'pera', 'naranja', 'sandía', 'kiwi'];

const contienePalabraLarga = arrayPalabras0.some(palabra => palabra.length > 10);
console.log(contienePalabraLarga); // Salida por Consola: false


// Usa map para duplicar cada elemento de un array de números.

const arrayNumeros3 = [1, 2, 3, 4, 5];

const arrayDuplicado = arrayNumeros3.map(numero => numero * 2);
console.log(arrayDuplicado); // Salida por Consola: [2, 4, 6, 8, 10]


// Emplea reduce para obtener la suma de todos los elementos de un array de números.

const arrayNumeros4 = [1, 2, 3, 4, 5];

const suma1 = arrayNumeros4.reduce((acumulador, numero) => acumulador + numero, 0);
console.log(suma1); // Salida por Consola: 15
// Utiliza sort para ordenar un array de palabras alfabéticamente.

const arrayPalabras1 = ['kiwi', 'naranja', 'manzana', 'pera', 'sandía'];

const arrayOrdenado = arrayPalabras1.sort();
console.log(arrayOrdenado); // Salida por Consola: ['kiwi', 'manzana', 'naranja', 'pera', 'sandía']


// Crea una clase Alumno con las propiedades "nombre", "edad" y "notas"(un array de números).Crea varios objetos Alumno y realiza operaciones con ellos utilizando funciones de orden superior.

class Alumno {
    constructor(nombre, edad, notas) {
        this.nombre = nombre;
        this.edad = edad;
        this.notas = notas;
    }

    calcularPromedio() {
        const sumaNotas = this.notas.reduce((total, nota) => total + nota, 0);
        return sumaNotas / this.notas.length;
    }
}

const alumno1 = new Alumno('Juan', 20, [80, 85, 90]);
const alumno2 = new Alumno('María', 22, [75, 88, 92]);

console.log(alumno1.calcularPromedio()); // Salida por Consola: 85
console.log(alumno2.calcularPromedio()); // Salida por Consola: 85


// Utiliza map para convertir un array de temperaturas en grados Celsius a grados Fahrenheit.

const arrayCelsius = [0, 10, 20, 30, 40];

const arrayFahrenheit = arrayCelsius.map(celsius => celsius * 9 / 5 + 32);
console.log(arrayFahrenheit); // Salida por Consola: [32, 50, 68, 86, 104]


// Emplea filter para obtener todos los objetos de un array de productos que tengan un precio mayor a $50.

const arrayProductos1 = [
    { nombre: 'Camisa', precio: 30 },
    { nombre: 'Pantalón', precio: 60 },
    { nombre: 'Zapatos', precio: 80 },
    { nombre: 'Sombrero', precio: 20 }
];

const productosPrecioMayor50 = arrayProductos1.filter(producto => producto.precio > 50);
console.log(productosPrecioMayor50); // Salida por Consola: [{ nombre: 'Pantalón', precio: 60 }, { nombre: 'Zapatos', precio: 80 }]


// Usa forEach para imprimir la tabla de multiplicar de un número específico(por ejemplo, 5).

const numeroTabla = 5;

const tablaMultiplicar = [];
for (let i = 1; i <= 10; i++) {
    tablaMultiplicar.push(numeroTabla * i);
}

tablaMultiplicar.forEach(resultado => console.log(resultado)); // Salida por Consola: 5 10 15 20 25 30 35 40 45 50


// Utiliza find para encontrar el primer objeto producto con un descuento mayor al 30 % en un array de productos.

const arrayProductos2 = [
    { nombre: 'Camisa', precio: 50, descuento: 0 },
    { nombre: 'Pantalón', precio: 70, descuento: 0.4 },
    { nombre: 'Zapatos', precio: 100, descuento: 0.2 }
];

const productoDescuentoMayor30 = arrayProductos2.find(producto => producto.descuento > 0.3);
console.log(productoDescuentoMayor30); // Salida por Consola: { nombre: 'Pantalón', precio: 70, descuento: 0.4 }


// Emplea some para verificar si hay al menos un alumno con edad menor a 18 años en un array de objetos Alumno.

const arrayAlumnos1 = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Pedro', edad: 17 },
    { nombre: 'Ana', edad: 19 }
];

const hayMenorDeEdad = arrayAlumnos1.some(alumno => alumno.edad < 18);
console.log(hayMenorDeEdad); // Salida por Consola: true


// Usa reduce para obtener el producto de todos los elementos de un array de números.

const arrayNumeros5 = [1, 2, 3, 4, 5];

const producto = arrayNumeros5.reduce((acumulador, numero) => acumulador * numero, 1);
console.log(producto); // Salida por Consola: 120


// Utiliza sort para ordenar un array de fechas en orden ascendente.

const arrayFechas = [new Date('2023-07-10'), new Date('2023-07-15'), new Date('2023-07-05')];

arrayFechas.sort((a, b) => a - b);
console.log(arrayFechas); // Salida por Consola: [Tue Jul 05 2023 00:00:00 GMT+0000, Mon Jul 10 2023 00:00:00 GMT+0000, Sat Jul 15 2023 00:00:00 GMT+0000]


// Emplea map para obtener un array de objetos con las edades de los alumnos en años - luz(dividiendo la edad en años por 9.46 trillones, que es la cantidad de kilómetros que recorre la luz en un año).

const arrayAlumnos5 = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Pedro', edad: 17 },
    { nombre: 'Ana', edad: 19 }
];

const arrayEdadesAniosLuz = arrayAlumnos5.map(alumno => alumno.edad / 9460000000000);
console.log(arrayEdadesAniosLuz); // Salida por Consola: [2.114164904862579e-12, 2.324581815795746e-12, 1.7964071856287425e-12, 2.008824096561909e-12]


// Utiliza filter para obtener todos los números primos de un array de números.

const arrayNumeros6 = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function esPrimo(numero) {
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return numero > 1;
}

const numerosPrimos = arrayNumeros6.filter(numero => esPrimo(numero));
console.log(numerosPrimos); // Salida por Consola: [2, 3, 5, 7]


// Emplea reduce para obtener el promedio de las edades de un array de objetos Alumno.

const arrayAlumnos6 = [
    { nombre: 'Juan', edad: 20 },
    { nombre: 'María', edad: 22 },
    { nombre: 'Pedro', edad: 17 },
    { nombre: 'Ana', edad: 19 }
];

const sumaEdades = arrayAlumnos6.reduce((acumulador, alumno) => acumulador + alumno.edad, 0);
const promedioEdades = sumaEdades / arrayAlumnos6.length;
console.log(promedioEdades); // Salida por Consola: 19.5


// Usa forEach para imprimir todos los días de la semana en inglés.

const diasSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
diasSemana.forEach(dia => console.log(dia)); // Salida por Consola: Sunday Monday Tuesday Wednesday Thursday Friday Saturday


// Utiliza sort para ordenar un array de objetos producto por precio de forma ascendente.

const arrayProductos4 = [
    { nombre: 'Camisa', precio: 30 },
    { nombre: 'Pantalón', precio: 60 },
    { nombre: 'Zapatos', precio: 80 },
    { nombre: 'Sombrero', precio: 20 }
];

arrayProductos4.sort((a, b) => a.precio - b.precio);
console.log(arrayProductos4); // Salida por Consola: [{ nombre: 'Sombrero', precio: 20 }, { nombre: 'Camisa', precio: 30 }, { nombre: 'Pantalón', precio: 60 }, { nombre: 'Zapatos', precio: 80 }]

// Expresar el siguiente script en una sola linea de codigo:

// let total = 0
// for (let i = 1; i <= 10; i++) {
//     total += i
// }
// console.log(total)

// Respuesta:

const total = Array.from({ length: 10 }, (_, i) => i + 1).reduce((acc, curr) => acc + curr, 0);
