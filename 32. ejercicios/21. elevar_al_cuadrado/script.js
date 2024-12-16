/*
Ejercicio 21) Programa una función que dado un array numérico devuelve 
otro array con los números elevados al cuadrado, 
pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const elevarAlCuadrado = (arreglo = []) => {
    if(arreglo.length === 0) return console.log("No insertaste arreglo");
    if(!(arreglo instanceof Array)) return console.log("No es de tipo arreglo");
    arreglo.forEach(numero => {
        if(typeof numero !== "number") return console.log(`El elemento ${numero} no es de tipo number`);
    });
    let resultado = [];
    arreglo.forEach(numero => {
        resultado.push(Math.pow(numero, 2));
    });
    return console.log(resultado);
}

elevarAlCuadrado();
elevarAlCuadrado(48);
elevarAlCuadrado("hola");
elevarAlCuadrado([2,4,8]);