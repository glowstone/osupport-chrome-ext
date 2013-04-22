define([
	"jquery",
	],
	function() {


		var db = null;
		var DB_VERSION = 1;
		var objectStoreNames = ["visits"]


		/*
		* Initializes a persistent indexedDB or upgrades the existing persistent
		indexedDb by beginning a 'versionchange' transaction.
		Called while opening an indexedDb if the database version is greater than
		the existing one in persistent storage. 
		*/
		var upgradeDatabase = function(event) {
			console.log("onupgradeneeded", event);
			db = event.target.result;

			// remove the store if it exists
	    if (db.objectStoreNames.contains("visits")) {
	      db.deleteObjectStore("visits");
	    }

			// Create an objectStore to hold info about visits
			var visitStore = db.createObjectStore("visits", {keyPath: "timeStamp"});
		}


		var open = function(callback) {
			console.log(mystring);
			console.log(window);
			console.log(this);
			console.log(db);
			var that = this;
			console.log(indexedDB);

			// Create or open the database, returns IDBOpenDBRequest object
			var request = indexedDB.open("content", DB_VERSION);
			// Initialize or upgrade indexedDb with necessary Object Stores
			request.onupgradeneeded = upgradeDatabase;
			request.onerrror = function(event) {
				console.log("Error openning indexedDB", event);
			}
			request.onsuccess = function(event) {
				console.log(this);
				console.log(that);
				console.log(db);
				console.log("Successfully openned indexedDB", event);
				that.db = event.target.result;
				callback();
			}
		}

		var performTransaction = function() {
			console.log(db);
			// Start a transcation, returns a IDBRequest object
			// var store = db.transaction(["content"], "readwrite").objectStore("visits");
			// var request = store.put({name: "demo"});
			// request.onsuccess = function() {
			// 	console.log("Successful write");
			// }
		}

		var add = function() {
			console.log(db);
		}

		return {
			open: function(callback) {
				console.log(this);
				var that = this;
				db = "dsadsadas"
				// Create or open the database, returns IDBOpenDBRequest object
				var request = indexedDB.open("content", DB_VERSION);
				// Initialize or upgrade indexedDb with necessary Object Stores
				request.onupgradeneeded = upgradeDatabase;
				request.onerrror = function(event) {
					console.log("Error openning indexedDB", event);
				}
				request.onsuccess = function(event) {
					console.log("Successfully openned indexedDB", event);
					console.log(event);
					that.db = event.target.result;
					console.log(this);
					console.log(that);
					console.log(that.db);
					callback();
				}
			},
			performTransaction: performTransaction,
			add: add,
			test: function() {
					console.log(db);
			}
		}

	// End of Module define function closure.
	}
);

		// request.onsuccess = function(event) {
			// 	console.log(request.result);
			// 	db = request.result;
			// 	console.log("Yay!");

			// 	var transaction = db.transaction(["posts"], "readwrite");

			// 	transaction.oncomplete = function(event) {
			// 		console.log("All done!");
			// 	}

			// 	transaction.onerror = function(event) {
			// 		console.log("Some error during transaction");
			// 	}

			// 	var postStore = transaction.objectStore("posts");
			// 	console.log(postStore);
			// 	var operation = postStore.add({ssn: "444-44-4444", name: "Fred", email: "fred@gmail.com"});

			// 	operation.onsuccess = function(event) {
			// 		console.log("Add was successful");
			// 		console.log(event);
			// 		console.log(operation);
			// 	}

			// 	operation.onerror = function(event) {
			// 		console.log("Add operation was not successful");
			// 		console.log(event);
			// 	}

			// }

			
			// request.onerror = function(event) {
			// 	console.log(event);
			// 	console.log("Boo!");
			// }