/*
Ejercicio 7) Programa una función que valide si una palabra 
o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), 
pe. mifuncion("Salas") devolverá true.
*/

const esPalindromo = (cadena = "") => {
    //En caso de que no haya cadena o la variable no sea de tipo string
    if(!cadena || !(typeof cadena === "string")) return console.error("No ingresaste una cadena");
    //Convertimos la cadena a minusculas
    cadena = cadena.toLowerCase();
    //Separamos los caracteres de la cadena en un vector
    let arreglo = cadena.split("");
    //Volteamos el arreglo generado
    let arregloReverso = arreglo.reverse();
    //Pasamos de arreglo a cadena
    let resultado = arregloReverso.join("");
    return console.log(resultado === cadena);
}

esPalindromo();
esPalindromo("Manuel");
esPalindromo("SalAs");