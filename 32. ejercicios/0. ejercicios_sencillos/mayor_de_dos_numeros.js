/*
    Crear una función que reciba dos números y devuelva una cadena indicando
    el mayor, o si son iguales
*/
const mayorDeDosNumeros = (n1, n2) => {
    // Validar que sean números
    if(!(typeof n1 === 'number' && typeof n2 === 'number')) return `Favor de ingresar un número valido`;
    else if (n1 === n2) return `Los números son iguales`;
    else if (n1 > n2) return `El mayor es ${n1}`;
    else return `El mayor es ${n2}`;
}

// Manera un poco mas avanzada
/**
 * Compara dos números y devuelve una cadena indicando el mayor o si son iguales.
 * 
 * @param n1 - Primer número a comparar
 * @param n2 - Segundo número a comparar
 * @returns Una cadena indicando el mayor número o si son iguales
 * @throws {TypeError} Si alguno de los argumentos no es un número
*/
const mayorDeDosNumerosAvanzado = (n1, n2) => {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new TypeError('Favor de ingresar números válidos.');
    if (n1 === n2) return 'Los números son iguales';
    return `El mayor es ${n1 > n2 ? n1 : n2}`;
};

// Ejemplo de uso
let num1 = 24,
    num2 = 15;

console.log(mayorDeDosNumeros(num1, num2));

try {
    console.log(mayorDeDosNumerosAvanzado(num1, num2));
} catch (error) {
    console.error(error.message);
}
