//Regresa todo los elementos con la etiqueta, no es arreglo, es una coleccion HTML
console.log(document.getElementsByTagName("li"));

//Regresa los elementos con el nombre de clase
console.log(document.getElementsByClassName("card"));

//Regresa los elemtos por el nombre (name)
console.log(document.getElementsByName("nombre"));

//Regresa el elemento por ID
console.log(document.getElementById("menu"));

//Buscar por un selector de css, id, clase, etc. (regresa el primer encontrado)
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));

//Regresa todos los elemntos encontrados de un selector 
console.log(document.querySelectorAll("a"));

/*Algunos tienen las propiedades .lentgh o pueden usar el forEach, 
podemos usar las notaciones de los corchetes para seleccionar un elemento en especifico
*/

