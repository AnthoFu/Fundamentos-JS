// Los 'Arrays' son capaces de guardar muchos valores en una sola variable, estos 'Arrays' son objetos, es decir, pueden tener propiedades.

// Como crear arrays: 

// 1. new Array() o Array()

const frutas = Array('Cambur', 'Manzana', 'Tomate')

console.log (frutas) // ['Cambur', 'Manzana', 'Tomate']

// Con este tipo de array no podemos asignar un solo numero.

const numero = Array(1)
console.log(numero) // [ <1 empty item> ]

const numeros = Array (1, 2, 3, 4, 5, 6, 7)
console.log(numeros) // [  1, 2, 3, 4, 5, 6, 7 ]

// La forma mas comun actualmente para asignar arrays es declarandolo de la siguiente forma:

const unNumero = [1]
console.log (unNumero) // [ 1 ]

//Tambien podemos crear arrays vacias, que pueden ser llenadas despues.

const arrayVacia = []
console.log (arrayVacia) // []

// Los arrays pueden tener varios tipos de datos al mismo tiempo, hasta objetos.

const arrayConVariosTipos = [
    'Soy un texto',
    10,
    {
        texto:'Soy un objeto',
        propiedad: 'Y tambien tengo propiedades'
    },
    true
]

console.log (arrayConVariosTipos) // ['Soy un texto', 10, { texto: 'Soy un objeto', propiedad: 'Y tambien tengo propiedades' },true]


// Para acceder a elementos en arrays podemos tomarlos mediante sus indices. Siempre empezando por 0.

const primeraFruta = frutas[0] // Con el indice 0, es decir el '[0]' tomaremos la fruta que este de primera en el array.

console.log (primeraFruta)

// Para saber la cantidad de elementos en un array, podemos utilizar el metodo .length.

const cantidadTotalFrutas = frutas.length
console.log ('[TotalFrutas]:', cantidadTotalFrutas)