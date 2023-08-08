const d = document // Guardo el objeto document en una constante
const cuerpo = d.body // Guardo el objeto body en una constante
cuerpo.style.backgroundColor = '#222' // Cambio el color de fondo del body
const cabeza = document.head
const titulo = document.createElement('title')
const cabecera = document.getElementById('header')
const banner = titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo)
const fotter = document.querySelector('#p-footer');
const anio = new Date().getFullYear();
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy; CoderHouse | JavaScript | ${banner} | ${anio}</a>`

// Operadores y condicionales avanzados II

