// El bucle for es una estructura que se utiliza para repetir un bloque de codigo un numero determinado de veces.
// Se usa cuando hay tareas repetitivas, como iterar sobre los elementos de un array o realizar un calculo un numero especifico de veces.

// La estructura seria la siguiente:

// ! for (variable; condicion; incremento){
// codigo a ejecutar
//}


// Probemos con una lista de strings el ciclo for.

const tareasProgramador = [
    "comer()",
    "dormir()",
    "programar()",
    "repetir()"
]

for (let i = 0; // Este es el 'index', el numero a iterar
    i < tareasProgramador.length; // Si i es menor a la logitud del array
    i++ )// Se suma 1 numero al numero I y se ejecuta el codigo entre las llaves '{}'
    {
    console.log(tareasProgramador[i]) // Imprime en pantalla cada vez que se ejecuta el ciclo 'for' el elemento list con ese numero
}