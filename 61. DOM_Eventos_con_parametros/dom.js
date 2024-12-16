// Los eventos son aquel mecanismo en JS para poder controlar las 
//     acciones del usuario y definir ciertos comportamientos del documento
//     que sucedan en cierto momento o cuando se cumplan algunas condiciones
// Las funciones que se ejecutan en un evento son llamadas EventHangler, 
//     los manejadores de eventos, observadores o escuchadores
// Hay tres formas de declarar eventos:
//     Como atributo de la etiqueta HTML
//     Manejador de evento semantico
//     Manejadores multiples 

function holaMundo(){
    alert("Hola mundo");
    // Acceder al evento (informacion, propiedades, etc)
    console.log(event);
}


const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo; // Sin parentesis para que no se ejecute al cargar la pagina
// La limitante de los manejadores de eventos semanticos es que solo pueden hacer una cosa a la vez, ejecuta la ultima actualizacion
$eventoSemantico.onclick = function(e){ //Puede ser funcion anonima o arrow function
    alert("Hola mundo Manejador de eventos semantico");
    // El evento semantico puede o no recibir un parametro y es el evento
    console.log(e);
    console.log(event); //Es lo mismo
} 



const $eventoMultiple = document.getElementById("evento-multiple");
// puede recibir varios parametros pero los dos mas importantes son el nombre del evento y luego la funcion 
$eventoMultiple.addEventListener("click", holaMundo); //Sin parentesisi para evitar ejecucion inmediata
// Con arrow function
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo manejador de eventos multiples");
    console.log(e); //evento
    console.log(e.type); //tipo de evento
    console.log(e.target); //origen del evento
});