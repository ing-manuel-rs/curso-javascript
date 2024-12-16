/*
Las funciones asincronas como su nombre lo dice, trabajan de manera asincrona
No vienen a sustituir las promesas, trabajan en conjunto
*/

function cuadradoPromise(value){
    if(typeof value !== "number") return Promise.reject(`Error, el valor "${value}" no es un numero`);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                value, 
                result: value * value
            });
        }, 0 | Math.random() * 1000);
    });
}


//Funcion asincrona declarada
async function funcionAsincronaDeclarada(){
    try{
        console.log("Inicio de Async function");
        /*
        En este caso devolvera un undefined, porque en la funcion de cuadradoPromise
        se tarda un tiempo en devolver el objeto y aqui lo estamos imprimiendo
        cuando puede que aun ni llegue la informacion
        Cuando usamos funciones con async podemos usar la palabra reservada await
        para esperar el resultado de la linea de ejecucion antes de pasar a la siguiente
        
        let obj = cuadradoPromise(0);
        console.log(`Async function: ${obj.value}, ${obj.result}`);
        */

        let obj = await cuadradoPromise(0);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(1);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(2);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(3);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("4");
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(5);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        console.log("Fin de Async function");
    }catch(error){
        console.error(error);
    }
}

funcionAsincronaDeclarada();



//Funcion asincrona expresada
const funcionAsincronaExpresada = async () => {
    try{
        console.log("Inicio de Async function expresada");

        let obj = await cuadradoPromise(6);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(7);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(8);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise("9");
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        obj = await cuadradoPromise(10);
        console.log(`Async function: ${obj.value}, ${obj.result}`);

        console.log("Fin de Async function");
    }catch(error){
        console.error(error);
    }
}

//Como ambas son asincronas, a la hora de imprimir se ejecutan ambas
funcionAsincronaExpresada();