/*
Ejercicio 2) Programa una función que te devuelva el texto recortado según el número 
de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/

//Funcion para regresar la cadena recortada
const cadenaRecortada = (cadena, num) =>{
    let resultado = "";
    for(let i = 0; i < num; i++){
        resultado += cadena[i];
    }
    return resultado;
}

//- - - - - - - - - - - - - -  Version con datos introducidos por el usuario - - - - - - - - - - - - - - 

//Lee la cadena introducida por el usuario
let cadena = prompt("Ingrese una cadena de texto");
if(cadena === null){    //En caso de que el usuario presione el boton cancelar del prompt
    alert("Favor de ingresar una cadena");
}else if(!(typeof cadena === 'string')){    //En caso de que no sea una cadena de texto
    alert("No es una cadena de texto");
}else{
    //Lee el numero de caracteres
    let numero = prompt("Ingrese el numero de caracteres");
    if(numero === null){
        alert("Favor de ingresar un numero");
    }else if(isNaN(numero) || numero <= 0){
        alert("Favor de ingresar un numero valido");
    }else{
        alert(`Cadena resultante: ${cadenaRecortada(cadena, numero)}`);
    }
}

//- - - - - - - - - - - - - - - - - - - - -  Version de consola - - - - - - - - - - - - - - - - - - - - - 

// let cadena2 = "Hola mundo";
// let numero2 = 4;

//Ejemplo de una varible que no es de tipo string y un numero no valido
/*let cadena2 = {
    nombre: "Objeto",
    apellido: "No-cadena"
}
let numero2 = "p";*/

if(!(typeof cadena2 === 'string')){    //En caso de que no sea una cadena de texto
    console.log("No es una cadena de texto");
}else{
    if(isNaN(numero2) || numero2 <= 0){
        console.log("Favor de ingresar un numero valido");
    }else{
        console.log(`Cadena resultante: ${cadenaRecortada(cadena2, numero2)}`);
    }
}