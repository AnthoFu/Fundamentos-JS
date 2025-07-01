// Los Spread Operators, como su nombre indica, nos permite expandir o esparcir objetos iterables (arrays)

// Algunos usos del spread operators:

// Copiar Arrays 
const viejaArray = [ 1, 2, 3, 4, 5 ]
const nuevaArray = [...viejaArray]
console.log ('[Vieja Array]:', viejaArray)
console.log('[Nueva Array]:', nuevaArray)
console.log('----------------------------')

// Combinar Arrays
const array1 = ['Pan', 'Jamon']
const array2 = ['Queso', 'Mantequilla']
const arrayCombinada = [...array1, ...array2]
console.log ('[Arrays separadas]:', array1, array2)
console.log ('[Array Combinada]:', arrayCombinada)

// Añadir elementos (su uso más común)
const elemento1 = 'Perro'
const elemento2 = 'Tortuga'
var arrayActual = ['Gato', 'Pez']
var arrayActual = [...arrayActual, elemento1, elemento2]

// Añadir como parametros de funciones
//funcionEjemplo (...Argumentos)