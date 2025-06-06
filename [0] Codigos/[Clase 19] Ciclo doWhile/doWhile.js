// El ciclo doWhile es similar al ciclo while, pero la diferencia clave es que el bloque de código se ejecuta al menos una vez antes de verificar la condición. 
// Esto significa que incluso si la condición es falsa desde el principio, el código dentro del ciclo se ejecutará una vez.

// La estructura es la siguiente:
//
// do {
// codigo
// } while (condicion);

// Un ejemplo sencillo de un ciclo doWhile que imprime números del 1 al 10:
let contador = 1;
do {
    console.log(contador);
    contador++;
} while (contador <= 10);

// En este caso, el ciclo doWhile imprimirá los números del 1 al 10, y luego verificará la condición.
// Si la condición es verdadera, continuará ejecutando el ciclo. Si es falsa, saldrá del ciclo.

