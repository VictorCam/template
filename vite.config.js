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
      transformers: [transformerDirectives()]
    }),
    VitePWA({
      includeAssets: ['vite.svg'], manifest: {
        name: 'Vite PWA',
        short_name: 'VitePWA',
        description: 'Vite PWA App',
        theme_color: '#000000',
        icons: [
          {
            src: 'vite.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          }
        ]
      },
      registerType: 'autoUpdate',
      devOptions: { enabled: false, suppressWarnings: true, disableRuntimeConfig: true }
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
