$(document).ready(function() {
	
	//Scroll Menu
	$(".menuNavegacao a, .scrollpage").click(function() {
		$(".menuNavegacao li").removeClass('active');
		$(this).parents("li").addClass('active');

		var id = $(this).attr("name");
		var rolagem = $(""+ id +"").offset().top
		$('html, body').animate({
	    	scrollTop: rolagem
		}, 	800, "easeOutCubic");	
	});

	//Animações
	function animacao (elemento, classe) {
		$("#" + elemento).removeClass('animated ' + classe).addClass('animated ' + classe).one('webkitAnimationEnd mozAnimationEnd oAnimationEnd animationEnd', function(){
			      $("#" + elemento).removeClass('animated ' + classe);
			    });
	}

	setTimeout(function  () {
		$(".texto-inicial").removeClass('animated pulse');
	}, 1000)

	$(".texto-inicial, .icones-circ, .circ-icone").mouseover(function(e) {
			var elemento = e.target.id
			var classe = $(this).attr("animacao");
			animacao(elemento, classe);
	});


	$("#bt-produtos").click(function() {
		animacao("circ-ic-shop", "flipInY");
		animacao("circ-ic-hearth", "flipInY");
		animacao("circ-ic-gift", "flipInY");
	});

	$("#bt-servicos, #bt-conheca").click(function() {
		setTimeout(function  () {
			animacao("circ-ic-magic", "pulse");
			animacao("circ-ic-pic", "pulse");
			animacao("circ-ic-ribbon", "pulse");
		}, 500)
		
	});

});



