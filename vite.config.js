import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from "vite"
import icons from "unplugin-icons/vite"
import postcssPresetEnv from 'postcss-preset-env'

export default defineConfig({
  plugins: [sveltekit(), icons()],
  css: {
		postcss: {
			plugins: [postcssPresetEnv({stage: 2})]
		}
	},
  server: {
    port: 2020,
  },
});
