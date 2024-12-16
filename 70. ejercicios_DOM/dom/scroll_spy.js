const d = document;

export default function scrollSpy(){
    const $sections = d.querySelectorAll('section[data-scroll-spy]');

    const cb = (entries) => {
        //console.log("Entries " + entries);

        entries.forEach(entry => {
            const id = entry.target.getAttribute('id');
            if(entry.isIntersecting){
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add('active');
            }else{  
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove('active');
            }
        });
    }

    const observer = new IntersectionObserver(cb, {
        //root

        //Al darle margenes con valores negativos lo que estamos haciendo es reducir el area en vez de agrandarla con valores positivos (lo que haria tomar mas secciones a la vez)
        //rootMargin: "-250px",

        //threshold: 0.5, //Cuando se encuentra en un 50% del viewport se ejecuta la callback

        //podemos usar la notacion de arreglos para indicar el maximo y minimo 
        threshold: [0.5, 0.75]  
    });

    $sections.forEach(el => observer.observe(el));
}