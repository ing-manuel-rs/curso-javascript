/*
Iterable es el elemento que se puede recorrer o iterar y el iterador es el apuntador a cada elemento 
*/

const iterable = [1,2,3,4,5];
const iterable2 = [1,2,3,4,5];

//Accedemos al iterador de iterable
const iterador = iterable[Symbol.iterator]();
const iterador2 = iterable2[Symbol.iterator]();

//Recorrer el iterador (regresa un obketo con dos valores, el primero es el valor y el segundo es un boolean para saber si ya se terminaron los slementos)
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());

//Recorriendo con un ciclo
let next = iterador2.next();
while(!next.done){
    console.log(next.value);
    next = iterador2.next();
}

//Lo mismo para cadenas, mapas, sets, etc