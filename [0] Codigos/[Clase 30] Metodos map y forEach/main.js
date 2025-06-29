// Algunos metodos iterables que son INMUTABLES (no cambian el array original) son map() y forEach().

// Map() permite iterar por cada uno de los elementos de un array.
// Ejemplo:

const numeros = [ 1, 2, 3, 4, 5 ]
const numerosAlCuadrado = numeros.map(numero => numero * numero) // Dentro del metodo map se le tiene que asignar una arrow function, 
// en este caso, tomaremos los elementos del array, los llamaremos 'numero' y los multiplicaremos por ellos mismos. 

console.log (numeros) // [ 1, 2, 3, 4, 5 ]
console.log (numerosAlCuadrado) // [ 1, 4, 9, 16, 25 ]

// forEach() nos permite iterar sobre cada uno de los elementos al igual que .map(), pero este, no nos devolvera el valor en un array.
// Es un poco confuso, pero en el siguiente ejemplo se entiende mejor.

const colores = ['Azul', 'Verde', 'Naranja', 'Rojo']
const coloresIterados = colores.forEach(color => console.log(color)) // Aqui nos traera cada uno de los elementos fuera del array. Azul, Verde, Naranja, Rojo.

console.log (colores) // Azul, Verde, Naranja, Rojo
console.log (coloresIterados) // undefined

// Ejercicio practico 1: Conversión de Farenheit a Celcius
// Crear un programa que tome las temperaturas que estan en Farenheit mediante un input a Celcius.

const temperaturasFarenheit = [32, 68, 95, 104, 212] // Temperaturas de ejemplo para convertir
const temperaturasCelcius = temperaturasFarenheit.map(temperatura => (5/9) * (temperatura -32) ) // 5/9 * temperatura - 32 es la formula de conversion.

console.log('[Farenheit]:',temperaturasFarenheit) // [Farenheit]: [ 32, 68, 95, 104, 212 ]
console.log ('[Celcius]:',temperaturasCelcius) // [Celcius]: [ 0, 20, 35, 40, 100 ]

// Ejercicio practico 2: Suma de elementos en un array
// Crear un programa que tome los numeros de un array y calcule la suma de todos los elementos del array

const numerosASumar = [ 1, 2, 3, 4, 5 ]
let suma = 0

numerosASumar.forEach(numero => {
    suma += numero
})

console.log ('[Numeros a sumar]:',numerosASumar) // [Numeros a sumar]: [ 1, 2, 3, 4, 5 ]
console.log ('[Suma total]:', suma) // [Suma total]: 15