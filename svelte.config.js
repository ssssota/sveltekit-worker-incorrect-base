import adapt from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapt(),
		paths: {
			base: '/sveltekit-worker-incorrect-base',
		}
	}
};

export default config;
