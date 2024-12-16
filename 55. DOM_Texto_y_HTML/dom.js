const $whatIsDOM = document.getElementById("que-es");

let text = `
    <p>
        El Modelo de Objetos del Documento(<b><i>DOM - Document Object Model</i></b>) es una API para
        documentos HTML y XML
    </p>
    <p>
        Este proveé una representación estructural del documento, permitiendo modificar su contenido y
        presentacion visual mediante codigo JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
    </p>
`;

// Agregar texto al DOM
// innerText y textContent hacen lo mismo, innerText se desarrolló principalmente para internte explorer pero se puede usar 
// en cualquier explorador y textContent es un estandar

// innerText no reconoce las etiquetas HTML pero respeta las identaciones de la template string
$whatIsDOM.innerText = text;

// Estandar para agregar contenido textual y no respeta las identaciones de la template string
$whatIsDOM.textContent = text;

// innerHTML para insertar texto y que si reconozca etiquetas HTML
$whatIsDOM.innerHTML = text;

// En vez de insertar, remplaza el elemento 
$whatIsDOM.outerHTML = text;