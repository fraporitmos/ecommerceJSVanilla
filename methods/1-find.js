
//obtener el primer elemento que cumple una condición y la retorna
//NO RETORNA UN ARRAY =, RETORNA EL ELEMENTO 
let productoBuscado = productosArray.find(producto =>  producto.id == 2)
console.log(productoBuscado)


//Estructura de datos

let productoBuscado2 = {}
for(let i=0; i < productosArray.length; i++ ) {
    if(productosArray[i].id == 2 ){
        productoBuscado2 = productosArray[i] 
        break;
    }
}

console.log(productoBuscado2)

//Usando foreach

let productBuscado3 = {}
let result =productosArray.forEach(producto => {
    if (producto.id == 2) {
        productBuscado3 = producto 
    }
}
);

console.log(productBuscado3)