let numeros = [1, 2, 3, 4, 5, 6, 7]
numeros.forEach((numero) => console.log(numero))

//

let numeros2 = [1, 2, 3, 4, 5, 6, 7]
multiplo_5 = numeros2.map( numero => numero *5)
console.log('Multiplo de 5', multiplo_5)

// 

let numeros3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20]
 filtrar = numeros3.filter(
    numero => numero % 2 === 0
)
console.log('pares', filtrar)

//

let numeros4 = [10, 20, 30, 40, 50, 60]
numeromayor = numeros4.find(numero => numero > 45)
console.log('Numero mayor a 45 ', numeromayor)

//

let frutas = ["Manzana", "Naranja", "Fresa"]
resultado = frutas.includes('Fresa')
console.log(resultado)

//

let numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const resultado5 = numeros5.slice(1, 4)
console.log(resultado5)
//

let numeros6 = [1, 2, 3, 4, 5]
sumanum6 = numeros6.reduce((total, numero)=> numero + total, 0)
console.log('resultado suma', sumanum6)
