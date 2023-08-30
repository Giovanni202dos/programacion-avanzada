//5)
console.log('5):');
var cuenta, edad;

for(cuenta =1; cuenta<= 10;cuenta++){
    edad = prompt("Introduzca su edad (en cifras).","");
    edad = parseInt(edad);
    console.log(cuenta)
    if (edad < 18){
        alert("Es usted menor de edad")
    } else{
        alert("Es usted mayor de edad");
    }
}