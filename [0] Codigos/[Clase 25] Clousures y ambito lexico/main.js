/* 
    Clousure: funcion que tiene acceso a variables en un ambito externo, incluso despues de que esa 
    funcion haya terminado de ejecutarse.

    Ambito lexico: cada vez que se declara una funcion, crea su propio ambito lexico, y puede
    acceder a las variables dentro de ese ambito y a las variables en ambitos superiores.

*/

// Ejemplo

function funcionExterna (){
    let variableExterna = 'Estoy fuera de la funcion'

    function funcionInterna (){ // Esta funcion puede acceder todo lo que tenga dentro, y lo que este afuera, como la variable externa
        console.log(variableExterna)
    }

    return funcionInterna
}

const EjemploClousure = funcionExterna()
EjemploClousure()


// Hay que tener cuidado con los clousures, porque pueden tener problemas de memoria, aqui un ejemplo.

function crearContador(){
    let cuenta = 0

    return function(){
        cuenta++ // también sirve cuenta = cuenta + 1
        console.log(cuenta)
    }
}

const cuentaA = crearContador()
cuentaA() // 1
cuentaA() // 2
cuentaA() // 3

const cuentaB = crearContador()
cuentaB() // 1
cuentaA() // 4

// Aunque sean la misma función, al tener diferentes variables cambian su valor.
// Es como tener "varios usuarios guardando sus propios datos, donde solo ellos pueden acceder a sus datos"
// Es muy importante tener cuidado con los clousures, 
// porque pueden llegar a utilizar mucha memoria si cada usuario tiene sus propios datos.

function externa(){
    let mensaje = '¡Hola, '

    function interna(nombre){
        console.log (mensaje + nombre + '!')
    }
    return interna
}

const clousureA = externa()
const clousureB = externa()

clousureA ('Anthony')
clousureB ('AnthoFu')

// En conclusión, con los clousures podemos trabajar con diferentes timpos de ambitos lexicos y 
// crear funciones flexibles (tener cuidado con el almacenamiento de memoria) pero nos permite
// tener diferentes tipos de "contextos"