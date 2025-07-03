import js from '@eslint/js';
import prettier from 'eslint-config-prettier';

export default [
	js.configs.recommended,
	{
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		rules: {
			'semi': ['error', 'always'], // Use semicolons
			'quotes': ['error', 'single'], // Use single quotes
			'indent': ['error', 'tab'], // Use tabs for indentation
			'no-mixed-spaces-and-tabs': 'error', // Disallow mixing spaces and tabs
			'no-trailing-spaces': 'error', // Disallow trailing spaces at end of lines
			'no-multiple-empty-lines': ['error', { max: 2 }], // Max 2 consecutive empty lines
			'eqeqeq': ['error', 'always'], // Use === instead of ==
			'prefer-const': 'error', // Prefer const whenever possible
			'object-shorthand': ['error', 'always'], // Use object shorthand syntax
			'arrow-spacing': ['error', { before: true, after: true }], // Space before and after arrow (=>)
			'prefer-template': 'error', // Use template literals
			'no-eval': 'error',
			'no-implied-eval': 'error',
			'no-return-await': 'warn',
			'no-useless-catch': 'warn',
			'no-unused-vars': ['warn', { args: 'none' }],
			'no-shadow': 'warn', // Avoid variable shadowing in inner scopes
			'no-undef': 'warn'
		},
	},
	prettier,
];
