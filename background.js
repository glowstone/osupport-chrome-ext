var array = chrome.extension.getViews();
console.log(array);


chrome.runtime.onMessage.addListener(
	function(request, sender, sendResponse) {
		console.log("background received message");
		console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
		if (request.greeting == "hello") {
			sendResponse({farewell: "goodbye"});
		}

		chrome.tabs.getSelected(null, function(tab) {
			chrome.tabs.sendMessage(tab.id, {greeting: "hola"}, function(response) {
				console.log(response.farewell);
			});
		})
	}
);


chrome.browserAction.onClicked.addListener(function(tab) {
	// Only works if browser action does not have a popup
	console.log(tab);
});

// Create a simple text notification:
var notification = webkitNotifications.createNotification(
  '48.png',  // icon url - can be relative
  'Hello!',  // notification title
  'Lorem ipsum...'  // notification body text
);
notification.show();



