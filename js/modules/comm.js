define([
	"jquery",
	],
	function($) {

		var sendToExtension = function(message, callback) {
			chrome.runtime.sendMessage(message, callback);
		}


		/**
		The message name that should be listened for and a callback
		function to be invoked whenever a message with the given name is
		received. Callback function should take 
		*/
		var registerListener = function(messageName, callback) {
			chrome.runtime.onMessage.addListener(
				function(request, sender, sendResponse) {
					console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
					if (request.name === messageName) {
						var result = callback(request, sender);
						sendResponse(result);
					}	
					
				}
			);


		}

		var setup_listener = function() {
			chrome.runtime.onMessage.addListener(
				function(request, sender, sendResponse) {
					console.log("background message received");
					console.log(sender.tab ? "from a content script:" + sender.tab.url : "from the extension");
					if (request.name === "author-discovered") {
						sendResponse({name: "author-received", data: undefined});
					}
				}
			);
		}

		return {
			setup_listener: setup_listener,
			registerListener: registerListener,
			sendToExtension: sendToExtension,
		}

	}
);