//Referenciar a mis componentes de html en Javascript
var containerProductos = document.getElementById("containerProductos")
var containerSubProductos = document.getElementById("containerSubProductos")
var inputBuscarProducto = document.getElementById("inputBuscarProducto")
var productosVacios = document.getElementById("productosVacios")
var tablaCarritoCompras = document.getElementById("tablaCarritoCompras")
var iconCarrito = document.getElementById("iconCarrito")
var btnCloseCarrito1 = document.getElementById("btnCloseCarrito1")
var btnCloseCarrito2 = document.getElementById("btnCloseCarrito2")
var textTotalCarrito = document.getElementById('textTotalCarrito')
var textCarrito = document.getElementById("textCarrito")
var checkBoxElectronics = document.getElementById("checkBoxElectronics")
var checkBoxWomanClothes = document.getElementById("checkBoxWomanClothes")
var modalCarritoCompras = document.getElementById("modalCarritoCompras")
var btnComprarProductos = document.getElementById("btnComprarProductos")

var arrayFilter = []
var arrayCarritoCompras = []
var arrayFilterCheckBox = [checkBoxElectronics, checkBoxWomanClothes]

var isCarritoVisible = false
productosVacios.style.display = "none"


iconCarrito.addEventListener("click", () => {
    if (arrayCarritoCompras.length <= 0) {
        alert("Agrega productos a tu carrito")
    } else {
        modalCarritoCompras.style.display = "flex";
    }
})

btnCloseCarrito1.addEventListener("click", () => {
    modalCarritoCompras.style.display = "none";

})

btnCloseCarrito2.addEventListener("click", () => {
    modalCarritoCompras.style.display = "none";

})

btnComprarProductos.addEventListener("click", ()=>{
    let mensaje = arrayCarritoCompras.map( item =>
        `✅ Producto: ${item.title}
         💰 Precio: S/${item.price}
         ➕ Cantidad: ${item.totalItems}`

    ).join("\n")
    window.location.href = `https://wa.me/+51947254438?text=${encodeURIComponent(mensaje)}`
})

checkBoxElectronics.addEventListener('change', function () {
    if (checkBoxElectronics.checked) {
        let arrayElectronics = filtrarCategory(productosArray, "electronics")
        arrayFilter = [...arrayElectronics, ...arrayFilter]
        renderizarProductos(arrayFilter)
    } else {
        arrayFilter = arrayFilter.filter(item => item.category !== "electronics")

        renderizarProductos(arrayFilter)
        validarFiltrosVacios()
    }
})

checkBoxWomanClothes.addEventListener("change", () => {
    if (checkBoxWomanClothes.checked) {
        let arrayWomanClothes = filtrarCategory(productosArray, "women's clothing")
        arrayFilter = [...arrayWomanClothes, ...arrayFilter]

        renderizarProductos(arrayFilter)
    } else {
        arrayFilter = arrayFilter.filter(item => item.category !== "women's clothing")

        renderizarProductos(arrayFilter)
        validarFiltrosVacios()
    }
})

inputBuscarProducto.addEventListener('input', () => {
    var entrada = inputBuscarProducto.value

    let arrayProudctoBuscado = buscarProducto(productosArray, entrada)
    if (arrayProudctoBuscado.length > 0) {
        productosVacios.style.display = "none"
        renderizarProductos(arrayProudctoBuscado)
    } else {
        containerProductos.innerHTML = ""
        productosVacios.style.display = "block"
    }
})

function validarFiltrosVacios() {
    let filtrosVacios = arrayFilterCheckBox.filter(item =>
        item.checked === true
    )
    if (filtrosVacios.length === 0) {
        renderizarProductos(productosArray)
    }
}

function generarUISubproducto(producto) {
    return `<tr>
                <td class="p-2">
                    <div class="font-medium w-46 text-gray-800">${producto.title}</div>
                </td>
                <td class="p-2">
                    <div class="flex justify-center gap-2 items-center">
                        <i id-btn-plus=${producto.id} class="class-btn-plus fa-solid fa-plus border-2	p-1 border-gray-400 cursor-pointer"></i>
                        <div id="cantidad-${producto.id}" class="text-center ">1</div>
                        <i class="fa-solid fa-minus border-2 border-gray-400 p-1 cursor-pointer"></i>
                    </div>
                </td>
                <td class="p-2">
                    <div id="price-${producto.id}" class="text-center font-medium text-green-500">
                    S/${producto.price}
                    </div>
                </td>
                <td class="p-2">
                    <div class="flex justify-center">
                        <button>
                            <svg class="h-8 w-8 rounded-full p-1 hover:bg-gray-100 hover:text-blue-600"
                                fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16">
                                </path>
                            </svg>
                        </button>
                    </div>
                </td>
         </tr>`
}

function generarUIProducto(producto) {
    return `<div class="flex max-w-md overflow-hidden bg-white rounded-lg shadow-lg">
            <div class="flex flex-col justify-evenly">
                <div class="flex m-2 h-8 justify-start">
                    <span class="w-24 bg-teal-700 mt-2 text-white rounded-full h-6 px-3 text-sm ">
                        ${producto.category}
                    </span>
                </div>
                <img style="width: 100px; height: 80px" class=" bg-cover m-6 object-contain h-46 bg-landscape"
                    src=${producto.image} />
                <h1 class="text-xl m-4 font-bold text-gray-700">
                    S/${producto.price}
                </h1>

            </div>

            <div class="w-2/3 p-4 flex flex-col justify-between">
                <div>
                    <h1 class="text-xl line-clamp-1 font-bold text-gray-900">
                        ${producto.title}
                    </h1>
                    <p class="mt-2 line-clamp-3 text-sm text-gray-600">
                        ${producto.description}
                    </p>

                </div>
                <div class="flex justify-end me-2">
                    <button id-btn-custom="${producto.id}"  class="class-btn-custom  px-3 py-2 w-46 text-xs font-bold text-white uppercase bg-gray-800 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>`
}

function renderizarProductos(array) {
    containerProductos.innerHTML = ""
    array.forEach(item =>
        containerProductos.innerHTML += generarUIProducto(item)
    )
}

function renderizarSubproductos(array) {
    containerSubProductos.innerHTML = ""
    array.forEach(item =>
        containerSubProductos.innerHTML += generarUISubproducto(item)
    )
}

function calcularTotalCarrito(array) {
    var envio = 10
    var totalCarrito = array.reduce((total, producto) => producto.price * producto.totalItems  + total, envio)
    return totalCarrito.toFixed(2)
}

renderizarProductos(productosArray)


document.addEventListener('click', (event) => {
    //Agregar un producto al carrito
    if (event.target.classList.contains("class-btn-custom")) {
        const productId = event.target.getAttribute("id-btn-custom")
        var existeProducto = arrayCarritoCompras.some(item => item.id == productId)
        if (existeProducto) {
            console.log("ya esta en carrito")

        } else {
            var productoSeleccionado = productosArray.find(item => item.id == productId)
            arrayCarritoCompras.push(productoSeleccionado)
            textCarrito.textContent = arrayCarritoCompras.length
            renderizarSubproductos(arrayCarritoCompras)
            textTotalCarrito.textContent = `Total: S/${calcularTotalCarrito(arrayCarritoCompras)}`
        }
    }

    //Aumentar la cantidad de un producto en el carrito
    if (event.target.classList.contains("class-btn-plus")) {
        const idPlus = event.target.getAttribute("id-btn-plus")

        arrayCarritoCompras.forEach(item => {
            if (item.id == idPlus) {
                item.totalItems += 1
            }
        })


        var textPrice = document.getElementById(`price-${idPlus}`)
        var textCantidad = document.getElementById(`cantidad-${idPlus}`)

        var productoActual = arrayCarritoCompras.find(item => item.id == idPlus)
        textCantidad.textContent = productoActual.totalItems
        var precioTotalActual = productoActual.price * productoActual.totalItems
        textPrice.textContent = `S/${precioTotalActual} `

        textTotalCarrito.textContent = `Total: S/${calcularTotalCarrito(arrayCarritoCompras)}`
    }


})



