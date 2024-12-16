const $divsEventos = document.querySelectorAll(".eventos-flujo div"),
    $linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e){
    console.log(`Hola te saluda ${this.className}, el click lo origino ${e.target.className}`);
    // Detener propagacion del flujo de los eventos
    e.stopPropagation();
}

console.log($divsEventos);

$divsEventos.forEach(div => {
    div.addEventListener("click", flujoEventos);
});

$linkEventos.addEventListener("click", e => {
    alert("Hola soy Manuel");
    // Cancerlar el comportamiento por default, en este caso no abrir el enlace
    e.preventDefault();
    e.stopPropagation();
});