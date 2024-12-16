/*
Una variable booleana solo tiene dos valores, verdadero y falso
*/

let verdadero = true;
let falso = false;

let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso, v, f);


//Nota: Hay valores que no son ni verdadero ni falso (true, false) pero TIENDEN a serlo

console.log(Boolean(0));     // EL numero cero tiende a falso
console.log(Boolean(-17));   // Numeros negativos tienden a verdadero
console.log(Boolean(""));    // Una cadena vacia tiende a falso
console.log(Boolean("a"));   // Una cadena NO vacia tiende a verdadero

// Para poder conocer todos los demas valores que tienen a verdadero o falso visitar: MDN Truthy