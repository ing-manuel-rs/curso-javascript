/*
Undefined es una variable que aun no esta inicializada o que aun ni tiene valor

Null es una variable vacia, solo que aqui es de manera intencional (null es asignado por el
    programador mientras que undefined es asignado por JS al ver una variable vacia)

Nan = Not a number
*/

let indefinida;
console.log(indefinida); //imprime undefined

let nulo = null;
console.log(nulo);  //imprime null

let noEsUnNumero = "Hola"*3.7;
console.log(noEsUnNumero);  //imprime NaN