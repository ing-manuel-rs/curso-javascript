// Evento para cuando se cambia de tamaño la ventana del navegador
window.addEventListener("resize", (e) => {
    console.clear();
    console.log("********** Evento Resize **********");
    // Ancho del viewport de la ventana
    console.log(window.innerWidth);

    // Alto del viewport de la ventana
    console.log(window.innerHeight);

    // Alto y ancho del tamaño de la ventana de nuestro navegador
    console.log(window.outerWidth);
    console.log(window.outerHeight);

    console.log(e);
});

// Evento para cuando se hace scroll
window.addEventListener("scroll", (e) => {
    console.clear();
    console.log("********** Evento Scroll **********");
    // Desplazamiento en pixeles del scrollbar en X y Y, desde arriba e izquierda, siempre numeros positivos
    console.log(window.scrollX);
    console.log(window.scrollY);
});

// Este evento se ejecuta cuando la ventana del navegador haya terminado de cargar
window.addEventListener("load", (e) => {
    console.log("********** Evento Load **********");
    // Saber en que coordenadas se empieza a dibujar la ventana del navegador
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e);
});

// Lo mismo que el anterior pero mas rapidp porque el evento load se ejecuta cuando carga todo
// scripts, estilos, etc y DOMContentLoaded no
document.addEventListener("DOMContentLoaded", (e) => {
    console.log("********** Evento DOMContentLoaded **********");
    console.log(window.screenX);
    console.log(window.screenY);
    console.log(e); 
});