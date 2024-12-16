function holaMundo(){
    alert("Hola mundo");
    console.log(event);
}

function saludar(nombre = "Desconocido"){
    alert(`Hola ${nombre}`);
}


const $eventoSemantico = document.getElementById("evento-semantico");
$eventoSemantico.onclick = holaMundo;
$eventoSemantico.onclick = function(e){ 
    alert("Hola mundo Manejador de eventos semantico");
    console.log(e);
    console.log(event); 
} 



const $eventoMultiple = document.getElementById("evento-multiple");
$eventoMultiple.addEventListener("click", holaMundo); 
$eventoMultiple.addEventListener("click", (e) => {
    alert("Hola mundo manejador de eventos multiples");
    console.log(e); 
    console.log(e.type);
    console.log(e.target); 
});

$eventoMultiple.addEventListener("click", saludar);

$eventoMultiple.addEventListener("click", () => saludar("Manuel"));



// Solo podemos remover eventos con manejadores multiples
// Para remover el evento usamos removeEventListener que recibe como parametros
//  el nombre del evento o tipo y la referencia de la funcion, por lo que las 
//  funciones anonimas no funcionan 

const removerDobleClick = (e) => {
    alert(`Removiendo el evento de tipo: ${e.type}`);
    // Removiendo el evento
    $eventoRemover.removeEventListener("dblclick", removerDobleClick);
    // Agregar atributo disabled para deshabilitar el boton
    $eventoRemover.setAttribute("disabled", true); //ó $eventoRemover.disabled = true;
}

const $eventoRemover = document.getElementById("evento-remover");

$eventoRemover.addEventListener("dblclick", removerDobleClick);
