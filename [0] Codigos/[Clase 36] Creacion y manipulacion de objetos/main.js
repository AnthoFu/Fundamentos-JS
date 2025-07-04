/*
Un objeto es una estructura de datos
que los datos se denominan de la siguiente forma:

key / value

Ejemplo de un objeto:

Objeto {
    propiedad: valor,
    propiedad2: valor,
    propiedad3: valor
    
    
    metodos()
}
*/

// Siguiendo el ejemplo de la clase pasada:

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

// Podemos llamar el metodo del objeto con persona.saludar()
persona.saludar() // ¡Hola! Soy Anthony

// Tambien podemos traernos el objeto completo:
console.log('[Persona]:', persona) /*
[Persona]: {
    nombre: 'Anthony',
    edad: 20,
    direccion: {
    pais: 'Venezuela',
    estado: 'Distrito Capital',
    calle: 'Calle Ejemplo'
    },
    saludar: [Function: saludar]
}
    */

// Para obtener valores en especifico es tan sencillo como colocar objeto.propiedad.propiedad
// Ejemplo

console.log('[Direccion de persona]:', persona.direccion) // Nos trae el array completo de direccion
console.log('[Pais de la persona]:', persona.direccion.pais) // Nos trae solo el pais

// Tambien podemos agregar nuevas propiedades

persona.telefono = '0412-1234567' // Es un ejemplo
console.log ('[Persona con telefono]',persona)

// Ademas de propiedades, tambien podemos agregarle metodos.

persona.despedir = () => {
    console.log ('¡Adios!')
}

persona.despedir() // ¡Adios!

// Para poder borrar propiedades y objetos utilizamos la palabra clave 'delete'
// Ejemplo

delete persona.telefono
delete persona.direccion

console.log('[Persona sin telefono ni direccion]:', persona)
