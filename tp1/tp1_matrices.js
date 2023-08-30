var nombres = new Array();

nombres[0] = "Nacho";
nombres[1] = "Arek";
nombres[2] = "Laura";
nombres[3] = "Sonia";
nombres[4] = "Gonzalo";
nombres[5] = "Eva";
nombres[6] = "Pedro";

document.write(nombres[0]+"<br>");
document.write(nombres[1]+"<br>");

var nombreIngresado = prompt('dame un nombre');
var encontrado = false;
nombres.forEach(nombre => {
    console.log(nombre)
    if (nombreIngresado==nombre){
        encontrado=true;
    }
});
if (encontrado ==false){
    alert("Nombre no existe en la lista");
}