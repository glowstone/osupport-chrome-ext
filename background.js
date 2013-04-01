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


(function() {
	var db = null;
	var open = function() {
		var version  = 1;
		console.log(window);
		console.log(indexedDB);
		// Create or open the database, returns IDBOpenDBRequest
		var request = indexedDB.open("testing", version);

		request.onsuccess = function(event) {
			console.log(request.result);
			db = request.result;
			console.log("Yay!");

			var transaction = db.transaction(["posts"], "readwrite");

			transaction.oncomplete = function(event) {
				console.log("All done!");
			}

			transaction.onerror = function(event) {
				console.log("Some error during transaction");
			}

			var postStore = transaction.objectStore("posts");
			console.log(postStore);
			var operation = postStore.add({ssn: "444-44-4444", name: "Fred", email: "fred@gmail.com"});

			operation.onsuccess = function(event) {
				console.log("Add was successful");
				console.log(event);
				console.log(operation);
			}

		}

		request.onupgradeneeded = function(event) {
			console.log("Upgrading");
			db = request.result;

			const postData = [
				{ssn: "444-44-4444", name: "Fred", email: "fred@gmail.com"},
				{ssn: "555-55-5555", name: "George", email: "george@gmail.com"}
			];

			if (db.version == 1) {
				// Create an objectStore to hold info about visits
				var objectStore = db.createObjectStore("posts", {keyPath: "ssn"});

				objectStore.createIndex("name", "name", {unique: false});
				objectStore.createIndex("email", "email", {unique: true});
			}

			// for (var i in postData) {
			// 	objectStore.add(postData[i]);
			// }
		}

		request.onerror = function(event) {
			console.log(event);
			console.log("Boo!");
		}

	}
	open();

})();





