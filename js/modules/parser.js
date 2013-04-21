define([
	"jquery",
	],
	function() {

		attributes = ["ocontrib", "paypal", "bitcoin", "fname", "lname"]

		var local_payment_info = function() {
			var author = $("link[rel^=author]").first();
			console.log(author)
			console.log(author.attr("href"));
			console.log(author[0].dataset);
			author_obj = {};
			attributes.map(function(item) {
				author_obj[item] = author[0].dataset[item];		
			});
			return author_obj;
		}

		var is_external = function() {
			var author = $("link[rel^=author]").first();
			if (typeof author[0].dataset["ocontrib"] === 'undefined') {


			}
		}


		/*
		Reads payment information from an external URL in JSON.
		*/
		var external = function() {

			$.get("http://www.gooogle.com", function(data, textstatus, jqxhr) {
				console.log("Got something", data);
			});
		}

		var extension_comm = function(author_obj) {
			message = {name: "author-discovered", data: author_obj};
			chrome.runtime.sendMessage(message, function(response) {
				console.log("Response", response);
			});
		}


		return {
			name: "parser",
			parse: function() {
				return local_payment_info();
			},
			extension_comm: function(author_obj) {
				extension_comm(author_obj);
			}
		}


	// End of Module define function closure.
	}

);