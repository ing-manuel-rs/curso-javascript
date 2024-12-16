/*
Ejercicio 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) 
devolverá Hola Mundo Hola Mundo Hola Mundo.
*/

//Funcion para regresar el arreglo de subcadenas separadas por algun caracter
const repetirTexto = (cadena, numero) =>{
    let resultado = "";
    for(let i = 0; i < numero; i++){
        resultado += cadena + " ";
    }
    return resultado;
}

//- - - - - - - - - - - - - -  Version con los datos introducidos por el usuario - - - - - - - - - - - - - - 

//Lee la cadena introducida por el usuario
let cadena = prompt("Ingrese una cadena de texto");
if(cadena === null){    //En caso de que el usuario presione el boton cancelar del prompt
    alert("Favor de ingresar una cadena");
}else if(!(typeof cadena === 'string')){    //En caso de que no sea una cadena de texto
    alert("No es una cadena de texto");
}else{
    //Lee el numero de repeticiones
    let numero = prompt("Ingrese el numero de repeticiones");
    if(numero === null){
        alert("Favor de ingresar un numero");
    }else if(isNaN(numero) || numero <= 0){
        alert("Favor de ingresar un numero valido");
    }else{
        alert(`Resultado: ${repetirTexto(cadena, numero)}`);
    }
}

//- - - - - - - - -  - - - - - - - - - - - -  Version de consola - - - - - - - - -  - - - - - - - - - - - - 

let cadena2 = "Hola mundo";
let numero2 = 3;
if(!(typeof cadena2 === 'string')){    //En caso de que no sea una cadena de texto
    console.log("No es una cadena de texto");
}else{
    if(isNaN(numero2) || numero2 <= 0){
        console.log("Favor de ingresar un numero valido");
    }else{
        console.log(`Resultado: ${repetirTexto(cadena2, numero2)}`);
    }
}


/*
Nota: los ejerecicios anteriores (del uno al cuatro) estarian mejores
con las comparaciones dentro de las funciones 
*/
