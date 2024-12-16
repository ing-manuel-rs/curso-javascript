/**
 * De una lista de calificaciones de N alumnos, calcular el promedio, cuantos aprobaron y cuantos reprobaron 
 * 
 * @param {number[]} calificaciones - Arreglo de numeros enteros o flotantes 
 * @param {number} calAprobatoria - Calificación mínima para aprobar.
 * @returns {string} - Cadena donde se menciona el promedio, cuantos aprobaron y cuantos reprobaron
 * @throws {TypeError} Si alguno de los elementos del arreglo no es un numero
 */

const calcularCalificaciones = (calificaciones = [], calAprobatoria) => {
    if(!(calificaciones instanceof Array) || typeof calAprobatoria !== 'number') throw new TypeError('Argumentos invalidos'); 
    if(calificaciones.length < 1) throw new TypeError("No ingresaste arreglo valido");

    let promedio,
        suma = 0,
        aprobados = 0,
        reprobados = 0;

    calificaciones.forEach(cal => {
        if(typeof cal!== 'number') throw new TypeError('Argumentos invalidos');
        suma += cal;
        cal >= calAprobatoria ? aprobados++ : reprobados++;
    });

    promedio = suma / calificaciones.length;

    return `El promedio es ${promedio}, ${aprobados} aprobaron y ${reprobados} reprobaron`;
}

//Manera un poco mas avanzada
const calcularCalificacionesAvanzado = (calificaciones, calAprobatoria) => {
    if (!Array.isArray(calificaciones) || typeof calAprobatoria !== 'number') throw new TypeError('Argumentos inválidos');
    if (calificaciones.length < 1) throw new TypeError('No ingresaste un arreglo válido');

    // Validar que todos los elementos del array sean números
    if (!calificaciones.every(cal => typeof cal === 'number')) throw new TypeError('Todos los elementos del arreglo deben ser números');

    const { suma, aprobados, reprobados } = calificaciones.reduce((acc, cal) => {
        acc.suma += cal;
        cal >= calAprobatoria ? acc.aprobados++ : acc.reprobados++;
        return acc;
    }, { suma: 0, aprobados: 0, reprobados: 0 });

    let promedio = (suma / calificaciones.length).toFixed(2);

    return `El promedio es ${promedio}, ${aprobados} aprobaron y ${reprobados} reprobaron`;
};

try {
    let calificaciones = [7, 8, 6, 5, 4, 9.8, 6.45];
    let calAprobatoria = 6;

    console.log(calcularCalificaciones(calificaciones, calAprobatoria));
    console.log(calcularCalificacionesAvanzado(calificaciones, calAprobatoria));
} catch (error) {
    console.log(error.message);
}

