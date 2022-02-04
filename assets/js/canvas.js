var ctx=null, canvas=null;
function iniciar(){ /*Canvas con los elementos vistos en clase*/
	var myCanvas = document.getElementById("miCanvas");
	var context = myCanvas.getContext("2d");  
	//Cuadrados
	context.fillStyle = "rgb(186,85,211)";
	context.fillRect(150, 150, 100, 100);
	
	//Contorno Círculo
	context.beginPath();
	context.fillStyle = "rgba(255, 0, 0, 0.5)";
	context.arc(180, 210, 10, 0, 2 * Math.PI, true);
	context.lineWidth = 3;
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
	context.arc(220, 210, 10, 0, 2 * Math.PI, true);
	context.lineWidth = 3;
	context.fill();

	


	//Sombras y arcos
	context.beginPath();
	context.shadowBlur=50;
	context.shadowColor="blue";
	context.fillStyle="black";
	context.arc(180,50,100,1,0.5*Math.PI);
	context.fill();
}
window.addEventListener("load", iniciar, false);