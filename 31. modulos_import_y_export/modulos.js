//Importando la variable PI desde constantes.js
import saludar, {PI, usuario} from "./constantes.js"
import {sumar, restar} from "./aritmetica.js";

//Podemos usar alias para renombrar lo importado
import { aritmetica as calculos} from "./aritmetica.js";

console.log("Archivo modulo.js");

console.log(PI, usuario);
console.log(sumar(3,4));
console.log(restar(7,3));

console.log(calculos.sumar(3,4));
console.log(calculos.restar(7,3));

saludar();