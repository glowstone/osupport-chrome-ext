
requirejs.config(requirejsConfig);
requirejs(["../lib/jquery", "test2"],
	function($, myModule) {
		console.log("background.js is running");
		console.log("My favorite:" + myModule.color);
		console.log("My second favorite color " + myModule.baseColor);
	}
);




// (function() {
// 	//"use strict";

// 	console.log("Hello Content!");

// 	var find_page_info = function() {
// 		return {name: "Dalton Hubble", email: "dhubble@mit.edu"};
// 	}

// 	var is_page_ocontrib = function() {
// 		return true;
// 	}

// 	chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
// 		console.log(response.farewell);
// 	});

// 	chrome.runtime.onMessage.addListener(
// 		function(request, sender, sendResponse) {
// 			if (request.greeting == "hola") {
// 				console.log("Received hola")
// 				sendResponse({farewell: "adios"});
// 			}
// 		}
// 	)

// 	if (is_page_ocontrib()) {
// 		var info = find_page_info();
// 		console.log(info);
		
// 	}


// })();

