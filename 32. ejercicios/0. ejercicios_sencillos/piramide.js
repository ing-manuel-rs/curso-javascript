/*
Ejercicio: Formar una piramide con asteriscos:

*
**
***
****
***
**
*

Entrada: un numero N, por ejemplo: N=3
*
**
***
**
*

*/

//Guardando el resultado en una cadena 
const generarPiramideNivelPrincipiante = num => {
    let piramide = '';
    
    for (let i = 1; i <= num; i++) {
        for (let j = 1; j <= i; j++) {
            piramide += '*';
        }    
        piramide += '\n';
    }
    
    for (let i = num-1; i >= 1; i--) {
        for (let j = i; j >= 1; j--) {
            piramide += '*';
        }    
        piramide += '\n';
    }
    
    return piramide;
}

const generarPiramideNivelMedio = num => {
    let piramide = '';

    for (let i = 1; i <= num; i++) {
        piramide += '*'.repeat(i) + '\n';
    }

    for (let i = num - 1; i >= 1; i--) {
        piramide += '*'.repeat(i) + '\n';
    }

    return piramide;
}

const generarPiramideNivelAvanzado = num => {
    const generarLinea = (n) => '*'.repeat(n);

    const parteSuperior = Array.from({ length: num }, (_, i) => generarLinea(i + 1));
    const parteInferior = Array.from({ length: num - 1 }, (_, i) => generarLinea(num - 1 - i));

    return [...parteSuperior, ...parteInferior].join('\n');
}


console.log('Piramide nivel principiante: \n' + generarPiramideNivelPrincipiante(5));
console.log('Piramide nivel medio: \n' + generarPiramideNivelMedio(5));
console.log('Piramide nivel avanzado: \n' + generarPiramideNivelAvanzado(5));