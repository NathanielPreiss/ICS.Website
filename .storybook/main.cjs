var path = require('path');

module.exports = {
	stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|svelte)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'@storybook/addon-svelte-csf'
	],
	framework: '@storybook/svelte',
	core: {
		builder: '@storybook/builder-vite'
	},
	svelteOptions: {
		preprocess: import('../svelte.config.js').preprocess
	},
	async viteFinal(config) {
		// Sveltekit alias aren't imported automatically, we need to resolve them
		config.resolve.alias = {
			$app: path.resolve('./.svelte-kit/runtime/app'),
			$lib: path.resolve(__dirname, '../src/lib')
		};

		return config;
	}
};
