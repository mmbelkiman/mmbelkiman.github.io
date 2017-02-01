$(document).ready(function() {

	var html5_audiotypes = {
		"mp3" : "audio/mpeg",
		"mp4" : "audio/mp4",
		"ogg" : "audio/ogg",
		"wav" : "audio/wav"
	};

	function createSoundBite(sound) {
		var html5audio = document.createElement('audio');

		//check support for HTML5 audio
		if (html5audio.canPlayType) {
			for (var i = 0; i < arguments.length; i++) {
				var sourceel = document.createElement('source');
				sourceel.setAttribute('src', arguments[i]);
				if (arguments[i].match(/\.(\w+)$/i))
					sourceel.setAttribute('type', html5_audiotypes[RegExp.$1]);
				html5audio.appendChild(sourceel);
			}
			html5audio.load();
			html5audio.playclip = function() {
				html5audio.pause();
				html5audio.currentTime = 0;
				html5audio.play();
			};
			return html5audio;
		} else {
			return {
				playclip : function() {
					console.log("Your browser doesn't support HTML5 audio unfortunately");
				}
			};
		}
	};

	function stringContains(inputString, stringToFind) {
		return (inputString.indexOf(stringToFind) != -1);
	}

	//Sounds========================
	var urlAux = "";
	if (stringContains(window.location.href, "activity")) {
		urlAux = "../";
	}
	var soundError = createSoundBite(urlAux + "_sounds/error.wav");
	var soundSucess = createSoundBite(urlAux + "_sounds/sucess.wav");
	var soundHurryUp = createSoundBite(urlAux + "_sounds/hurryUp.ogg");
	var soundTimeEnd = createSoundBite(urlAux + "_sounds/timeEnd.mp3");
	var soundClock0 = createSoundBite(urlAux + "_sounds/clock0.wav");
	var soundClock1 = createSoundBite(urlAux + "_sounds/clock1.wav");
	var soundStart = createSoundBite(urlAux + "_sounds/start.wav");

	window.soundHandler = {
		playError : function() {
			soundError.playclip();
		},
		playSucess : function() {
			soundSucess.playclip();
		},
		playHurryUp : function() {
			soundHurryUp.playclip();
		},
		playTimeEnd : function() {
			soundTimeEnd.playclip();
		},
		playClock0 : function() {
			soundClock0.playclip();
		},
		playClock1 : function() {
			soundClock1.playclip();
		},
		playStart : function() {
			soundStart.playclip();
		}
	};

});
