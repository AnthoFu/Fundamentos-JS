/*
    * Operadores de comparación en JavaScript
*/

// == Igualdad (Devuelve true si los valores son iguales, sin importar el tipo)
console.log('5 == "5":', 5 == '5'); // true, porque compara el valor sin importar el tipo

// === Igualdad estricta (Devuelve true si los valores y tipos son iguales)
console.log('5 === "5":', 5 === '5'); // false, porque compara el valor y el tipo

// != Desigualdad (Devuelve true si los valores son diferentes, sin importar el tipo)
console.log('5 != "5":', 5 != '5'); // false, porque compara el valor sin importar el tipo

// !== Desigualdad estricta (Devuelve true si los valores y tipos son diferentes)
console.log('5 !== "5":', 5 !== '5'); // true, porque compara el valor y el tipo

// > Mayor que (Devuelve true si el valor de la izquierda es mayor que el de la derecha)
console.log('5 > 3:', 5 > 3); // true

// < Menor que (Devuelve true si el valor de la izquierda es menor que el de la derecha)
console.log('5 < 3:', 5 < 3); // false

// >= Mayor o igual que (Devuelve true si el valor de la izquierda es mayor o igual que el de la derecha)
console.log('5 >= 5:', 5 >= 5); // true

// <= Menor o igual que (Devuelve true si el valor de la izquierda es menor o igual que el de la derecha)
console.log('5 <= 3:', 5 <= 3); // false