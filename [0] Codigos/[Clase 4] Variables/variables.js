// Tipos de variables en JavaScript
// En JavaScript existen varios tipos de variables, cada una con sus propias características y usos.
// Los tipos de variables más comunes son:
// 1. Números: Representan valores numéricos, ya sean enteros o decimales.
let numero = 42; // Entero
let decimal = 3.14; // Decimal
// 2. Cadenas de texto (Strings): Representan secuencias de caracteres, como palabras o frases.
let texto = "Hola mundo"; // Cadena de texto
// 3. Booleanos: Representan valores de verdad, es decir, verdadero (true) o falso (false).
let esVerdadero = true; // Booleano verdadero
let esFalso = false; // Booleano falso
// 4. Objetos: Representan colecciones de propiedades y métodos, permitiendo agrupar datos relacionados.
let persona = {
    nombre: "Juan",
    edad: 30,
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
// 5. Arreglos (Arrays): Representan colecciones ordenadas de elementos, que pueden ser de cualquier tipo.
let numeros = [1, 2, 3, 4, 5]; // Arreglo de números
// 6. Funciones: Son bloques de código reutilizables que pueden recibir parámetros y devolver valores.
function sumar(a, b) {
    return a + b;
}
// 7. Null: Representa la ausencia intencional de un valor.
let nulo = null; // Valor nulo, indica que no hay valor asignado
// 8. Undefined: Representa una variable que ha sido declarada pero no inicializada.
let indefinido; // Variable declarada pero no inicializada, su valor es undefined


// Diferencias de let y const:

// Let es una variable que puede cambiar
// Const es una constante que NO puede cambiar 

// Ejemplo de const:
const pi = 3.14

// Ejemplo de let:
let contador = 0;
contador = contador + 1;