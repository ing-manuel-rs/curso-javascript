/*
Ejercicio 19) Programa una funcion que valide que un texto sea un nombre 
valido pe. miFuncion("Jonathan Mircha") devolverá verdadero
*/

const validarNombre = (nombre = "") => {
    if(!nombre) return console.log("No ingresaste un nombre");
    if(typeof nombre !== "string") return console.log("El valor ingresado no es de tipo string");

    let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúüÜ\s]+$/g.test(nombre);

    return (expReg) ? console.log(`El nombre ${nombre} es valido`) : console.log(`El nombre ${nombre} no es valido`);
}

validarNombre();
validarNombre(45);
validarNombre("Manuel");
validarNombre("Manuel Alejandro");
validarNombre("Manuel, 20");