// Las promesas son funciones que pueden suceder ahora, despues, o nunca.

// La forma de declarar una promesa es con la palabra reservada Promise()

// Los estados son los siguientes:

// pending
// fullfilled 
// rejected

// los resultados pueden ser los siguientes:

// resolve
// reject

// Los metodos para manejar promesas son:

//then()
//catch()


// Ejemplo

const promesa = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let operacionExitosa = true;
    if(!operacionExitosa){
        resolve("La operacion fue exitosa.")
    } else{
        reject ("Fallo la operacion")
    }
    },2000)
})

console.log(promesa)
promesa
    .then((mensajeExitoso)=> {
        console.log(mensajeExitoso)
    })
    .catch((mensajeError) => {
        console.log(mensajeError)
    })
