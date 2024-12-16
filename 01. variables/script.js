/*
Las variables son un lugar en la memoria donde podemos guardar informacion 
Estas son reconocidas mediante su identificador o nombre
El identificador en JS tiene que comenzar por una letra, el simbolo de pesos $ o guion bajo _
    no puede empezar por numeros ni caracteres especiales y el nombre de la varibale no se puede repetir
    en el mismo bloque, tampoco podemos nombrar una variable con una palabra reservada
*/


//Para imprimir en consola usamos console.log
console.log("Hola mundo");

/*
Tambien podemos usar 
console.warn();
console.error();
console.info();
etc
*/


// DECLARACION DE VARIABLES

/*
En los lenguajes de programacion las variables tiene cierto ambito de existencia, a esto se le conoce 
como el scope de las variables, es decir, el alcance de esta hasta donde pueda ser usada

Para declarar una variables usamos las palabras reservadas var o let
Al usar var declaramos un ambito o scope global, en cualquier parte del codigo puede ser llamada o usada
Al usar let declaramos un ambito o scope del bloque local, es decir, solo se puede usar en el bloque 
    en el cual se esta usando la varible 

{
    Esto es un bloque de codigo (generalmente por delimitado por llaves) 
}
*/


var nombre = "Manuel R.";
console.log(nombre);
console.log("Bienvenido ",nombre);


// Se puede declarar una variable sin inicializar
var edad;
edad = 20;
console.log(edad);