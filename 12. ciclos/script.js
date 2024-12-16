/*
Un ciclo en programacion es una estructura de control, un bloque de codigo que 
se ejecuta repetitivamente cuantas veces sea necesario, ya sea hasta cierto
numero de repeticiones o hasta que se cumpla una condicion
*/

//- - - - - - - - - - - - - - - - - - - - - while - - -- - - - - - - - - - - - - - - 
/*
Se ejecuta mientras la condicion sea verdadera, para entrar en el loop primero revisa la condicion
antes de entrar 
*/

let contador = 0;
while(contador < 10){
    console.log(contador);
    contador++;
}



//- - - - - - - - - - - - - - - - - - - do while - - -- - - - - - - - - - - - - - - 
/*
Similar al while pero entra a la primer iteracion del bloque de codigo sin verificar la condicion
despues de esta vuelta ahora si revisa que se cumpla la condicion para seguir ejecutandose 
repetitivamente, es decir, la primer iteracion en un do while siempre se va a ejecutar
*/

let contador2 = 99;
do{
    console.log(contador2);
    contador2--;
}while(contador2 >= 90);



//- - - - - - - - - - - - - - - - - - - - - for - - -- - - - - - - - - - - - - - - 
/*
Es una estructura repetitiva con la siguiente sintaxis
for(VARIABLE; CONDICION; INCREMENTO DE LA VARIABLE){
    ....
}
*/

for(let i = 0; i < 10; i++){
    console.log(i);
}

let numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);    //Como el indice va aumentando en uno, itera sobre todo el arrelgo
}



//- - - - - - - - - - - - - - - - - - - - for in - - -- - - - - - - - - - - - - - - 
//Nos permite recorrer o iterar las propiedades de un objeto

const manuel = {
    nombre: "Manuel",
    apellido: "Rodriguez",
    edad: 20
}

for(const propiedad in manuel) {
    console.log(propiedad);
}

for (const propiedad in manuel) {
    console.log(`Propiedad: ${propiedad}, Valor: ${manuel[propiedad]}`);
}



//- - - - - - - - - - - - - - - - - - - - for of - - -- - - - - - - - - - - - - - - 
//Permite recorrer todos los elementos de cualquier objeto que sea iterable en JS

let numeros2 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
for (const elemento of numeros2) {
    console.log(elemento);
}

let cadena = "Hola mundo";
for (const caracter of cadena) {
    console.log(caracter);
}