// const d = document
const cuerpo = document.body
const cabeza = document.head
const titulo = document.createElement('title')
const cabecera = document.getElementById('header')
const prueba = document.getElementById('prueba')
const h1 = document.createElement('h1')
const h2 = document.getElementsByTagName('H2')[0]
const logo = document.getElementsByClassName('logo')[0]
const producto = document.getElementById('producto') // Boton
const cantidad = document.getElementById('cantidad') // Boton
const inputProd = document.getElementById('inputProducto') // Input
const inputCant = document.getElementById('inputCantidad') // Input

titulo.innerText = 'Comisión #55290'
//h1.innerHTML = 'Hola Coders..!!!' // Agrego texto
h1.innerHTML = `<strong>Hola Coders..!!!</strong>
                    <p>Como estan????</p>
                ` // Backsticks => Introduce literalmente lo que le agregue


cabeza.appendChild(titulo) // Siempre lo agrega al final
prueba.appendChild(h1)
h1.style.color = 'red'
prueba.style.backgroundColor = '#191919'

cuerpo.style.backgroundColor = 'black'

prueba.remove()

producto.value = 'Harina'
producto.innerText = 'Producto'
cantidad.innerText = 'Cantidad'


producto.style.backgroundColor = 'yellow'

cantidad.style.backgroundColor = 'blue'
cantidad.style.color = 'white'
producto.style.padding = '.5rem 1rem'
cantidad.style.padding = '.5rem 1rem'

inputProd.value = 'Probando en inputProd.!!'
inputCant.value = 'Probando en inputCant.!!'
// console.log(inputProd.value)

// Eventos

producto.addEventListener('click', hizoClick)
function hizoClick() {
    alert('El Usuario hizo Click.! En Producto')
}

cantidad.onclick = () => { alert('El Usuario hizo Click.! Con Cantidad') }

const boton4 = document.getElementById('boton4')

boton4.onmousemove = () => { console.log('El Usuario Movio el Mouse sobre el Boton.!') }


//CODIGO JS
// let input1 = document.getElementById("nombre")
// let input2 = document.getElementById("edad")
// input1.onkeyup = () => {console.log("keyUp")}
// input2.onkeydown = () => {console.log("keyDown")}

// input1.onchange = () => (console.log(input1.value))
// input2.onchange = () => (console.log(input2.value))

// let input1  = document.getElementById("nombre")
// input1.addEventListener('input', () => {
//         console.log(input1.value)
// })


////////////////////////////////////////////

// Formulario

const myFormulario = document.getElementById('formulario');

myFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    let form = e.target;
    let inputA = form.children[1].value; // Segundo hijo
    let inputB = form.children[3].value; // Cuarto hijo
    let boton = form.children[4]; // Quinto hijo "El Boton"

    if (inputA === '' && inputB === '') {
        alert('Ingrese algún dato.');
    } else {
        console.log(inputA);
        console.log(inputB);
        boton.style.backgroundColor = 'white';
        boton.style.color = 'black';
    }
}