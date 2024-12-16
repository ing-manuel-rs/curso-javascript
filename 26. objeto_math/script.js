//Objeto para hacer algunas operaciones matematicas

console.log(Math);

//Valor Pi
console.log(Math.PI);

//valor abosluto
console.log(Math.abs(-7.8));

//Redondear al numero entero siguiente 
console.log(Math.ceil(4.3));

//Redondear al numero entero anterior 
console.log(Math.floor(8.75));

//Redondear al numero entero mas cercano
console.log(Math.round(8.75));

//Raiz cuadrada
console.log(Math.sqrt(81));

//Elevar a una potencia (base, exponente)
console.log(Math.pow(7, 2));

//Saber si un numero es negativo, positivo o cero (si es negativo regresa -1, si es positivo regresa 1, si es cero regresa 0)
console.log(Math.sign(-14.2));

//Generar numero random (entre 0 1)
/*
Por ejemplo si queremos un numero randos entre 0 y 100 podemos multiplicar el resultado por 100
Y si lo queremos entero usariamos las funciones de redondeo
*/
console.log(Math.random());

//Math tiene muchas mas funciones, podemos consultarlas en la documentacion de JS