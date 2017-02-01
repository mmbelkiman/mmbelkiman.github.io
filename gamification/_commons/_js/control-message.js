/**
 * @author Marcelo Belkiman(marcelobelkiman[at]gmail[dot]com), Elton Martins(eltonmartinsmarcelino[at]gmail[dot]com)
 *
 * Information: Alert's type: success, info, warning, danger
 */

function showAlertMessage(strMessage, strAlertType) {
	$(document).ready(function() {
		strAlertType = strAlertType.toLowerCase();
		//Verify if exists the alert div
		if ($(".alert").length > 0) {
			$(".alert").remove();	
		}
		
		//Populate label alert's message
		var vLabelMessageAlert = "";
		switch(strAlertType) {
			case "success":
				vLabelMessageAlert = "Success!";
				break;
			case "info":
				vLabelMessageAlert = "Information!";
				break;
			case "warning":
				vLabelMessageAlert = "Attention!";
				break;
			case "danger":
				vLabelMessageAlert = "Error!";
				break;
			default:
				vLabelMessageAlert = "";
		}

		//Create message
		var vMessageAlert = document.getElementById('id-message-' + strAlertType);
		if (vMessageAlert == null && vLabelMessageAlert != "") {		
			$("body").prepend("<div id='id-message-" + strAlertType + "' class='alert alert-" + strAlertType + "'>" + "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" + "<strong>" + vLabelMessageAlert + "</strong> " + strMessage + "</div>");

			if (strAlertType != "warning") {
				$(".alert-" + strAlertType).fadeOut(4000, function() {
					$(this).remove();
				});
			}
		}
	});
}