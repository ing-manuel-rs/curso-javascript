// - - - - - - - - - - - - - - - - - Atributos  - - - - - - - - - - - - - - - - -

//Acceder a atributo de cierta etiqueta o elemento del HTML
console.log(document.documentElement.lang);

//Otra forma 
console.log(document.documentElement.getAttribute("lang"));

//Ejemplo: obtener el href de un enlace 
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

//Nota: Son diferentes los resultados de la notacion del punto y el getAttribute


//Establecer nuevos valores a los atributos 
document.documentElement.lang = "en";
console.log(document.documentElement.lang);

//                                   atributo   valor
document.documentElement.setAttribute("lang", "es-MS");
console.log(document.documentElement.lang);



//Guardar elementos del DOM en una variable

/*
Se puede usar tanto let como const, da igual 
Una buena practica a la hora de declarar variables que tengan que ver con el DOM
    es empezando con el signo de pesos $
*/
const $linkDOM = document.querySelector(".link-dom");

//Crear nuevo atributo (atributo, valor)
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener");

//Saber si existe un atributo en algun elemento, regresa un boolean
console.log($linkDOM.hasAttribute("rel"));

//Quitar atributos
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));




// - - - - - - - - - - - - - - -  Data-attributes  - - - - - - - - - - - - - - - 

//Recuperar valor de algun data-attribute
console.log($linkDOM.getAttribute("data-description"));

//Regresa un mapa con los data-attributes
console.log($linkDOM.dataset);

//Recuperar valor de algun data-attribute con notacion de punto
console.log($linkDOM.dataset.description);

//Establecer nuevo valor a un data-attribute
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);

//Establecer nuevo valor a un data-attribute con la notacion del punto
$linkDOM.dataset.description = "Holaaaa";
console.log($linkDOM.dataset.description);

//En los data-attributes tambien funcionan los metodos de hasAttribute, removeAttribute, etc