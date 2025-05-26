// 1. Tipo de dato entero y decimal
const entero = 42
const decimal = 3.14

// Para saber el tipo de dato de una constante podemos utilizar "typeof" 
console.log (typeof entero, typeof decimal) // Salida: number number

// 2. Notacion cientifica
const cientifico = 5e3

// 3. Infinitos y NaN (not a number)
const infinito = Infinity
const noEsUnNumero = NaN

console.log (typeof cientifico, typeof cientifico, typeof infinito, typeof noEsUnNumero) // Salida: number number number number