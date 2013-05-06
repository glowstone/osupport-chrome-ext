requirejs.config(requirejsConfig);
requirejs([
	"jquery", 
	"test2",
	"handlebars",
	"comm",
	"store",
	"closure",
	"chrome_ex_oauthsimple",
	"chrome_ex_oauth",
	],
	function($, myModule, hb, comm, store, closure, chrome_ex_oauthsimple, chrome_ex_oauth) {
		console.log("Background modules:", $, myModule, hb, comm, chrome_ex_oauthsimple, chrome_ex_oauth);
		console.log("My favorite:" + myModule.color);
		console.log("My second favorite color " + myModule.baseColor);
		console.log(ChromeExOAuth)

		comm.registerListener("visit", function(request, sender) {
			console.log(request);
			store.open(store.add, request);
			return {name: "visit-received"};
		});

		var oauth = ChromeExOAuth.initBackgroundPage({
			'request_url': 'https://www.google.com/accounts/OAuthGetRequestToken' ,
			'authorize_url': 'https://www.google.com/accounts/OAuthAuthorizeToken',
			'access_url': 'https://www.google.com/accounts/OAuthGetAccessToken',
			'consumer_key': '526777043427.apps.googleusercontent.com',
			'consumer_secret': 'pQArGoL1vlrGViJsJ_OwMHxm',
			'scope': 'https://docs.google.com/feeds/',
			'app_name': 'Open Tip'
		});
		console.log(oauth);

		oauth.authorize(function() {
			console.log("Inside authorize")
		});

		// var incrementA = closure.counterA();
		// console.log(incrementA());
		// console.log(incrementA());

		// var incrementB = closure.counterB();
		// console.log(incrementB());
		// console.log(incrementB());

		// var incrementC = closure.counterC();
		// console.log(incrementC());
		// console.log(incrementC());

	
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





