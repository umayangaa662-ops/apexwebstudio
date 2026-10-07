function intro(){
    let intro = document.getElementById('intro');
    let invideo = document.getElementById('invideo');
    let close = document.getElementById('close');
    let blurbg = document.getElementById('blur-bg');

     invideo.muted = false;
     invideo.play()

     invideo.style.display = "block";
     close.style.display="block";
     blurbg.style.display="block";
     

}
function closevideo(){
    let invideo = document.getElementById('invideo');
    let close = document.getElementById('close');
    let blurbg = document.getElementById('blur-bg');


     invideo.style.display = "none";
     close.style.display="none";
     blurbg.style.display="none";

     invideo.muted = true;
     invideo.pause()
     
}