// Los metodos filter() y reduce() son inmutables, es decir, crean un nuevo array, sin dañar el array original.


// El metodo filter, como su nombre indica, permite filtrar mediante una condicion que le coloquemos.
// Ejemplo de filter()

const numeros = [1,2,3,4,5,6,7,8,9,10]

const numerosPares = numeros.filter(numeros => numeros % 2 === 0)
const numerosImpares = numeros.filter(numeros => numeros % 2)

console.log('[Numeros]:', numeros)
console.log('[Numeros pares]:', numerosPares)
console.log('[Numeros impares]:', numerosImpares)

// El metodo reduce() permite reducir elementos del array a un solo valor.
// Ejemplo de reduce()

const numeroASumar = [1,2,3,4,5]
const suma = numeroASumar.reduce((acumulador, valorActual) => acumulador + valorActual, 0)
// Aqui lo que hacemos es pasarle 2 parametros, el numero acumulador y el numero del valor actual, se hace la suma al acumulador y por ultimo se colocla el valor por defecto, 0

console.log ('[Array a sumar]:', numeroASumar) // [Array a sumar]: [ 1, 2, 3, 4, 5 ]
console.log ('[Total suma]:', suma) // [Total suma]: 15

// Segundo ejemplo de reduce()
// Verificador de cuantas veces se repite una palabra
const palabras = ['Manzana', 'Cambur', 'Hola', 'Adios', 'Cambur', 'Adios', 'Adios']
const frecuenciaPalabras= palabras.reduce((acumulador, valorActual) => {
    if (acumulador[valorActual]) {
        acumulador[valorActual] = acumulador[valorActual] + 1 // Se suma 1
    } else {
        acumulador[valorActual] = 1 // Si no existe, el valor por defecto sera 1.
    }

    return acumulador
}, {} ) // Aqui colocamos por defecto que el valor inicial sea un objeto vacio '{}'

console.log ('[Frecuencia de palabras]:', frecuenciaPalabras)