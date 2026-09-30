// Funciones - Functions Expression

// Declaracion de funcion
function sumarDeclaration(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarDeclaration(10,10))

// Expresion de funciones
const sumarExpression = function(n1=0, n2=0){
    return n1 + n2
}

console.log(sumarExpression(10 + 203))

//-----------
//-----------


// Funciones - Arrow Functions
const sumarArrow = (n1=0, n2=0) => {
    return n1 + n2 
}
console.log(sumarArrow(5, 50))

const sumarArrow2 = (n1=0, n2=0) => n1 + n2 
console.log(sumarArrow2(10, 20)) 

// Arrow Functions y Array Methods
const lenguajesDeProgramacion = ["JavaScript", "Python", "C#", "Ruby", "PHP", "LISP"]

const nuevoArray = lenguajesDeProgramacion.map(function(lenguaje){
    if(lenguaje === 'Python'){
        return `Mojo`
    }else{
        return lenguaje
    }
})

const nuevoArrayMap = lenguajesDeProgramacion.map(lenguaje => {
    if(lenguaje === 'Python'){
        return `ArrowMojo`
    }else{
        return lenguaje
    }
}) 

console.log(nuevoArray)
console.log(nuevoArrayMap)

const nuevoArray2 = lenguajesDeProgramacion.filter(function(lenguaje){
    return lenguaje === 'JavaScript'

})

const nuevoArrayFilterArrow = lenguajesDeProgramacion.filter(lenguaje => {
    return lenguaje !== 'JavaScript'

})


console.log(nuevoArray2)
console.log(nuevoArrayFilterArrow)