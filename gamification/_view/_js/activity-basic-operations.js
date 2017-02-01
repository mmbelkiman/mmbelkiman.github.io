$(document).ready(function() {
	//VARS
	var level = getUrlFriendlyVars()["activity-basic-operations"];
	var timeLevel = [0, 500, 400, 700, 800, 1000];
	var maxDigits = 5;
	var actualDigits = 2;
	var maxValue = 4;
	var minValue = 0;
	var operation = ["+", "-", "*", "/"];
	var question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];
	var questionAnswer = 0;
	var points = 50;
	//END VARS

	// CLICKS BUTTONS
	$("#modal-end-activity-continue").on("click", function() {
		window.location.href = window.pathServer + "../home";
	});
	$("#btn-answer-1").on("click", function() {
		if (questionAnswer == $("#btn-answer-1").html().trim()) {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-2").on("click", function() {
		if (questionAnswer == $("#btn-answer-2").html().trim()) {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-3").on("click", function() {
		if (questionAnswer == $("#btn-answer-3").html().trim()) {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-4").on("click", function() {
		if (questionAnswer == $("#btn-answer-4").html().trim()) {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});

	//FRONT END FUNCTIONS
	function correctAnswer() {
		soundHandler.playSucess();
		controlTime.clockRestart();
		createNewQuestion(level);
		points += 50;
	}

	function wrongAnswer() {
		soundHandler.playError();
		clearInterval(window.clockPoints);
		controlTime.clockStop();
		$("#modal-end-activity-points").html($("#activitie-points-value"));
		$('.modal-end-activity').modal('show');
	}

	function createNewQuestion(level) {
		var questionAnswerAux = 0;
		var mQuestion = "";
		var correctAnswerPos = 0;
		question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];

		actualDigits = Math.floor((Math.random() * level) + 1);
		if (actualDigits <= 1)
			actualDigits = 2;

		question[0] = Math.floor((Math.random() * maxDigits) + 1);
		question[1] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
		question[2] = Math.floor((Math.random() * maxDigits) + 1);

		if (actualDigits >= 3) {
			question[3] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[4] = Math.floor((Math.random() * maxDigits) + 1);
		}
		if (actualDigits >= 4) {
			question[5] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[6] = Math.floor((Math.random() * maxDigits) + 1);
		}
		if (actualDigits >= 5) {
			question[7] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[8] = Math.floor((Math.random() * maxDigits) + 1);
		}

		if (question[1] != ".") {
			if (question[1] == "+")
				questionAnswer = parseFloat(question[0]) + parseFloat(question[2]);
			else if (question[1] == "-")
				questionAnswer = parseFloat(question[0]) - parseFloat(question[2]);
			else if (question[1] == "*")
				questionAnswer = parseFloat(question[0]) * parseFloat(question[2]);
			else if (question[1] == "/")
				questionAnswer = parseFloat(question[0]) / parseFloat(question[2]);

			if (questionAnswer <= 0)
				question[2] = 0;
			while (questionAnswer <= 0) {
				question[1] = "+";
				question[2]++;
				questionAnswer = parseFloat(question[0]) + parseFloat(question[2]);
			}
			mQuestion = "(" + question[0] + " " + question[1] + " " + question[2] + ")";
		}
		if (question[3] != ".") {
			if (question[3] == "+")
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[4]);
			else if (question[3] == "-")
				questionAnswerAux = parseFloat(questionAnswer) - parseFloat(question[4]);
			else if (question[3] == "*")
				questionAnswerAux = parseFloat(questionAnswer) * parseFloat(question[4]);
			else if (question[3] == "/")
				questionAnswerAux = parseFloat(questionAnswer) / parseFloat(question[4]);

			if (questionAnswerAux <= 0)
				question[4] = 0;
			while (questionAnswerAux <= 0) {
				question[3] = "+";
				question[4]++;
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[4]);
			}
			questionAnswer = questionAnswerAux;
			mQuestion = "(" + mQuestion + " " + question[3] + " " + question[4] + ")";
		}
		if (question[5] != ".") {
			if (question[5] == "+")
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[6]);
			else if (question[5] == "-")
				questionAnswerAux = parseFloat(questionAnswer) - parseFloat(question[6]);
			else if (question[5] == "*")
				questionAnswerAux = parseFloat(questionAnswer) * parseFloat(question[6]);
			else if (question[5] == "/")
				questionAnswerAux = parseFloat(questionAnswer) / parseFloat(question[6]);

			if (questionAnswerAux <= 0)
				question[6] = 0;
			while (questionAnswerAux <= 0) {
				question[5] = "+";
				question[6]++;
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[6]);
			}
			questionAnswer = questionAnswerAux;
			mQuestion = "(" + mQuestion + " " + question[5] + " " + question[6] + ")";
		}
		if (question[7] != ".") {
			if (question[7] == "+")
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[8]);
			else if (question[7] == "-")
				questionAnswerAux = parseFloat(questionAnswer) - parseFloat(question[8]);
			else if (question[7] == "*")
				questionAnswerAux = parseFloat(questionAnswer) * parseFloat(question[8]);
			else if (question[7] == "/")
				questionAnswerAux = parseFloat(questionAnswer) / parseFloat(question[8]);

			if (questionAnswerAux <= 0)
				question[7] = 0;
			while (questionAnswerAux <= 0) {
				question[7] = "+";
				question[8]++;
				questionAnswerAux = parseFloat(questionAnswer) + parseFloat(question[8]);
			}
			questionAnswer = questionAnswerAux;
			mQuestion += " " + question[7] + " " + question[8];
		}

		for (var count = 0; count <= 4; count++) {
			if (Math.floor((Math.random() * 2)) == 0)
				$("#btn-answer-" + count).html(questionAnswer + Math.floor((Math.random() * questionAnswer) + 1));
			else
				$("#btn-answer-" + count).html(questionAnswer - Math.floor((Math.random() * questionAnswer) + 1));
		};

		correctAnswerPos = parseInt(level) + 1;

		if (level >= 2 && level < 5)
			correctAnswerPos--;
		else if (level == 5)
			correctAnswerPos -= 2;

		correctAnswerPos = Math.floor((Math.random() * correctAnswerPos) + 1);

		$("#btn-answer-" + correctAnswerPos).html(questionAnswer);
		$("#tab-question").html(mQuestion + " = ?");
	}

	function createBasicOperations(level) {
		switch(parseInt(level)) {
		case 1:
			$("#btn-answer-1").css("display", "block");
			$("#btn-answer-2").css("display", "block");
			$("#btn-answer-3").css("display", "none");
			$("#btn-answer-4").css("display", "none");
			createNewQuestion(level);
			break;
		case 2:
			$("#btn-answer-1").css("display", "block");
			$("#btn-answer-2").css("display", "block");
			$("#btn-answer-3").css("display", "none");
			$("#btn-answer-4").css("display", "none");
			createNewQuestion(level);
			break;
		case 3:
			$("#btn-answer-1").css("display", "block");
			$("#btn-answer-2").css("display", "block");
			$("#btn-answer-3").css("display", "block");
			$("#btn-answer-4").css("display", "none");
			createNewQuestion(level);
			break;
		case 4:
			$("#btn-answer-1").css("display", "block");
			$("#btn-answer-2").css("display", "block");
			$("#btn-answer-3").css("display", "block");
			$("#btn-answer-4").css("display", "block");
			createNewQuestion(level);
			break;
		case 5:
			$("#btn-answer-1").css("display", "block");
			$("#btn-answer-2").css("display", "block");
			$("#btn-answer-3").css("display", "block");
			$("#btn-answer-4").css("display", "block");
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
	createBasicOperations(level);
	controlTime.clockStart(0, 200);
	controlTime.clockCount(1);
	createClockPoints();
});
