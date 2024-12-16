//Para exportar usamos la palabra reservada export (La importamos en modulos.js)
export const PI = Math.PI;

//Podemos exportar solo lo que necesitamos
export let usuario = "Manuel";
let password = "qwerty";

//Para exportar una funcion o valor por defecto a la hora de cargar el archivo modulo
export default function saludar(){
    console.log("Hola modulo +ES6");
}
//No podemos tener dos cosas exportadas por defecto
//Tambien podemos exportar obetos, clases, etc