/*
    * Operadores lógicos en JavaScript
*/

const a = 10;
const b = 20;
const c = "10";
const separadror = '---------------------------------';

// && (AND) - Devuelve true si ambos operandos son verdaderos

console.log('a == b && a === c:', a == b && a === c); // false

console.log(separadror)

console.log('a < b && a == c:', a < b && a == c); // true

console.log(separadror)

console.log('false && false:', false && false); // false

console.log(separadror)

// || (OR) - Devuelve true si al menos uno de los operandos es verdadero

console.log('a < b || a == c:', a < b || a == c); // true

console.log(separadror)

console.log('b = 20 || c = "10":', b == 20 || c == "10"); // true

console.log(separadror)

console.log('c = 10 || c = 11:', c==10 || c==11); // true 

console.log(separadror)
// ! (NOT) - Invierte el valor del operando

console.log('a != 20:', a !== 20); // false

console.log(separadror)

console.log('c != 10:', c !== 10); // false

console.log(separadror)

// Combinación de operadores lógicos

console.log('a < b && c == 10:', a < b && c == 10); // true

console.log(separadror)

console.log('a > b || c != 10:', a > b || c != 10); // false

