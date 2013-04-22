requirejs.config(requirejsConfig);
requirejs([
	"jquery", 
	"test2",
	"handlebars",
	"comm",
	"store",
	],
	function($, myModule, hb, comm, store) {
		console.log("Background modules:", $, myModule, hb, comm);
		console.log("My favorite:" + myModule.color);
		console.log("My second favorite color " + myModule.baseColor);

		comm.registerListener("visit", function(request, sender) {
			console.log(request);
			store.open(store.add, request);
			return {name: "visit-received"};
		});

	
	// End of requireJS function
	}
);




// chrome.browserAction.onClicked.addListener(function(tab) {
// 	// Only works if browser action does not have a popup
// 	console.log(tab);
// });

// // Create a simple text notification:
// var notification = webkitNotifications.createNotification(
//   '48.png',  // icon url - can be relative
//   'Hello!',  // notification title
//   'Lorem ipsum...'  // notification body text
// );
// notification.show();





