// Las clases en javascript son una forma mas sencilla de crear objetos y manejar la herencia.

// Por asi decirlo, es una 'envoltura' para las funciones constructoras tradicionales que proporcina una sintaxis mas clara y concisa.

// Para crear una clase se utiliza la palabra reservada 'Class'

class Persona {
    constructor(nombre, edad) { // Las propiedades necesarias son nombre y edad
        this.nombre = nombre
        this.edad = edad
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`)
    }
}

// Para crear un nuevo objeto o instancia con las clases es de la siguiente forma:

const persona1 = new Persona('Anthony', '20')
// Igual que en la anterior clase, la palabra reservada 'new' llama a la funcion constructor.

persona1.saludar() // Hola, mi nombre es Anthony y tengo 20 años.