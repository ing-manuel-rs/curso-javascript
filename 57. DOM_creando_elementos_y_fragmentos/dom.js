const $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),
    $cards = document.querySelector(".cards"),
    $figure2 = document.createElement("figure");

$img.setAttribute("src", "/51. nodos_elementos_selectores/images/animals.jpg");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

// Agregar un hijo a un elemento
$figcaption.appendChild($figcaptionText);

$figure.appendChild($img);
$figure.appendChild($figcaption);

$cards.appendChild($figure);

$figure2.innerHTML = `
    <img src="/51. nodos_elementos_selectores/images/people.jpg" alt="People">
    <figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);




// Agregar elementos con iteraciones
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
    $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $ul.appendChild($li);
});





const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
    $ul2 = document.createElement("ul");

document.write("<h3>Continentes del mundo</h3>");
document.body.appendChild($ul2);

$ul2.innerHTML = "";

continentes.forEach(el => {$ul2.innerHTML += `<li>${el}</li>`});







// Cuando tenemos muchos elementos que agregar en vez de cargar todo con 
// innerHTML o creando elementos por cada elemento podemos usar fragmentos
// esto consiste en cargar todos los slementos que queremos insertar en un fragmento
// y ya que este listo agregamos este fragmento generando asi solo una insercion 
// (MANERA MAS OPTIMA)

const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
],
    $ul3 = document.createElement("ul"),
    $fragment = document.createDocumentFragment();

meses.forEach(el => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3);