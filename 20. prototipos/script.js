/*
Al momento de crear clases en js, js se encarga de transformarlas en funciones prototipo

POO (Programacion orientada a objetos)
    Clases - Modelo o plantilla a seguir
    Objetos - Instancias de una clase
        Atributos - Caracteristica o propiedad de un objeto (variables)
        Metodos - Acciones que un objeto puede realizar (funciones dentro de un objeto)
    
*/

const animal = {
    nombre: "Perro",
    sonar(){
        console.log("Guau guau");
    }
}

const animal2 = {
    nombre: "Gato",
    sonar(){
        console.log("Miau miau");
    }
}

/*
Aqui estamos creando un objeto para cada animal copeando y pegando, repitiendo el mismo codigo,
esto no es funcional, podemos crear prototipos para declarar n animales 
*/

//Funcion constructura
function Animal(nombre, genero){
    //Estos serian los atributos
    this.nombre = nombre;
    this.genero = genero;

    //Metodos
    this.sonar = function(){
        console.log("Hago sonidos");
    }
    this.saludar = function(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

//Instacias 
const snoopy = new Animal("Snoopy", "Macho");
const lolaBunny = new Animal("LolaBunny", "Hembra");

console.log(snoopy);
console.log(lolaBunny);

snoopy.sonar();
snoopy.saludar();
lolaBunny.sonar();
lolaBunny.saludar();

/*
Pero que pasa si tenemos que crear miles de variables de tipo Animal, en cada variable se guardan los metodos 
Lo ideal es que las funciones constructoras solo tengan los atributos y los metodos los saquemos
*/

//Funcion constructura donde asignamos los metodos al prototipo, no a la funcion como tal
function Persona(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}

//Metodos agregados al prototipo de la funcion constructora
Persona.prototype.sonar = function(){
    console.log("Hablo");
}
Persona.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Evita que las instancias que creemos esten duplicando los metodos 

const manuel = new Persona("Manuel", "Macho");
const alejandra = new Persona("Alejandra", "Hembra");

console.log(manuel);
console.log(alejandra);

manuel.sonar();
manuel.saludar();

alejandra.sonar();
alejandra.saludar();