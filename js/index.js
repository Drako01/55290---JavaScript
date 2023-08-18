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
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy CoderHouse | JavaScript | ${banner} | ${anio}</a>`

// Creacion de Elementos para Clase de Ajax
const formFind = d.getElementById('busqueda')
const input = d.createElement('input')
const btn = d.createElement('button')
input.classList = 'form-control'
input.type = 'number'
input.placeholder = 'Ingrese un Número'
input.min = 1
formFind.classList = 'container coderhouse div-busqueda'
btn.classList = 'btn btn-primary busqueda'
btn.innerText = 'Buscar'
btn.type = 'submit'
formFind.append(input)
formFind.append(btn)
const lista = d.querySelector('#listado');
// Desde el Formulario:
const formUser = d.getElementById('form-users')
const inputName = d.getElementById('name-imput')
const inputLastName = d.getElementById('last-name-imput')


/// Async Await 
// Ejemplo Usando la API de Mercado Libre