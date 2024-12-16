//DOM es una api que permite interactuar HTML con JS

console.log("* * * * * * * * * * * * * Elementos del docuemento * * * * * * * * * ** * * ");

//Mostrar el documento 
console.log(window.document);
console.log(document);

//Head del html
console.log(document.head);

//Body del html
console.log(document.body);

//HTML
console.log(document.documentElement);

//Tipo de documento
console.log(document.doctype);

//Tipo de codificacion de caracteres
console.log(document.characterSet);

//Titulo de la pagina
console.log(document.title);

//Links en la pagina
console.log(document.links);

//Imagenes en la pagina
console.log(document.images);

//Formularios en la pagina 
console.log(document.forms);

//Estilos CSS en la pagina
console.log(document.styleSheets);

//Scripts de programacion
console.log(document.scripts);

//Mostrar lo seleccionado por el cursor (se pone un setTimeout para dar tiempo de seleccionar)
setTimeout(() => {
   console.log(document.getSelection().toString()); 
}, 3000);

//Escribir al HTML al ultimo
document.write("<h2>Esto es un H2</h2>");