/*
Ejercicio 11) Programa una función que calcule el factorial 
de un número (El factorial de un entero positivo n, se define 
como el producto de todos los números enteros positivos desde 1 hasta n), 
pe. miFuncion(5) devolverá 120.
*/

const factorial = num => {
    //Validar que el numero exista 
    if(!num) return console.error("No ingresaste un numero");
    //Validar que si sea un numero
    if(isNaN(num) || typeof num === "string" || num <= 0) return console.error("Numero invalido");

    let res = 1;
    for(let i = num; i > 0; i--){
        res *= i
    }
    return console.log(`El factorial de ${num} es ${res}`);
}

factorial();
factorial("5");
factorial(5);