const d = document, 
    w = window,
    n = navigator;

export default function networkStatus(){
    const $div = d.createElement('div');
    const isOnline = ()=>{
        if(n.onLine){
            $div.textContent = 'Conexion reestablecida';
            $div.classList.add('online');
            $div.classList.remove('offline');
        } else {
            $div.textContent = 'Conexion perdida';
            $div.classList.add('offline');
            $div.classList.remove('online');
        }
    }

    d.body.insertAdjacentElement('afterbegin', $div);
    setTimeout(() => {
        d.body.removeChild($div);
    }, 2000);

    //evento que detecta cuando esta conectado o no 
    w.addEventListener('online', e => console.log(isOnline));
    w.addEventListener('offline', e => console.log(isOnline));
}