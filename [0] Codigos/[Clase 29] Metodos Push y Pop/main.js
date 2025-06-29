// Algunos metodos mutables que modifican el array son el .push() y el .pop(), es decir, modifican el array original.

// Ejemplo de push()

// push permite colocar elementos al final del array.

const paises = ['Venezuela', 'Colombia', 'Brasil']

const nuevoPais = paises.push('Chile', 'Mexico')

console.log (paises) // [ 'Venezuela', 'Colombia', 'Chile', 'Mexico' ]
console.log (nuevoPais) // 5 // Esto nos trae la cantidad total de elementos del array.

// Como se puede notar, aunque intentemos asignarle un nuevo array a los elementos, se modifica el original.
// Esto es lo que se le conoce como 'Mutabilidad'

// Ejemplo de .pop()
// pop permite eliminar el ultimo elemento del final del array.

const eliminarPais = paises.pop()
console.log(paises) // [ 'Venezuela', 'Colombia', 'Brasil' ]
console.log (eliminarPais) // Mexico