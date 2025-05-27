// El "If" significa "si" en ingles. Se utiliza para condicionar si una condicion es verdadera o falsa.

// Ejemplo
const separador = '----------------------------------'
let variable = 'algo'

if (variable === 'algo'){
    console.log('Este es el console.log cuando se comple la condicion')
    console.log(separador)
} // Este es el console.log cuando se cumple la condicion

// Mientras tanto, el "Else" significaria "todo lo demas", lo que sucede cuando la condicion if no se cumple

if (variable === 'diferente'){
    console.log('Este es el console.log cuando se completa la condicion')
    console.log(separador)
} else {
    console.log('No se cumplio la condicion')
    console.log(separador)
} // No se cumplio la condicion

// Por ultimo, el "else if" es un if que sucede cuando el if anterior no se ejecuta, ejemplo:

if (variable === 'diferente'){
    console.log('Este es el console.log cuando se completa la condicion')
    console.log(separador)
} else if (variable === 'algo'){
    console.log ('Se cumplio el Else If')
    console.log (separador)
} else {
    console.log ('No se cumplio ninguna de las condiciones')
    console.log (separador)
} // Se cumplio el Else If