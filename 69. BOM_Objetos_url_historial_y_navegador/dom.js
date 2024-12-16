console.log("********** Objeto URL (location) **********");
// Objeto location
console.log(location);
// De donde se origina  
console.log(location.origin);
// protocolo
console.log(location.protocol);
// dominio
console.log(location.host);
// dominio
console.log(location.hostname);
// puerto
console.log(location.port);
// ruta completa, toda la url
console.log(location.href);
// detectar el valor de la url que esta despues de un hash
console.log(location.hash);
// los parametros pasados por url (cadena a partir de un ?)
console.log(location.search);
// archico al cual consultamos 
console.log(location.pathname);

// Recargar
    // location.reload();

console.log("********** Objeto Historial **********");
console.log(history);
// longitud de cuantas paginas hemos visitado en esa pestaña
console.log(history.length);
// regresar un numero de paginas atras
    // history.back(3);
// lo contrario al anterior, ir hacia adelante
    // history.forward(3);
// dirige a la pagina dependiendo el numero, si es negativo hacia atras como .back y si son positivos lo contrario
    // history.go(-2);


console.log("********** Objeto Navegador **********");
console.log(navigator);
// Informacion de la coneccion de red
console.log(navigator.connection);
// Informacion de la geolocalizacion
console.log(navigator.geolocation);
// Informacion de dispositivos como camaras, microfonos, etc.
console.log(navigator.mediaDevices);
// tipos de formatos que aceptan los navegadores web
console.log(navigator.mimeTypes);
// Detectar si el usuario tiene coneccion o no
console.log(navigator.onLine);
// Para convertir un sitio web en una apliacion instalable
console.log(navigator.serviceWorker);
// Api de almacenamiento
console.log(navigator.storage);
// Capacidad de detectar dispositivos usb
console.log(navigator.usb);
// Informacion sobre el SO del usuario
console.log(navigator.userAgent);