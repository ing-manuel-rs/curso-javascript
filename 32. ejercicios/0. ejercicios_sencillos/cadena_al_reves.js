/**
 * Dada una frase regresarla al reves
 * Ejemplo: 
 * Hola mundo -> odnum aloH 
 * 
 * @param {string} frase - Frase dada
 * @returns {string} - Cadena resultante
 * @throws {TypeError} - si la cadena no es de tipo string
 */

const invertirFrase = (frase) => {
    if (typeof frase !== 'string') throw new TypeError('La frase debe ser de tipo string');
    return frase.split('').reverse().join('');
    // Método moderno para invertir una cadena
    //return [...frase].reverse().join('');
}

try {
    console.log(invertirFrase('Hola mundo')); 
} catch (error) {
    console.log(error.message);
}