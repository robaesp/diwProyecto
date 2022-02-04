function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
    document.body.style.backgroundColor = 'blue';
	}
}
function accionReiniciar()
{
  //Usar propiedad .currentTime
  //Reproducir el vídeo
  //Cambiar el valor del botón a ||
var video = document.getElementById("medio");
    video.currentTime = 0;
}
function accionRetrasar()
{
	//Usar propiedad .curentTime
  //Contemplar que no existen valores negativos
  var video = document.getElementById("medio");
  if(video.currentTime > 5){
      video.currentTime = video.currentTime -5;
  }else{

  }
}
function accionAdelantar()
{
  //Contemplar que no existen valores mayores a medio.duration
  var video = document.getElementById("medio");
  let end = video.ended;
  if(end == false){
      video.currentTime = video.currentTime +5;
  }else{

  }	
}
function accionSilenciar()
{
	//Utilizar medio.muted = true; o medio.muted = false;
    var video = document.getElementById("medio");
    if(video.muted){
        video.muted = false;
        silenciar.value = "silenciar";
    } else {
        video.muted = true;
        silenciar.value = "activar";
    }
  
}
function accionMasVolumen()
{
	//Contemplar que el valor máximo de volumen es 1
    var video = document.getElementById("medio");
    if(video.volume<1){
    video.volume = video.volume+0.1;
    }

}
function accionMenosVolumen()
{
	//Contemplar que el valor mínimo de volumen es 0
    var video = document.getElementById("medio");
    if(video.volume>0){
    video.volume = video.volume-0.1;
    }
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);