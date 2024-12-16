let arr1 = [1,2,3,4,5],
    arr2 = [6,7,8,9,0];

//Supongamos que queremos tener un tercer arreglo con los elementos de estos dos

/*
De esta manera solo tendriamos un arreglo con dos posiciones que a su vez cada 
sub arreglo tiene sus elementos
Y lo que queremos es tener un arreglo con todos los elementos 
*/

const arr3 = [arr1, arr2];  //Arreglo que tiene dos posiciones 
console.log(arr3);

const arr4 = [...arr1, ...arr2];  //Ahora si, un solo arreglo con todos los elementos
console.log(arr4);