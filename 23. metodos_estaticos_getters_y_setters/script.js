//Un metodo estatico se puede ejecutar sin la necesidad de instanciar la clase

class Animal{
    constructor(nombre, genero){
        this.nombre = nombre;
        this.genero = genero;
    }
    sonar(){
        console.log("Estoy haciendo sonidos porque estoy vivo");
    }
    saludar(){
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

class Perro extends Animal{
    constructor(nombre, genero, tamanio){
        super(nombre, genero); 
        this.tamanio = tamanio;
        this.raza = null;
    }
    sonar(){
        console.log("Soy un perro y mi sonido es un ladrido");

    }
    ladrar(){
        console.log("Guau guau");
    }
    
    //Metodo estatico
    static queEres(){
        console.log("Los perros somos animales mamiferos que pertenecemos a la familia de los caninos, Somos considerados los mejores amigos del hmbre");
    }

    //Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
    get getRaza(){
        return this.raza;
    }

    set setRaza(raza){
        this.raza = raza;
    }
}

//Invocacion de un metodo estatico
Perro.queEres();

const scooby = new Perro("Scooby", "Macho", "Grande");
console.log(scooby);
scooby.setRaza = "Gran danez";  //Estos metodos los trata como atributos ya que usamos las palabras reservadas get y set
console.log(scooby);
console.log(scooby.getRaza);