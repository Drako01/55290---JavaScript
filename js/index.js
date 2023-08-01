const cabeza = document.head
const titulo = document.createElement('title')

titulo.innerText = 'Comisión #55290'
cabeza.appendChild(titulo) 


// Formulario

const myFormulario = document.getElementById('formulario');
const appendFromForm = document.getElementById('append')

myFormulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    let form = e.target;
    let inputA = form.children[1].value; // Segundo hijo
    let inputB = form.children[3].value; // Cuarto hijo
    let boton = form.children[4]; // Quinto hijo "El Boton"
    let relleno = ` <h3>Usted ingresó: </h3>
                    <h4>Usuario: ${inputA}</h4>
                    <h4>Contraseña: ${inputB}</h4>`

    if ((inputA && inputB) === '') {
        alert('Ambos campos son Obligatorios.!!');
    } else {
        appendFromForm.innerHTML = relleno
        boton.style.backgroundColor = 'white';
        boton.style.color = 'black';
    }
}

// Storage & JSON

