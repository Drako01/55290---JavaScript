const d = document // Guardo el objeto document en una constante
const cuerpo = d.body // Guardo el objeto body en una constante
cuerpo.style.backgroundColor = '#222' // Cambio el color de fondo del body
const cabeza = d.head
const titulo = d.createElement('title')
const cabecera = d.getElementById('header')
const banner = titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo)
const fotter = d.querySelector('#p-footer');
const anio = new Date().getFullYear();
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy; CoderHouse | JavaScript | ${banner} | ${anio}</a>`

// Librerias
// SweetAlert
const botonAlerta = d.getElementById('botonAlerta')
const btn = d.getElementById('btn')
const inputA = d.createElement('input')
inputA.type = 'number'
inputA.id = 'edad'

botonAlerta.prepend(inputA)

// btn.addEventListener('click', () => {
//     if(inputA.value >= 18) {
//         Swal.fire('Puede Ingresar.!', 'Cumple con los requisitos de Edad', 'success')
//     } else {
//         Swal.fire('No Puede Ingresar.!', 'Es menor de Edad', 'error')
//     }
// });


// Toastify

// btn.addEventListener('click', () => {
//     Toastify({
//         text: "This is a toast",
//         duration: 3000,
//         destination: "https://google.com",
//         newWindow: true,
//         close: true,
//         gravity: "top", // `top` or `bottom`
//         position: "left", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//             background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function () { } // Callback after click
//     }).showToast();
// });

// Luxon

// Pendiente

var DateTime = luxon.DateTime
let fecha = DateTime.now().setZone('America/Buenos_Aires').minus({weeks:1}).endOf('day').toISO();
console.log(fecha)

