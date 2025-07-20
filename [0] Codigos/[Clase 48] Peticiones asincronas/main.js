// Si quisieramos hacer varias peticiones en una misma pagina, lo realizariamos con un 'for await of'

// Es un bucle para iterar sobre objetos iterables asincronos.

// La diferencia del for of es que se utiliza para objetos iterables SINCRONOS, mientras que for await of esta diseñado especificamente para manejar objetos asincronos.

// Ejemplo:


// Este array guardara varios tipos de peticiones, entre ellas a las APIs zorros, gatos y perros. 
const URLS = [
    "https://randomfox.ca/floof",
    "https://api.thecatapi.com/v1/images/search", 
    "https://api.thedogapi.com/v1/images/search"
]

async function fetchNewData(){
    try {
        for await (let URL of URLS){ // Ciclo for await. Por cada URL en el array URLS:
            let response = await fetch(URL)
            let data = await response.json()
            console.log(data)
        }
    }
    catch(error){
        console.log ('[ERROR]:', error)
    }
}

fetchNewData()