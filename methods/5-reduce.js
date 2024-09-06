//Reduce sirve para recorrer un array y almacernar en el primer parametro alguna operación

var totalPreciosReduce = productosArray.reduce( (total, producto) =>  producto.price + total,0).toFixed(2)
console.log("Total Precios Reduce: "+totalPreciosReduce)


var  totalPreciosAlgoritmo = 0
productosArray.forEach( producto => {
    totalPreciosAlgoritmo += producto.price
})

console.log("Total Precios Algoritmo: "+totalPreciosAlgoritmo.toFixed(2))