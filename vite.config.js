import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VitePWA } from 'vite-plugin-pwa';
import UnoCSS from 'unocss/vite';
import { presetIcons, presetUno, transformerDirectives } from 'unocss'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: {
        'bg-base': 'bg-white dark:bg-[#181818]',
        'i-btn': 'op60 hover:op100 transition ease-out',
      },
      presets: [
        presetIcons(),
        presetUno()
      ],
      theme: {
        colors: {
          dark: {
            100: '#222',
            200: '#333',
            300: '#444',
            400: '#555',
            500: '#666',
            600: '#777',
            700: '#888',
            800: '#999',
            900: '#aaa',
          }
        }
      },
      transformers: [transformerDirectives()],
    }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'safari-pinned-tab.svg'],
      manifest: {
        name: 'VictorCam Template',
        short_name: 'VC Template',
        theme_color: '#000',
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
