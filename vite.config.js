import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import transformerDirectives from '@unocss/transformer-directives'
import { VitePWA } from 'vite-plugin-pwa';
import UnoCSS from 'unocss/vite';
// import vueDevTools from 'vite-plugin-vue-devtools'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: [
        ['btn', 'py-1 b b-solid b-2px rd-1']],
      transformers: [transformerDirectives()]
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'Vitesse',
        short_name: 'Vitesse',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    webfontDownload([]), //https://www.cdnfonts.com/
    // VueI18n({
    //   runtimeOnly: true,
    //   compositionOnly: true,
    //   fullInstall: true,
    //   include: [path.resolve(__dirname, 'locales/**')],
    // }),
  ],
  css: {
    postcss: {
      plugins: [autoPrefixer()],
    },
  },
  assetsInclude: ['**/*.{jpg,jpeg,png,gif,svg}'],
  server: {
    port: 2020,
  },
});
