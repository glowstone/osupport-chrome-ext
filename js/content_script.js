
requirejs.config(requirejsConfig);
requirejs([
	"jquery", 
	"test2",
	"parser",
	"comm",
	],
	function($, myModule, parser, comm) {


		console.log("background.js is running");
		console.log("My favorite:" + myModule.color);
		console.log("My second favorite color " + myModule.baseColor);

		var embeddedProperties = parser.parseDOM();
		console.log(embeddedProperties);



		if (parser.versionCheck(embeddedProperties).valid) {
			console.log("OSupport enabled content");

			// if (parser.referencedMetadataHost(contentProperties)) {
			// 	console.log("External metadata host");
			// 	return;
			// }

			// console.log("No external metadata host");
			// var oSupportProperties = filterOSupportFields(contentProperties);
			// console.log(oSupportProperties);

			return;
		}

		console.log("Content does not support OSupport");
		return;

		
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


