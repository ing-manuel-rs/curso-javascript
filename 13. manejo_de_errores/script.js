console.log("**************************** Primer try-catch ****************************");
try {
    console.log("En el try se agrega el codigo a evaluar");
} catch (error) {
    console.log("catch captura cualquier error surgido o lanzado en el try");
} finally{  //Esta sentencia puede estar o no
    console.log("El bloque finally se ejecutara siempre al final de un bloque try-catch");
}

/*
Es decir, tratamos se ejecutar un codigo en el try y si surge algun error ahora el programa 
pasa al bloque del catch
*/

console.log();
console.log("**************************** Segundo try-catch ****************************");
try {
    console.log("En el try se agrega el codigo a evaluar");
    //Creacion de un error
    variableQueNoExiste;
    console.log("Segundo mensaje del try");
} catch (error) {
    console.log("Surgio algun error: ",error);
} 

/*
Lo que paso en el codigo anterior fue que en el try ejecutamos un mensaje, despues hubo un error
y al haber un error brinco al catch donde mostramos el error, saltandose asi el segundo mensaje del try
*/

/*
Tambien podemos nosotros de manera mas intencional mandar nuestros propios erroes y no solo errores de JS
Por ejemplo, si en un formulario requerimos datos numericos y nos llega texto, nosotros podemos personalizar
    el error, algo como "Datos invalidos"
*/

console.log();
console.log("**************************** Tercer try-catch ****************************");
try {
    let numero = 10;

    if(isNaN(numero)){  //La funcion isNan verifica si no es un numero
        throw new Error("El caracter introducido no es un numero");
    }

    console.log(numero * numero);
} catch (error) {
    console.log("Se produjo el siguiente error: ",error);
} 


console.log();
console.log("**************************** Cuarto try-catch ****************************");
try {
    //Ahora introduciendo un caracter no numerico para generar el error que establecimos
    let numero = "A";
    if(isNaN(numero)){  //La funcion isNan verifica si no es un numero
        throw new Error("El caracter introducido no es un numero");
    }
    console.log(numero * numero);
} catch (error) {
    console.log("Se produjo el siguiente error: ",error);
}