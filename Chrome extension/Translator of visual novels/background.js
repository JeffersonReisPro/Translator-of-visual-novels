// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function (tab) {
	
	var arrayScript = ["js/libs/jquery-3.2.1.min.js", "js/create_iframes.js", "js/power_by.js"];

	InjectMultipleScripts(arrayScript);
	
});

//============================================================================================

//Receives messages from content scripts "injected" on target pages defined in manifest.js.
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

	// From content script.
	if (sender.tab) {

		//Send messages to all open pages. (Not necessarily specified.)
		SendMessageTabs(request.method, request.reply);
		console.log("request.method: " + request.method + "\n\n"
			+ "request.reply: " + request.reply + "\n\n" + Date());
	}

});

//Send a message to all tabs
function SendMessageTabs(methodName, replyValue) {
	//Send this message to all tabs
	chrome.tabs.query({}, function (tabs) {
		for (var i = 0; i < tabs.length; i++) {
			//Send the message
			chrome.tabs.sendMessage(tabs[i].id, { method: methodName, reply: replyValue /*<- User question */ });
		}
	});
}

//============================================================================================




//Injects all the scripts that are in an array.
function InjectMultipleScripts(arrayScript) {
	var i;
	for (i = 0; i < arrayScript.length; i++) {
		// No tabs or host permissions needed!
		chrome.tabs.executeScript({
			file: arrayScript[i]
		});
	}
}