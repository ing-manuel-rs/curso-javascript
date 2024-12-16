//Estos metodos cuelgan del objeto window y sirven para interactuar con el usuario, pero no es necesario poner el window.

//Alerta, muestra un mensaje y solo hay un boton de aceptar
    //alert("Esto es una alerta");

//Confirmacion, muestra un mensaje y dos botones, aceptar y cancelar (devuelven un valor boolean)
    //confirm("Esto es una confirmacion");

//Prompt, muestra un mensaje para que el usuario ingrese datos y esos datos se guardan en una variable, si cancela regresa null
    //prompt("Esto es un prompt");

let alerta = alert("Alerta");
let confirmacion = confirm("Confirma el mensaje");
let aviso = prompt("Ingresa tu nombre");

console.log(alerta);
console.log(confirmacion);
console.log(aviso);