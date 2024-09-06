const mesesArray = ["Enero", "Febrero", "Marzo", "Abril"]

//Some retorna true o false dependiendo de la condición estricta, es util para arreglos de objetos
var resultadoSome  = mesesArray.some( item => item === "Mar")
//Solo funciona en arreglos tradicionales
var resultadoIncludes  = mesesArray.includes("Marzo")
//El elemento 2 (Marzo) incluye como subpalabra "Mar"
var subInclude  = mesesArray[2].includes("Mar")

console.log("Some JS: "+resultadoSome)
console.log("Includes JS Array: "+resultadoIncludes)
console.log("Includes JS String: "+subInclude)

function someAlgoritmo(mesesArray,palabra){
    let band = false
    mesesArray.forEach( item => {
        if(item === palabra){
            band= true
        }
    })
    return band
}

var isSome = someAlgoritmo(mesesArray, "Abril")
console.log("Custom some: "+isSome)

