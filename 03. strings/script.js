// Podemos inicializar una variable de tipo texto con comillas simples o dobles
let nombre = "Manuel";
let apellido = 'Rodriguez';

// Tambien podemos usar su constructor 
let saludo = new String("Hola mundo");

console.log(nombre, apellido, saludo);

// Para saber la cantidad de caracteres de una cadena (longitud) usamos la siguiente propiedad
console.log(
    nombre.length,
    apellido.length,
    saludo.length
);

/*
NOTA: los objetos tienen propiedades(atributos) y metodos
    las propiedades son las caracteristicas del objeto
    los metodos son las acciones del objeto, estos contienen un parentesis al final

    en este caso, length es una propiedad del tipo de dato string 
*/

// Ejemplos de propiedades de string

//Convertir a mayusculas
console.log(nombre.toUpperCase());

//Convertir a minusculas
console.log(apellido.toLowerCase());  

let lorem = `      Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
Eaque nemo mollitia consectetur vero nam corrupti, debitis qui, 
exercitationem fuga optio, pariatur voluptatem! Laborum tenetur ex culpa eius, 
vitae alias voluptatibus?      `;

//NOTA: al usar acentos invertidos se nos permite saltar de linea en una cadena

//Verificar si existe o no una cadena dentro de otra, regresa un boolean
console.log(lorem.includes("nemo"));    
console.log(lorem.includes("prueba"));  

// Quita los espacios en blanco al inicio y/o al final
console.log(lorem.trim());

// Generar un arreglo con cada subcadena dependiendo cierto caracter de separador 
let nombreCompleto = "Manuel Alejandro Rodriguez Sanchez";
console.log(nombreCompleto.split(" ")); 
//En este caso el separador es el espacio " ", y genera el arreglo: ["Manuel", "Alejandro", "Rodriguez", "Sanchez"]


// Concatenacion 
let nombre1 = "Manuel";
let apellido1 = "Sanchez";
let saludo1 = "Hola mi nombre es " + nombre1 + " " + apellido1;
console.log(saludo1);

// Interpolacion de variables - Template string
let saludo2 = `Hola yo soy ${nombre1} ${apellido1}`;
console.log(saludo2);

//El uso de los asenstos invertidos nos permiten saltar entre lineas
let mensaje = `
Hola
a
todos
    :)`;
console.log(mensaje);