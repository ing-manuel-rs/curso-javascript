const d = document,
    w = window;

export default function smartVideo(){
    const $videos = d.querySelectorAll('video[data-smart-video]');

    //callback 
    const cb = entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.play();
            }else{
                entry.target.pause();
            }

            //evento para saber si esta visible en la pantalla (osea saber si el usuario tiene nuestra pestaña abierta)
            w.addEventListener('visibilitychange', e => d.visibilityState === 'visible' 
                ? entry.target.play()
                : entry.target.pause());
        });
    }

    //init Intersection Observer
    const observer = new IntersectionObserver(cb, {threshold: 0.5});

    //add intersection observer to videos
    $videos.forEach(video => observer.observe(video));
}