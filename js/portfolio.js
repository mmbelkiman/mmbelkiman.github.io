$(document).ready(function () {
	var displaySoftware = true;
	var displayGames = true;
	translate();

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
		$("#filter-title").html(mLanguage["filter-title"]);
		$("#filter-software-text").html(mLanguage["filter-software-text"]);
		$("#filter-games-text").html(mLanguage["filter-games-text"]);
		$("#filter-music-text").html(mLanguage["filter-music-text"]);
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
		$("#plinio-1").html(mLanguage["plinio-1"]);
		$("#plinio-2").html(mLanguage["plinio-2"]);
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
		$("#oeste-1").html(mLanguage["oeste-1"]);
		$("#oeste-2").html(mLanguage["oeste-2"]);
		$("#oeste-3").html(mLanguage["oeste-3"]);
		$("#yami-1").html(mLanguage["yami-1"]);
		$("#yami-2").html(mLanguage["yami-2"]);
		$("#break-1").html(mLanguage["break-1"]);
		$("#break-2").html(mLanguage["break-2"]);
		$("#gameMacaco-1").html(mLanguage["gameMacaco-1"]);
		$("#gameMacaco-2").html(mLanguage["gameMacaco-2"]);
		$("#music-1").html(mLanguage["music-1"]);
		$("#m12-1").html(mLanguage["m12-1"]);
		$("#m12-2").html(mLanguage["m12-2"]);
		$("#m12-3").html(mLanguage["m12-3"]);
		$("#nauu-1").html(mLanguage["nauu-1"]);
		$("#nauu-2").html(mLanguage["nauu-2"]);
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
	}

});