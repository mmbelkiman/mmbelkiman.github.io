$(document).ready(function() {
	var achievementsArray = {
		name : ["Conquista 1", "Conquista 2", "Conquista 3", "conquista 4", "conquista 5", "conquista 6", "conquista 7", "conquista 8", "conquista 9"],
		icon : ["fa fa-star", "fa fa-hand-spock-o", "fa fa-odnoklassniki", "fa fa-bell", "fa fa-bomb", "fa fa-commenting", "fa fa-area-chart", "fa fa-coffee", "fa fa-fire"],
		description : ["Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste", "Descrição de teste"],
		have : [0, 1, 0, 0, 0, 0, 0, 1, 1]
	};

	var activitiesArray = {
		name : ["Operações Básicas", "Pense Rápido", "Qual é a expressão?", "XYZ"],
		// "Criptologia",
		// "Cartesiano"],
		icon : ["fa fa-graduation-cap", "fa fa-dashboard", "fa fa-puzzle-piece", "fa fa-table", "fa fa-unlock-alt", "fa fa-line-chart"],
		description : ["Responda perguntas utilizando as quatro operações básicas de matématica. <br/> Você perde assim que errar uma resposta.", "Responda rapidamente perguntas de matematica basica. <br/> Você perde assim que errar uma resposta.", "Você possui os valores e o resultado, descubra qual operação foi utilizada. <br/> Você perde assim que errar uma resposta.", "Você possui 3 valores, resolva diferentes operações com eles. <br/> Você perde assim que errar uma resposta.", "Realize operações matématicas para descobrir qual é a palavra. <br/> Você perde assim que errar uma resposta.", "Através do plano cartesiano é possivel achar palavras, descubra suas posições. <br/> Você perde assim que errar uma resposta."],
		url : ["activity-basic-operations", "activity-think-fast", "activity-where-expression", "activity-xyz", "activity-cryptology", "activity-cartesian"]
	};

	// CLICKS BUTTONS
	$("#modal-activities-cancel").on("click", function() {
		$('.modal-activities').modal('hide');
	});
	$("#modal-achievement-continue").on("click", function() {
		$('.modal-achievement').modal('hide');
	});
	$("#btn-exit").on("click", function() {
		logout();
	});
	$("#modal-activities-start").on("click", function() {
		var idLevel = $(".modal-activities-level").html().trim();
		var idActivitie = $('.modal-activities').find(".modal-activities-title").attr("id").trim();

		window.location.href = window.pathServer + activitiesArray.url[idActivitie] + "/" + idLevel;
	});
	function updateDynamicButtons() {
		$(".tab-activities").off("click.tabClick");
		$(".tab-activities").on("click.tabClick", function() {
			if ($(this).parent().find(".tab-sub-activities-group").css("display") == "none") {
				$(this).parent().find(".tab-sub-activities-group").fadeIn("600");
			} else {
				$(this).parent().find(".tab-sub-activities-group").fadeOut("600");
			}
		});

		$(".achievement-icon").off("click.achievementClick");
		$(".achievement-icon").on("click.achievementClick", function() {
			var idAchievement = $(this).parent().attr("id").split("-")[1];

			updateModalAchievement(idAchievement);
		});

		$(".tab-sub-activities").off("click.subActivities");
		$(".tab-sub-activities").on("click.subActivities", function() {
			var idActivities = $(this).attr("id").split("-")[3];
			var idLevel = $(this).attr("id").split("-")[2];

			updateModalActivities(idLevel, idActivities);
		});

	}

	// END : CLICKS

	// FRONT-END FUNCTIONS
	function updateModalActivities(idLevel, idActivities) {
		$('.modal-activities').find(".modal-activities-title").html(activitiesArray.name[idActivities]);
		$('.modal-activities').find(".modal-activities-title").attr("id", idActivities);
		$('.modal-activities').find(".modal-activities-description").html(activitiesArray.description[idActivities]);

		$('.modal-activities').find(".modal-activities-level").html(idLevel);

		$('.modal-activities').modal('show');
	}

	function updateModalAchievement(idAchievement) {
		$('.modal-achievement').find(".modal-achievement-title").html(achievementsArray.name[idAchievement]);
		$('.modal-achievement').find(".modal-achievement-description").html(achievementsArray.description[idAchievement]);

		if (achievementsArray.have[idAchievement] == 0) {
			$('.modal-achievement').find(".modal-achievement-nohave").css("display", "block");
			$('.modal-achievement').find(".modal-achievement-have").css("display", "none");
		} else {
			$('.modal-achievement').find(".modal-achievement-nohave").css("display", "none");
			$('.modal-achievement').find(".modal-achievement-have").css("display", "block");
		}

		$('.modal-achievement').modal('show');
	}

	function createAchievements() {
		var mClone;
		var count = 0;

		achievementsArray.name.forEach(function(mAchievements) {
			mClone = $("#achievement-").clone();
			mClone.attr("id", "achievement-" + count);
			mClone.find(".achievement-name").html(mAchievements);
			mClone.find(".achievement-icon").addClass(achievementsArray.icon[count]);
			if (achievementsArray.have[count] == 1) {
				mClone.find(".achievement-icon").addClass("have");
			}

			mClone.css("display", "block");

			$("#achievements-row").append(mClone);

			count++;
		});

		updateDynamicButtons();
	}

	function createRanking() {
		var count = 1;
		var mClone;
		var rankingNames = ["Fulano Da Silva", "Ciclano Alves", "Beltrano Vasconselos", "Juanita Esteves albuguerque", "Aladin"];

		for ( count = 1; count <= 10; count++) {
			mClone = $("#ranking-").clone();
			mClone.attr("id", "ranking-" + count);
			mClone.find(".ranking-position").html(count + "º");

			if (rankingNames[count] == undefined) {
				mClone.find(".ranking-name").html("-");
			} else {
				mClone.find(".ranking-name").html(rankingNames[count]);
			}
			mClone.css("display", "block");
			$("#tab-ranking").append(mClone);
		};
	}

	function createActivities() {
		var mClone;
		var count = 0;

		activitiesArray.name.forEach(function(mActivitie) {
			mClone = $("#activities-").clone();
			mClone.attr("id", "activities-" + count);
			mClone.find(".activities-name").html(mActivitie);
			mClone.find(".activities-icon").addClass(activitiesArray.icon[count]);
			mClone.css("display", "block");

			mClone.find("#sub-activitie-1-").attr("id", "sub-activitie-1-" + count);
			mClone.find("#sub-activitie-2-").attr("id", "sub-activitie-2-" + count);
			mClone.find("#sub-activitie-3-").attr("id", "sub-activitie-3-" + count);
			mClone.find("#sub-activitie-4-").attr("id", "sub-activitie-4-" + count);
			mClone.find("#sub-activitie-5-").attr("id", "sub-activitie-5-" + count);

			$("#tab-activities").append(mClone);

			count++;
		});

		updateDynamicButtons();
	}

	// END: FRONT-END FUNCTIONS

	// BACK-END FUNCTIONS
	function logout() {
		showAlertMessage("Saindo...Xau Xau ^-^", "info");
		window.location.href = window.pathServer + "index.php";
	}

	// END : BACK-END FUNCTIONS

	// CALLING ON START PAGE
	createActivities();
	createRanking();
	createAchievements();
});
