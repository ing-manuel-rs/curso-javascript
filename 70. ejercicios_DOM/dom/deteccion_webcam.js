const d = document,
    n = navigator;

export default function webCam(id){
    const $video = d.getElementById(id);

    //verificar que en el navegador exista la funcion
    if(n.mediaDevices.getUserMedia){
        n.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then(stream => {
            $video.srcObject = stream;
            $video.play();
        })
        .catch(err => {
            $video.insertAdjacentHTML('beforebegin', `<p><mark>${err}</mark></p>`);
            console.log('Error: '+err);
        });
    }
}