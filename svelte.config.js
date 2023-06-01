import adapter from "@sveltejs/adapter-static";

//https://kit.svelte.dev/docs/single-page-apps

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({ fallback: "200.html" }),
    prerender: {
      entries: [],
    },
  },
};

export default config;
