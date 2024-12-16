/*
Ejercicio 14)  Programa una función para convertir grados Celsius a 
Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
*/

const cambiarCelsiusFahrenheit = (num = undefined, caracter = "") => {
    //Validar que el numero exista
    if(num === undefined) return console.error("No ingresaste un numero");
    //Validar que si sea un numero
    if(isNaN(num) || typeof num === "string") return console.error("No ingresaste un numero valido");
    //Validar que exista caracter
    if(!caracter) return console.error("No ingresaste caracter");
    //Validar que sea de tipo string y sea solo uno ("c" o "f")
    if(typeof caracter !== "string") return console.error("No ingresaste un caracter");
    caracter = caracter.toLowerCase();
    if(caracter !== "c" && caracter !== "f") return console.error("Carcter no valido");


    if(caracter === "c"){
        return console.log((num*1.8)+32,"°F");
    }
    else{
        return console.log((num-32)/1.8,"°C");
    }
}


cambiarCelsiusFahrenheit();
cambiarCelsiusFahrenheit(4, "");
cambiarCelsiusFahrenheit(undefined, "c");
cambiarCelsiusFahrenheit(8, 9);

cambiarCelsiusFahrenheit(8, "g");
cambiarCelsiusFahrenheit(8, "C");
cambiarCelsiusFahrenheit(8, "F");
cambiarCelsiusFahrenheit(0, "c");
