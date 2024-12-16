const $card = document.querySelector(".card");

console.log($card);

// Devuelve la cadena de texto que tiene el atributo class
console.log($card.className);

// Regresa un "arreglo" con valores
console.log($card.classList);

// Evaluar si un elemento tiene o no una clase, devuelve un boolean
console.log($card.classList.contains("rotate-45"));

// Agregar una clase
$card.classList.add("rotate-45");

// Elimianr una clase
$card.classList.remove("rotate-45");

// Metodo a forma de palanco o interruptor, si el elemento tiene la clase, la elimina
// si el elemento no tiene la clase se la agrega
$card.classList.toggle("rotate-45");

// Remplazar una clase por otra, el primer atributo es la clase a remplazar y el 
// segundo atributo es la clase a insertar
$card.classList.replace("rotate-45", "rotate-135");

// Podemos agregar y eliminar varias clases al mismo tiempo
$card.classList.add("opacity-80", "sepia");