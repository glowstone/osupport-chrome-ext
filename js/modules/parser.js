define([
	"jquery",
	],
	function() {

		attributes = ["ocontrib", "paypal", "bitcoin", "fdsfdsfs", "fname", "lname"]

		var local_payment_info = function() {
			var author = $("link[rel^=author]").first();
			console.log(author)
			console.log(author.attr("href"));
			console.log(author[0].dataset);
			attributes.map(function(item) {
				var value = author[0].dataset[item];
				console.log(value);			
			});

		}


		/*
		Reads payment information from an external URL in JSON.
		*/
		var external = function() {
			$.get(url, function(data, textstatus, jqxhr) {
				console.log("Got something", data);
			});
		}


		return {
			name: "parser",
			parse: function() {
				local_payment_info()
			}
		}


	// End of Module define function closure.
	}

);