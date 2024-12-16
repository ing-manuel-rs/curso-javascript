/*
Ejercicio 3) Programa una función que dada una String te devuelva un Array de 
textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/

//Funcion para regresar el arreglo de subcadenas separadas por algun caracter
const subcadenas = (cadena, caracter) =>{
    return cadena.split(caracter);
}

//- - - - - - - - - - - - - -  Version con los datos introducidos por el usuario - - - - - - - - - - - - - - 

//Lee la cadena introducida por el usuario
let cadena = prompt("Ingrese una cadena de texto");
if(cadena === null){    //En caso de que el usuario presione el boton cancelar del prompt
    alert("Favor de ingresar una cadena");
}else if(!(typeof cadena === 'string')){    //En caso de que no sea una cadena de texto
    alert("No es una cadena de texto");
}else{
    //Lee el caracter
    let caracter = prompt("Ingrese el caracter de separacion");
    if(caracter === null){
        alert("Favor de ingresar un caracter");
    }else if(caracter.length > 1){
        alert("Favor de ingresar solo un caracter");
    }else{
        alert(`Resultado: ${subcadenas(cadena, caracter)}`);
    }
}

//- - - - - - - - -  - - - - - - - - - - - -  Version de consola - - - - - - - - -  - - - - - - - - - - - - 

let cadena2 = "Hola que tal"
if(!(typeof cadena2 === 'string')){    //En caso de que no sea una cadena de texto
    console.log("No es una cadena de texto");
}else{
    let caracter2 = " ";
    if(!(typeof cadena2 === 'string')){
        console.log("Favor de ingresar un caracter valido");
    }else if(caracter2.length > 1){
        console.log("Favor de ingresar solo un caracter");
    }else{
        console.log(`Resultado: ${subcadenas(cadena2, caracter2)}`);
    }
}