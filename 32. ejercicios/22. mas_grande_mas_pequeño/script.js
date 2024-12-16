/*
Ejercicio 22) Programa una función que dado un array devuelva el número mas 
alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) 
devolverá [99, -60].
*/

const masGrandeMasPequenio = (arreglo = []) => {
    if(arreglo.length <= 1) return console.log("No ingresaste arreglo valido");
    if(!(arreglo instanceof Array)) return console.log("No ingresaste un tipo arreglo");

    arreglo.forEach(numero => {
        if(typeof numero !== "number") return console.log(`El elemento ${numero} no es de tipo number`);
    });

    let masGrande = 0, masPequenio = 999999;

    arreglo.forEach(numero => {
        if(numero <= masPequenio) masPequenio = numero; 
    });

    arreglo.forEach(numero => {
        if(numero >= masGrande) masGrande = numero; 
    });

    return console.log(`Mas grande: ${masGrande}, Mas pequeño: ${masPequenio}`);

    //Tambien puede ser asi.
    //return console.log(`Mas grande: ${Math.max(...arreglo)}, Mas pequeño: ${Math.min(...arreglo)}`);
}

masGrandeMasPequenio();
masGrandeMasPequenio("5,4,4");
masGrandeMasPequenio(2);
masGrandeMasPequenio([1]);
masGrandeMasPequenio([1, 4, 5, 99, -60]);
masGrandeMasPequenio([99, -60, 1, 4, 5]);