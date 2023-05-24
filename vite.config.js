import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import icons from "unplugin-icons/vite"
import postcssPresetEnv from 'postcss-preset-env'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    sveltekit(),
    icons(),
    webfontDownload()
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 2 })]
    }
  },
  server: {
    port: 2020,
  },
});
