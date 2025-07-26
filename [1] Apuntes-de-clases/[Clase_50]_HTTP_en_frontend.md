
# Peticiones HTTP con Fetch en el Front-End

Este documento resume los conceptos clave para manejar peticiones HTTP en el front-end utilizando la API `fetch` de JavaScript. Entender este flujo es fundamental para comunicar nuestras aplicaciones con servidores y APIs externas.

## ¿Qué es HTTP y cómo lo usamos?

HTTP (Hypertext Transfer Protocol) es el protocolo que permite la comunicación entre un cliente (como un navegador web) y un servidor. En el desarrollo front-end, lo utilizamos para solicitar datos (por ejemplo, información de usuarios, artículos de un blog) o para enviar información (como rellenar un formulario).

La principal herramienta en JavaScript moderno para realizar estas peticiones de forma asíncrona es la función `fetch`.

## ¿Cómo funcionan las peticiones con `fetch`?

La función `fetch` permite realizar solicitudes HTTP a un recurso de red (una URL o API). Funciona de manera asíncrona, utilizando Promesas, lo que evita que la página se bloquee mientras espera la respuesta del servidor.

El flujo básico es:
1.  Hacer la petición a una URL.
2.  Recibir una respuesta inicial (objeto `Response`).
3.  Procesar la respuesta (por ejemplo, convertirla a formato JSON).
4.  Trabajar con los datos finales.

```javascript
// Petición GET a una API de ejemplo
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json()) // Convierte la respuesta a JSON
  .then(data => console.log(data));   // Trabaja con los datos
```

## ¿Qué significan los códigos de estado HTTP?

Cada respuesta HTTP viene con un código de estado que indica el resultado de la solicitud. Conocer los más comunes es crucial para depurar problemas.

-   **200 OK**: La solicitud se completó con éxito.
-   **404 Not Found**: El recurso solicitado no se encontró en el servidor.
-   **500 Internal Server Error**: Hubo un error inesperado en el servidor.

> **Recurso divertido**: Para una forma memorable y visual de aprender los códigos de estado, puedes visitar [**http.cat**](https://http.cat/). ¡Cada código está representado por la imagen de un gato!

## ¿Cómo verificar solicitudes en el navegador?

Las herramientas de desarrollo del navegador son nuestras mejores aliadas. En la pestaña **"Network"** (o "Red") podemos monitorear todas las solicitudes HTTP que realiza nuestra página.

Ahí podemos observar:
-   La URL a la que se realiza la petición.
-   El método HTTP utilizado (GET, POST, etc.).
-   El código de estado de la respuesta (ej. `200`).
-   Los datos enviados y recibidos.
-   El tiempo que tardó la solicitud.

## Ejemplo práctico: Interactuando con una API

Podemos usar `fetch` para obtener datos de una API y luego procesarlos para mostrarlos en nuestra aplicación. Por ejemplo, si queremos obtener una lista de publicaciones y mostrar solo sus títulos en la consola:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    // Es una buena práctica verificar si la respuesta fue exitosa
    if (!response.ok) {
      throw new Error('La respuesta de la red no fue exitosa');
    }
    return response.json();
  })
  .then(data => {
    // Procesamos la data para mostrar los títulos
    console.log('Títulos de las publicaciones:');
    data.forEach(post => {
      console.log(`- ${post.title}`);
    });
  })
  .catch(error => {
    console.error('Hubo un problema con la petición fetch:', error);
  });
```

Dominar `fetch` y el protocolo HTTP nos da el control sobre las interacciones entre el front-end y el servidor, permitiéndonos crear experiencias de usuario más ricas y dinámicas.