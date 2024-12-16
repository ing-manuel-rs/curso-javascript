/*
Un arreglo se define mediante corchetes []
Un areeglo puede guardar varios valores (una coleccion de elementos)en una sola 
    variable ya sean del mismo tipo o diferente 
Un arreglo puede ser constante y aun asi lo podremos modificar
Los elementos de un arreglo tiene un indice o posicion, el indice de un arreglo siempre empieza en 0
*/

const a = [];
const b = [1, true, "Hola", ["A", "B", "C"]];   //Puede guardar valores de diferente tipo, incluso un arrgelo puede guardar arreglos

console.log(a);
console.log(b);
console.log(b.length);  //longitud del arreglo (cantidad de elementos)
console.log(b[2]);  //accediendo a una posicion especifica
console.log(b[3][2]);   //Accediendo a la letra C

//Usando constructor
const c = Array.of("X", "Y", "Z", 1, 2, 3);
console.log(c);

//Crear un arreglo con 15 elementos y asignarle un valor por defecto a todos
const d = Array(15).fill(false);
console.log(d);

//Usando constructor
const e = new Array();
console.log(e);

const f = new Array(8, 9, "A", true);
console.log(f);


//Metodos de arreglos

const colores = ["Rojo", "Verde", "Azul"];
console.log(colores);

colores.push("Negro");  //Agregar al final
console.log(colores);

colores.pop();  //Elimina el ultimo
console.log(colores);

//Itera sobre cada elemento del arreglo, en este caso nombramos cada valor como el
colores.forEach(function(el){
    console.log(`<li>${el}</li>`);
});

//Podemos agregar un sefundo parametro a la funcion para recibir el indice de cada elemento
colores.forEach(function(el, index){
    console.log(`<li id="${index}">${el}</li>`);
});

//Para conocer todos los metodos podemos visitar la documentacion