# Clase 22: Funciones puras e impuras
-----------------------------------------------------
En JavaScript (y en programación funcional en general), las funciones se pueden clasificar como puras o impuras dependiendo de si cumplen con ciertas características.

-----------------------------------------------------
## Función pura

**Una función pura es una función que:**

* Siempre produce el mismo resultado dado el mismo conjunto de argumentos.

* No tiene efectos secundarios, es decir, no modifica ninguna variable externa, ni depende de variables externas que puedan cambiar.

**Ejemplo de función pura:**

```JavaScript
function suma(a, b) {
    return a + b;
}
```

En este ejemplo, la función suma siempre devuelve el mismo resultado para los mismos valores de a y b, y no afecta ni depende de ninguna otra variable fuera de su alcance.

----------------------------------------

## Función impura

**Una función impura es una función que:**

* Puede producir diferentes resultados aún si se le pasan los mismos argumentos.

* Tiene efectos secundarios, como modificar una variable externa, hacer una llamada a una API, modificar el DOM, etc.

**Ejemplo de función impura:**

```JavaScript
let contador = 0;

function incrementarContador() {
    contador += 1;
    return contador;
    }
```

En este ejemplo, la función incrementarContador es impura porque:

Depende de la variable externa contador, y el valor devuelto depende del estado anterior de esta variable.

Modifica la variable externa contador, lo que constituye un efecto secundario.

----------------------------------------
## Resumen

**Función pura:** Predecible y sin efectos secundarios. Ideal para programación funcional.

**Función impura:** Su resultado puede variar y puede modificar el estado externo. Es más común en programación imperativa.

Mantener funciones puras es útil para hacer que el código sea más predecible y fácil de probar, mientras que las funciones impuras son necesarias para interactuar con el mundo externo (como modificar el DOM, hacer solicitudes HTTP, etc.).


