import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	// Consult https://kit.svelte.dev/docs/adapters#supported-environments-node-js for more information about ndoejs as deployment environment
	kit: {
		adapter: adapter({ out: 'build' })
	}
};

export default config;
