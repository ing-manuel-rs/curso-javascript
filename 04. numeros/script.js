let a = 1;
let b = new Number(2);
let c = 7.193;

console.log(a);
console.log(b);
console.log(c);

// Para redondear. El atributo que recibe es la cantidad de decimales
console.log(c.toFixed(1));
console.log(c.toFixed(5));

// Regresa la parte entera, puede recibir una variable de tipo number o string (convertir de cadena a numero)
console.log(parseInt(c));
console.log(parseInt("812.25"));

//Tambien podemos usar parseFloat, es como parseInt pero con numeros flotantes o reales
console.log(parseFloat("812.25"));  //Convertir de sring a numero flotante

/*
Las funciones o metodos parseInt y parseFloat cuelgan el objeto Number, es decir, podriamos declararlo asi:
Number.parseinte("85");   //convertir de string a numero entero
*/

// Nota: estas y mas funciones siempre se pueden encontrar en la documentacion de JS