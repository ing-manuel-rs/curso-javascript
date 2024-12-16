//Es una funcion que se va a ejecutar desdpues de que otra lo haga

// Función que eleva un número al cuadrado con un retraso asincrónico
function cuadradoCallback(numero, callback) {
    // Se utiliza setTimeout para simular un retraso asincrónico
    setTimeout(() => {
        // La función de retorno de llamada (callback) se ejecuta después del retraso
        // Llama al callback con dos argumentos: el número original y su cuadrado
        callback(numero, numero * numero);
    }, 0 | Math.random() * 1000); // El retraso es un número aleatorio entre 0 y 100
}

// Llamada a la función cuadradoCallback con el número 9 y una función de retorno de llamada
cuadradoCallback(0, (numero, resultado) => {
    // Esta función de retorno de llamada se ejecuta cuando la operación asincrónica se completa
    console.log("Inicia callback");
    console.log(`Callback: ${numero}, ${resultado}`);
});



//Callbacks anidadas (callback hell, piramide del infierno)
cuadradoCallback(1, (numero, resultado) => {
    console.log(`Callback: ${numero}, ${resultado}`);
    cuadradoCallback(2, (numero, resultado) => {
        console.log(`Callback: ${numero}, ${resultado}`);
        cuadradoCallback(3, (numero, resultado) => {    
            console.log(`Callback: ${numero}, ${resultado}`);
            cuadradoCallback(4, (numero, resultado) => {        
                console.log(`Callback: ${numero}, ${resultado}`);
                cuadradoCallback(5, (numero, resultado) => {            
                    console.log(`Callback: ${numero}, ${resultado}`);
                });
            });
        });
    });
});