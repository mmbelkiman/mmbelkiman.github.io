$(document).ready(function() {
	
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
});
