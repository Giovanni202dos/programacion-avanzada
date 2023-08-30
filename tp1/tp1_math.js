console.log("la constante Euler vale");
console.log(Math.E);

console.log("el logaritmo natural de 2 vale");
console.log(Math.LN2);

console.log("el logaritmo natural de 10 vale");
console.log(Math.LN10);

console.log("el logaritmo de E en base 2 vale");
console.log(Math.LOG2E);

console.log("el logaritmo de E en base 10 vale");
console.log(Math.LOG10E);

console.log("el numero PI vale");
console.log(Math.PI);

console.log("la raiz cuadrada de 0.5 (1/2) vale");
console.log(Math.SQRT1_2);

console.log("la raiz cuadrada de 2 vale");
console.log(Math.SQRT2);

var fechaActual= new Date();
var arrayDatos= new Array();
arrayDatos[0]=fechaActual.getFullYear();
arrayDatos[1]=fechaActual.getMonth();
arrayDatos[2]=fechaActual.getDate();
arrayDatos[3]=fechaActual.getHours();
arrayDatos[4]=fechaActual.getMinutes();
arrayDatos[5]=fechaActual.getSeconds();
arrayDatos[6]=fechaActual.getMilliseconds();
arrayDatos[7]=fechaActual.getTime();

// console.log(fechaActual.getFullYear());
// console.log(fechaActual.getMonth());
// console.log(fechaActual.getDate());
// console.log(fechaActual.getHours());
// console.log(fechaActual.getMinutes());
// console.log(fechaActual.getSeconds());
// console.log(fechaActual.getMilliseconds());
// console.log(fechaActual.getTime());

var referenciaTabla=document.getElementById("tabla");
var fila = document.createElement('tr');

arrayDatos.forEach(dato => {
    var celda = document.createElement('td');
    celda.textContent=dato;
    fila.appendChild(celda);
});
referenciaTabla.appendChild(fila);
