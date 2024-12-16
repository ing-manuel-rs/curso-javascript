//Console es el objeto de la consola

console.log(console);

//Mensaje de error
console.error("Esto es un error");

//Mensaje de alerta
console.warn("Esto es una alerta");

//Mensaje informativo
console.info("Esto es un mensaje informativo");

//Imprimir varias variables
let nombre = "Manuel", apellido = "Rodriguez", edad = 20;
console.log(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años`);
console.log(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

//Limpiar la consola
console.clear();

//Mostrar las propiedades, metodos, etc
console.dir(window);
console.dir(document);
console.clear();

//Generar un grupo
console.group("Motos favoritas de Manuel");
console.log("Kawa H2r");
console.log("MT09");
console.log("R6");
console.log("R1");
console.log("Super duke 1290");
console.log("BMW S1000RR");
console.log("Entre muchas mas");
console.groupEnd();

//Generar un grupo colapsado
console.groupCollapsed("Motos favoritas de Manuel");
console.log("Kawa H2r");
console.log("MT09");
console.log("R6");
console.log("R1");
console.log("Super duke 1290");
console.log("BMW S1000RR");
console.log("Entre muchas mas");
console.groupEnd();

console.clear();

//Generar una tabla
console.log(console);
console.table(Object.entries(console));
console.table(Object.entries(console).sort()); //de manera ordenada

const numeros = [1,2,3,4,5];
const vocales = ["A","E","I","O","U"];
const manuel = {
    nombre: "Manuel",
    apellido: "Rodriguez",
    edad: 20
}
console.table(numeros);
console.table(vocales);
console.table(manuel);

console.clear();

//Tomar tiempo
console.time("Cuanto tiempo tarda el codigo");
const arreglo = Array(1000000);
for(let i=0; i<arreglo.length; i++){
    arreglo[i] = i;
}
console.timeEnd("Cuanto tiempo tarda el codigo");

console.clear();

//Saber cuantas veces se ejecuto un codigo
for(let i=1; i<=100; i++){
    console.count("Codigo for");
    console.log(i);
}

console.clear();

//Crear un assert para una prueba (Solo se ejecuta cuando falla la condicion)
let x=5, y=2, mensaje="Se espera que X siempre sea menor que Y";
console.assert(x<y, {x,y,mensaje});