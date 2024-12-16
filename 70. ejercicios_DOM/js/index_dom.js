import hamburgerMenu from "../dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "../dom/reloj.js";
import { moveBall, shortcuts } from "../dom/teclado.js";
import countdown from "../dom/cuenta_regresiva.js";
import scrollTopButton from "../dom/boton_scroll.js";
import darkTheme from "../dom/tema_oscuro.js";
import responsiveMedia from "../dom/objeto_responsive.js";
import responsiveTester from "../dom/prueba_responsive.js";
import userDeviceInfo from "../dom/deteccion_dispositivos.js";
import networkStatus from "../dom/deteccion_red.js";
import webCam from "../dom/deteccion_webcam.js";
import getGeolocation from "../dom/geolocalizacion.js";
import searchFilters from "../dom/filtro_busquedas.js";
import draw from "../dom/sorteo.js";
import slider from "../dom/carrusel.js";
import scrollSpy from "../dom/scroll_spy.js";
import smartVideo from "../dom/video_inteligente.js";
import contactFormValidations from "../dom/validaciones_formulario.js";
import speechReader from "../dom/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("assets/martillazo.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown('countdown', 'May 23, 2025 03:223:19', 'Feliz cumpleanos!');
    scrollTopButton('.scroll-top-btn');

    responsiveMedia('youtube', 
        '(min-width: 1024px)', 
        `<a href="https://www.youtube.com/embed/6IwUl-4pAzc?si=S9gKgAbE-iejQz3j" target="_blank" rel="noopener">Ver video</a>`, 
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc?si=S9gKgAbE-iejQz3j" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`);

    responsiveMedia('gmaps', 
        '(min-width: 1024px)', 
        `<a href="https://maps.app.goo.gl/era44uZzMZcfxZJaA" target="_blank" rel="noopener">Ver mapa</a>`,  
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1358.8785431692177!2d-103.25055738099105!3d20.62591642581346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8428b489dbd68d17%3A0xaf2258ba90438e33!2sGlorieta%20de%20La%20Mujer%20Alfarera%20(La%20Mona)!5e0!3m2!1ses-419!2smx!4v1718155406336!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`);

    responsiveTester('responsive-tester');
    userDeviceInfo('user-device');
    webCam('webcam');
    getGeolocation('geolocation');
    searchFilters('.card-filter', '.card');
    draw('#winner-btn', '.player');
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
});

/*
Son tres eventos del teclado
keydown - cuando se presione una tecla
keyup - cuando se deje de presionar la tecla
keypress - mientras se este presionando una tecla
*/

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, '.ball', '.stage');
});


darkTheme('.dark-theme-btn', 'dark-mode');

networkStatus();

speechReader();