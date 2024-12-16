/*
Cortocircuito-OR
    Cuando el valor de la izquierda en la expresión siempre pueda validar a true, 
    es el valor que se cargará por defecto 
Cortocircuito-AND
    Cuando el valor de la izquierda en la expresión siempre pueda validar a false, 
    es el valor que se cargará por defecto
*/

function saludar(nombre){
    /*
    Corto circuito OR, nombre sera igual a nombre siempre y cuando este exista, en caso contrario
    como en este ejemplo que no se le pase parametro y reciba undefined, nombre sera igual 
    a "Desconocido"
    */
    nombre = nombre || "Desconocido";
    console.log(`Hola ${nombre}`);
}

saludar("Manuel");  //"Hola Manuel"
saludar();          //"Hola Desconocido"

//Toma "Izquierda", porque el valor del lado izquiero es verdadero, aunque el lado derecho tambien lo sea
console.log("Izquierda" || "Derecha");  

//Ahora como el lado izquierdo es falso, toma el de la derecha
console.log(false || "Derecha");

//Cortocircuito AND, es lo contrario, si el de la izquierda es falso toma ese valor
console.log("Izquierda" && "Derecha");  
console.log(false && "Derecha");