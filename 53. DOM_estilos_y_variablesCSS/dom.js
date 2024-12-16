const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);    //Mostrar los estilos en linea que tiene y los posibles en forma de mapa
console.log($linkDOM.getAttribute("style"));    //Mostrar los estilos en linea que tiene y los posibles en texto


//Acceder a cierto estilo
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);

//Listar todas las propiedades css posibles y los valores por defecto
console.log(window.getComputedStyle($linkDOM));

//valor de una propiedad
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));

//asignar propiedad css y valor
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

console.log($linkDOM.style);


//variables css - Custom Propertys CSS
const $html = document.documentElement; //representa el html
const $body = document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");
$body.style.setProperty("background-color", varDarkColor);