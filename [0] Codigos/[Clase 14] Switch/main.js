// Los Switch se parecen a los "if", "else if", pero a diferencia de estos, la expresion debe si o si ser igual a la expresada.

// Ejemplo:

let expresion = 'expresion'

switch(expresion) {
    case 'noExpresion':
        console.log('Salio el case: [noExpresion]')
        break;

    case 'expresion':
        console.log('Salio el case: [expresion]')
        break;

    case 'quizasExpresion':
        console.log('Salio el case: [quizasExpresion]')
        break;

    default:
        console.log('No salio ninguno de los case')
}

// En este switch case al declarar expresion = 'expresion', saldria el segundo case y sale en pantala 'Salio el case: [expresion]'

// Ejemplo con una lista de precios de frutas:

const listaFrutas = [
    {
        id: 1,
        nombre: 'Manzana 🍎',
        precio: '1$'
    },
    {
        id: 2,
        nombre: 'Patilla 🍉',
        precio: '2$'
    },
    {
        id: 3,
        nombre: 'Melon 🍈',
        precio: '1$'
    }
];

let frutaSeleccionada = listaFrutas.find(fruta => fruta.id === 2); // Aqui buscamos la fruta de id 2, osea, la patilla

switch(frutaSeleccionada.id){
    case 1:
        console.log('El precio de la Manzana es:', frutaSeleccionada.precio);
        break;
    case 2:
        console.log('El precio de la Patilla es:', frutaSeleccionada.precio);
        break;
    case 3:
        console.log('El precio del Melon es:', frutaSeleccionada.precio);
        break;

    default:
        console.log('¡Lo sentimos! No tenemos en stock ese id de producto. :(')
}