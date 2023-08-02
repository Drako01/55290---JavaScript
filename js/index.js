const body = document.body
const cabeza = document.head
const titulo = document.createElement('title')
const h1 = document.createElement('h1')

titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo)


// Formulario de Login Basico (Usando SessioStorage)

const myFormulario = document.getElementById('formulario');
const appendFromForm = document.getElementById('append')

myFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    // e.preventDefault();

    let form = e.target;
    let inputA = form.children[1].value; // Segundo hijo
    let inputB = form.children[3].value; // Cuarto hijo
    let boton = form.children[4]; // Quinto hijo "El Boton"
    let relleno = {
        usuario: inputA,
        pass: inputB
    }

    if ((inputA && inputB) === '') {
        alert('Ambos campos son Obligatorios.!!');
    } else {
        sessionStorage.setItem('Usuario', JSON.stringify(relleno)) // No Almacena Objetos
        boton.style.backgroundColor = 'white';
        boton.style.color = 'black';
    }
}

const user = sessionStorage.getItem('Usuario')
const userPaserseado = JSON.parse(user)
// console.log("Bienvenido " + userPaserseado.usuario)
h1.innerHTML = "Bienvenido " + userPaserseado.usuario

body.prepend(h1)


// Storage & JSON

// localStorage.setItem('Bienvenida', 'Hola Coders.!!!')
// localStorage.setItem('Boleano', true)
// localStorage.setItem('Numero', 50)

// const bienvenida = localStorage.getItem('Bienvenida')
// const boleano = (localStorage.getItem('Boleano') == 'true')
// const numero = localStorage.getItem('Numero')

// console.log(typeof bienvenida)
// console.log(typeof boleano)
// console.log(typeof numero)

// sessionStorage.setItem('Bienvenida', 'Hola Coders.!!!')
// sessionStorage.setItem('Boleano', true)
// sessionStorage.setItem('Numero', 50)

// for (let i = 0; i < sessionStorage.length; i++){
//     let clave = sessionStorage.key(i)
//     let algo = document.createElement('div')
//     algo.innerHTML = `
//         Clave: ${clave} - Valor: ${sessionStorage.getItem(clave)}
//     `
//     append.prepend(algo)    
// }

// sessionStorage.removeItem('Bienvenida')
// sessionStorage.removeItem('Numero')

// sessionStorage.clear()

// const array = [ ]

// array.push(1)
// array.push(2)
// array.push(3)

// localStorage.setItem('Array', array)
// const arrayRecuperado = localStorage.getItem('Array').split(' , ')
// console.log(arrayRecuperado)

// array.splice(1, 1)
// console.log(array)

// JSON 

const productos = [
    {
        id: 1,
        producto: "Arroz",
        precio: 600
    },
    {
        id: 2,
        producto: "Yerba",
        precio: 1200
    },
    {
        id: 3,
        producto: "Azucar",
        precio: 700
    },
    {
        id: 4,
        producto: "Alfajor",
        precio: 200.5
    }
]

// localStorage.setItem('Productos', JSON.stringify(productos))

const gardarProductosEnLocalStorage = (clave, valor) => {
    localStorage.setItem(clave, valor)
}

// for ( const producto of productos) {
//     gardarProductosEnLocalStorage(producto.producto, JSON.stringify(producto))
// }

gardarProductosEnLocalStorage('Productos', JSON.stringify(productos))

class Producto {
    constructor(obj) {
        this.id = obj.id
        this.producto = obj.producto.toUpperCase()
        this.precio = parseFloat(obj.precio).toFixed(2)
    }
    sumarIVA() {
        this.precio = this.precio * 1.21
    }
}

const newProducts = []

const almacenados = JSON.parse(localStorage.getItem('Productos'))
console.log(almacenados)

for ( const objeto of almacenados) {
    newProducts.push(new Producto(objeto))
}

for ( const prod of newProducts) {
    prod.sumarIVA()
}

console.log(newProducts)