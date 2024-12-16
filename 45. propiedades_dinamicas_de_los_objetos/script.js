

//Crear una propiedad dinamica, en este caso un objeto con un id de cada usuario
const objetoUsuarios = {}

const usuarios = ["Manuel", "Alejandro", "Antonio", "Susana"];

usuarios.forEach((usuario, index) => objetoUsuarios[`id_${index}`] = usuario);

console.log(objetoUsuarios);


//las propiedades dinamicas se asignan mediante corchetes 
const objetoUsuarios2 = {
    [`id_${Math.round(Math.random() * 100 + 5)}`]: "Valor aleatorio"
}
console.log(objetoUsuarios2);