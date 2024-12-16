/*
Una funcion en la cual englobamos todo el codigo que queremos ejecutar
En el momento que se carga el archivo o el script se ejecutan
Si tenemos varias funciones anonimas autoejecutables y en ellas tenemos variables
    con el mismo nombre, no habra conflicto
*/

//Funcion Anonima Auto Ejecutable
(function(){
    console.log("Mi primer IIFE");
})();

(function(d, w, c){ //d=document, w=window, c=console, nos pudiera ayudar a abreviar
    c.log("Mi segunda IIFE");
})(document, window, console);

//- - - - - - - - - - - - - - Formas de escrir funciones anonimas auto ejecutables - - - - - - - - - - - - -

//- - - - - - - - - - - - - - Clasica - - - - - - - - - - - - - -
(function(){
    console.log("Version clasica");
})();

//- - - - - -  Crockford (JavaScript The Good Parts) - - - - - - 
((function(){
    console.log("Version Crockford");
})());

//- - - - - - - - - - - - - -  Unaria - - - - - - - - - - - - - - 
+function(){
    console.log("Version Unaria");
}();

//- - - - - - - - - - - - - - Facebook - - - - - - - - - - - - - -
!function(){
    console.log("Version Facebook");
}();