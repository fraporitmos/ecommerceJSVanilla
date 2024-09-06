var indice1 = 0
var count = 0

productosArray.forEach( 
    //Segundo parametro del forEach es el indice actual
    (producto, index) =>  {
        if(producto.title === "Mens Casual Premium Slim Fit T-Shirts"){
           // console.log(count)
           indice1 = index
        }
      // count ++
    }
)

console.log(indice1)

//Me retorna el indicie del array segun cumple una condicion
const indice = productosArray.findIndex(    
    producto =>
    producto.title === "Mens Casual Premium Slim Fit T-Shirts"
)

console.log(indice)

//Con for tradicional