/*
Secuencia de caracteres que forman un patron de busqueda, principalmente usado en cadenas de texto
podemos visitar la documentacion de js para mayor informacion
tambien podemos buscar expresiones regulare en internet, por ejemplo: expresion regular para validar email
*/

let cadena = "Lorem ipsum, dolor sit amet consectetur adipisicing elit."

/*
El constructor recibe dos parametros, palabra a buscar y las banderas
    La bandera "i" es para ignorar mayusculas y minusculas
    La bandera "g" es para buscar todas las coincidencias
*/

//En este caso, sin banderas, se detiene en la primer coincidencia
let expresionRegular = new RegExp("Lorem");
//Ver si la expresion regular exista dentro de la cadena
console.log(expresionRegular.test(cadena));

//Segunda forma de declarar una expresion regular
let expresionRegular2 = /Lorem/;

//Regresa un arreglo con informacion
console.log(expresionRegular.exec(cadena));

let expReg = /\d/ig;    //Para buscar numeros, tambien podria ser /[0-9]/ig;
console.log(expReg.test(cadena));   //False porque no hay numeros

