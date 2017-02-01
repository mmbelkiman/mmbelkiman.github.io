$(document).ready(function() {
	translate();

	$('#sendEmail').click(function() {

	});

	function clearEmail() {
		$("#inputName").val("");
		$("#inputEmail").val("");
		$("#inputMessage").val("");
		$("#messageSucess").css("display", "block");
		$(".fullscreen-gray").css("display", "none");
	}

	function translate() {
		var mLanguage = activeLanguage.contact;
		$("#contact-message").html(mLanguage["contact-message"]);
		$("#contact-message-portifolio").html(mLanguage["contact-message-portifolio"]);
		$("#contact-message-profile").html(mLanguage["contact-message-profile"]);
		$("#sendEmail-Message").html(mLanguage["sendEmail-Message"]);
	}

});

