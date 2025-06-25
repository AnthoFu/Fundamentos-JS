// Las funciones flecha (o arrow functions) son una forma mas rapida de escribir funciones en JavaScript.
// Se definen con la sintaxis: (parametros) => {cuerpo de la funcion}

// Ejemplo de una función tradicional para sumar dos números:

function sumarTradicional(a, b) {
    return a + b;
}

// Un ejemplo de una función flecha que suma dos números:
const sumar = (a, b) => {
    return a + b;
}; 

// Se puede simplificar aún más si la función solo tiene una línea de código:
const sumarSimplificado = (a, b) => a + b;

// Si la función solo tiene un parámetro, se pueden omitir los paréntesis:
const cuadrado = x => x * x;

// Si no tiene parámetros, se usan paréntesis vacíos:
const saludar = () => '¡Hola!';


// Ejemplo de conversion de una función tradicional a una función flecha:
function saludarTradicional(nombre) {
    return `¡Hola, ${nombre}!`;
}

// Con un return explícito:
const saludarExplicito = (nombre) => {
    return `¡Hola, ${nombre}!`;
}  

// Con un return implícito:
const saludarFlecha = (nombre) => `¡Hola, ${nombre}!`;

// Le podemos quitar los paréntesis si solo hay un parámetro:
const saludarFlechaSimplificado = nombre => `¡Hola, ${nombre}!`


//! Lexical binding (this):
// En las funciones flecha, el valor de `this` se hereda del contexto en el que se define la función.
// Esto significa que no se puede cambiar el valor de `this` dentro de una función flecha, lo que puede ser útil en ciertos casos.
// En cambio, en las funciones tradicionales, el valor de `this` depende de cómo se invoque la función, lo que puede llevar a confusiones si no se maneja correctamente.


const personajeFicticio = {
    nombre: 'AquinoBy2002',
    mandarMensaje: function(mensaje){ // Esta función usa `this` para referirse al objeto actual
        console.log(`${this.nombre} dice: ${mensaje}`); // `this` se refiere al objeto `personajeFicticio`
    },
    mandarMensajeArrow: (mensaje) => { // Esta función flecha no puede usar `this` de la misma manera
        console.log(`${this.nombre} dice: ${mensaje}`); // Aquí `this` no se refiere al objeto `personajeFicticio`, sino al contexto global o al objeto que lo contiene
    }
};

// Ejemplo de uso:
personajeFicticio.mandarMensaje('¡Hola, mundo!'); // Imprime: AquinoBy2002 dice: ¡Hola, mundo!
personajeFicticio.mandarMensajeArrow('¡Hola, mundo!'); // Imprime: undefined dice: ¡Hola, mundo!


// En resumen, las funciones flecha son una forma más concisa de escribir funciones en JavaScript, y su uso puede hacer que el código sea más legible y fácil de entender. 
// Sin embargo, es importante recordar que no son adecuadas para todos los casos, especialmente cuando se necesita un contexto específico de `this` o cuando se requiere una función constructora.
// Por lo tanto, es recomendable usarlas en situaciones donde su sintaxis concisa y el comportamiento de `this` sean beneficiosos, como en funciones de callback o en métodos que no necesitan un contexto específico de `this`.