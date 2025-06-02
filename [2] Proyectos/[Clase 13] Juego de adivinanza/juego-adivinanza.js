const numeroDesde = 1 // Numero limite mas bajo
const numeroHasta = 10 // Numero limite mas alto
const contenedor = document.getElementById('container')

function agregarTitulo(){
    const h2 = document.createElement('h2')
    h2.textContent = `Estoy pensando en un número desde el número ${numeroDesde} hasta el número ${numeroHasta}`
    console.log ('[agregarTitulo]: Titulo agregado') // Para debug
    return h2
}

// Agrega el título al contenedor
contenedor.insertAdjacentElement(`afterbegin`,agregarTitulo())

const numeroSecreto = Math.floor(Math.random()* numeroHasta + numeroDesde)

const inputUsuario = document.getElementById('numeroAdivinar')

const numeroForm = document.getElementById('numeroForm')

numeroForm.addEventListener ('submit', (event) =>{ // Agregamos un eventListener (Curso manipulacion DOM)
    event.preventDefault() // Se evita que se borren datos cuando se haga el submit
    const numeroUsuario = inputUsuario.value // Tomamos el valor que se ha ingresado en el input
    console.log ('Numero ingresado:', numeroUsuario) // Para debug
    console.log ('Numero random:', numeroSecreto) // Para debug
    console.log ('¿Ganaste?', numeroUsuario == numeroSecreto) // Para debug
    if (numeroUsuario == numeroSecreto){
        alert(`¡Felicidades! Has ganado, adivinaste el número secreto: ${numeroSecreto}`)
    } else {
        alert(`Lo lamento, has fallado, el número secreto era: ${numeroSecreto}`)
    }
    return numeroUsuario
})

