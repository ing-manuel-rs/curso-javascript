//Ejercicio 9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const numeroAleatorio = () => Math.floor(Math.random() * 100 + 500);
console.log(numeroAleatorio());