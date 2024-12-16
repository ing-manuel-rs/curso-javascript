/*
Un objeto es una coleccion de llaves/valores
    Ejemplo de llave: Nombre
            Su valor: Manuel
Un objeto puede tener mas objetos anidados
*/

//String es el objeto, la variable a es de tipo String
const a = new String("Hola");
console.log(a);

//Objeto vacio
const b={}
console.log(b);

//Usando constructor
const c = new Object();
console.log(c);

const manuel = {
    nombre: "Manuel",   //En vez de usar = para asignar valores usamos :
    apellido: "Rodriguez",
    edad: 20,
    pasatiempos: ["Estudiar", "Trabajar"],
    soltero: false,
    contacto: { //objeto anidado
        numero: 333345457800,
        email: "correo@gmail.com",
    },

    saludar: function(){    //Propiedad del objeto que hace una accion (metodo)
        console.log("Hola :)");
    },

    decirMiNombre: function(){
        /*
        Usamos this para hecer referencia al ambito local, al mismo objeto, en este caso this 
        hace referencia a este objeto a la variable manuel
        */
        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`);
    }
}

console.log(manuel);

//Acceder a propiedades, en este caso accedemos a la propiedad nombre
console.log(manuel["nombre"]);

//Podemos acceder a propiedades(atributos) con el punto
console.log(manuel.apellido);

//Acceder a un atributo arreglo
console.log(manuel.pasatiempos[1]);

//Acceder a atributos de un objeto dentro de un objeto
console.log(manuel.contacto.numero);

//Ejecutar un metodo de un objeto
manuel.saludar();
manuel.decirMiNombre();

//Algunos metodos. Para conocer cada metodo podemos visitar la docuementacion de JS
//Enlista en un arreglo las llaves del objeto
console.log(Object.keys(manuel));

//Enlista en un arreglo los valores de las llaves del objeto
console.log(Object.values(manuel));

//Saber si un objeto tiene una propiedad (regresa un boolean)
console.log(manuel.hasOwnProperty("nombre"));
console.log(manuel.hasOwnProperty("altura"));