// .insertAdjacent...
//     .insertAdjacentElement(posicion elemento);
//     .insertAdjacentHTML(posicion, html);
//     .insertAdjacentText(posicion, text);

// Posiciones:
//     beforebegin = hermano anterior
//     afterbegin = primer hijo
//     beforeend = ultimo hijo
//     afterend = hermano siguiente

const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure");

let $contenCard= `
    <img src="/51. nodos_elementos_selectores/images/tech.jpg" alt="Any">
    <figcaption></figcaption>
`;

$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);
$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "Any");


// Hermano anterior
    // $cards.insertAdjacentElement("beforebegin", $newCard);

// Primer hijo
    $cards.insertAdjacentElement("afterbegin", $newCard);

// ultimo hijo
    // $cards.insertAdjacentElement("beforeend", $newCard);

// Hermano siguiente
    // $cards.insertAdjacentElement("afterend", $newCard);



// Insertar como primer hijo
    // $cards.prepend($newCard);

// Insertar como ultimo hijo
    // $cards.append($newCard);

// Insertar como hermano anterior
    // $cards.before($newCard);

// Insertar como hermano siguiente
    // $cards.after($newCard);