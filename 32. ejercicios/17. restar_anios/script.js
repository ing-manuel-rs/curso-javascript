/*
Ejercicio 17) Programa una función que dada una fecha válida 
determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) 
devolverá 35 años (en 2020).
*/

const calcularAnios = (fecha = undefined) => {
    if(fecha === undefined) return console.log("No ingresaste una fecha");
    if(!(fecha instanceof Date)) return console.log("No ingresaste una fecha valida");

    return console.log(new Date().getFullYear() - fecha.getFullYear());

}

calcularAnios();
calcularAnios("4/1/12");
calcularAnios(new Date(2000,4,23));
calcularAnios(new Date(2013,4,23));