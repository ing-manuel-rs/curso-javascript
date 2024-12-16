/*
Ejercicio 23) Programa una función que dado un array de números devuelva 
un objeto con 2 arreglos en el primero almacena los números pares y 
en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) 
devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/

const paresEImpares = (arreglo = []) => {
    if(arreglo.length === 0) return console.error("No ingresaste un arreglo");
    if(!(arreglo instanceof Array)) return console.error("No ingresaste un arreglo de tipo Array");
    arreglo.forEach(numero => {
        if(typeof numero !== "number") return console.log(`El elemento ${numero} no es de tipo number`);
    });

    let pares = [], impares = [];

    arreglo.forEach(numero => {
        if(numero % 2 === 0) pares.push(numero);
        else impares.push(numero);
    });

    return console.log({
        pares,
        impares
    });

    //Tambien se puede hacer asi:
    /*return console.log({
        pares: arreglo.filter(num => num%2 === 0),
        impares: arreglo.filter(num => num%2 === 1)
    });*/
}

paresEImpares();
paresEImpares("hola");
paresEImpares("1,2,23,45");
paresEImpares([]);
paresEImpares([1,2,3,4,5,6,7,8,9,0]);