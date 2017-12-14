//==============================================================
//==================== SCRIPT TO EXTENSION =====================
//==============================================================
var translatedText = "translatedText";

////Check if you received any messages
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	if (request.method == translatedText) {
		//Get the translated text
		var text = request.reply;
		//
		StartSpeak(text);
	}

});

//==============================================================
//==================== SCRIPT TO TTS =====================
//==============================================================

function StartSpeak(input) {
	var dec = input;
	//It defines what the "textarea" will have, that is, what will be said.
	$("#tts_input").val(dec);
	$("#tts_input").text(dec);

	//Wait for some time until the text is inserted into the text compose
	var setIntervalDelay = setInterval(function () {

		//https://stackoverflow.com/questions/13290456/how-to-call-functions-in-the-original-pagetab-in-chrome-extensions
		//Simulates the push of the button to speak.				
		location.href = "javascript:playAudio(); void 0";

		clearInterval(setIntervalDelay);
	}, 500);
}
