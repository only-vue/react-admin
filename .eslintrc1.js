module.exports = {
	"env": {
		"browser": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	"parser": "babel-eslint",
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		// "ecmaVersion": 11,
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		'no-tabs': 0,
		'no-mixed-spaces-and-tabs': 0,
		'indent': ["off", "tab"],
		'no-trailing-spaces': 0
	}
};
