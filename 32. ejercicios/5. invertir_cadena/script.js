/*
Ejercicio 5)  Programa una función que invierta las palabras de una cadena de 
texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/

//Funcion para voltear la cadena
const voltearCadena = (cadena = "") => {    //Le asignamos un valor por defecto a la cadena en caso de no recibir parametro
    //En caso de que no haya cadena o la variable no sea de tipo string
    if(!cadena || !(typeof cadena === "string")) return console.error("No ingresaste una cadena");
    //Separamos los caracteres de la cadena en un vector
    let arreglo = cadena.split("");
    //Volteamos el arreglo generado
    let arregloReverso = arreglo.reverse();
    //Pasamos de arreglo a cadena
    let resultado = arregloReverso.join("");

    //Tambien podria ser todo en una linea
        //cadena.split("").reverse().join("");

    return console.log(resultado);
}

const objeto = {
    nombre: "Objeto",
    apellido: "No-cadena"
}

voltearCadena();
voltearCadena("");
voltearCadena("Hola mundo");
voltearCadena(objeto);