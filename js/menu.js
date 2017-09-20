$(document).ready(function() {
	var shrinkHeader = 300;
	translate();

	$("#menu-language").on("click", function() {
		setLanguage();
	});
	// Animation header
	$(function() {
		$(window).scroll(function() {
			var scroll = getCurrentScroll();

			if (scroll >= shrinkHeader) {
				$('#page-top').addClass('shrink');
				$('.title').addClass('shrink');
			} else {
				$('#page-top').removeClass('shrink');
				$('.title').removeClass('shrink');
			}
		});
		function getCurrentScroll() {
			return window.pageYOffset;
		}

	});
	// END Animation header>

	function translate() {
		var mLanguage = activeLanguage.menu;
		$("#menu-subtitle").html(mLanguage["menu-subtitle"]);
		$("#menu-home").html(mLanguage["menu-home"]);
		$("#menu-portfolio").html(mLanguage["menu-portfolio"]);
		
		if(getCookie("language") == 1){
			$("#menu-language-text").html("in English");
		}else{
			$("#menu-language-text").html("em português");
		}
	}

});
