// Lo que tratamos en esta clase es aprender una tecnica que por ejemplo,
// en vez de asignar muchisismos listener de eventos para cada elememto,
// asignar uno al documento y seleccinar el que necesitemos 

function flujoEventos(e){
    // Ahora this hace referencia al objeto window (document)
    console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`);
}

document.addEventListener("click", (e) => {
    console.log("Click en ", e.target);

    if(e.target.matches(".eventos-flujo div")){
        flujoEventos(e);
    }

    if(e.target.matches(".eventos-flujo a")){   // matches busca un selector valido
        alert("Hola soy Manuel");
        e.preventDefault(); // Aqui ya no hace falta el stopPropagation
    }
});

// ESTA ES LA MANERA MAS OPTIMA DE TRABAJAR CON EVENTOS