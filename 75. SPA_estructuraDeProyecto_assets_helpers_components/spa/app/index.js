import api from "./helpers/wp_api.js";
import { App } from "./App.js";

document.addEventListener("DOMContentLoaded", App);

// Este evento es cuando cambia el hash(#) en la ruta url y cuelga del objeto window
window.addEventListener("hashchange", () => {
    api.page = 1;
    App();
});