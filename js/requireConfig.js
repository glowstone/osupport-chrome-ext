var requirejsConfig = {
	// by default load any module IDs from js/modules
	baseUrl: "/js/modules",
	//optionally specify different paths for specific modules
	paths: {
		lib: "/js/lib",
		"handlebars": "/js/lib/handlebars",
		"jquery": "/js/lib/jquery",
	},
	shim: {
		"handlebars": {
			exports: "Handlebars",
		},
		"chrome_ex_oauth": {
			exports: "ChromeExOAuth"
		},
		"chrome_ex_oauthsimple": {
			exports: "OAuthSimple"
		}
	}
}