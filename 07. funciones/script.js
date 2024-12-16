/*
Las funciones son segmentos de codigo que se escriben solo una vez y 
    se pueden reutilizar las vecez que sean necesarias
Las funciones pueden o no recibir argumentos (datos, variables, etc) para trabajar con estos
    y tambien puede devolver o no informacion, datos o variables
En JS las funciones tambien se pueden considerar objetos, las funciones se pueden asignar como 
    valor a una variable, se pueden pasar como parametros a otras funciones, pueden regresar 
    funciones, entre mas cosas
*/


//- - - - - - - - - - - - - - - - - - -Funcion declarada - - - - - - - - - - - - - - - - - - - - - - -
function estoEsUnaFuncion(){
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}//En este caso la funcion no recibe ni regresa informacion

//Invocacion de la funcion
estoEsUnaFuncion(); //ejecuta la funcion, manda a llamar a la funcion

//Se pueden mandar a llamar cuantas veces sea necesario
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();
estoEsUnaFuncion();

//Funcion que regresa un valor
function funcionQueRegresaValor(){
    console.log("Cuatro");
    return "La funcion ha regresado una cadena de texto";
}

/*
Mandar a llamar a la funcion
Cuando una funcion regresa un valor, debermos guardar este valor regresado en una
variable por ejemplo
*/

let valorRegresado = funcionQueRegresaValor();
console.log(valorRegresado);

/*
Las funciones terminan su ejecucion cuando se encuentran con la palabra reservada return
*/

//Funcion que recibe parametros
function saludo(nombre, edad){  //Los parametros se separan por coma
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludo();   //Si no le pasamos los datos, las variables seran undefined
saludo("Manuel", 20);

//Le podemos asignar valores por defecto a una funcion en caso de no pasarle parametros
function saludo2(nombre = "Desconocido", edad = 0){  
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}

saludo2();  //Al no pasarle parametros toma los valores por defecto establecidos
saludo2("Alejandro");   //Aqui se le pasa el primer parametro pero en el segundo toma el valor por defecto


funcionDeclarada(); //Invocamos la funcion antes de la definicion

function funcionDeclarada(){
    console.log(`Esto es una funcion declarada, puede invocarse desde cualquier parte de nuestro
    codigo, incluso antes de la definicion de la funcion`);
}

/*
Js lo que hace con las funciones declaradas es que le hace hoisting, es decir, las sube
al ambito(scope) global sin importar donde las creemos 
*/



//- - - - - - - - - - - - - - - - - - -Funcion expresada - - - - - - - - - - - - - - - - - - - - - - -
/*
Son funciones que se le asignan a una variable, estas NO pueden ser llamadas o invocadas antes 
de su definicion
*/

//Funcion anonima, no tiene nombre
const funcionExpresada = function(){
    console.log(`Esto es una funcion expresada, es decir, una funcion que se le asigno 
    como valor a una variable`);
}

funcionExpresada();