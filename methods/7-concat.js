const semana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
const estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno'];
const numerosPares = [2,4,6,8,10,12];

const semanasYestaciones1 = semana.concat(estaciones)
console.log(semanasYestaciones1)
//Spread operator
const semanasYestaciones2 = [...semana,...estaciones, ...numerosPares, ...productosArray] 
console.log(semanasYestaciones2)