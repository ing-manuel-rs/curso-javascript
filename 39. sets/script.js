//Parecido a Array pero solo acepta valores unicos, no repetidos

const set = new Set([
    1,2,3,3,4,false,true,false,{},{},"HOLA","hola"
]);

console.log(set);   //No se repiten los valores3

//Saber el tamaño de un set
console.log(set.size);

const set2 = new Set();

//Agregar valores a un set
set2.add(1);
set2.add(2);
set2.add(2);
set2.add(3);
set2.add(true);
set2.add(true);

console.log(set2);

//Recorrer un set 
console.log("for of:");
for (let item of set2) {
    console.log(item);
}

console.log("for each:");
set2.forEach(item => console.log(item));


//Acceder a posiciones ("convertir" el set a un arreglo)
let arr = Array.from(set2);
console.log(arr);
console.log(arr[2]);


//Eliminar valores
set2.delete(3);
console.log(set2);


//Saber si un valor existe
console.log(set2.has(1));   //Regresa un boolean
console.log(set2.has(145)); 


//Limpiar un set 
set2.clear();
console.log(set2);