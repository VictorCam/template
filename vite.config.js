import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
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
