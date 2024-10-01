import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import webfontDownload from "vite-plugin-webfont-dl";
import autoPrefixer from "autoprefixer";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { VitePWA } from 'vite-plugin-pwa';
import UnoCSS from 'unocss/vite';
import VueRouter from 'unplugin-vue-router/vite';
import { presetIcons, presetUno, transformerDirectives, transformerVariantGroup } from 'unocss'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueRouter(),
    UnoCSS({
      shortcuts: {
        'bg-base': 'bg-white dark:bg-[#080808]',
        'bg-base-100': 'dark:bg-dark:100 bg-light-900',
        'i-btn': 'op60 hover:op100 transition ease-out cursor-pointer',
        'center': 'fixed -translate-x-50% -translate-y-50% left-50% top-50%',
        'btn': 'cursor-pointer dark:bg-dark-100 b-1px b-solid dark:b-light/10% dark:b-light hover:bg-dark-500/20% c-black dark:c-light rd-1 py-1 transition ease-in',
        'input': 'rd-2 decoration-none b-none shadow-md shadow'
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
      transformers: [transformerDirectives(), transformerVariantGroup()],
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
