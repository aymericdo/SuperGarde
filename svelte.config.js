import preprocess from 'svelte-preprocess'
// import adapter from '@sveltejs/adapter-auto'
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/kit/vite'

console.log(process.env.NODE_ENV);

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: [
    vitePreprocess(),
    preprocess({
      postcss: true,
    }),
  ],

  kit: {
    paths: {
      base: '/super-garde',
      relative: false,
    },
    adapter: adapter(),
  },
}

export default config
