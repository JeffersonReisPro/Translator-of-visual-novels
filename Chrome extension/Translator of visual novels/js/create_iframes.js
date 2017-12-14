//==============================================================
//==================== SCRIPT TO GAME PAGE =====================
//==============================================================

//Start 
$(document).ready(function () {


});


//Game page content field
var gamePageContentID = ".formatted_description.user_formatted";


//======================= Creat iframe ========================================
var urlList = [
	//Translator
	"https://www.freetranslation.com/",
	//TTS Vocalware
	"https://www.vocalware.com/index/demo",
];

//Create Iframes on the game page
for (i = 0; i < urlList.length; i++) {
	//Create the iframe
	var myIframe = $("<iframe>");
	//Set URL
	myIframe.attr("src", urlList[i]);
	//CSS
	myIframe.css({
		width: "100%",
		height: "600px",
		"margin-top": "3%",
		"margin-bottom": "3%",
	});

	//Adds the iframe to the page
	myIframe.appendTo(gamePageContentID);
}






