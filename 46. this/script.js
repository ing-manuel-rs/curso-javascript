/*
Palabra que hace referencia al objeto en el que estamos trabajando
*/

console.log(this);
console.log(window);
console.log(this === window);

this.nombre = "Contexto global";
console.log(this.nombre);
function imprimir(){
    console.log(this.nombre);
}
imprimir();

const obj = {
    nombre: "Contexto objeto",
    imprimir: function(){
        //Este this hace referencia a este mismo objeto
        console.log(this.nombre);
    }
}
obj.imprimir();

const obj2 = {
    nombre: "Contexto objeto 2",
    //Esta funcion hace referencia a la declarada en la linea 11
    imprimir
}
obj2.imprimir();    //contexto objeto 2 (respeta el this a objeto)

//NOTA: this en las arrow functions hace referencia o toman el scope del padre donde fueron creadas 