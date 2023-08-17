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
const formFind = d.getElementById('ajax')
const input = d.createElement('input')
const btn = d.createElement('button')
input.classList = 'form-control'
input.type = 'number'
input.placeholder = 'Ingrese un Número'
input.min = 0
formFind.classList = 'container coderhouse div-busqueda'
btn.classList = 'btn btn-primary busqueda'
btn.innerText = 'Buscar'
btn.type = 'submit'
formFind.append(input)
formFind.append(btn)
const lista = document.querySelector('#listado');
/* COMENTARIOS IMPORTANTES:

https://swapi.dev/api/
https://mockapi.io/
Promesas => https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises
hazAlgo()
    .then((resultado) => hazAlgoMas(resultado))
    .then((nuevoResultado) => hazLaTerceraCosa(nuevoResultado))
    .then((resultadoFinal) => {
        console.log(`Obtenido el resultado final: ${resultadoFinal}`);
    })
    .catch(falloCallback);

Asynchronous JavaScript and XML => AJAX
API => Interfaz de Programacion de Aplicaciones
.then() => Requiere como argumento una Funcion CallBack / Si la respuesta de la API es un JSON, entonces la respuesta.json() para que JS pueda interpretarlo
Codigos de Respuestas => https://developer.mozilla.org/es/docs/Web/HTTP/Status
XML => https://developer.mozilla.org/es/docs/Web/XML/XML_introduction
Metodo GET no necesita el 2do Argumento
JSON Formatter => https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa

*/

// Ajax y Fetch

