const d = document,
    w = window;

export default function scrollTopButton(btn){
    const $scrollBtn = d.querySelector(btn);

    
    w.addEventListener('scroll', e => {
        let scrollTop = w.pageYOffset || d.documentElement.scrollTop;
        //Se puede acceder a la distancia desplazada con el scroll usando el objeto window o con el DOM
        //console.log(w.pageYOffset, d.documentElement.scrollTop);

        if(scrollTop > 300){
            $scrollBtn.classList.remove('hidden');
        }else{
            $scrollBtn.classList.add('hidden');
        }
    });

    d.addEventListener('click', e => {
        if(e.target.matches(btn)){
            w.scrollTo({
                behavior: "smooth",
                top: 0
                //left: 0,
            });
        }
    });
}