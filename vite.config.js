import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
// import { VitePWA } from 'vite-plugin-pwa';
import jspmPlugin from "vite-plugin-jspm";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    jspmPlugin(),
    // VitePWA({
    //   includeAssets: ['vite.svg'], manifest: {
    //     name: 'Vite PWA',
    //     short_name: 'VitePWA',
    //     description: 'Vite PWA App',
    //     theme_color: '#000000',
    //     icons: [
    //       {
    //         src: 'vite.svg',
    //         sizes: '192x192',
    //         type: 'image/svg+xml',
    //       }
    //     ]
    //   },
    //   registerType: 'autoUpdate',
    //   devOptions: { enabled: false, suppressWarnings: true, disableRuntimeConfig: true }
    // })
    optimizeCssModules(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    webfontDownload([]), //https://www.cdnfonts.com/
    ViteImageOptimizer({
      png: { quality: 40, effort: 9 },
      jpg: { quality: 40, effort: 9 },
      jpeg: { quality: 40, effort: 9 },
      webp: { quality: 5, effort: 6 },
      svg: {
        js2svg: {
          useShortTags: true,
          pretty: false,
        }
      }
    })],
  css: {
    postcss: {
      plugins: [autoPrefixer()],
    },
  },
  server: {
    port: 2020,
  },
});
