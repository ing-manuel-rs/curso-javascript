/*
Es la forma de asignar valores a objetos o arreglos
Asiganmos dinamicamente lo que viene en un arreglo u objeto a nuevas variables de una manera mas agil
*/

//Supongamos que necesitamos guardar cada elemento del arreglo en una variable independiente
const numeros = [1, 2, 3];

//Sin destructuracion 
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno, dos, tres);

//Con destructuracion
const [one, two, three] = numeros;
console.log(one, two, three);


const persona = {
    nombre: "Manuel",
    apellido: "Rodriguez",
    edad: 20
}

let {nombre, apellido, edad} = persona; //Para que la destructuracion funcione en los osbjetos, las variables deben llamarse igual que en las propiedadaes
console.log(nombre, apellido, edad);

