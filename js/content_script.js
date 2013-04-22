
requirejs.config(requirejsConfig);
requirejs([
	"jquery", 
	"test2",
	"parser",
	"comm",
	],
	function($, myModule, parser, comm) {
		//"use strict";


		console.log("background.js is running");
		console.log("My favorite:" + myModule.color);
		console.log("My second favorite color " + myModule.baseColor);

		var embeddedProperties = parser.parseDOM();
		console.log(embeddedProperties);



		if (parser.versionCheck(embeddedProperties).valid) {
			console.log("OSupport enabled content");

			if (parser.referencedMetadataHost(embeddedProperties)) {
				console.log("External metadata host");
				return;
			}

			console.log("No external metadata host");
			var oSupportProperties = parser.filterOSupportFields(embeddedProperties);
			console.log(oSupportProperties);
			var replyFromExtension = function(response) {
				console.log("Response received", response);
			}
			oSupportProperties["name"] = "visit"
			comm.sendToExtension(oSupportProperties,replyFromExtension);
			return;
		}

		console.log("Content does not support OSupport");
		return;

		
	}
);
