/*
Requerimientos del reto:

1. El usuario debe poder ingresar su usario y contraseña
2. El sistema debe ser capaz de validar si el usuario y contraseña ingresados por el usuario existen en la base de datos
3. Si el usuario y la contraseña son correctos, el sistema debe mostrar un mensaje de bienvenida y mostrar el timeline del usuario.
4. Si el usuario y contraseña son incorrectos, el sistema debe mostrar un mensaje de error y no mostrar ningun timeline
*/

// TODO: Falta todavia realizar mostrar el timeline, el mensaje de bienvenida y el mensaje de error de forma visual para el usuario.

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
        timeline:"Me encata Javascript!"
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
            return loged
        }
    }

    if (!loged){
        console.log('Fallo en el login')
    }
})