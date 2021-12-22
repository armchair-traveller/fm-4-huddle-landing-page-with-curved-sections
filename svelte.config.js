import preprocess from 'svelte-preprocess'
import stic from '@sveltejs/adapter-static'
import Icons from 'unplugin-icons/vite'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: stic(),
    vite: {
      plugins: [Icons({ compiler: 'svelte' })],
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
