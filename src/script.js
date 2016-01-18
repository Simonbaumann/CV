// Bug de la photo de profile. son transfert dans le fichier dist ne se fait pas correctement

require('./assets/styles/style.css');
//require('html!./index.html');

var wow = new WOW.WOW();

$(document).ready(function() {
	wow.init();
		
	// Animation du scroll lors d'un clic sur un lien ancre
	$('a[href^="#"]').click(function(){
		var the_id = $(this).attr("href");
		console.log(the_id);

		$('html, body').animate({
			scrollTop:$(the_id).offset().top
		}, 1000);
		return false;
	});
	$(".navbar-fixed-top").autoHidingNavbar();
});

$(window).load(function() {	
	wow.sync();
})

