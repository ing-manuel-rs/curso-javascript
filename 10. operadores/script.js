//- - - - - - - - - - - - - - - Operadores aritmeticos - - - - - - - - - - - - - - -
// + - * / % ()

let a = 5 + (5 - 10) * 3;
console.log(a);

//modulo %, regresa la parte sobrante de la division entera
let modulo = 5 % 2;
console.log(modulo);



//- - - - - - - - - - - - - - - - Operadores relacionales - - - - - - - - - - - - - - 
// > < >= <= == === != !==, regresan un boolean

console.log(8 > 9);    //Falso porque 8 no es mayor que 9
console.log(9 > 8);    //Verdadero
console.log(8 >= 9);   //Falso porque 8 no es mayor ni igual que 9
console.log(9 >= 9);   //Verdadero porque 9 si es mayor o igual a 9
console.log(7 < 7);    //Falso
console.log(7 <= 7);   //Verdadero

/*
1 igual (=) es de asignacion
2 iguales (==) es de comparacion de valores
3 iguales (===) es de comparacion de valores y de tipo de dato
*/

console.log(8 == 8);      //Verdadero
console.log("8" == 8);    //Verdadero
console.log(0 == false);  //Verdadero

console.log(8 === 8);      //Verdadero
console.log("8" === 8);    //Falso
console.log(0 === false);  //Falso



//- - - - - - - - - - - - - Operadores de incremento y decremento - - - - - - - - - - - - - 
// ++ -- += -= etc

let i = 1;
i = i + 2;  //Esto lo podemos escribir como i+=2;
console.log(i);    //3

let j = 1;
j += 2;
console.log(j);    //3

//Lo mismo para restar, multiplicar

//Operador unario (aumenta en uno)
let k=1;
k++;
console.log(k); //2

//Lo mismo para restar

/*
Tambien se pueden usar los operadores unarios antes de la variable (++i)
Cuando los ponemos despues de las variables (i++), primero se usa la variable y despues se incrementa
Cuando los ponemos antes de las variables (++i), primero se incrementa y despues se hace uso de la variable
*/

let m=4;
console.log(m++);   //4

let n=4;
console.log(++n);   //5



//- - - - - - - - - - - - - - - - Operadores logicos - - - - - - - - - - - - - - - - - - 
/* 
!(NOT) - Negacion, lo verdadero lo vuelve falso y viceversa
&&(AND) - Regresa verdadero si las dos condiciones se cumplen o son verdaderas, con una que no sea verdadera regresa falso
||(OR) - Regresa verdadero si al menos una condicion se cumple o es verdadera, en caso contrario regresa falso
*/


console.log(!(8 > 15)); //true

console.log((25 < 15) || (70 < 100));   //true
console.log((25 > 15) || (70 < 100));   //true
console.log((25 < 15) || (70 > 100));   //false

console.log((25 < 15) && (70 < 100));   //false
console.log((25 > 15) && (70 < 100));   //true
console.log((25 < 15) && (70 > 100));   //false