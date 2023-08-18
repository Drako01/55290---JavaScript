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
* JS Nos permite hacer peticiones externas con el metodo fetch()
Por ejemplo a una API
Este metodo requiere de dos parametros, una URL y un Metodo

*/

// Ajax y Fetch
//fetch(url, metodo) // Recibe 2 parametros

// Consulta a un Archivo interno con Formato JSON
// fetch('/productos.json')
//     .then((res) => res.json())
//     .then((data) => {
//         for( item of data ) {
//             console.log(item)
//         }
//     })
//     .catch((error) => (console.error(error)))

// Consulta a la API de StarWars
// fetch('https://swapi.dev/api/people')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

// fetch('https://swapi.dev/api/people/1')
//     .then((res) => res.json())
//     .then((data) => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <h4>${data.name}</h4>
//             <p>Hair Color: ${data.hair_color}</p>
//             <p>Gender: ${data.gender}</p>
//             <p>Eyes: ${data.eye_color}</p>
//             <p>Birthday: ${data.birth_year}</p>
//             <hr/>
//         `;
//         lista.append(li);
//     })
//     .catch((error) => {
//         console.error('Error fetching data:', error);
//     });

// Consulta a la API de MockApi personalizada
// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

/// Si quiero saber el Valor del Dolar hoy.!!
// fetch("https://api.bluelytics.com.ar/v2/latest")
//     .then((res) => res.json())
//     .then((data) => {
//         const dolar = d.getElementById('dolar')
//         dolarValue = data.oficial;
//         dolar.innerHTML =
//             `<h4>Referencia del Dolar hoy:</h4>
//             <li>Valor de Compra: $ ${dolarValue.value_avg}.- (ARS)</li>            
//             <li>Valor de Venta: $ ${dolarValue.value_buy}.- (ARS)</li>   
//             <hr/>         
//             `
//     })

//     .catch((error) => dolar.innerHTML = `<li>${error}</li>`)


// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes', 
// {
//     method: 'POST',
//     body: JSON.stringify({
//         first_name: 'Alejandro',
//         last_name: 'Di Stefano',
//         createdAt: new Date()
//     }),
//     headers: {
//         "Content-Type":"application/json"
//     }
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

// Desde el Formulario:
const formUser = d.getElementById('form-users')
const inputName = d.getElementById('name-imput')
const inputLastName = d.getElementById('last-name-imput')

// Creamos usuarios con el metodo POST
// formUser.onsubmit = (e) => {
//     e.preventDefault()

//     fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes',
//         {
//             method: 'POST',
//             body: JSON.stringify({
//                 first_name: inputName.value,
//                 last_name: inputLastName.value,
//                 createdAt: new Date()
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .then((res) => res.json())
//         .then((data) => console.log(data))
//         .catch((error) => (console.error(error)))

// }

// Modificar Usuarios con el Metodo PUT

// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes/3')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes/3',
//     {
//         method: 'PUT',
//         body: JSON.stringify({
//             first_name: 'Usuario',
//             last_name: 'Cambiado',
//             createdAt: new Date()
//         }),
//         headers: {
//             "Content-Type": "application/json"
//         }
//     })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))



// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes/')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))


// fetch('https://64dd48f6e64a8525a0f7cb2c.mockapi.io/estudiantes/8',
// {
//     method:'DELETE'
// })
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((error) => (console.error(error)))

// formFind.onsubmit = (e) => {
//     e.preventDefault()

//     fetch(`https://swapi.dev/api/people/${input.value}`)
//         .then((res) => res.json())
//         .then((data) => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//             <h4>${data.name}</h4>
//             <p>Hair Color: ${data.hair_color}</p>
//             <p>Gender: ${data.gender}</p>
//             <p>Eyes: ${data.eye_color}</p>
//             <p>Birthday: ${data.birth_year}</p>
//             <hr/>
//         `;
//             lista.append(li);

//         })
//         .catch((error) => (console.error(error)))
// }


// Busqueda por Query params
// fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20')
// .then((res) => res.json()) 
// .then((data) => console.log(data)) 
// .catch((error) => (console.error(error)))


/// Async Await 
// Ejemplo Usando la API de Mercado Libre
const peticion1 = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
    const datos = await respuesta.json()
    const data = await datos.results
    console.log(data)
}
peticion1()

// Ejemplo Usando la API de Mercado Libre en el DOM
const cards = d.getElementById('cards')
const peticion2 = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
    const datos = await respuesta.json()
    const data = await datos.results
    for (item of data) {
        const card = d.createElement('div')
        card.innerHTML = `
        <div class="card" style="width: 18rem; height: 32rem;">
            <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
            <div class="card-body">
                <h5 class="card-title">${item.title}</h5>
                <p class="card-text">Precio: $${item.price}.-</p>
                <a href="#" class="btn btn-primary">Comprar</a>
            </div>     
        </div>       
        `
        cards.append(card)
    }
}

peticion2()
