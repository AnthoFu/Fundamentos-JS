/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y la contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

// TODO: Falta realizar la parte visual. El CSS. Toda la logica en teoria esta lista. ;)

const usersDatabase=[
    {
        username:"AnthoFu",
        password:"123"
    },
    {
        username:"Alberto",
        password:"456"
    },
    {
        username:"Adriana",
        password:"789"
    }
];
    

const usersTimeline=[
    {
        username:"Sthefanny",
        timeline:"Me encanta Javascript!"
    },
    {
        username:"Robert",
        timeline:"Utilizar Jira para gestionar tareas es muy eficiente!"
    },
    {
        username:"Luis",
        timeline:"Quien dijo bartender?"
    },
    {
        username:"Gabriel",
        timeline:"Vieron la nueva promoción de McDonalds?"
    }
];


const usernameInput = document.getElementById('username')

const passwordInput = document.getElementById('password')

const formularioLogin = document.getElementById('login')

const seccionLogin = document.getElementById('loginSection')

const seccionTimeline = document.getElementById('timelineSection')

const span = document.createElement('span')

const postContainer = document.createElement('div')


formularioLogin.addEventListener('submit', (event)=> {
    event.preventDefault()
    const username = usernameInput.value
    console.log('[Username ingresado]:',username)
    const password = passwordInput.value
    console.log('[Password ingresado]:',password)
    let loged = false
    
    for (user of usersDatabase){
        if (username === user.username && password === user.password){
            console.log('Exito en login')
            loged = true
            ocultarLogin()
            mostrarTimeline()
            return loged
        }
    }

    if (!loged){
        console.log('Fallo en el login')
        span.textContent = 'Contraseña o usuario invalido'
        formularioLogin.appendChild(span)
    }
})

function ocultarLogin() {
    seccionLogin.style.display='none'
    console.log('[OcultarLogin]: Activado')
}

function mostrarTimeline(){
    for (const post of usersTimeline){
        const postContainer = document.createElement('div')
        postContainer.innerText = `${post.username} ha comentado: ${post.timeline}`

        seccionTimeline.appendChild(postContainer)
    }
}