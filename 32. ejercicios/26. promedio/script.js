/*
Ejercicio 26) Programa una funcion que dado un arreglo de numeros obtenga el promedio
pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolvera 4.5
*/

const promedio = (arreglo = []) => {
    if(arreglo.length === 0) return console.error("No ingresaste un arreglo");
    if(!(arreglo instanceof Array)) return console.error("No ingresaste un arreglo de tipo Array");
    for(let numero of arreglo){
        if(typeof numero !== "number") return console.log(`El elemento ${numero} no es de tipo number`);
    }
    
    return console.log(
        arreglo.reduce((acumulador, numero, posicion, arreglo) => {
            acumulador += numero;
            if(posicion === arreglo.length - 1) {
                return `El promedio de ${arreglo.join(" + ")} es ${acumulador/arreglo.length}`;
            }else{
                return acumulador;
            }
        })
    );

}

promedio();
promedio("Hola");
promedio([]);
promedio([1,2,3,"hola"]);
promedio([9,8,7,6,5,4,3,2,1,0]);


