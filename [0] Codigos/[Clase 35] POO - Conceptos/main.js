/* 
Un objeto es una estructura de datos que nos permite guardar varios valores en un mismo sitio,
Esta forma de guardar datos se le conoce como key / value.
En un objeto, los datos se guardan de la siguiente forma:

Objeto {
Propiedad: valor,
Propiedad2: valor,
Metodo()
}
*/

// Hagamos un ejemplo con una persona.

const persona = {
    nombre: 'Anthony',
    edad:20,
    direccion: {
        pais: 'Venezuela',
        estado: 'Distrito Capital',
        calle: 'Calle Ejemplo'
    },
    saludar(){
        console.log (`¡Hola! Soy ${persona.nombre}`)
    }
}


// Tambien se pueden guardar 'metodos', que son funciones dentro de un objeto. En el ejemplo anterior seria 'saludar()'

// Para poder utilizar ese metodo del objeto 'persona' seria de la siguiente forma: objeto.metodo(parametros si es que tiene)
persona.saludar() // ¡Hola! Soy Anthony