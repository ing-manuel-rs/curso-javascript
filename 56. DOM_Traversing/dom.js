const $cards = document.querySelector(".cards");

console.log($cards);

// Mostrando los hijos del elemento cards
console.log($cards.children);

// Mostrando un hijo en particular 
console.log($cards.children[2]);

// Mostrando el primer hijo (firstChild regresa el pruimer Nodo y firstElementChild el primer elemento)
console.log($cards.firstElementChild);

// Mostrando el ultimo hijo (misma situacaion que la anterior)
console.log($cards.lastElementChild);

// Padre de un elemento 
console.log($cards.parentElement);

// Hermano antes del elemento (misma situacion entre nodos y elementos)
console.log($cards.previousElementSibling);

// Hermano siguiente del elemento
console.log($cards.nextElementSibling);

// Metodo para buscar el ancestro mas cercano indicado (si no encuentra regresa null)
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section"));