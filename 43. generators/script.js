/*
Funcion que nos facilita el manejo de iterators
yield es como un return que le indica a la funcion que cuando detecte que la mandan a llamar con el 
    metodo next manda el primer valor y digamos que ahi deja el cursor de la funcion, cuando se vuelva a 
    ejecutar un segundo metodo next fuera de la funcion iria a buscar el soguiente yield, si no se 
    encuentra un yield significa aue ha acabado con los valores de la funcion iterable
*/

//Para decirle a una funcion que es generator se le pone un asterisco
function* iterable(){
    yield "hola";
    console.log("hola consola");
    yield "hola 2";
    console.log("Seguimos con mas instrucciones de nuestro codigo");
    yield "hola 3";
    yield "hola 4";
}

let iterador = iterable();

/*console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());*/

for(let y of iterador) console.log(y);

//crear un arreglo
const arr = [...iterable()];
console.log(arr);








function cuadrado(valor){
    setTimeout(() => {
        return console.log({valor, resultado: valor*valor});
    }, Math.random()*1000);
}

function* generador(){
    console.log("Inicia generator");
    yield cuadrado(0);
    yield cuadrado(1);
    yield cuadrado(2);
    yield cuadrado(3);
    yield cuadrado(4);
    yield cuadrado(5);
    console.log("Fin generator");
}

let gen = generador();
for (let y of gen) {
    console.log(y);
}