//objetos que sirven para almacenar conjunto de datos a manera de objeto relacionados entre si
//Coleccion de llaves-valor

const mapa = new Map();

//Agregar valores
mapa.set("nombre", "Manuel");
mapa.set("apellido", "Rodriguez");
mapa.set("edad", 20);

console.log(mapa);

//Saber cuantos elementos tiene
console.log(mapa.size);

//Comprobar si existen llaves o no 
console.log(mapa.has("correo"));    //false
console.log(mapa.has("nombre"));    //true

//Recuperar datos
console.log(mapa.get("nombre"));    //Manuel

//Sobreescribir valores 
mapa.set("nombre", "Manuel Alejandro");
console.log(mapa);

//Eliminar una propiedad
mapa.delete("apellido");
console.log(mapa);

//Recorrer un mapa
for(let [key, value] of mapa) {
    console.log(`Llave: ${key}, Valor: ${value}`);
}

//Podemos crear llaves que no sean una cadena
mapa.set(19, "diecinueve");
mapa.set(false, "falso");
console.log(mapa);

//Inicializar un mapa
const mapa2 = new Map([
    ["animal", "perro"],
    ["edad", 7],
    [null, "nulo"]
]);

console.log(mapa2);

//Obtener las llaves
const llavesMapa2 = [...mapa2.keys()];
const valoresMapa2 = [...mapa2.values()];

console.log(llavesMapa2);
console.log(valoresMapa2);