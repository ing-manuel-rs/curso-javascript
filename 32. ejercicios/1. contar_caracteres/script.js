/*
Ejercicio 1) Programa una función que cuente el número de caracteres de una 
cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/

//- - - - - - - - - - - -  Version con datos introducidos por el usuario - - - - - - - - - - - - 

//Lee la cadena introducida por el usuario
let cadena = prompt("Ingrese una cadena de texto");

if(cadena === null){    //En caso de que el usuario presione el boton cancelar del prompt
    alert("Favor de ingresar una cadena");
}else if(!(typeof cadena === 'string')){    //En caso de que no sea una cadena de texto
    alert("No es una cadena de texto");
}else{
    alert(`El numero de caracteres de la cadena es : ${cadena.length}`);
}

//- - - - - - - - - - - - - - - - - - -  Version a consola - - - - - - - - - - - - - - - - - - - 

let cadena2 = "Hola mundo";

//Ejemplo de una varible que no es de tipo string
/*let cadena2 = {
    nombre: "Objeto",
    apellido: "No-cadena"
}*/

if(!(typeof cadena2 === 'string')){    //En caso de que no sea una cadena de texto
    console.log(("No es una cadena de texto"));
}else{
    console.log((`El numero de caracteres de la cadena es : ${cadena2.length}`));
}