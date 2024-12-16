/*
Una estructura de control, como su nombre lo dice, es un mecanismo que permite
controlar el flujo del programa y/o codigo
*/

//- - - - - - - - - - - - - - - - - - - - if else - - - - - - - - - - - - - - - - - - - - - - 
/*
Esta estructura de control verifica si una condicion se cumple para entrar a un bloque de codigo
a ejecutar
*/

let nombre = "Manuel";
if(nombre === "Manuel"){    //Al ser verdadera la condicion entra al bloque y lo ejecuta
    console.log("Hola Manuel");
}


let edad = 17;
if(edad >= 18 ){    //Si se cumple la condicion entra a este bloque de codigo
    console.log("Eres mayor de edad");
}else{  //En caso contrario
    console.log("Eres menor de edad");
}


/*
00:00am - 05:00am = Dejame dormir
06:00am - 11:00am = Buenos dias
12:00pm - 18:00pm = Buenas tardes
19:00am - 23:00pm = Buenas noches
*/

let hora = 9;

if(hora >= 0 && hora <= 5){
    console.log("Dejame dormir");
}
else if(hora >= 6 && hora <= 11){
    console.log("Buenos dias");
}
else if(hora >= 12 && hora <= 18){
    console.log("Buenas tardes");
}
else{
    console.log("Buenas noches");
}



//- - - - - - - - - - - - - - - - - - Operador ternario - - - - - - - - - - - - - - - - - - - -
/*
Sintaxis:
(condicion) ? verdadero : falso
*/

let eresMayorDeEdad = (edad >= 18) ? "Eres mayor de edad" : "Eres menor de edad";
console.log(eresMayorDeEdad);




//- - - - - - - - - - - - - - - - - - - - - Switch case - - - - - - - - - - - - - - - - - - - - - -
// Sirve para evaluar varios casos para una variable sin la necesidad de tantos if

/*
Domingo = 0
Lunes = 1
Martes = 2
Miercoles = 3
Jueves = 4
Viernes = 5
Sabado = 6 
*/

let dia = 2;

switch(dia){
    //Segun sea el caso en el que caiga la variable, en este caso dia
    case 0:
        console.log("Domingo");
        break;  //Aqui termina el bloque de este caso
    case 1:
        console.log("Lunes");
        break;  
    case 2:
        console.log("Martes");
        break; 
    case 3:
        console.log("Miercoles");
        break;
    case 4:
        console.log("Jueves");
        break; 
    case 5:
        console.log("Viernes");
        break; 
    case 6:
        console.log("Sabado");
        break; 
    default:    //En caso de no cumplir ningun caso
        console.log("Opcion invalida");
        break;
}