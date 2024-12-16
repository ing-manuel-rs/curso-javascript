/*
Ejercicio 15) Programa una función para convertir números de base binaria a 
decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10
*/

const convertirNumeros = (numero = undefined, base = undefined) => {
    if(numero === undefined) return console.log("No ingresaste el numero");
    if(isNaN(numero) || typeof numero === "string") return console.error("No ingresaste un numero valido");
    if(base === undefined) return console.log("No ingresaste la  base");
    if(isNaN(base) || typeof base === "string") return console.error("No ingresaste una base valida");

    if(base === 10) return console.log(numero.toString(2));
    if(base === 2) return console.log(parseInt(numero, 2));
}

convertirNumeros();
convertirNumeros(2);
convertirNumeros(undefined, 2);
convertirNumeros("2",2);

//De binario a decimal
convertirNumeros(100,2);
convertirNumeros(110,2);
//De decimal a binario
convertirNumeros(4,10);