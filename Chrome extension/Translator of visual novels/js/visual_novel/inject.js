//==============================================================
//==================== SCRIPT TO EXTENSION =====================
//==============================================================

var originalText = "originalText";

//Send message to background
function SendMessageBackground(myMethod, msn) {
	//Send a question to background
	chrome.runtime.sendMessage({ method: myMethod, reply: msn });
}


//==============================================================
//==================== GAME SCRIPT =============================
//==============================================================

//Elements that will have their words replaced
var elementPicker = ["#tyrano_base > div.layer.message0_fore.layer_fore > div.message_inner > p"]
//Checks if the text box is receiving some text.
var waitTimeForTyping = 2;
var waitTimeForTypingMax = 2;
//Text to wait for translation
var TranslatingTex = "Translating...";

//Start
$(document).ready(function () {

	Start();

	//Update
	setInterval(function () { Update() }, 500);

});


function Start() {

	waitTimeForTyping = waitTimeForTypingMax;


	for (var i = 0; i < elementPicker.length; i++) {
		//https://stackoverflow.com/questions/15657686/jquery-event-detect-changes-to-the-html-text-of-a-div
		//Detect changes to the html/text of a div
		$("body").on('DOMSubtreeModified', elementPicker[i], function () {
			//Checks if the text box is receiving some text.
			waitTimeForTyping = waitTimeForTypingMax;
		});
	}

}


function Update() {

	waitTimeForTyping -= 0.05;

	if (waitTimeForTyping <= 0 && $(elementPicker[0]).text() != TranslatingTex)
	{
		//Take the original text
		var myText = $(elementPicker[0]).text();

		//Send message to be translated
		SendMessageBackground(originalText, myText);

		//Text to wait for translation
		$(elementPicker[0]).text(TranslatingTex);
		
		//It resets the time.
		waitTimeForTyping = waitTimeForTypingMax;
	}

}
