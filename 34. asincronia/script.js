/*
Js es un lenguaje single thread (solo una cosa a la vez, un solo hilo de ejecucion)
y trabaja con una pila LIFO (last in first out)
*/

//Codigo sincrono bloqueane¿te
(() => {  //Funciona anonima autoejecutable
    console.log("Codigo sincrono");
    console.log("Inicio");

    function dos(){
        console.log("Dos");
    }

    function uno(){
        console.log("Uno");
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

console.log("********************");

//Codigo asincrono NO bloqueante
(() => {
    console.log("Codigo asincrono");
    console.log("Inicio");

    function dos(){
        setTimeout(function (){
            console.log("Dos");
        }, 1000);
    }

    function uno(){
        setTimeout(function (){
            console.log("Uno");
        }, 0);
        dos();
        console.log("Tres");
    }

    uno();
    console.log("Fin");
})();

/*
El resultado se debe a la pila de procesos de js, el como se van ejecutando las lineas 
podemos usar la herramienta http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
donde podemos visualizar graficamente la pila de ejcucion de js 

Claramente en la segunda funcion anonima autoejecutable primero imprime "Inicio", despues
se va directamente a la linea 46, "uno();", porque las lineas anteriores solo son 
declaraciones y aun no instrucciones, entra a la funcion, guarda la instruccion en la cola 
de callback, despues entra a la funcion "dos();" y esa tambien la guarda en la cola de callbak, 
despues imprime "tres", despues "fin" y ahora que no hay mas cosas en la fila (LIFO), empieza a recuperar
las instrucciones que estan en la cola, ahora imrpime "uno" y despues "dos"
*/

