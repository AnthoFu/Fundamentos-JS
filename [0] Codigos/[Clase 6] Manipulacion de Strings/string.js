// Tipo de dato: String

let string1= 'Hola, mundo' // Aca no se puede concatenar
let string2= "Viva JavaScript ;)" // Aqui no se puede concatenar
let string3= `Aqui se pueden concatenar strings ejemplo: ${string1} :D` // Aqui se puede concatenar con ${}
let string4= string1 + ' ' + string2 // Se pueden juntar varias strings

console.log (string1) // Salida: Hola, mundo
console.log (string2) // Salida: Viva JavaScript ;)
console.log (string3) // Salida: Aqui se pueden concatenar strings ejemplo: Hola, mundo :D
console.log (string4) // Salida: Hola mundo Viva JavaScript ;)

//.length
// Para poder saber cuantos caracteres hay en un string podemos utilizar el metodo .length
console.log('El número de caracteres del string 4 es:', string4.length)

//.toLowerCase
// Para poder convertir un string a minuscula utilizamos el metodo .toLowerCase()
console.log(string4.toLowerCase())

//.toUpperCase
// Para poder convertir un string a mayusculas utilizamos el metodo .toUpperCase()
console.log(string4.toUpperCase())

//.substring
// Para poder tomar una serie de caracteres del string utilizamos el metodo .substring(inicio,final)
console.log(string4.substring(0 , 4))