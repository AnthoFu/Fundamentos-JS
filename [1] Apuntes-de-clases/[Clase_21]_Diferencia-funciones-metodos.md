# Funciones

Cuando escribimos una funcion, la escribimos y la llamamos. 
Si le pedimos el "typeof" esta nos retornará que es una función.

## Caracteristicas de las funciones al igual que los objetos:

### Pueden pasar funciones como argumentos (callbacks).

**Ejemplo:**

``` javascript
function a (){}; // Primera funcion, la que sera llamada por la segunda.

function b(a){}; // Segunda funcion, que utiliza como parametro la primera funcion.

b(a); // Ejecucion de la segunda funcion, con el parametro de la primera funcion.
```

### Pueden escribir funciones dentro de otras funciones, de la siguiente forma.

**Ejemplo:**
``` javascript
function a (){ // Funcion principal.
    function b(){
        // Aqui iria la logica de la segunda funcion
    }
    return b // Retornamos la segunda funcion.
}
```

### Se le pueden asignar funciones a las variables, a esto se le conoce como 'Expresion de funcion'.

**Ejemplo:**

``` javascript
const a = function(){} // Asignamos una funcion a una variable.
```

### Pueden tener propiedades y metodos.

**Ejemplo**:

``` javascript
function a (){} // Funcion que tiene propiedades y metodos.
const obj = {} // Objeto que contiene propiedades y metodos.
a.call(obj) // Llamamos al metodo 'call' de la funcion 'a', pasando como contexto el objeto 'obj'.
```

### Pueden ser anidadas (Nested functions).

**Ejemplo:**

``` javascript
function a (){ // Funcion principal.
    function b(){ // Funcion anidada.
        function c(){ // Funcion anidada dentro de la funcion anidada.
            // Aqui iria la logica de la funcion anidada.
        }
        c(); // Llamamos a la funcion anidada dentro de la funcion anidada.
    }
    b(); // Llamamos a la funcion anidada.
}
```

### Pueden almacenarse funciones dentro de objetos.

**Ejemplo:**

``` javascript
const rocket = {
    nombre: 'Falcon 9',
    mensajeAlLanzar: function(){
        console.log(`¡El cohete ${this.nombre} ha sido lanzado!`);
    }
}
rocket.mensajeAlLanzar(); // Llamamos al metodo del objeto 'rocket'.
```

En conclusión, una función es un bloque de código que se puede ejecutar y que puede tener propiedades y métodos, al igual que los objetos. Mientras que los métodos son funciones que están asociadas a un objeto y se invocan con el contexto de ese objeto. 