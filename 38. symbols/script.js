/*
Dato primitivo
Un symbol se mantiene privado, mayormente usado para propiedades en objetos
Ayuda a crear identificadores unicos, crea una referencia unica
*/

let id = "hola";
let id2 = "hola";
console.log(id === id2);    //Regresa true

let id3 = Symbol();
let id4 = Symbol();
console.log(id3 === id4);   //Regresa false


//El parametro de que recibe es una descripcion
let id5 = Symbol("id5");
console.log(id5);


//La buena practica indica declarar simbolos como constantes ya que deben ser unicos y no cambiar
const NOMBRE = Symbol();

//Asignarle un symbol a un objeto
const persona = {
    [NOMBRE]: "Manuel"
}
console.log(persona);

//Los simbolos se mantienen privados, si recorremos el objeto no salen

//creando una propiedad con el mismo nombre del simbolo
persona.NOMBRE = "Manuel Alejandro R.S.";
console.log(persona);
//Se agrega la propiedad pero el simbolo sigue ahi

console.log(persona.NOMBRE);

//mandar a llamar el valor de un simbolo
console.log(persona[NOMBRE]);


//Tambien puede haber simbolos para funciones o metodos
const SALUDAR = Symbol();
persona[SALUDAR] = function(){
    console.log("Hola");
}

console.log(persona);

persona[SALUDAR]();


//Listar los simbolos (privados)
console.log(Object.getOwnPropertySymbols(persona));