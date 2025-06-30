// Si deseamos sacar un pedacito del array que necesitamos, podemos utilizar el metodo slice(), este metodo es inmutable, es decir, no modifica el array original.

// Ejemplo de slice()

const contenedorAnimales = ['Hormiga', 'Camello', 'Pato', 'Perro', 'Elefante']

//Si le asignamos solo un valor, comenzara el corte desde ese index del array.
const primerCorte = contenedorAnimales.slice(2) // Comenzaria desde el segundo elemento (no lo cuenta), es decir, tomara los valores desde 'Pato'

//Si le asignamos dos valores, nos mostrara los valores ENTRE esos dos elementos, ejemplo
const segundoCorte = contenedorAnimales.slice(1, 3) // Empieza desde Hormiga y termina en Perro, es decir, los valores entre esos dos es 'Camello' y 'Pato'

//Si le asignamos un valor NEGATIVO, tomara de adelante para atras, es decir, desde el final del array.
const tercerCorte = contenedorAnimales.slice(-3) // Comenzaria desde el tercer elemento desde el final (QUE SI LO CUENTA), es decir, toma los valores desde 'Pato' 

// Por ultimo, podemos utilizar valores negativos y positivos en las mismas propiedades.
const cuartoCorte = contenedorAnimales.slice(1, -3) // Comenzaria desde 'Camello' (si lo cuenta) y terminaria en 'Pato' (no lo cuenta)

// Si lo dejamos vacio, nos devolvera todo el array.
const quintoCorte = contenedorAnimales.slice()

console.log ('[Contenedor Animales]:', contenedorAnimales) // ['Hormiga', 'Camello', 'Pato', 'Perro', 'Elefante']
console.log ('[Primer Corte]:', primerCorte) // [ 'Pato', 'Perro', 'Elefante' ]
console.log ('[Segundo Corte]:', segundoCorte) // [ 'Camello', 'Pato' ]
console.log ('[Tercer Corte]:', tercerCorte) // [ 'Pato', 'Perro', 'Elefante' ]
console.log ('[Cuarto Corte]:', cuartoCorte) // [ 'Camello' ]
console.log ('[Quinto Corte]:', quintoCorte) // [ 'Hormiga', 'Camello', 'Pato', 'Perro', 'Elefante' ]