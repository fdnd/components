import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      $assets: './src/assets',
      $styles: './src/lib/styles'
    }
  }
};

export default config;
