/*
API = Aplication programing interface
Serie de objetos y mecanismos de un lenguaje implementados en ciertas areas
    de los navegadores para poder interactuar con todo lo que ver del navegador
DOM = Document Objetct Model
BOM = Browser Objetct Model
CSSOM = CSS Objetct Model
Web APIs:
    Eventos
    Forms
    AJAX-Fetch
    History
    Web Storage
    Geolocation
    Drag and drop
    Indexed DB
    Canvas
    MatchMedia
    etc etc etc
*/

const hablar = texto => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));

hablar("Hola soy Manuel Rodriguez, un gusto conocerte");


/*
Esto es un ejemplo, podemos hacer uso de infinidad de cosas como manejor de videos
manejo de la misma ventana del navegador, controlar bateria, ubicacion, historial,
etc etc etc
*/