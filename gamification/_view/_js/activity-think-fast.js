$(document).ready(function() {
	//VARS
	var level = getUrlFriendlyVars()["activity-think-fast"];
	var timeLevel = [0, 400, 400, 500, 600, 650];
	var maxDigits = 5;
	var actualDigits = 2;
	var answers = {
		level1 : ["1", "2"],
		level2 : ["1", "2"],
		level3 : ["1", "2", "3"],
		level4 : ["1", "2", "3"],
		level5 : ["1", "2", "3", "4"]
	};
	var operation = ["+", "-"];
	var question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];
	var questionAnswer = 0;
	var points = 50;
	//END VARS

	// CLICKS BUTTONS
	$("#modal-end-activity-continue").on("click", function() {
		window.location.href = window.pathServer + "../home";
	});
	$("#btn-answer-1").on("click", function() {
		if (questionAnswer == "1") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-2").on("click", function() {
		if (questionAnswer == "2") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-3").on("click", function() {
		if (questionAnswer == "3") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-4").on("click", function() {
		if (questionAnswer == "4") {
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
		var maxPos = 0;
		var mAnswers = [];
		var questionAnswerAux = 0;
		var mQuestion = "";
		question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];

		switch(parseInt(level)) {
		case 1:
			maxPos = answers.level1.length - 1;
			mAnswers = answers.level1;
			break;
		case 2:
			maxPos = answers.level2.length - 1;
			mAnswers = answers.level2;
			break;
		case 3:
			maxPos = answers.level3.length - 1;
			mAnswers = answers.level3;
			break;
		case 4:
			maxPos = answers.level4.length - 1;
			mAnswers = answers.level4;
			break;
		case 5:
			maxPos = answers.level5.length - 1;
			mAnswers = answers.level5;
			break;
		}
		actualDigits = Math.floor((Math.random() * maxDigits) + 1);
		if (actualDigits <= 1)
			actualDigits = 2;

		question[0] = Math.floor((Math.random() * mAnswers[maxPos]) + 1);
		question[1] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
		question[2] = Math.floor((Math.random() * mAnswers[maxPos]) + 1);

		if (actualDigits >= 3) {
			question[3] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[4] = Math.floor((Math.random() * mAnswers[maxPos]) + 1);
		}
		if (actualDigits >= 4) {
			question[5] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[6] = Math.floor((Math.random() * mAnswers[maxPos]) + 1);

		}
		if (actualDigits >= 5) {
			question[7] = operation[Math.floor((Math.random() * operation.length - 1) + 1)];
			question[8] = Math.floor((Math.random() * mAnswers[maxPos]) + 1);

		}

		if (question[1] != ".") {
			if (question[1] == "+")
				questionAnswer = parseInt(question[0]) + parseInt(question[2]);
			else
				questionAnswer = parseInt(question[0]) - parseInt(question[2]);

			if (questionAnswer <= 0)
				question[2] = 0;
			while (questionAnswer <= 0) {
				question[1] = "+";
				question[2]++;
				questionAnswer = parseInt(question[0]) + parseInt(question[2]);
			}

			if (questionAnswer >= mAnswers[maxPos]) {
				question[2] = 0;
				questionAnswer = parseInt(question[0]) + parseInt(question[2]);
			}

			mQuestion = question[0] + " " + question[1] + " " + question[2];
		}

		if (question[3] != ".") {
			if (question[3] == "+")
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[4]);
			else
				questionAnswerAux = parseInt(questionAnswer) - parseInt(question[4]);

			if (questionAnswerAux <= 0)
				question[4] = 0;
			while (questionAnswerAux <= 0) {
				question[3] = "+";
				question[4]++;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[4]);
			}

			if (questionAnswerAux >= mAnswers[maxPos]) {
				question[4] = 0;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[4]);
			}

			questionAnswer = questionAnswerAux;
			mQuestion += " " + question[3] + " " + question[4];
		}

		if (question[5] != ".") {
			if (question[5] == "+")
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[6]);
			else
				questionAnswerAux = parseInt(questionAnswer) - parseInt(question[6]);

			if (questionAnswerAux <= 0)
				question[6] = 0;
			while (questionAnswerAux <= 0) {
				question[5] = "+";
				question[6]++;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[6]);
			}

			if (questionAnswerAux >= mAnswers[maxPos]) {
				question[6] = 0;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[6]);
			}

			questionAnswer = questionAnswerAux;
			mQuestion += " " + question[5] + " " + question[6];
		}

		if (question[7] != ".") {
			if (question[7] == "+")
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[8]);
			else
				questionAnswerAux = parseInt(questionAnswer) - parseInt(question[8]);

			if (questionAnswerAux <= 0)
				question[8] = 0;
			while (questionAnswerAux <= 0) {
				question[7] = "+";
				question[8]++;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[8]);
			}

			if (questionAnswerAux >= mAnswers[maxPos]) {
				question[8] = 0;
				questionAnswerAux = parseInt(questionAnswer) + parseInt(question[8]);
			}

			questionAnswer = questionAnswerAux;
			mQuestion += " " + question[7] + " " + question[8];
		}

		$("#tab-question").html(mQuestion + " = ?");
	}

	function createThinkFast(level) {
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
			$("#btn-answer-4").css("display", "none");
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
		clockPoints = setInterval(function() {
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
	createThinkFast(level);
	controlTime.clockStart(0, 200);
	controlTime.clockCount(1);
	createClockPoints();
});
