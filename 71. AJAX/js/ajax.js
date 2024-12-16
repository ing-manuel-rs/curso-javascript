// CODIGOS DE RESPUESTA HTTP
// Respuestas informativas (100 - 199)
// Respuestas satisfactorias (200 - 299)
// Respuestas redireccionamiento (300 - 399)
// Respuestas errores (400 - 499)
// Respuestas de error del lado del servidor (500 - 599)



// Funcion anonima autoejecutable
//XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest(), //instancia del objeto XMLHttpRequest
        $xhr = document.getElementById('xhr'),
        $fragment = document.createDocumentFragment(); //Creacion de un fragmento para hacer solo una insercion al doumento

    // Se lanza cuando detecta cualquier cambio de estado
    xhr.addEventListener('readystatechange', e => {
        // Validar que e; readyState sea diferente a 4 
        if(xhr.readyState !== 4) return;
        
        //console.log(xhr);

        //En caso de Peticion satisfactoria (
        if(xhr.status >= 200 && xhr.status < 300){
            //console.log('Exito');
            //console.log(xhr.responseText); // Respuesta

            // Parsear la respuesta (Convertir de JSON a objeto de javascript), en este caso un arreglo de 10 elementos(objetos)
            let json = JSON.parse(xhr.responseText);
            //console.log(json);


            // Crear elementos HTML y agregarlos al fragmento
            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
                $fragment.appendChild($li);
            });
            // Agregar el fragmento al documento
            $xhr.appendChild($fragment);

        }else{ //Caso contrario, de error
            //console.log('Error');
            let message = xhr.statusText || 'Ocurrio un error';
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;
        }

        //console.log('Este mensaje cargara de cualquier forma');
    });

    // Abrir la peticion
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    //xhr.open('GET', 'assets/users.json');   //De manera local

    // Enviar la peticion
    xhr.send();

})();


// API Fetch
(() => {
    const $fetch = document.getElementById('fetch'),
        $fragment = document.createDocumentFragment();
    
    //Funcion fetchs, como parametros tiene la url a usar y puede hacer uso de un objeto de opiones como segundo parametro
    //El metodo por defecto de fetch es GET
    //Fetch trabaja con promesas: then en caso exitoso, catch en caso de error y el finally siempre se ejecutara, puede o no estar
    //Fetch tambien puede trabajar de manera local
    // fetch('assets/users.json')
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            //console.log(res);
            //Convertir a texto json
            return res.ok ? res.json() : Promise.reject(res);  //retornar el valor al siguiente then siempre y cuando tengamos una respuesta exitosa, en caso contrario, ir al catch
            // res.text(); //Convertir a texto plano
            // res.blob(); //Para aquello que no es texto
        })
        .then(json => {
            //console.log(json);
            // Crear elementos HTML y agregarlos al fragmento
            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
                $fragment.appendChild($li);
            });
            // Agregar el fragmento al documento
            $fetch.appendChild($fragment);
        })
        .catch(err => {
            //console.log('Error:', err);
            let message = err.statusText || 'Ocurrio un error';
            $fetch.innerHTML = `Error ${err.status}: ${message}`;
        })
        .finally(() => {
            //console.log('Este mensaje cargara de cualquier forma');
        });
})();



// API Fetch + Async-Await
(() => {
    const $fetchAsync = document.getElementById('fetch-async'),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await fetch('https://jsonplaceholder.typicode.com/users');
            let json = await res.json();
            //console.log(res, json);

            //Mandar el flujo del codigo al catch
            //El error de tipo Error solo admite mensajes de texto
            //if(!res.ok) throw new Error('Ocurrio un error al solicitar los datos');
            if(!res.ok) throw {status: res.status, statusText: res.statusText};

            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $fetchAsync.appendChild($fragment);

        } catch (err) {
            //console.log('Error: ' + err);
            let message = err.statusText || 'Ocurrio un error';
            $fetchAsync.innerHTML = `Error ${err.status}: ${message}`;
        } finally {
            //console.log('Esto se ejecuta indpendientemente del try catch');
        }
    }

    getData();
})();


// Axios
//axios internamente es como HttpRequest pero usando promesas 
//axios tambien funciona con archivos locales
(() => {
    const $axios = document.getElementById('axios'),
        $fragment = document.createDocumentFragment();

    axios.get('https://jsonplaceholder.typicode.com/users')
       .then(res => {
            //console.log(res);
            //Con axios los datos obtenidos ya estan parseados, es decir, no hace falta parsearlos a json
            res.data.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $axios.appendChild($fragment);
        })
       .catch(err => {
            //console.log('Error:', err);
            let message = err.response.statusText || 'Ocurrio un error';
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;
        })
       .finally(() => {
            //console.log('Este mensaje cargara de cualquier forma');
        });
})();


// Axios + Async-Await
(() => {
    const $axiosAsync = document.getElementById('axios-async'),
        $fragment = document.createDocumentFragment();

    async function getData(){
        try {
            let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
                json = await res.data;
            //console.log(res, json);
            json.forEach(user => {
                const $li = document.createElement('li');
                $li.innerHTML = `${user.name} -- ${user.email} -- ${user.phone}`;
                $fragment.appendChild($li);
            });
            $axiosAsync.appendChild($fragment);
        } catch (err) {
            //console.log('Error:', err);
            let message = err.response.statusText || 'Ocurrio un error';
            $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;
        } finally {
            //console.log('Esto se ejecutara independientemente del try catch');
        }
    }

    getData();
})();