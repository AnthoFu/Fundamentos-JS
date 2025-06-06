// En el caso del ciclo for in este se especializa para los objetos no iterables, los objetos '{}', mientras que los arrays son '[]'.
// Con los objetos {} no se les puede utilizar el ciclo for of, sino el metodo for in.

// La estructura es la siguiente:

// los objetos son asi:
// {
// variable: o valor
//}

// for (variable in objeto){
//codigo
//}

//Un ejemplo con la lista de frutas:

const listaFrutas = {
    Manzana: 5,
    Pera: 3,
    Melon: 2,
    Naranja: 1,
}

for (fruta in listaFrutas){
    console.log(fruta) // Esto retornaria cada una de las frutas
}

/* Si lo intentamos con el ciclo for of, nos dara el error 'TypeError: listaFrutas is not iterable'
for (fruta of listaFrutas){
    console.log(fruta)
}
*/

// Para poder tambien saber el valor de las frutas, podriamos hacer lo siguiente:
for (fruta in listaFrutas){
    console.log(`[La fruta ${fruta} tiene un stock de ${listaFrutas[fruta]}]`) // Esto retornaria cada una de las frutas y su cantidad
}

// Si intentaramos iterar un array con el ciclo for in, nos retornaria los indices del array, no los valores.
const listaFrutasArray = [
    'manzana',
    'pera',
    'mango',
    'patilla'
];

for (fruta in listaFrutasArray){
    console.log(fruta); // Esto retornaria los indices del array: 0, 1, 2, 3
}