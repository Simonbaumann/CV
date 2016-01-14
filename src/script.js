// Bug de la photo de profile. son transfert dans le fichier dist ne se fait pas correctement

require('./assets/styles/style.css');
//require('./assets/styles/animate.css');
//require('/assets/js/wow.min.js');
require('file?name=[name].[ext]!./assets/images/photoprofil.png');

console.log("helllo");

var wow = new WOW.WOW();

	$(document).ready(function() {
		// Animation du scroll lors d'un clic sur un lien ancre
		$('a[href^="#"]').click(function(){
			var the_id = $(this).attr("href");
			console.log(the_id);

			$('html, body').animate({
				scrollTop:$(the_id).offset().top
			}, 1000);
			return false;
		});
		

		wow.init();
		$(".navbar-fixed-top").autoHidingNavbar();

});

/**
var request = $.ajax({
    method: "GET",
    url: "localhost:8080"
});

request.done(content) {
    // Synchronise WoW
    wow.sync();
}
**/

