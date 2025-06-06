// For of permite operar un array que sea *ITERABLE*
// Si el array no es iterable, nos saldra error: TypeError:'x' is not iterable.

// La forma de utilizarlo es:

// for (variable of array){
//codigo
//}


// Ejemplo con un array de frutas

const listaFrutas = [
    'manzana',
    'pera',
    'mango',
    'patilla'
]

for (fruta of frutas){
    console.log(fruta);
}
