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

// Recordemos que las funciones manejadoras de eventos solo pueden recibir como argumento
// el mismo evento, por lo que la siguiente linea ejecuta: Hola [object mouseEvent]
$eventoMultiple.addEventListener("click", saludar);


// Para solucionar esto usamos las arrow functions, esta se convierte en la manejadora
// y dentro podemos hacer el llamado a las demas funciones, no se van a ejecutar 
// inmediantamente por que la manejadora es la arrow function 
$eventoMultiple.addEventListener("click", () => saludar("Manuel"));