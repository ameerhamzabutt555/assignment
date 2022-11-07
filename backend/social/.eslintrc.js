module.exports = {
	'env': {
		'node': true,
		'commonjs': true,
		'es2021': true,
		'jest': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 12
	},
	'rules': {
		'indent': [
			'error',
			'tab'
		],
		'linebreak-style': 0,
		'quotes': [
			'error',
			'single',
			{ 'avoidEscape': true}
		],
		'semi': [
			'error',
			'always'
		]
	}
};
