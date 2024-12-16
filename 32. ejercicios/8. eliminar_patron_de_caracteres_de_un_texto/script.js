/*
Ejercicio 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

const eliminarPatron = (cadena = "", patron = "") =>{
    //Verificar que la cadena exista y sea de tipo string
    if(!cadena || !(typeof cadena === "string")) return console.error("No ingresaste una cadena");
    //Verificar que el patron exista y sea de tipo string
    if(!patron || !(typeof patron === "string")) return console.error("No ingresaste una patron");
    //Verificar que el patron exista dentro de la cadena
    if(!cadena.includes(patron)) return console.warn("No existe ese patron dentro de la cadena");
    //Separamos mediante el patron en un arrgelo
    let resultado = cadena.split(patron);
    //Pasamos de arreglo a cadena
    resultado = resultado.join("");
    return console.log(resultado);
}


let cadena = "xyz1, xyz2, xyz3, xyz4 y xyz5";
let patron = "xyz";

eliminarPatron();
eliminarPatron(cadena);
eliminarPatron("", patron);
eliminarPatron(cadena, patron);
eliminarPatron("Hola mundo como estan todos", "123");

