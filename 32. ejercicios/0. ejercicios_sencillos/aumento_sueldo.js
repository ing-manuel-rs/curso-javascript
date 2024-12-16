/**
 * Un empleado tiene un sueldo fijo y va a recibir un aumento del 15% de su sueldo
 * Se necesita saber cuanto dinero representa ese 15% y el monto total que sera su nuevo salario, 
 * esto en un mensaje
 * @param {number} sueldo - Sueldo actual del empleado 
 * @param {number} porcentaje - porcentaje a aumentar al sueldo 
 * @returns {string} - Cadena donde se menciona la cantidad a aumentar y el sueldo neto
 * @throws {TypeError} Si alguno de los argumentos no es un número
 */

const calcularAumento = (sueldo, porcentaje) => {
    if (typeof sueldo !== 'number' || typeof porcentaje !== 'number') throw new TypeError('Los argumentos deben ser números');

    const aumento = sueldo * (porcentaje / 100);
    const nuevoSueldo = sueldo + aumento;

    return `El aumento es de ${aumento} y el nuevo sueldo es de ${nuevoSueldo}`;
}

try {
    let sueldo = 2500,
        porcentaje = 15;
    console.log(calcularAumento(sueldo, porcentaje));
} catch (error) {
    console.error(error.message);
}
