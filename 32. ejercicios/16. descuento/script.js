/*
Ejercicio 16) Programa una función que devuelva el monto final después de aplicar un
descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800
*/

const descuento = (precio = undefined, cantidadDescuento = undefined) => {
    if(precio === undefined) return console.log("No ingresaste el precio");
    if(isNaN(precio) || typeof precio === "string") return console.error("No ingresaste un numero valido");
    if(cantidadDescuento === undefined) return console.log("No ingresaste el descuento");
    if(isNaN(cantidadDescuento) || typeof cantidadDescuento === "string" || descuento > 100) return console.error("No ingresaste un descuento valida");

    let resultado = precio - (precio*cantidadDescuento/100);
    
    return console.log(resultado);
}

descuento();
descuento(100);
descuento(undefined, 42);
descuento("30", 14);
descuento(1000, 20);
descuento(150, 50);