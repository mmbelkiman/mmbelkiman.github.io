$(document).ready(function() {
	//VARS
	var level = getUrlFriendlyVars()["activity-xyz"];
	;
	var timeLevel = [0, 5200, 4200, 3200, 2200, 1200];
	var maxDigits = 5;
	var actualDigits = 2;
	var maxValue = 4;
	var minValue = 0;
	var operation = ["+", "-", "*", "/"];
	var question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];
	var questionAnswer = 0;
	var points = 500;
	//END VARS

	// CLICKS BUTTONS
	$("#modal-end-activity-continue").on("click", function() {
		window.location.href = window.pathServer + "../home";
	});
	$(".question-response-row.null").on("keydown.response", function(e) {
		var id = $(this).attr("id");
		var value = $(this).html().trim();
		if (e.keyCode == 13 || e.keyCode == 9) {
			if (value != "")
				validateAnswer(id, value);
			return false;
		}
	});
	$(".question-response-row.null").on("focusout.response", function() {
		var id = $(this).attr("id");
		var value = $(this).html().trim();
		if (value != "")
			validateAnswer(id, value);
	});
	//FRONT END FUNCTIONS
	function validateAnswer(id, value) {
		var correctValue = 0;
		var x = $("#response-row-x").html().trim();
		var y = $("#response-row-y").html().trim();
		var z = $("#response-row-z").html().trim();
		value = value.replace(",", ".");

		if (id == "response-row-x2") {
			correctValue = Math.pow(x, 2);
			if (correctValue == value)
				correctAnswer(id);
			else
				wrongAnswer();
		} else if (id == "response-row-vy") {
			correctValue = Math.sqrt(y);
			correctValue = parseFloat(correctValue).toFixed(2);
			value = parseFloat(value).toFixed(2);

			if (correctValue == value)
				correctAnswer(id);
			else
				wrongAnswer();
		} else if (id == "response-row-xpy") {
			correctValue = parseInt(x) + parseInt(y);
			if (correctValue == value)
				correctAnswer(id);
			else
				wrongAnswer();
		} else if (id == "response-row-zmy") {
			correctValue = parseInt(z) - parseInt(y);
			if (correctValue == value)
				correctAnswer(id);
			else
				wrongAnswer();
		} else if (id == "response-row-xpymz") {
			correctValue = parseInt(x) + parseInt(y) - parseInt(z);
			if (correctValue == value)
				correctAnswer(id);
			else
				wrongAnswer();
		}

		if ($(".null").length == 0) {
			controlTime.clockRestart();
			createNewQuestion(level);
		}
	}

	function correctAnswer(id) {
		$("#" + id).addClass("correct");
		$("#" + id).removeClass("null");
		$("#" + id).attr("contenteditable", false);
		$("#" + id).blur();

		soundHandler.playSucess();
		points += 50;
		$("#clockTime").html(parseInt($("#clockTime").html().trim()) + 100);
	}

	function wrongAnswer() {
		soundHandler.playError();
		clearInterval(window.clockPoints);
		controlTime.clockStop();
		$("#modal-end-activity-points").html($("#activitie-points-value"));
		$('.modal-end-activity').modal('show');
	}

	function createNewQuestion(level) {
		$(".question-response-row").each(function() {
			if ($(this).hasClass("correct") && !$(this).hasClass("index")) {
				$(this).removeClass("correct");
				$(this).addClass("null");
				$(this).html("");
				$(this).attr("contenteditable", true);
			}
		});

		$("#response-row-x").html(Math.floor((Math.random() * maxDigits) + 1));
		$("#response-row-y").html(Math.floor((Math.random() * maxDigits) + 1));
		$("#response-row-z").html(Math.floor((Math.random() * maxDigits) + 1));
	}

	function createXYZ(level) {
		switch(parseInt(level)) {
		case 1:
			createNewQuestion(level);
			break;
		case 2:
			createNewQuestion(level);
			break;
		case 3:
			createNewQuestion(level);
			break;
		case 4:
			createNewQuestion(level);
			break;
		case 5:
			createNewQuestion(level);
			break;
		}
	}

	//END FRONT END FUNCTIONS

	// BACK END FUNCTIONS
	function createClockPoints() {
		window.clockPoints = setInterval(function() {
			if (!controlTime.clockActivityPause) {
				$("#activitie-points-value").html(points);

				if (points > 0)
					points--;
			}
		}, 50);
	}

	// END BACK END FUNCTIONS

	//CALLING ON START PAGE
	window.shrinkHeader = 1;
	$('html, body').animate({
		scrollTop : window.innerHeight
	}, 1000);
	$("#activitie-level-value").html(level);
	$("#clockTime").html(timeLevel[level]);
	createXYZ(level);
	controlTime.clockStart(0, 200);
	controlTime.clockCount(1);
	createClockPoints();
});
