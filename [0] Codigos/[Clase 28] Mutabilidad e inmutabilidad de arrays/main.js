// Los arrays, pueden tener diferentes metodos, pero dependiendo de los metodos podemos mutar (osea transformar el array ya construido) o podrian ser inmutables (crear un array nuevo en vez de modificar el actual)

// Siguiendo el ejemplo anterior de los arrays de frutas, un ejemplo de metodo mutable:

// Metodo push() para agregar un nuevo valor.
const frutas = ['Cambur', 'Manzana', 'Tomate']
console.log ('Antes del push:',frutas) // ['Cambur', 'Manzana', 'Tomate']
frutas.push('Naranja') 
console.log ('Despues de mutar:', frutas) // ['Cambur', 'Manzana', 'Tomate', 'Naranja']

//Ejemplo de inmutabilidad:
// Podriamos crear un nuevo array y utilizar el metodo concat() para agregar un nuevo valor, sin dañar el array original.
const frutasNuevas = frutas.concat('Fresa')
console.log ('Frutas nuevas:', frutas) // ['Cambur', 'Manzana', 'Tomate', 'Naranja', 'Fresa']
console.log ('Frutas:', frutas) // ['Cambur', 'Manzana', 'Tomate', 'Naranja']

// Podemos checkear si una variable es un array con el metodo Array.isArray() el cual nos retornaria un verdadero o un falso.
const isArray = Array.isArray(frutas)
console.log ('Frutas es array:', isArray)


// Ejercicio practico: sumar todos los elementos de un array.

const numerosArray = [1, 2, 3, 4, 5]

let totalSuma = 0

for (let index = 0; index < numerosArray.length; index++ ){
    totalSuma += numerosArray[index]
}

console.log ('Suma de los numeros:', numerosArray)