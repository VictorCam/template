import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import pluginPurgeCss from "@mojojoejo/vite-plugin-purgecss";

let font = 'https://fonts.cdnfonts.com'

export default defineConfig({
  plugins: [
    sveltekit(),
    pluginPurgeCss(),
    webfontDownload([], { minifyCss: true, embedFonts: true }),
    ViteImageOptimizer({
      png: { quality: 40, effort: 9 },
      jpg: { quality: 40, effort: 9 },
      jpeg: { quality: 40, effort: 9 },
      webp: { quality: 5, effort: 6 },
      svg: {
        js2svg: {
          useShortTags: true,
          pretty: false
        }
      }
    }),
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
