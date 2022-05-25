//import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// Markdoc
import preprocessMarkdoc from 'svelte-markdoc'
import markdocConfig from './markdoc.config.js'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.markdoc'],
	preprocess: {
	  markup: preprocessMarkdoc(markdocConfig)
	},
	kit: {
		adapter: adapter()
	},

};

export default config;
