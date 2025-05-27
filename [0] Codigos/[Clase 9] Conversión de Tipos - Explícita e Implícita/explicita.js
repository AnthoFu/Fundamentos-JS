// Conversion de tipos - Explicita

const string = '123';
console.log('[String]:',string); // '123'
console.log('[Tipo String]:', typeof string); // 'string'

const numero = parseInt(string); // Esta funcion convierte un string a un numero entero
console.log('[String con parseInt]:' ,numero); // 123
console.log('[Tipo String con parseInt]:',typeof numero); // 'number'

const stringDecimal = '123.45';
const numeroDecimal = parseFloat(stringDecimal); // Esta funcion convierte un string a un numero decimal
console.log('[String con parseFloat]:',numeroDecimal); // 123.45
console.log('[Tipo String con parseFloat]:',typeof numeroDecimal); // 'number'

const binario = '1010';
const numeroBinario = parseInt(binario, 2); // Convierte un string binario a un numero entero
console.log('[String binario con parseInt]:', numeroBinario); // 10
console.log('[Tipo String binario con parseInt]:', typeof numeroBinario); // 'number'