//Son una nueva forma de definir una funcion anonima expresada

//Funcion expresada
const saludo = function(){
    console.log("Hola 1");
}
saludo();

//Arrow function
const saludar = () => {
    console.log("Hola 2");
}
saludar();

//Si la funcion tiene una sola linea de codigo se pueden quitar las llaves
const saludar2 = () => console.log("Hola 3");
saludar2();

const saludar3 = (nombre) => console.log("Hola ",nombre);
saludar3("Manuel");

//Cuando una funcion flecha recibe un solo parametro podemos quitar los parentesis
const saludar4 = nombre => console.log("Hola ",nombre);
saludar4("Alejandro");

//Tambien nos podemos evitar la palabra reservada return
const sumar = (a,b) => a+b;
console.log(sumar(5,7));

//El metodo forEach acepta funciones flecha
const numeros = [1,2,3,4,5]
numeros.forEach((elemento, indice) => {
    console.log(`El elemento ${elemento} esta en la posicion ${indice}`);
});

//Omitiendo las llaves
const numeros2 = [10,20,30,40,50]
numeros2.forEach((elemento, indice) => console.log(`El elemento ${elemento} esta en la posicion ${indice}`));

//Las funciones flecha no respetan al ambito de this al usarlo
const perro = {
    nombre: "Kenai",
    ladrar(){
        console.log(this);  //En este caso this es el objeto
    }
}

const perro2 = {
    nombre: "Kenai2",
    ladrar: () => {
        console.log(this);  //En este this es el DOM, el objeto window, la funcion flecha no repseto el this
    }
}

perro.ladrar();
perro2.ladrar();