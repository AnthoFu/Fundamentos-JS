// 'this' es una palabra reservada que se utiliza al momento de estar trabajando con clases.

// this hace referencia al objeto mismo, es decir, si estamos en el objeto perro1, para acceder al nombre de este objeto utilizamos this.nombre

// Ejemplo:

class Persona {
    constructor(nombre, edad){
        this.nombre=nombre // This hace referencia a persona.nombre, mientras que nombre sin el this hace referencia al constructor.
        this.edad=edad
    }
}

// Ejemplo al crear una persona
const persona1 = new Persona('Anthony', 20)

// Al utilizar el 'new Persona' toma los valores del constructor, para poder crear este objeto.

console.log(Persona) // [class Persona]
console.log(persona1) // Persona { nombre: 'Anthony', edad: 20 }

// Por ultimo, para agregar un metodo solamente a un objeto, en vez de todos, elegimos el objeto. 

persona1.NuevoMetodo = function () {
    console.log (`Mi nombre es ${this.nombre}`) // Aqui hace referencia a la instancia persona1, para obtener el valor de su objeto.
}
persona1.NuevoMetodo()