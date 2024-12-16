/*
Ejercicio 18) Programa una función que dada una cadena 
de texto cuente el número de vocales y consonantes, 
pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const contarVocalesConsonantes = (cadena = "") =>{
    if(cadena === "") return console.log("No ingresaste cadena");
    if(typeof cadena !== "string") return console.log("No ingresaste cadena valida");
    cadena = cadena.toLowerCase();
    let contVocales = 0, contConsonantes = 0;
    for (const caracter of cadena) {
        if(/[aeiouáéíóúü]/.test(caracter)) contVocales++;
        if(/[bcdfghjklmnñpqrstvwxyz]/.test(caracter)) contConsonantes++;
    }
    return console.log({
        cadena,
        contVocales,
        contConsonantes
    });
}

contarVocalesConsonantes();
contarVocalesConsonantes("");
contarVocalesConsonantes(45);
contarVocalesConsonantes("Hola mundo");
contarVocalesConsonantes("Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel fuga placeat sequi adipisci nemo odit illum, neque debitis libero cumque suscipit officia alias deleniti magni et voluptatibus, explicabo modi ab.");