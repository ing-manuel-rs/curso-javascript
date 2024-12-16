const $cards = document.querySelector(".cards"),
    $template = document.getElementById("template-card").content,
    $fragment = document.createDocumentFragment(),
    cardContent = [
        {
            title: "Tecnología",
            img: "/51. nodos_elementos_selectores/images/tech.jpg"
        },
        {
            title: "Animales",
            img: "/51. nodos_elementos_selectores/images/animals.jpg"
        },
        {
            title: "Arquitectura",
            img: "/51. nodos_elementos_selectores/images/arch.jpg"
        },
        {
            title: "Gente",
            img: "/51. nodos_elementos_selectores/images/people.jpg"
        },
        {
            title: "Naturaleza",
            img: "/51. nodos_elementos_selectores/images/nature.jpg"
        }
    ];

cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("img").setAttribute("alt", el.title);
    $template.querySelector("figcaption").textContent = el.title;
    // Clonar nodo (al decirle true indicamos que copie toda la estructura)
    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
});

$cards.appendChild($fragment);