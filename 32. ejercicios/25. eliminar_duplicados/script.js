/*
Ejercicio 25) Programa una funcion que dado un arreglo de elementos, elimine los duplicados
pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolvera
["x", 10, 2, "10", true]
*/

const eliminarRepetidos = (arreglo = []) => {
    if(arreglo.length === 0) return console.error("No ingresaste un arreglo");
    if(!(arreglo instanceof Array)) return console.error("No ingresaste un arreglo de tipo Array");
    if(arreglo.length === 0 || arreglo.length === 1) return console.log("El arreglo debe tener minimo dos elementos");

    return console.log({
        original: arreglo,
        sinDuplicados: arreglo.filter((value, index, self) => self.indexOf(value) === index)
    });

    //Tambien puede ser asi (tipo de dato Set):
    /*return console.log({
        original: arreglo,
        sinDuplicados: [...new Set(arreglo)]
    });*/

}

eliminarRepetidos();
eliminarRepetidos([1]);
eliminarRepetidos("Hola");
eliminarRepetidos([1,2,3,"hola"]);
eliminarRepetidos(["x", 10, "x", 2, "10", 10, true, true]);
