$(document).ready(function () {
	let showScrollTutorial = false;

	Gifffer({
		playButtonStyles: {
			'width': '60px',
			'height': '60px',
			'border-radius': '30px',
			'background': 'rgba(0, 0,0, 0.5)',
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

	translate();
	verifyScreenStoped();
	fadeEffect();
	animateScrollOff();

	$('.slide').each(function () {
		var $obj = $(this);
		var yPos = -($(window).scrollTop() / $obj.data('speed'));
		var bgpos = '50% ' + (yPos + 20) + 'px';
		$obj.css('background-position', bgpos);

		$(window).scroll(function () {
			var yPos = -($(window).scrollTop() / $obj.data('speed'));
			var bgpos = '50% ' + (yPos + 20) + 'px';
			$obj.css('background-position', bgpos);
		});
	});

	$(window).scroll(function scrollTutorial() {
		if (showScrollTutorial) {
			animateScrollOff();
			showScrollTutorial = false;
		}
	});

	function animateScrollOn() {
		showScrollTutorial = true;
		$("#mouse-scroll").animate({
			width: "150px",
			height: "150px"
		});
	}

	function animateScrollOff() {
		showScrollTutorial = false;
		$("#mouse-scroll").animate({
			width: "0px",
			height: "0px"
		});
	}

	function fadeEffect() {
		$("#blink_char").fadeOut().delay(500).fadeIn();

		setTimeout(function () {
			fadeEffect();
		}, 500);
	}

	function verifyScreenStoped() {
		setTimeout(function () {
			if ($(window).scrollTop() < 400 && !showScrollTutorial) {
				animateScrollOn();
			}
			verifyScreenStoped();
		}, 5000);
	}

	function translate() {
		let mLanguage = activeLanguage.home;
		$("#content-name-allign").html(mLanguage["content-name-allign"]);
		$("#welcome-1").html(mLanguage["welcome-1"]);
		$("#welcome-2").html(mLanguage["welcome-2"]);
		$("#welcome-3").html(mLanguage["welcome-3"]);
		$("#topic-name-1").html(mLanguage["topic-name-1"]);
		$("#topic-name-2").html(mLanguage["topic-name-2"]);
		$("#topic-name-3").html(mLanguage["topic-name-3"]);
		$("#topic-name-4").html(mLanguage["topic-name-4"]);
		$("#topic-name-5").html(mLanguage["topic-name-5"]);
		$("#topic-name-6").html(mLanguage["topic-name-6"]);
		$("#topic-name-7").html(mLanguage["topic-name-7"]);
		$("#topic-name-8").html(mLanguage["topic-name-8"]);
		$("#desc-obj").html(mLanguage["desc-obj"]);
		$("#verisoft-1").html(mLanguage["verisoft-1"]);
		$("#verisoft-2").html(mLanguage["verisoft-2"]);
		$("#ies2-1").html(mLanguage["ies2-1"]);
		$("#ies2-2").html(mLanguage["ies2-2"]);
		$("#cit-1").html(mLanguage["cit-1"]);
		$("#cit-2").html(mLanguage["cit-2"]);
		$("#click-company-1").html(mLanguage["click-1"]);
		$("#click-company-2").html(mLanguage["click-2"]);
		$("#click-company-3").html(mLanguage["click-3"]);
		$("#click-company-4").html(mLanguage["click-4"]);
		$("#art-1").html(mLanguage["art-1"]);
		$("#art-2").html(mLanguage["art-2"]);
		$("#people-1").html(mLanguage["people-1"]);
		$("#people-2").html(mLanguage["people-2"]);
		$("#brSim-1").html(mLanguage["brSim-1"]);
		$("#brSim-2").html(mLanguage["brSim-2"]);
		$("#language-port-1").html(mLanguage["language-port-1"]);
		$("#language-port-2").html(mLanguage["language-port-2"]);
		$("#language-eng-1").html(mLanguage["language-eng-1"]);
		$("#language-eng-2").html(mLanguage["language-eng-2"]);
		$("#language-eng-3").html(mLanguage["language-eng-3"]);
		$("#language-eng-4").html(mLanguage["language-eng-4"]);
		$("#ies2-time").html(mLanguage["ies2-time"]);
		$("#ies2-role").html(mLanguage["ies2-role"]);
		$("#verisoft-time").html(mLanguage["verisoft-time"]);
		$("#verisoft-role").html(mLanguage["verisoft-role"]);
		$("#cit-time").html(mLanguage["cit-time"]);
		$("#cit-role").html(mLanguage["cit-role"]);
		$("#click-time").html(mLanguage["click-time"]);
		$("#click-role").html(mLanguage["click-role"]);
		$("#art-time").html(mLanguage["art-time"]);
		$("#art-role").html(mLanguage["art-role"]);
		$("#people-time").html(mLanguage["people-time"]);
		$("#people-role").html(mLanguage["people-role"]);
		$("#brSim-time").html(mLanguage["brSim-time"]);
		$("#brSim-role").html(mLanguage["brSim-role"]);
		$("#other-gamedev").html(mLanguage["other-gamedev"]);
		$("#hobbies-music").html(mLanguage["hobbies-music"]);
		$("#hobbies-travel").html(mLanguage["hobbies-travel"]);
		$("#hobbies-programming").html(mLanguage["hobbies-programming"]);
		$("#hobbies-games").html(mLanguage["hobbies-games"]);
		$("#glossary-course").html(mLanguage["glossary-course"]);
		$("#glossary-exp").html(mLanguage["glossary-exp"]);
		$("#glossary-personal").html(mLanguage["glossary-personal"]);
		$("#glossary-now").html(mLanguage["glossary-now"]);

		let mLanguagePortfolio = activeLanguage.portfolio;
		$(".play-online").html(mLanguagePortfolio["play-online"]);
		$(".sourcecode").html(mLanguagePortfolio["sourcecode"]);
		$("#aulapp-1").html(mLanguagePortfolio["aulapp-1"]);
		$("#aulapp-2").html(mLanguagePortfolio["aulapp-2"]);
		$("#aulapp-3").html(mLanguagePortfolio["aulapp-3"]);
		$("#tri-1").html(mLanguagePortfolio["tri-1"]);
		$("#tri-2").html(mLanguagePortfolio["tri-2"]);
		$("#tri-3").html(mLanguagePortfolio["tri-3"]);
		$("#gamification-1").html(mLanguagePortfolio["gamification-1"]);
		$("#gamification-2").html(mLanguagePortfolio["gamification-2"]);
		$("#gamification-3").html(mLanguagePortfolio["gamification-3"]);
		$("#gamification-4").html(mLanguagePortfolio["gamification-4"]);
		$("#omg-1").html(mLanguagePortfolio["omg-1"]);
		$("#omg-2").html(mLanguagePortfolio["omg-2"]);
		$("#omg-3").html(mLanguagePortfolio["omg-3"]);
		$("#omg-4").html(mLanguagePortfolio["omg-4"]);
		$("#gludum-1").html(mLanguagePortfolio["gludum-1"]);
		$("#gludum-2").html(mLanguagePortfolio["gludum-2"]);
		$("#gludum-3").html(mLanguagePortfolio["gludum-3"]);
		$("#gludum-4").html(mLanguagePortfolio["gludum-4"]);
		$("#gludum-5").html(mLanguagePortfolio["gludum-5"]);
		$("#click-1").html(mLanguagePortfolio["click-1"]);
		$("#click-2").html(mLanguagePortfolio["click-2"]);
		$("#click-3").html(mLanguagePortfolio["click-3"]);
		$("#alundra-1").html(mLanguagePortfolio["alundra-1"]);
		$("#alundra-2").html(mLanguagePortfolio["alundra-2"]);
		$("#alundra-3").html(mLanguagePortfolio["alundra-3"]);
		$("#space-1").html(mLanguagePortfolio["space-1"]);
		$("#space-2").html(mLanguagePortfolio["space-2"]);
		$("#space-3").html(mLanguagePortfolio["space-3"]);
		$("#space-4").html(mLanguagePortfolio["space-4"]);
		$("#break-1").html(mLanguagePortfolio["break-1"]);
		$("#break-2").html(mLanguagePortfolio["break-2"]);
		$("#itaucard-1").html(mLanguagePortfolio["itaucard-1"]);
		$("#itaucard-2").html(mLanguagePortfolio["itaucard-2"]);
		$("#itaucard-3").html(mLanguagePortfolio["itaucard-3"]);
		$("#rupert-1").html(mLanguagePortfolio["rupert-1"]);
		$("#rupert-2").html(mLanguagePortfolio["rupert-2"]);
		$("#rupert-3").html(mLanguagePortfolio["rupert-3"]);
		$("#thaisborba-1").html(mLanguagePortfolio["thaisborba-1"]);
		$("#thaisborba-2").html(mLanguagePortfolio["thaisborba-2"]);
		$("#calangostudio-1").html(mLanguagePortfolio["calangostudio-1"]);
		$("#calangostudio-2").html(mLanguagePortfolio["calangostudio-2"]);
		$("#ultraretrovirus-1").html(mLanguagePortfolio["ultraretrovirus-1"]);
		$("#ultraretrovirus-2").html(mLanguagePortfolio["ultraretrovirus-2"]);
		$("#ultraretrovirus-3").html(mLanguagePortfolio["ultraretrovirus-3"]);
		$("#livroh-1").html(mLanguagePortfolio["livroh-1"]);
		$("#livroh-2").html(mLanguagePortfolio["livroh-2"]);
		$("#livroh-3").html(mLanguagePortfolio["livroh-3"]);
		$("#bancah-1").html(mLanguagePortfolio["bancah-1"]);
		$("#bancah-2").html(mLanguagePortfolio["bancah-2"]);
		$("#bancah-3").html(mLanguagePortfolio["bancah-3"]);
		$("#epicgolf2d-1").html(mLanguagePortfolio["epicgolf2d-1"]);
		$("#epicgolf2d-2").html(mLanguagePortfolio["epicgolf2d-2"]);
		$("#epicgolf2d-3").html(mLanguagePortfolio["epicgolf2d-3"])
		$("#ourAdventureTime-1").html(mLanguagePortfolio["ourAdventureTime-1"]);
		$("#ourAdventureTime-2").html(mLanguagePortfolio["ourAdventureTime-2"]);
		$("#ourAdventureTime-3").html(mLanguagePortfolio["ourAdventureTime-3"]);
		$("#venusparticleeditor-1").html(mLanguagePortfolio["venusparticleeditor-1"])
		$("#venusparticleeditor-2").html(mLanguagePortfolio["venusparticleeditor-2"])
		$("#venusparticleeditor-3").html(mLanguagePortfolio["venusparticleeditor-3"])

		let mLanguageContact = activeLanguage.contact;
		$("#contact-message-portifolio").html(mLanguageContact["contact-message-portifolio"]);
	}
});
