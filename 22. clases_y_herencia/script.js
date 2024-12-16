/*
POO en JS esta basado en prototipos por lo que al escribir clases, lo que hace es JS es 
traducirlas a funciones prototipo
*/

class Animal{
    //Constructor
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }

    //Metodos
    sonar(){
        console.log("Estoy haciendo sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const mimi = new Animal("Mimi", "Hembra");
const scooby = new Animal("Scooby", "Macho");

console.log(mimi);
mimi.saludar();
mimi.sonar();
console.log(scooby);
scooby.saludar();
scooby.sonar();

//Herencia 

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero); //metodo para mandar a llamar el constructor de la clase padre
        this.tamanio = tamanio;
    }

    //Sobreescritura de un metodo
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");

    }

    ladrar(){
        console.log("Guau guau");
    }
}

const scooby2 = new Perro("Scooby", "Macho", "Grande");
console.log(scooby2);
scooby2.saludar();
scooby2.sonar();
scooby2.ladrar();