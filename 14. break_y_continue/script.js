/*
Estas sentencias nos ayudan a controlar el flujo de ciertas estructuras de control 
como lo son las repetitivas
*/


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        break;  //Para romper el bucle (Se sale de la estructura de control)
    }
    console.log(numeros[i]);
}

for(let i = 0; i < numeros.length; i++){
    if(i === 5){
        continue;  //Salta a la siguiente iteracion
    }
    console.log(numeros[i]);
}