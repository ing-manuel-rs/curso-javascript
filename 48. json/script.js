/*
JSON - JavaScript Objetc Notation - NOTACION DE OBJETO DE JAVASCRIPT
*/

const json = {
    cadena: "Manuel",
    numero: 20,
    boolean: true,
    arreglo: ["Estudiar", "Rodar", "Comer"],
    objeto: {
        instagram: "Kobra_gloryg",
        email: "manuel@gmail.com"
    },
    nulo: null
}

console.log(json);

//Ahora a crear un archivo .json


/*
Todo debe estar dentro de unas llaves principales
Todas las propiedades deben estar en dobles comillas
Los numeros y booleans de preferencia hay que trabajarlos tambien entre comillas dobles
*/

//Obheto para usar JSON
console.log(JSON);

//parse convierte cadena de texto a tipos de datos que JS pueda manejar
console.log(JSON.parse("{}"));
console.log(JSON.parse("[1,2,3]"));
console.log(JSON.parse("true"));
console.log(JSON.parse("19"));
console.log(JSON.parse("null"));
//Todo debe ir en una linea
console.log(JSON.parse('{"cadena": "Manuel", "numero": 20, "boolean": true, "arreglo": ["Estudiar", "Rodar", "Comer"], "objeto": {"instagram": "Kobra_gloryg", "email": "manuel@gmail.com" }, "nulo": null}'));
//cadenas y undefined no funciona con parse


//stringify convierte de objeto o valor de JS a cadena de texto JSON
console.log(JSON.stringify({}));
console.log(JSON.stringify([1,2,3]));
console.log(JSON.stringify(true));
console.log(JSON.stringify(19));
console.log(JSON.stringify(null));
console.log(JSON.stringify({x:2, y:3}));
console.log(JSON.stringify(json));