import preprocess from "svelte-preprocess";
import stic from "@sveltejs/adapter-static";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: stic(),
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
