// async y await es una forma mas 'legible' para utilizar asincronismo en JavaScript.

// Usaremos un ejemplo parecido al anterior pero con async y await.

// En la clase utilizan una API de rick and morty, pero yo en este caso usare una de gatos. (Ya que no soy muy fan de esa serie)
function fetchData (){
    fetch("https://api.thecatapi.com/v1/images/search")

    .then((response)=> response.json())

    .then((data) => console.log('[fetchData]:',data))

    .catch((error)=> console.log('[fetchData]:', error))
}

fetchData() // Aqui obtendremos un objeto parecido a este:

/*
    {
        id: 'K3eHRIQXM',
        url: 'https://cdn2.thecatapi.com/images/K3eHRIQXM.jpg',
        width: 1600,
        height: 1200
    }
*/


// Esta es la forma antigua, con promesas.

// Ahora hagamoslo con el async y await.

// Esta forma nos permite utilizar "try" y "catch" (el catch muy parecido al catch de las promesas convencionales)

// El try es el intento y el catch es el error si el try falla.

async function fetchDataAsync(){

    try {
        let response = await // El await significa que va a esperar a que se realice este siguiente codigo: 
        fetch("https://api.thecatapi.com/v1/images/search")
        
        // Despues de haberse resuelto el primer await, proseguira este siguiente await:
        let data = await response.json();
        console.log ('[fetchDataAsync]:',data)
    }

    catch (error) { // Aqui espera el error
        console.log ('[fetchDataAsync]:', error) // Esto solo se ejecuta si hubo algun error.
    }
}

fetchDataAsync()