// const d = document, 
//     w = window;

// export default function speechReader(){
//     const $speechSelect = d.getElementById('speech-select'),
//         $speechTextArea = d.getElementById('speech-text'),
//         $speechBtn = d.getElementById('speech-btn'),
//         speechMessage = new SpeechSynthesisUtterance();

//     //console.log(speechMessage);

//     let voices = [];

//     d.addEventListener('DOMContentLoaded', e => {
//         //console.log(w.speechSynthesis.getVoices());
//         w.speechSynthesis.addEventListener('voiceschanged', e=>{
//             console.log('eeee');
//             voices = w.speechSynthesis.getVoices();
//             console.log('Aaaa',voices);

//             voices.forEach(voice => {
//                 const $option = d.createElement('option');
//                 $option.value = voice.name;
//                 $option.textContent = `${voice.name} - ${voice.lang}`;

//                 $speechSelect.appendChild($option);
//             });
//         });
//     });

//     d.addEventListener('change', e => {});
//     d.addEventListener('click', e => {});
// }


const d = document,
    w = window;

export default function speechReader(){
    const $speechSelect = d.getElementById('speech-select'),
        $speechTextArea = d.getElementById('speech-text'),
        $speechBtn = d.getElementById('speech-btn'),
        speechMessage = new SpeechSynthesisUtterance();

    let voices = [];

    // Función para cargar voces en el selector
    const loadVoices = () => {
        voices = w.speechSynthesis.getVoices();

        $speechSelect.innerHTML = ''; // Limpiar opciones anteriores

        voices.forEach(voice => {
            const $option = d.createElement('option');
            $option.value = voice.name;
            $option.textContent = `${voice.name} - ${voice.lang}`;

            $speechSelect.appendChild($option);
        });
    };

    // Cargar voces cuando el documento está listo
    d.addEventListener('DOMContentLoaded', e => {
        loadVoices();
        if (w.speechSynthesis.onvoiceschanged !== undefined) {
            w.speechSynthesis.onvoiceschanged = loadVoices;
        }
    });

    // Actualizar el selector de voces cuando se selecciona una nueva voz
    d.addEventListener('change', e => {
        if (e.target === $speechSelect) {
            speechMessage.voice = voices.find(voice => voice.name === e.target.value);
        }
    });

    // Escuchar y reproducir el texto cuando se presiona el botón
    d.addEventListener('click', e => {
        if (e.target === $speechBtn) {
            speechMessage.text = $speechTextArea.value;
            w.speechSynthesis.speak(speechMessage);
        }
    });
}
