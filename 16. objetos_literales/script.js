//Forma de escribir atributos y metodos

let nombre = "KEnAI",
    edad = 7;

const perro = {
    nombre: nombre,
    edad: edad,
    ladrar: function(){
        console.log("guauu guauu");
    }
}

console.log(perro);
perro.ladrar();

/*
Si la variable que queremos guardar se llama igual que la propiedad del objeto 
lo podemos hacer de la siguiente forma, JS entendera que la propiedad se llamara 
igual que las variables y tendran su valor
*/

const dog = {
    nombre,
    edad
}
console.log(dog);


//Para agregar mas atributos lo podemos hacer normalmente
const dog2 = {
    nombre,
    edad,
    raza: "Callejero",
    ladrar(){
        console.log("guauu guauu guauu");
    }
}
console.log(dog2);
dog2.ladrar();