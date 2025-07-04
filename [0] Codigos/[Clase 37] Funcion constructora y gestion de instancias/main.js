// Para poder construir estos objetos, sin la nececidad de ir uno por uno creando cada una de las propiedades
// Y cada uno de los metodos, existe la funcion 'Constructor'

// Este permite crear objetos con una base ya predefinida.

// Ejemplo de objeto persona:

/*
const persona = {
    nombre: 'Anthony',
    apellido: 'Fuentes',
    edad: 20
    }
*/


// Para construir 'personas', crearemos una funcion del nombre del objeto que vamos a construir, pero con la primmera letra mayuscula.
function Persona (nombre, apellido, edad){
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
}

const persona1 = new Persona('Anthony', 'Fuentes', 20)
console.log ('[Persona 1 creada]:', persona1) // [Persona 1 creada]: Persona { nombre: 'Anthony', apellido: 'Fuentes', edad: 20 }

const persona2 = new Persona('Jonathan', 'Torres', 27)
console.log ('[Persona 2 creada]:', persona2) // [Persona 2 creada]: Persona { nombre: 'Jonathan', apellido: 'Torres', edad: 27 }

// Todas las funciones tienen la propiedad prototype, que nos permite compartir y/o heredar propiedades y/o metodos.

Persona.prototype.pais = 'Venezuela'
// Aunque no se veran directamente en el objeto, al intentar obtener el valor de persona.pais todas las instancias lo tendran.

console.log ('[Pais persona 1]:', persona1.pais)

console.log ('[Pais persona 2]:', persona2.pais)


// Tambien se pueden agregar funciones como prototipo.

Persona.prototype.saludar = function() {
    console.log (`Hola, me llamo ${this.nombre}`)
}

persona1.saludar() // Hola, me llamo Anthony
persona2.saludar() // Hola, me llamo Jonathan