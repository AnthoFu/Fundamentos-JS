// 1. Suma, resta, division y multiplicacion
const suma = 3 + 4
const resta = 4 - 3
const multiplicacion = 4 * 7
const division = 16 / 4 

console.log('[Suma]:', suma, '[Resta]:', resta, '[Multiplicacion]:', multiplicacion, '[Division]:', division)

// 2. Módulo y exponienciacion (o potencia)
const modulo = 15 % 8 // Sirve para saber si un numero es multiplo de otro numero
const exponienciacion = 2 ** 3 // sirve para sacar la potencia

// 3. Precisión 
// JavaScript no tiene completa presición acerca de números, hay que estar pediente de eso.
const resultado = 0.1 + 0.2
console.log ('[Resultado sin fixed]:' ,resultado) // salida: 0.30000000000000004

// Para evitar que pase esto, podemos utilizar el metodo toFixed(numeroDeDecimales)
console.log ('[Resultado con fixed(1)]', resultado.toFixed(1)) // salida: 0.3

console.log ('[¿Es resultado = 0.3?]:', resultado === 0.3) // Esto dara false, porque "resultado" es 0.30000000000000004, no 0.3

// 4. Operaciones avanzadas

//Para sacar la raiz cuadrada de un número, podemos utilizar la variable (ya instalada en el NodeJS) 'Math' con el metodo .sqrt(numero que se desea sacar la raíz cuadrada)
const raizCuadrada = Math.sqrt(16)
console.log('[Raiz Cuadrada]:', raizCuadrada)

//Para sacar el valor absoluto de un número podemos utilizar el metodo .abs(numeroASacarValorAbsoluto) de la variable 'Math'
const valorAbsoluto = Math.abs(-7)
console.log('[Valor absoluto]:', valorAbsoluto)

// Para sacar un número aleatorio podemos utilizar el metodo .random() de la variable 'Math', que dara un valor entre 0 a 1
const aleatorio = Math.random() 
console.log('[Numero aleatorio]', aleatorio)