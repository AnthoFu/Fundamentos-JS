const numeroDesde = 1 // Numero limite mas bajo
const numeroHasta = 10 // Numero limite mas alto
const contenedor = document.getElementById('container')

function agregarTitulo(){
    const h2 = document.createElement('h2')
    h2.textContent = `Estoy pensando en un número desde el número ${numeroDesde} hasta número ${numeroHasta}`
    console.log ('[agregarTitulo]: Titulo agregado') // Para debug
    return h2
}

// Agrega el título al contenedor
contenedor.insertAdjacentElement(`afterbegin`,agregarTitulo())

const numeroSecreto = Math.floor(Math.random()* numeroHasta + numeroDesde)

const inputUsuario = document.getElementById('numeroAdivinar')

inputUsuario.addEventListener ('enviarInput', (event) =>{ // Agregamos un eventListener (Curso manipulacion DOM)
    event.preventDefault() // Se evita que se borren datos cuando se haga el submit
    const numeroUsuario = inputUsuario.value // Tomamos el valor que se ha ingresado en el input
    console.log ('Numero ingresado:', numeroUsuario)
    return numeroUsuario
})

