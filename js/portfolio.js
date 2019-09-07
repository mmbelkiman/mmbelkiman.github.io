$(document).ready(function () {
	var displaySoftware = true;
	var displayGames = true;
	translate();
	//$('.gif').gifplayer();
	Gifffer({
		playButtonStyles: {
		  'width': '60px',
		  'height': '60px',
		  'border-radius': '30px',
		  'background': 'rgba(75, 127,115, 0.5)',
		  'position': 'absolute',
		  'top': '50%',
		  'left': '50%',
		  'margin': '-30px 0 0 -30px'
		},
		playButtonIconStyles: {
		  'width': '0',
		  'height': '0',
		  'border-top': '14px solid transparent',
		  'border-bottom': '14px solid transparent',
		  'border-left': '14px solid rgba(255, 255, 255, 0.9)',
		  'position': 'absolute',
		  'left': '26px',
		  'top': '16px'
		}
	  });

	$(".filter-text").on("click", function () {
		var id = $(this).attr("id");
		if (id == "filter-software") {
			if (displaySoftware) {
				$(".row-software").css("display", "none");
				$(".row-software-father").css("opacity", ".8");
				$("#filter-software").css("color", "#999");

				displaySoftware = false;
			} else {
				$(".row-software").css("display", "block");
				$(".row-software-father").css("opacity", "1");
				$("#filter-software").css("color", "black");

				displaySoftware = true;
			}
		}

		if (id == "filter-games") {
			if (displayGames) {
				$(".row-games").css("display", "none");
				$(".row-games-father").css("opacity", ".8");
				$("#filter-games").css("color", "#999");

				displayGames = false;
			} else {
				$(".row-games").css("display", "block");
				$(".row-games-father").css("opacity", "1");
				$("#filter-games").css("color", "black");

				displayGames = true;
			}
		}
	});

	function translate() {
		var mLanguage = activeLanguage.portfolio;

		$(".play-online").html(mLanguage["play-online"]);
		$(".sourcecode").html(mLanguage["sourcecode"]);
		$("#tri-1").html(mLanguage["tri-1"]);
		$("#tri-2").html(mLanguage["tri-2"]);
		$("#tri-3").html(mLanguage["tri-3"]);
		$("#gamification-1").html(mLanguage["gamification-1"]);
		$("#gamification-2").html(mLanguage["gamification-2"]);
		$("#gamification-3").html(mLanguage["gamification-3"]);
		$("#gamification-4").html(mLanguage["gamification-4"]);
		$("#omg-1").html(mLanguage["omg-1"]);
		$("#omg-2").html(mLanguage["omg-2"]);
		$("#omg-3").html(mLanguage["omg-3"]);
		$("#omg-4").html(mLanguage["omg-4"]);
		$("#gludum-1").html(mLanguage["gludum-1"]);
		$("#gludum-2").html(mLanguage["gludum-2"]);
		$("#gludum-3").html(mLanguage["gludum-3"]);
		$("#gludum-4").html(mLanguage["gludum-4"]);
		$("#gludum-5").html(mLanguage["gludum-5"]);
		$("#click-1").html(mLanguage["click-1"]);
		$("#click-2").html(mLanguage["click-2"]);
		$("#click-3").html(mLanguage["click-3"]);
		$("#alundra-1").html(mLanguage["alundra-1"]);
		$("#alundra-2").html(mLanguage["alundra-2"]);
		$("#alundra-3").html(mLanguage["alundra-3"]);
		$("#space-1").html(mLanguage["space-1"]);
		$("#space-2").html(mLanguage["space-2"]);
		$("#space-3").html(mLanguage["space-3"]);
		$("#space-4").html(mLanguage["space-4"]);
		$("#break-1").html(mLanguage["break-1"]);
		$("#break-2").html(mLanguage["break-2"]);
		$("#itaucard-1").html(mLanguage["itaucard-1"]);
		$("#itaucard-2").html(mLanguage["itaucard-2"]);
		$("#itaucard-3").html(mLanguage["itaucard-3"]);
		$("#rupert-1").html(mLanguage["rupert-1"]);
		$("#rupert-2").html(mLanguage["rupert-2"]);
		$("#rupert-3").html(mLanguage["rupert-3"]);
		$("#thaisborba-1").html(mLanguage["thaisborba-1"]);
		$("#thaisborba-2").html(mLanguage["thaisborba-2"]);
		$("#calangostudio-1").html(mLanguage["calangostudio-1"]);
		$("#calangostudio-2").html(mLanguage["calangostudio-2"]);
		$("#ultraretrovirus-1").html(mLanguage["ultraretrovirus-1"]);
		$("#ultraretrovirus-2").html(mLanguage["ultraretrovirus-2"]);
		$("#ultraretrovirus-3").html(mLanguage["ultraretrovirus-3"]);
		$("#livroh-1").html(mLanguage["livroh-1"]);
		$("#livroh-2").html(mLanguage["livroh-2"]);
		$("#livroh-3").html(mLanguage["livroh-3"]);
		$("#bancah-1").html(mLanguage["bancah-1"]);
		$("#bancah-2").html(mLanguage["bancah-2"]);
		$("#bancah-3").html(mLanguage["bancah-3"]);
		$("#epicgolf2d-1").html(mLanguage["epicgolf2d-1"]);
		$("#epicgolf2d-2").html(mLanguage["epicgolf2d-2"]);
		$("#epicgolf2d-3").html(mLanguage["epicgolf2d-3"])
		$("#ourAdventureTime-1").html(mLanguage["ourAdventureTime-1"]);
		$("#ourAdventureTime-2").html(mLanguage["ourAdventureTime-2"]);
		$("#ourAdventureTime-3").html(mLanguage["ourAdventureTime-3"]);
		$("#venusparticleeditor-1").html(mLanguage["venusparticleeditor-1"])
		$("#venusparticleeditor-2").html(mLanguage["venusparticleeditor-2"])
		$("#venusparticleeditor-3").html(mLanguage["venusparticleeditor-3"])
		
		var mLanguage = activeLanguage.contact;
		$("#contact-message-portifolio").html(mLanguage["contact-message-profile"]);
	}

});