/*
Ejercicio 12) Programa una función que determine si un número es primo 
(aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
*/

const esPrimo = (num = undefined) => {
    //Validar que el numero exista
    if(num === undefined) return console.error("No ingresaste un numero");
    //Validar que si sea un numero
    if(isNaN(num) || typeof num === "string") return console.error("No ingresaste un numero valido");
    //Validar que no sea uno ni cero
    if(num === 1) return console.log("El numero no puede ser 1");
    if(num === 0) return console.log("El numero no puede ser 0");
    //Validar que el numero no sea negativo
    if(num < 0 ) return console.log("El numero no puedes ser negativo");

    let divisible = false;

    for(let i = 2; i < num; i++){
        if(num % i === 0){
            divisible = true;
        }
    }
    return (divisible) ? console.log(`El numero ${num} NO es primo`) : console.log(`El numero ${num} SI es primo`);
}

esPrimo();
esPrimo(-4);
esPrimo(0);
esPrimo(1);
esPrimo("8");
esPrimo(8);
esPrimo(7);
esPrimo(9);