/*
Ejercicio 10) Programa una función que reciba un número y evalúe si es capicúa o no 
(que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
*/

const esCapicua = num =>{
    //Validar el numero existe
    if(!num) return console.error("No ingresaste un numero");
    //Validar si es un numero 
    if(isNaN(num)) return console.error("Numero no valido");
    //Convertir el numero a cadena y comparar la cadena (numero originla) contra el reverso de esta 
    return num.toString() === num.toString().split("").reverse().join("") ? true : false;
}

esCapicua();
console.log(esCapicua(2003));
console.log(esCapicua(2002));