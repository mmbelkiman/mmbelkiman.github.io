$(document).ready(function() {
	btnFullScreenOff();

	$(".btn-fullscreen").on("click", function() {
		toggleFullScreen();
	});

	function btnFullScreenOn() {
		var html = "";
		html += "<spam class='glyphicon glyphicon-resize-small'></spam> ";
		$(".btn-fullscreen").html(html);

		$(".btn-fullscreen").attr("title", "Modo browser");
	}

	function btnFullScreenOff() {
		var html = "";
		html += "<spam class='glyphicon glyphicon-resize-full'></spam> ";
		$(".btn-fullscreen").html(html);

		$(".btn-fullscreen").attr("title", "Modo tela cheia");
	}

	function toggleFullScreen() {
		if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) {
			btnFullScreenOn();
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			}
		} else {
			btnFullScreenOff();
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
		}
	}

});
