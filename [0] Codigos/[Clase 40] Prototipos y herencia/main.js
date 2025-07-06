/* 
La propiedad 'prototipo' solo existe en clases de javascript o en funciones constructoras.

El prototipo tendra los mismos metodos y propiedades de la clase principal.
*/

// Ejemplo

class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido(){
        console.log (`El animal ${this.nombre} emite un sonido`)
    }
}

// Si quisieramos diferenciar por otra categoria, como por ejemplo, razas de perro tendriamos que crear otra clase

//Como esta clase va a obtener cosas de la clase animal, le ponemos 'extends Animal', asi podemos utilizar ciertas cosas de la clase Animal
class Perro extends Animal{
    constructor(nombre, tipo, raza){
        super(nombre, tipo) // Esta palabra reservada 'super' es la que nos permite extraer datos de la otra clase, en este caso nombre y tipo, por asi decirlo seria la 'herencia'
        this.raza = raza
    }
    emitirSonido(){ // Podemos sobreescribir metodos 
        console.log (`El perro ladra`)
    }
    correr(){
        console.log(`¡${this.nombre} corre alegremente!`)
    }
}
// Todo esto que estamos realizando son solo moldes, todavia no estamos generando instancias
// En resumen, con el extends nos permite utilizar propiedades y metodos de otra clase, mientras que el super nos permite seleccionar cuales propiedades y cuales metodos queremos utilizar

const perro1 = new Perro("Love", "Perro", "Puddle")

console.log (perro1) // Perro { nombre: 'Love', tipo: 'Perro', raza: 'Puddle' }
perro1.correr() // ¡Love corre alegremente!
perro1.emitirSonido() // El perro ladra