//This file injects a watermark into the specified page. 
//This tells the user that this page is being manipulated by this "extension".

//Start 
$(document).ready(function () {

	//Creat watermark
	var img = $("<img>"); //Equivalent: $(document.createElement("img"))
	//Set ID
	img.attr("id", "dynamicImage");
	//Sets path to image
	var imageURL = chrome.runtime.getURL("img/logo.png");
	img.attr("src", imageURL);
	//Shake effect
	//https://elrumordelaluz.github.io/csshake/
	img.attr("class", "shake-little shake-freeze");
	//Add the image in the body of the page
	img.appendTo("body");

	//CSS
	img.css({
		position: "absolute",
		height: "50px",
		left: "5px",
		bottom: "5px",
		margin: "3px",
		"z-index": 99999
	});

	//Click in Watermark
	img.click(function () {
		alert(chrome.runtime.getManifest().name + " inject a script from this page:\n\n" + window.location.href);
		img.hide();
	});

	//================================================================================
	//================================================================================
	//================================================================================

	//https://stackoverflow.com/questions/3261900/how-to-identify-browser-tab-closing-using-javascript-or-jquery
	//https://stackoverflow.com/questions/16560630/jquery-prompt-user-when-attempting-to-refresh-or-close-browser
	//It is not recommended to check if the user wants to close the page
	/*
	//Checks if the current link contains the keyword
	if (window.location.href.includes("kakko.pandorabots.com") == false) {
		//Checks whether the page will be updated or closed
		window.onbeforeunload = function () {
			return "Are you sure you want to close the window?";
		}
	}
	*/


});
