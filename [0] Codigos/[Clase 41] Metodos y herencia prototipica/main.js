// Vamos a agarrar la clase constructora del ejemplo anterior.

class Animal {
    constructor (nombre, tipo){
        this.nombre = nombre
        this.tipo = tipo
    }
    emitirSonido(){
        console.log (`El animal ${this.nombre} emite un sonido`)
    }
}

// Tambien la clase perro

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


const perro1 = new Perro("Love", "Perro", "Puddle")

// Podriamos agregarle nuevos metodos a un objeto de la siguiente forma:

perro1.nuevoMetodo = function (){
    console.log ('Hola, soy el nuevo metodo de Perro1')
}

perro1.nuevoMetodo() // Hola, soy el nuevo metodo de Perro1

//Aqui estamos agregando un nuevo metodo AL OBJETO perro1, no a la clase Perro en general.
// Para agregarle este nuevo metodo pero directamente al PROTOTIPO de la clase Perro es de la siguiente forma:

Perro.prototype.segundoMetodo= function() {
    console.log('Este es un segundo metodo, agregado al prototipo Perro')
}

perro1.segundoMetodo() // Este es un segundo metodo, agregado al prototipo Perro