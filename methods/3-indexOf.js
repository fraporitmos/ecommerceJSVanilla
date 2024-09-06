//indexOf retorna 1 y -1 para  ssaber si  en un array de objetocs existe una igualdad estricta entre elemento del array y el elemento especifico 

const mesesArray = ["Enero", "Febrero", "Marzo"]

const indexOfValor1 = mesesArray.indexOf("Febrero") //1



const indexOfValor2 = productosArray.indexOf(
   {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men's clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        rating: { rate: 3.9, count: 120 }
    }
)


console.log(indexOfValor2) //-1

//En el caos de los objetos la igualdad estricta solo se cumple si se hace referncia al mismo objeto en memoria

