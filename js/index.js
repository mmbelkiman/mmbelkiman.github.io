$(document).ready(function() {
	var showScrollTutorial = false;
	
	translate();
	verifyScreenStoped();

	$('.slide').each(function() {
		var $obj = $(this);

		$(window).scroll(function() {
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
			width : "150px",
			height : "150px"
		});
	}

	function animateScrollOff() {
		showScrollTutorial = false;
		$("#mouse-scroll").animate({
			width : "0px",
			height : "0px"
		});
	}

	function verifyScreenStoped() {
		setTimeout(function() {
			if ($(window).scrollTop() < 400 && !showScrollTutorial) {
				animateScrollOn();
			}
			verifyScreenStoped();
		}, 5000);
	}

	function translate() {
		var mLanguage = activeLanguage.home;
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
		$("#cit-1").html(mLanguage["cit-1"]);
		$("#cit-2").html(mLanguage["cit-2"]);
		$("#click-1").html(mLanguage["click-1"]);
		$("#click-2").html(mLanguage["click-2"]);
		$("#click-3").html(mLanguage["click-3"]);
		$("#click-4").html(mLanguage["click-4"]);
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
		$("#verisoft-time").html(mLanguage["verisoft-time"]);
		$("#cit-time").html(mLanguage["cit-time"]);
		$("#click-time").html(mLanguage["click-time"]);
		$("#art-time").html(mLanguage["art-time"]);
		$("#people-time").html(mLanguage["people-time"]);
		$("#brSim-time").html(mLanguage["brSim-time"]);
		$("#other-gamedev").html(mLanguage["other-gamedev"]);
		$("#hobbies-music").html(mLanguage["hobbies-music"]);
		$("#hobbies-travel").html(mLanguage["hobbies-travel"]);
		$("#hobbies-programming").html(mLanguage["hobbies-programming"]);
		$("#hobbies-games").html(mLanguage["hobbies-games"]);
		$("#glossary-course").html(mLanguage["glossary-course"]);
		$("#glossary-exp").html(mLanguage["glossary-exp"]);
		$("#glossary-personal").html(mLanguage["glossary-personal"]);
		$("#glossary-now").html(mLanguage["glossary-now"]);
	}

});
