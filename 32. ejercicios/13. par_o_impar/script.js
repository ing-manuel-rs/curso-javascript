//Ejercicio 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const esPar = (num = undefined) => {
    //Validar que el numero exista
    if(num === undefined) return console.error("No ingresaste un numero");
    //Validar que si sea un numero
    if(isNaN(num) || typeof num === "string") return console.error("No ingresaste un numero valido");

    return (num % 2 === 0) ? console.log(`El numero ${num} es par`) : console.log(`El numero ${num} es impar`);
}

const Objeto = {
    nombre: "Objeto",
    edad: 2
}

esPar();
esPar("2");
esPar(Objeto);
esPar(9);
esPar(8);
esPar(63);