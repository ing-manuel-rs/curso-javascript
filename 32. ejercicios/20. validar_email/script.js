/*
Ejercicio 20) Programa una fucnion que valide que un texto sea un email
valido, pe. miFuncion("manuel@gmail.com") devolvera verdadero 
*/

const validarEmail = (email = "") => {
    if(!email) return console.log("No ingresaste un nombre");
    if(typeof email !== "string") return console.log("No es de tipo string");

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

    return (expReg) ? console.log(`${email} es un email valido`) : console.log(`${email} NO es un email valido`);
}

validarEmail();
validarEmail(48);
validarEmail("manuel alejandro");
validarEmail("manuel@");
validarEmail("manuel.com");
validarEmail("manuel@gmail.com");