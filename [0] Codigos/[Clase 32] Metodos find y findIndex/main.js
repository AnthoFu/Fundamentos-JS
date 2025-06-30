// Otros metodos para iterar en el array, y no modifican el array original (inmutables) son find() y findIndex()


// find() nos permite encontrar el PRIMER ELEMENTO que cumpla con la condicion dada
//Ejemplo de find()
// Encontar el primer numero mayor a 10

const multiplosDe5 = [5,10,15,20,25]

const primerNumeroMayorA10 = multiplosDe5.find (numero => numero > 10) // Encuentrame el primer elemento mayor a 10

console.log ('[Multiplos de 5]:', multiplosDe5) // [Multiplos de 5]: [ 5, 10, 15, 20, 25 ]
console.log ('[Primer numero mayor a 10]:', primerNumeroMayorA10) // [Primer numero mayor a 10]: 15

// findIndex() nos permite encontrar LA UBICACION EN EL ARRAY del PRIMER ELEMENTO que cumpla la condicion
// Ejemplo de findIndex()

const numerosAleatorios = [12, 32, 53, 15, 19, 0, 23]
const primerNumeroAleatorio = numerosAleatorios.findIndex(numero => numero > 30)

console.log ('[Numeros aleatorios]:', numerosAleatorios) //[Numeros aleatorios]: [12, 32, 53, 15, 19,  0, 23 ]
console.log ('[Ubicacion en el array del primer numero mayor a 30]:', primerNumeroAleatorio) // [Ubicacion en el array del primer numero mayor a 30]: 1
// (Recordemos que los arrays empiezan por 0, es decir, que 1 seria el segundo elemento en el array, osea 32)