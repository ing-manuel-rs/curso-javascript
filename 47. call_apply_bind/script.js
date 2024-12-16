console.log(this);
this.lugar = "Contexto global";

function saludar(saludo, aQuien){
    console.log(`${saludo} ${aQuien} desde el ${this.lugar}`);
}

saludar("Hola", "pepe");


const obj = {
    lugar: "Contexto objeto"
}

//call recibe un objeto el cual es el contexto (nuevo this), podemos poner parametros separados por comas
saludar.call(obj, "Hola", "Manuel");

//apply recibe un objeto el cual es el contexto (nuevo this), podemos poner parametros separados por comas pero en un arreglo
saludar.apply(obj, ["Adios", "Alejandro"]);

//null para regresarnos al contexto global o this (tanto para call como para apply)
saludar.apply(null, ["Adios", "Alejandro"]);





const persona = {
    nombre: "Manuel",
    saludar: function(){
        console.log(`Hola ${this.nombre}`);
    }
}

persona.saludar();

const otraPersona = {
    /*para enlazar el contexto de persona, ya que si no esta el bind
    como no hay propiedad nombre marca undefined, es decir, 
    maneja el this de persona*/
    saludar: persona.saludar.bind(persona)
}

otraPersona.saludar();