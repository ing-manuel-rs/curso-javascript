/*
Una promesa hace manejo de erores (esto soluciona el callback hell)
las promesas tienen dos componentes, resolve y reject (metodos estaticos)
Podemos verlas como un if-else, en caso de que todo salga bien se ejecuta el resolve y si falla algo se ejecuta reject
*/

//Elevar un numero al cuadrado
function cuadradoPromise(value){
    //En caso de error se lanza el reject
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

cuadradoPromise(9)
    .then(obj=>{  //Funcion que recibe el resolve
        console.log("Inicia promise");
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch(err => { //Funcion que recibe el error
        console.error(err);
    });


cuadradoPromise("hola")
    .then(obj=>{  
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch(err => { //Funcion que recibe el error
        console.error(err);
    });



//Algo similar al callback hell, promesas anidadas
cuadradoPromise(1)
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(4);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch(err => { //Funcion que recibe el error
        console.error(err);
    });



cuadradoPromise(1)
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(2);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(3);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise("4");    //En caso de error se salta al catch
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
        return cuadradoPromise(5);
    })
    .then(obj=>{ 
        console.log(`Promise: ${obj.value}, ${obj.result}`);
    })
    .catch(err => { //Funcion que recibe el error
        console.error(err);
    });