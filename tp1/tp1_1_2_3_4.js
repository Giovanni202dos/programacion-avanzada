//1)
console.log('1):');
var edad=24;
console.log('tengo '+edad+' anios');
console.log('')

//2)
console.log('2):');
const NUM1=150;
const NUM2=10;
console.log('numero1: '+NUM1);
console.log('numero2: '+NUM2);
console.log('suma: '+(NUM1+NUM2));
console.log('resta: '+(NUM1-NUM2));
console.log('division: '+(NUM1/NUM2));
console.log('multiplicacion: '+(NUM1*NUM2));
console.log('')

//3 y 4)
console.log('3 y 4):');
var edad=65;
var sexo='masculino';
switch(sexo){
    case 'femenino':
        console.log('Femenino')
        if(edad<=0){
            console.log("Edad inválida");
        } else if (edad<60){
            console.log("Aún no estás en edad de jubilación");
        }else {
            console.log("Estás en edad de jubilación y es obligatorio jubilarse");
        }
        break;
    case 'masculino':
        console.log('Masculino')
        if(edad<=0){
            console.log("Edad inválida");
        } else if (edad<65){
            console.log("Aún no estás en edad de jubilación");
        }else {
            console.log("Estás en edad de jubilación y es obligatorio jubilarse");
        }
        break;
}
console.log('')



