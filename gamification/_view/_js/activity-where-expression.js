$(document).ready(function() {
	//VARS
	var level = getUrlFriendlyVars()["activity-where-expression"];
	var timeLevel = [0, 1500, 1500, 2000, 2500, 3000];
	var maxDigits = 5;
	var actualDigits = 2;
	var answers = {
		level1 : ["+", "-"],
		level2 : ["+", "-"],
		level3 : ["+", "-", "*"],
		level4 : ["+", "-", "*"],
		level5 : ["+", "-", "*", "/"]
	};
	var operation = ["+", "-", "*", "/"];
	var question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];
	var questionAnswer = 0;
	var points = 500;
	var mCorrectAnswer = 0;
	//END VARS

	// CLICKS BUTTONS
	$("#modal-end-activity-continue").on("click", function() {
		window.location.href = window.pathServer + "../home";
	});
	$("#btn-answer-1").on("click", function() {
		if (questionAnswer == "+") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-2").on("click", function() {
		if (questionAnswer == "-") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-3").on("click", function() {
		if (questionAnswer == "*") {
			correctAnswer();
		} else {
			wrongAnswer();
		}
	});
	$("#btn-answer-4").on("click", function() {
		if (questionAnswer == "/") {
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
		var posQuestion = 1;
		var mQuestionBracketOpen = false;
		question = ["0", ".", "0", ".", "0", ".", "0", ".", "0"];

		switch(parseInt(level)) {
		case 1:
			maxPos = answers.level1.length;
			mAnswers = answers.level1;
			break;
		case 2:
			maxPos = answers.level2.length;
			mAnswers = answers.level2;
			break;
		case 3:
			maxPos = answers.level3.length;
			mAnswers = answers.level3;
			break;
		case 4:
			maxPos = answers.level4.length;
			mAnswers = answers.level4;
			break;
		case 5:
			maxPos = answers.level5.length;
			mAnswers = answers.level5;
			break;
		}

		actualDigits = Math.floor((Math.random() * (level * 2)));
		if (actualDigits <= 1)
			actualDigits = 2;
		if (actualDigits > 8)
			actualDigits = 8;

		actualDigits = 4;

		posQuestion = Math.floor(Math.random() * actualDigits);

		question[0] = Math.floor((Math.random() * maxDigits) + 1);
		question[1] = operation[Math.floor((Math.random() * maxPos))];
		question[2] = Math.floor((Math.random() * maxDigits) + 1);
		question[3] = operation[Math.floor((Math.random() * maxPos))];
		question[4] = Math.floor((Math.random() * maxDigits) + 1);
		question[5] = operation[Math.floor((Math.random() * maxPos))];
		question[6] = Math.floor((Math.random() * maxDigits) + 1);
		question[7] = operation[Math.floor((Math.random() * maxPos))];
		question[8] = Math.floor((Math.random() * maxDigits) + 1);
		console.log(question);
		for (var count = 0; count <= actualDigits; count += 3) {
			if (count == 0)
				mCorrectAnswer += parseFloat(eval(parseFloat(question[count]) + question[count + 1] + parseFloat(question[count + 2])));
			else
				mCorrectAnswer += parseFloat(eval(question[count] + parseFloat(question[count + 1])));
		}

		if (posQuestion < 8)
			if (posQuestion % 2 == 0) {
				questionAnswer = question[posQuestion + 1];
				question[posQuestion + 1] = " ? ";
			} else {
				questionAnswer = (question[posQuestion]);
				question[posQuestion] = " ? ";
			}
		else{
			questionAnswer = (question[posQuestion - 1]);
			question[posQuestion - 1] = " ? ";
		}
		
		for (var count = 0; count <= actualDigits; count++) {
			if (count % 2 == 0) {
				if (mQuestionBracketOpen) {
					mQuestion += question[count];
					mQuestion += ") ";
					mQuestionBracketOpen = false;
				} else {
					mQuestion += "(";
					mQuestionBracketOpen = true;
					mQuestion += question[count] + " ";
				}
			} else
				mQuestion += question[count] + " ";

		};

		if (actualDigits % 2 == 0) {
			if (mQuestionBracketOpen) {
				mQuestion += ")";
				mQuestionBracketOpen = false;
			}
		} else {
			mQuestion += question[actualDigits + 1];
		}

		mQuestion += " = " + mCorrectAnswer;

		console.log(question);

		$("#tab-question").html(mQuestion);
	}

	function createWhereExpression(level) {
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
	createWhereExpression(level);
	controlTime.clockStart(0, 200);
	controlTime.clockCount(1);
	createClockPoints();
});
