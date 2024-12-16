//Tambien podemos exportar funciones 
export function sumar(a,b){
    return a+b;
}

export function restar(a,b){
    return a-b;
}

//Podemos agrupar funciones y exportarlas como objeto
export const aritmetica = {
    //Recordemos que si la propiedad se llama igual que su valor(sumar: sumar), la podemos dejar asi
    sumar,
    restar
}
