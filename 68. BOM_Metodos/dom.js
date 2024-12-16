const $btnAbrir = document.getElementById("abrir-ventana"),
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

let ventana;

$btnAbrir.addEventListener("click", (e) => {
    // Abrir una nueva ventana
        // window.open("https://google.com"); //Funcion del objeto window
    ventana = window.open("https://instagram.com");
});

$btnCerrar.addEventListener("click", (e) => {
    // Cerrar la ventana en la que estabamos
        // window.close();
    // Para cerrar una ventana que previamente abrimos con el metodo open la ocupamos guardar en una variable
    ventana.close();
});

$btnImprimir.addEventListener("click", (e) => {
    // Imprimir ventanas
    window.print();
});