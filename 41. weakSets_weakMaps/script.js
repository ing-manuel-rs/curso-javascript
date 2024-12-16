/*
No podemos recorrerlos
No podemos eliminar todos sus elementos de un jalon
No se puede saber su tamaño
Solo aceptan referencias debiles, es decir, objetos
Para almacenar valores lo debemos hacer uno por uno
Cuando una de sus referencias se hacen nulas o indefinidas se eliminan
*/

//- - - - - - - - - - - - - - - - - - - - - -  weakSet - - - - - - - - - - - - - - - - - - - - - - 

const ws = new WeakSet();

let valor1 = {"valor1": 1};
let valor2 = {"valor2": 2};
let valor3 = {"valor3": 3};

ws.add(valor1);
ws.add(valor2);
ws.add(valor3);

console.log(ws);

//Saber si tienen guardada una referencia
console.log(ws.has(valor1)); //true

//Eliminar referencia
ws.delete(valor2);
console.log(ws);



//- - - - - - - - - - - - - - - - - - - - - -  weakMap - - - - - - - - - - - - - - - - - - - - - - 

const wm = new WeakMap();

let llave1 = {};
let llave2 = {};
let llave3 = {};

wm.set(llave1, 1);
wm.set(llave2, 2);
wm.set(llave3, 3);

console.log(wm);

console.log(wm.has(llave1));

console.log(wm.get(llave1));