import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import postcssPresetEnv from 'postcss-preset-env'
import webfontDownload from 'vite-plugin-webfont-dl'

export default defineConfig({
  plugins: [
    sveltekit(),
    webfontDownload([]) //https://www.cdnfonts.com/
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv({ stage: 2 })] //https://preset-env.cssdb.org/features/#stage-2
    }
  },
  server: {
    port: 2020,
  }
})
