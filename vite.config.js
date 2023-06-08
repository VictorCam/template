import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  plugins: [
    sveltekit(),
    webfontDownload([]), //https://www.cdnfonts.com/
    ViteImageOptimizer({ png: {}, jpg: {}, jpeg: {}, webp: {}, svg: {} }),
  ],
  css: {
    postcss: {
      plugins: [autoPrefixer()],
    },
  },
  server: {
    port: 2020,
  },
});
