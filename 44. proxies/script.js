/*
Permite crear un nuevo objeto basado en un objeto literal inicial
No seria una simple copia de objeto, mantiene una vinvulacion entre la copia y el original
*/

//Objeto base
const persona = {
    nombre: "",
    apellido: "",
    edad: 0
}

//Manejador / handler
const manejador = {
    set(obj, prop, valor){
        /*
        Comprobar si existe o no la propiedad pasada, esto para no permitir crear nuevas propiedades
        Porque al crear una nueva propiedad en el objeto tambien se crea en el proxy
        Esta entre otras validaciones que podemos hacer
        */
        if(Object.keys(obj).indexOf(prop) === -1){
            return console.error(`La propiedad "${prop}" no existe en el objeto persona`);
        }
        obj[prop] = valor;
    }
}

const manuel = new Proxy(persona, manejador);

manuel.nombre = "Manuel";
manuel.apellido = "Rodriguez";
manuel.edad = 20;

console.log(manuel);

manuel.instagram = "kobra_gloryg";
console.log(manuel);