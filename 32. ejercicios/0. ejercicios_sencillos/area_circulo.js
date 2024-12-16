// Calcular el area y el perimetro de un circulo dado su radio

const areaCirculo = radio => Math.PI * (Math.pow(radio, 2));
const perimetroCirculo = radio => Math.PI * (radio * 2);

let radio = 12;
console.log(`Area: ${areaCirculo(radio)}`);
console.log(`Perimetro: ${perimetroCirculo(radio)}`);