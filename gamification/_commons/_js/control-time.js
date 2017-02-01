$(document).ready(function() {

	window.controlTime = {
		clockTimeToUpdate : 0,
		clockTimeToSound : 0,
		clockTimeTotal : 0,
		clockTimeTotalStart : 0,
		clockProgressWeight : 0,
		clockInterval : 0,
		clockPause : false,
		clockStop : function() {
			clearInterval(controlTime.clockInterval);
		},
		clockRestart : function() {
			clearInterval(controlTime.clockInterval);
			$("#clockTime").html(controlTime.clockTimeTotalStart);
			$("#clockTime").css("width", "0%");

			controlTime.clockTimeTotal = controlTime.clockTimeTotalStart;
			controlTime.clockProgressWeight = (100 / controlTime.clockTimeTotal);

			controlTime.clockStart(controlTime.clockTimeToUpdate, controlTime.clockTimeToSound);
		},
		clockStart : function(timeToUpdate, timeToSound) {
			controlTime.clockTimeToUpdate = timeToUpdate;
			controlTime.clockTimeToSound = timeToSound;

			controlTime.clockTimeTotal = parseInt($("#clockTime").html().trim());
			controlTime.clockTimeTotalStart = controlTime.clockTimeTotal;
			controlTime.clockProgressWeight = (100 / controlTime.clockTimeTotal);

			controlTime.clockInterval = setInterval(function() {
				if (!controlTime.clockActivityPause) {
					var time = parseInt($("#clockTime").html().trim());
					time = time - 1;

					if (time >= 0) {
						//hurry Up sound
						if (controlTime.clockTimeToSound > 100) {
							if (time == controlTime.clockTimeToSound) {
								soundHandler.playHurryUp();
							}
						} else {
							if (time <= controlTime.clockTimeToSound && (time % 2) == 0) {
								soundHandler.playHurryUp();
							}
						}
						$("#clockTime").html(time);

						if (time == 0) {
							$("#clockTime").css("width", "100%");
							soundHandler.playTimeEnd();
							clearInterval(window.clockPoints);
							controlTime.clockStop();
							$("#modal-end-activity-cause").html("O tempo acabou");
							$("#modal-end-activity-points").html($("#activitie-points-value"));
							$('.modal-end-activity').modal('show');

						} else {
							var barSize = controlTime.clockProgressWeight * (controlTime.clockTimeTotal - time);
							barSize = barSize + '%';
							$("#clockTime").css("width", barSize);
						}
					} else {
						$("#clockTime").html("0");
						$("#clockTime").css("width", "100%");
						soundHandler.playTimeEnd();
						clearInterval(controlTime.clockInterval);
					}
				}
			}, timeToUpdate);

		},
		clockCount : function(startCount) {
			var time = "";
			$(".screen-count").css("display", "block");
			controlTime.clockActivityPause = true;
			timerClockStart = setInterval(function() {

				if (time == "") {
					time = 3;
					soundHandler.playClock0();
					$(".screen-count").html(time);
				} else {
					time = parseInt(time);

					if (time >= 0) {
						time = time - 1;

						if (time > 0) {
							soundHandler.playClock0();
							$(".screen-count").html(time);
						} else {
							soundHandler.playClock0();
							$(".screen-count").html("VAI !");
							time--;
						}

					} else {
						soundHandler.playStart();
						clearInterval(timerClockStart);
						$(".screen-count").css("display", "none");
						controlTime.clockActivityPause = false;
					}
				}
			}, 500);
		}
	};
});
