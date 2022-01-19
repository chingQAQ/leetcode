module.exports = {
	'env': {
		browser: true,
		es2021: true,
		jest: true,
		commonjs: true
	},
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended'
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		ecmaVersion: 12
	},
	'plugins': ['@typescript-eslint'],
	'rules': {
		'indent': ['error', 'tab'],
		'curly': ['error', 'all'],
		'dot-location': ['error', 'property'],
		'grouped-accessor-pairs': ['error', 'getBeforeSet'],
		'no-caller': 'error',
		'array-bracket-newline': [
			'error',
			{ multiline: true, minItems: 5 }
		],
		'array-element-newline': [
			'error',
			'consistent',
			{ multiline: true, minItems: 5 }
		],
		'array-bracket-spacing': ['error', 'never'],
		'block-spacing': 'error',
		'comma-dangle': [
			'error',
			'only-multiline',
			{ functions: 'never' }
		],
		'comma-spacing': [
			'error',
			{ before: false, after: true }
		],
		'comma-style': ['error', 'last'],
		'computed-property-spacing': [
			'error',
			'never',
			{ enforceForClassMembers: true }
		],
		'func-call-spacing': ['error', 'never'],
		'function-call-argument-newline': ['error', 'consistent'],
		'function-paren-newline': ['error', 'consistent'],
		'implicit-arrow-linebreak': ['error', 'beside'],
		'quotes': [
			'error',
			'single',
			{ avoidEscape: true }
		],
		'semi': ['error', 'always'],
		'key-spacing': [
			'error',
			{ beforeColon: false, afterColon: true, mode: 'strict' }
		],
		'keyword-spacing': [
			'error',
			{ before: true, after: true }
		],
		'lines-between-class-members': [
			'error',
			'always',
			{ exceptAfterSingleLine: true }
		],
		'max-params': [
			'error',
			10
		],
		'max-statements-per-line': [
			'error',
			{ max: 2 }
		],
		'newline-per-chained-call': [
			'error',
			{ ignoreChainWithDepth: 2 }
		],
		'no-lonely-if': 'error',
		'no-multi-spaces': [
			'error',
			{ ignoreEOLComments: true }
		],
		'no-multiple-empty-lines': [
			'error',
			{ max: 1, maxEOF: 0, maxBOF: 0 }
		],
		'no-tabs': [
			'error',
			{ allowIndentationTabs: true }
		],
		'no-trailing-spaces': 'error',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-newline': [
			'error',
			{ consistent: true }
		],
		'object-curly-spacing': ['error', 'always'],
		'one-var': ['error', 'never'],
		'one-var-declaration-per-line': ['error', 'always'],
		'operator-linebreak': ['error', 'before'],
		'prefer-exponentiation-operator': 'error',
		'padded-blocks': [
			'error',
			'never',
			{ allowSingleLineBlocks: true }
		],
		'quote-props': [
			'error',
			'consistent-as-needed',
			{ numbers: true, keywords: true }
		],
		'semi-spacing': [
			'error',
			{ before: false, after: true }
		],
		'semi-style': ['error', 'last'],
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{ anonymous: 'always', named: 'never', asyncArrow: 'always' }
		],
		'space-in-parens': ['error', 'never'],
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'switch-colon-spacing': 'error',
		'template-tag-spacing': 'error',
		'unicode-bom': ['error', 'never'],
		'arrow-body-style': 'error',
		'arrow-parens': ['error', 'as-needed'],
		'arrow-spacing': [
			'error',
			{ before: true, after: true }
		],
		'generator-star-spacing': ['error', 'before'],
		'no-duplicate-imports': 'error',
		'no-new-symbol': 'error',
		'no-useless-computed-key': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'prefer-const': ['off'],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'prefer-template': 'error',
		'rest-spread-spacing': 'error',
		'template-curly-spacing': 'error',
		'yield-star-spacing': ['error', 'after'],
		'padding-line-between-statements': [
			'error',
			{ blankLine: 'always', prev: '*', next: 'return' },
			{
				blankLine: 'always',
				prev: '*',
				next: [
					'if', 'function', 'for', 'do', 'while'
				]
			},
			{
				blankLine: 'always',
				prev: [
					'if', 'function', 'for', 'do', 'while'
				],
				next: '*'
			}
		]
	}
};
