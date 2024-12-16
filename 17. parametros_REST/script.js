//Son una forma de virtualmente ir agregando parametros infinitos por ejemplo a una funcion

function sumarSoloDosNumeros(a, b){
    return a + b;
}

//Pero que pasa si no quiero sumar dos numeros sino que tres o cuatro o cinco ...
function sumar(a, b, ...c){
    let resultado = a + b;
    c.forEach(function (n){
        resultado += n;
    });
    return resultado;
}

console.log(sumar(1, 2));
console.log(sumar(1, 2, 3));
console.log(sumar(1, 2, 3, 4));
console.log(sumar(1, 2, 3, 4, 5));