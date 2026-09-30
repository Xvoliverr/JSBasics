//objects
const nombreProducto = "ipad"
//const precio = 549
//const disponible = true

const producto = {
    nombre: "ipad",
    precio: 549,
    disponible: true
}

console.table(producto)
console.table(producto.nombre)
console.table(producto.precio)
console.table(producto.disponible)

//Destructuring
const {nombre, precio, disponible } = producto
console.log(nombre)
console.log(precio)
console.log(disponible)

//Object Literal Enhencement
const autenticado = true
const usuario = "juan"

const newObject = {
    autenticado: autenticado,
    usuario: usuario
}

console.table(newObject)

//Manipulacion de objetos
const product2 = {
    nombre: "MacBook Pro",
    precio: 1299,
    disponible: true
}

console.table(product2)

//Modificacion de objetos
product2.nombre = "Mac Mini"
product2.precio = 599

console.table(product2)

//Como agregar un lemento a el objeto
product2.imagen = "imagen.jpg"

console.table(product2)

//Como eliminar un elemento del objeto
delete product2.imagen

console.table(product2)