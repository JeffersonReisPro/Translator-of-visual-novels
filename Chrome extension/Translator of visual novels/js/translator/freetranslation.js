document.body.style.background = "#e1e1e1";
//==============================================================
//==================== SCRIPT TO EXTENSION =====================
//==============================================================
var translatedText = "translatedText";
var originalText = "originalText";

//Check if you received any messages
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	if (request.method == originalText) {
		//take the text to be translated
		var text = request.reply;
		//
		SendQuestionPage(text);
	}

});


//Send message to background
function SendMessageBackground(myMethod, msn) {
	//Send a question to background
	chrome.runtime.sendMessage({ method: myMethod, reply: msn });
}


//==============================================================
//==================== SCRIPT PAGE =====================
//==============================================================

//Element where the translation will be displayed
//element of translation output
var elementTranslationOutputID = "#translated-text";

//text input there be translated
var elementTranslationInputID = "#source-text";


//Send question to page
function SendQuestionPage (myInput) {

	//text input there be translated
	$(elementTranslationInputID).val(myInput);

	//Element where the translation will be displayed
	var element = $(elementTranslationOutputID);

	//Simulate pressing the translation button
	$("#translate-text-button").trigger('click');
	//
	element.val("#");

	//Update
	var myVar = setInterval(function () {	

		//Check if there is any translation ready
		if (element.val().length >= 5) {

			//Translated text
			var myOutput = element.val();
			//Send the translation to the background.js
			SendMessageBackground(translatedText, myOutput);
			
			//Stop update
			clearInterval(myVar);
		}
	}, 1000);

}// close SendQuestionPage()
