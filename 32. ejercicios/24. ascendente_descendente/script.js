/*
Ejercicio 24) Programa una función que dado un arreglo de números 
devuelva un objeto con dos arreglos, el primero tendrá los numeros 
ordenados en forma ascendente y el segundo de forma descendiente, 
pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
*/

const descendienteAscendiente = (arreglo = []) => {
    if(arreglo.length === 0) return console.error("No ingresaste un arreglo");
    if(!(arreglo instanceof Array)) return console.error("No ingresaste un arreglo de tipo Array");
    for(let numero of arreglo){
        if(typeof numero !== "number") return console.log(`El elemento ${numero} no es de tipo number`);
    }
    
    return console.log({
        arreglo,
        ascendente: arreglo.map(el => el).sort(),
        descendente: arreglo.map(el => el).sort().reverse()
    
    });
}

descendienteAscendiente();
descendienteAscendiente("Hola");
descendienteAscendiente([7, 5,7,8,"Siu"]);
descendienteAscendiente([7, 5,7,8,6]);