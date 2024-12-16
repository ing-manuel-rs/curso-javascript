/*
Ejercicio 6) Programa una función para contar 
el número de veces que se repite una palabra en un texto largo, 
pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/

const contarPalabras = (cadena = "", palabra = "") =>{
    //Verificar que la cadena exista y sea tipo string
    if(!cadena || !(typeof cadena === "string")) return console.error("No ingresaste una cadena");
    //Verificar que la palabra exista y sea tipo string
    if(!palabra || !(typeof palabra === "string")) return console.error("No ingresaste una palabra");
    //Verificar que la palabra exista en el texto
    if(!cadena.includes(palabra)) return console.warn("No existe esa palabra dentro del texto");

    let i = 0, contador = 0;
    while(i !== -1){
        //Buscar en cada posicion de la cadena la palabra 
        i = cadena.indexOf(palabra, i);
        if(i !== -1){
            i++;
            contador++;
        }
    }
    return console.log(`La palabra se repite ${contador} veces`);
}

let cadena = "hola mundo adios mundo";
let palabra = "mundo";

contarPalabras();
contarPalabras(cadena);
contarPalabras("", palabra);
contarPalabras(cadena, palabra);
contarPalabras("Hola a todos como estan", "prueba");