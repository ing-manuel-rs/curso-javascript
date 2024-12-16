//- - - - - - - - - - - - - - - - - - setTimeout - - - - - - - - - - - - - - - - - -
//recibe una callback y un tiempo expresado en milisegundos

//Es decir, despues de un segundo se ejecutara el bloque de la funcion (una sola vez)
setTimeout(() => {
    console.log("Ejecutando un setTimeout");
}, 1000);

//- - - - - - - - - - - - - - - - - - setinterval - - - - - - - - - - - - - - - - - -
//recibe una callback y un tiempo expresado en milisegundos

//Es decir, se ejecuta el bloque cada segundo que pase (veces indefinidas)
/*setInterval(() => {
    console.log("Ejecutando un setInterval");
}, 1000);*/

//Mostrando un reloj
setInterval(() => {
    console.log(new Date().toLocaleTimeString());
}, 1000);



let temporizador = setTimeout(() => {
    console.log("Ejecutando un setTimeout 2");
}, 1000);

//cancelar un setTimeout (solo los que estan guardados en una variable)
clearTimeout(temporizador);
//lo mismo para setInterval clearInterval();