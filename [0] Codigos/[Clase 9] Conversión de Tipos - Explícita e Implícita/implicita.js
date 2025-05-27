// JavaScript tiene la particularidad de que no es necesario declarar el tipo de una variable al momento de crearla,
// por lo que se puede cambiar el tipo de una variable en cualquier momento.


// Si se suma un numero con un string, JavaScript convierte el numero a string y realiza la concatenación.
const suma = 5 + '3'; // Suma un numero con un string
console.log('[Suma de numero y string]:', suma); // '53'


// Si se suma un string con un booleano, JavaScript convierte el booleano a number y realiza la suma.
const sumaWithBoolean = 5 + true; // Suma un numero con un booleano
console.log('[Suma de numero y booleano]:', sumaWithBoolean); // '6'

// Si se suma un string con un booleano, JavaScript convierte el booleano a string y realiza la concatenación.
const sumaWithStringAndBoolean = '5' + true; // Suma un string con un booleano
console.log('[Suma de string y booleano]:', sumaWithStringAndBoolean); // '5true'

const ValorString = '10';
const ValorNumero = 10;
const ValorBooleano = true;
console.log('----------------------------------') // Separador
console.log('[String + String]:', ValorString + ValorString); // '1010' Concatena
console.log('[String + numero]:', ValorString + ValorNumero); // '1010' Concatena
console.log('[String + booleano]:', ValorString + ValorBooleano); // '1010true' Concatena
console.log('[Numero + booleano]:', ValorNumero + ValorBooleano); // '11' Suma
console.log('[Numero + String]:', ValorNumero + ValorString); // '1010' Concatena
console.log('[Booleano + String]:', ValorBooleano + ValorString); // 'true10' Concatena
console.log('[Booleano + numero]:', ValorBooleano + ValorNumero); // '11' Suma
console.log('[Suma de string, numero y booleano]:', ValorString + ValorNumero + ValorBooleano); // '310true' // Concatena


// Truco: Cómo saber si JavaScript concatena o suma:

//Si hay al menos un string, JavaScript concatena.
//Si no hay ningún string, JavaScript realiza una suma.