const arrayNumbers = [1,2,3,4,5,6,7,8,9]
//Revisar si TODOS los elementos del array cumplen cierta condición 
var resultadoArrayNumbers = arrayNumbers.every( item => item > 10)
console.log("Array Numbers: "+resultadoArrayNumbers)

var resultadoArrayObjetos = productosArray.every( producto => producto.price > 2.50 )
console.log("Array Objetos: "+resultadoArrayObjetos)