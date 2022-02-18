$(document).ready(function(){
    $("#art1").click(function(){
        var x = $(".entradas").offset();
        alert("Top: " + x.top + " Left: " + x.left);
        var posicion = $("#btn3").offset();
        $('html, body').animate({scrollTop:x.top}, 'slow');
      });
      $("#art2").click(function(){
        var x = $(".video").offset();
        alert("Top: " + x.top + " Left: " + x.left);
        var posicion = $("#btn3").offset();
        $('html, body').animate({scrollTop:x.top}, 'slow');
      });
      $("#art3").click(function(){
        var x = $(".audio").offset();
        alert("Top: " + x.top + " Left: " + x.left);
        var posicion = $("#btn3").offset();
        $('html, body').animate({scrollTop:x.top}, 'slow');
      });
      $("#art4").click(function(){
        var x = $(".medios").offset();
        alert("Top: " + x.top + " Left: " + x.left);
        var posicion = $("#btn3").offset();
        $('html, body').animate({scrollTop:x.top}, 'slow');
      });

      $("#toTop").css("display", "none");
	$(window).scroll(function(){
		if($(window).scrollTop() > 500){
			$("#toTop").fadeIn("slow");
		}
		else {
			$("#toTop").fadeOut("slow");
		}
	});
  });