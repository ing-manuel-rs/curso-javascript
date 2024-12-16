/*
La herencia es la capacidad de que un padre herede caracteristicas a un hijo
*/

function Animal(nombre, genero){
    this.nombre = nombre;
    this.genero = genero;
}
Animal.prototype.sonar = function(){
    console.log("Hago sonidos porque estoy vivo");
}
Animal.prototype.saludar = function(){
    console.log(`Hola me llamo ${this.nombre}`);
}

//Herencia prototipica 
function Perro(nombre, genero, tamanio){
    this.super = Animal;    //Animal es el padre de Perro, Perro hereda de Animal
    this.super(nombre, genero);
    this.tamanio = tamanio;
}

//Perro esta heredando de Animal
Perro.prototype = new Animal();
Perro.prototype.constructor = Perro;

//Sobreescritura de metodos del prototipo padre en el hijo
Perro.prototype.sonar = function(){
    console.log("Soy un perro y mi sonido es un ladrido");
}

//Creacion de metodos en el hijo
Perro.prototype.ladrar = function(){
    console.log("Guau guau");
}




const lolaBunny = new Animal("LolaBunny", "Hembra");
const snoopy = new Perro("Snoopy", "Macho", "Mediano");

console.log(lolaBunny);
lolaBunny.sonar();  //Hago sonidos porque estoy vivo

console.log(snoopy);
snoopy.sonar(); //Soy un perro y mi sonido es un ladrido
snoopy.ladrar();