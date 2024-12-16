//Date es el objeto en JS de la fecha (En realidad es un constructor)

//Imprime la fecha actual, dia, mes, año, hora exacta y la zona horaria
console.log(Date());

let fecha = new Date();
console.log(fecha);

//Obtener el dia del mes
console.log(fecha.getDate());

//Obetener el numero del dia actual de la semana D L M M J V S - 0 1 2 3 4 5 6
console.log(fecha.getDay());

//Obtener el numero del mes Enero-Diciembre = 0-11
console.log(fecha.getMonth());

//Obetener el año (Cuantos años han pasado desde 1900)
console.log(fecha.getYear());

//Obtener el año (manera normal)
console.log(fecha.getFullYear());

//Obtener la hora (de 0 a 23 hrs)
console.log(fecha.getHours());

//Obtener los minutos
console.log(fecha.getMinutes());

//Obtener los segundos
console.log(fecha.getSeconds());

//Obtener los milisegundos
console.log(fecha.getMilliseconds());

//Fecha en texto
console.log(fecha.toString());

//Extraer solo la parte de la fecha (dia de la semana, mes, numero de mes y año)
console.log(fecha.toDateString());

//Extraer solo la parte de la hora local (dia/mes/año y hora)
console.log(fecha.toLocaleString());

//Extraer solo la parte de la fecha (dia/mes/año)
console.log(fecha.toLocaleDateString());

//Extraer solo la parte de la fecha (hora/minutos/mls)
console.log(fecha.toLocaleTimeString());

//Obtener el uso horario en minutos
console.log(fecha.getTimezoneOffset());

//Obtener datos de la zona horaria cero, meridiano cero
console.log(fecha.getUTCDate());
console.log(fecha.getUTCDay());
console.log(fecha.getUTCFullYear());
console.log(fecha.getUTCHours());
console.log(fecha.getUTCMilliseconds());
console.log(fecha.getUTCMinutes());
console.log(fecha.getUTCMonth());
console.log(fecha.getUTCSeconds());

//Obetener el instante que esta ocurriendo ahora (Cuantos segundos han pasado desde 1 de enero de 1970)
console.log(Date.now());

//Una buena libreria de js para el manejor de fechas y horas es MOMENTS JS

//Crear una variable de tipo fecha pasando argumentos (año, mes, dia), recordar que los meses van de 0 a 11
let cumpleManuel = new Date(2003, 6, 24);
console.log(cumpleManuel);

/*
Hay muchas mas formas de pasarle parametros a este constructor del objeto Date,
para su consulta podemos visitar la documentacion de js
*/