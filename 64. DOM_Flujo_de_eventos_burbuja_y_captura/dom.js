// Nos referimos como flujo de eventos a la propagacion a lo largo del arbol del DOM
// que tienen estos que por defecto va desde el elemento mas interno al mas externo 
// que en este caso es el document y esa fase se llama fase de burbuja (por la expansion)

const $divsEventos = document.querySelectorAll(".eventos-flujo div");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
}

console.log($divsEventos);

// Asignando eventos a los varios divs
$divsEventos.forEach(div => {
    // El tercer argumento tiene como valor predeterminado de false (es decir, lo podemos
    // poner o no), esto significa que trabajamos con fase de burbuja, el evento 
    // se propaga del elemento mas interno al mas externo
    // El modelo contrario, la fase de captura, trabaja al reves, del elemento mas externo
    // al mas interno. Para activar esto cambiamos a true el tercer argumento
   
    // div.addEventListener("click", flujoEventos, false); 

    // div.addEventListener("click", flujoEventos, true); 

    // Tambien podemos agregar como tercer parametro un objeto donde especificamos
    // ciertas caracteristicas

    div.addEventListener("click", flujoEventos, {
        // Este es para la fase de burbuja o captura
        capture: false,
        // True para que se ejecute solo una vez el evento (por defecto es false)
        once: true,
        // Para mas configuraciones podemos investigar en la documentacion de js
    }); 

});