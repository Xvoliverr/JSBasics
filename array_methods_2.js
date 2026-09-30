const lenguajesDeProgramacion = ["JavaScript",
    "Python", "C#", "Ruby", "PHP", "LISP",
]

// Filter
nuevoArray = lenguajesDeProgramacion.filter(
    lenguaje => lenguaje === 'JavaScript'
)
console.log(nuevoArray)
// comprobar si un elemento exise
const resultado = lenguajesDeProgramacion.includes('Ruby')
console.log(resultado)

// some - Devuelve si la menos una cumple con la condicion
const numeros = [10, 20, 30, 40, 50]
const resultadoNume = numeros.some(numero => numero > 15)
console.log('resultado', resultadoNume)

// Find - devuelve si el primer elemento que cumpla con la condicion
const resultadoNume2 = numeros.find(numero => numero > 15)
console.log('resultado num 2', resultadoNume2)

// Every - retorna true o false si todos cumplen la condicion
const resultadoNume3 = numeros.every(numero => numero > 15)
console.log('resultado num 3', resultadoNume3)

// Reduce - Acumulador de algun total 
const resultadoNum4 = numeros.reduce((total, numero)=> numero + total, 0)
console.log('resultado num 4', resultadoNum4)

// ForEach = Itera en cada uno de los elementos de un array
const nuevoArray2 = lenguajesDeProgramacion.forEach((lenguaje, index) => console.log(lenguaje))
console.log('Hola')
//console.log('Nuevo Array 2', nuevoArray2)

// Crea un nuevo array a partir de uno original
const arrayMap = lenguajesDeProgramacion.map( lenguaje => lenguaje)
console.log('array map', arrayMap)