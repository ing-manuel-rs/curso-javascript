const $cards = document.querySelector(".cards"),
    $newCard = document.createElement("figure"),
    $cloneCards = $cards.cloneNode(true);   //Clonar nodo (true para clonar toda la estructura, false para solo el esqueleto)

$newCard.innerHTML = `
    <img src="/51. nodos_elementos_selectores/images/people.jpg" alt="People">
    <figcaption>Any</figcaption>
`;

$newCard.classList.add("card");


// Remplazar un nodo (nuevo nodo, nodo a remplazar)
    // $cards.replaceChild($newCard, $cards.children[2]);

// Insertar un nodo uno antes del referenciado (nuevo nodo, nodo de referencia)
    // $cards.insertBefore($newCard, $cards.firstElementChild);

// Eliminar nodo
    // $cards.removeChild($cards.lastElementChild);

document.body.appendChild($cloneCards);