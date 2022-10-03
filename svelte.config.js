import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	generate: 'ssr',
	kit: {
		adapter: adapter()
	}
};

export default config;
