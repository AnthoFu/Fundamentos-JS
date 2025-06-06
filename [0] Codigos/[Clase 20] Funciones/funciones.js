// Las funciones permiten utilizar codigo de forma repetida sin la necesidad de escribir ese codigo una y otra vez.
// Estas funciones se reservan con la palabra 'function' y se pueden llamar desde cualquier parte del codigo.
// La estructura de una función es la siguiente:

function nombreFuncion(parametros) {
    // codigo a ejecutar
}

// Un ejemplo sencillo para sumar dos numeros podria ser:

function sumar(numero1, numero2){
    return numero1 + numero2;
}

// En este caso, la función 'sumar' toma dos parámetros (numero1 y numero2) y devuelve su suma.
// Para llamar a la función y obtener el resultado, se puede hacer de la siguiente manera:

const resultado = sumar(5, 10); // Aqui llamamos a la funcion sumar y les asignamos los parametros 5 y 10.
console.log('Se ha realizado la suma de 5 y 10:', resultado); // Esto imprimirá 15


// Para seguir el ejemplo de la clase de calcular el descuento de ciertos productos, vamos a crear la funcion 'calcularDescuento'

function calcularDescuento(precio, porcentajeDescuento) {
    const descuento = (precio * porcentajeDescuento) / 100; // Aqui se calcula el descuento
    const precioFinal = precio - descuento; // Aqui se calcula el precio final
    return precioFinal; // La funcion devuelve el precio final
}

// Ahora podemos llamar a la funcion 'calcularDescuento' con los parametros que queramos
const precioOriginal = 100; // Precio original del producto
const porcentajeDescuento = 20; // Porcentaje de descuento a aplicar
const precioConDescuento = calcularDescuento(precioOriginal, porcentajeDescuento);
console.log('El precio original es:', precioOriginal , '$');
console.log('El precio final con descuento es:', precioConDescuento, '$');