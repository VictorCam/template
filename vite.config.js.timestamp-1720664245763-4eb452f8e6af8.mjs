// vite.config.js
import { defineConfig } from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import webfontDownload from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import autoPrefixer from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/autoprefixer/lib/autoprefixer.js";
import Components from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/unplugin-vue-components/dist/vite.js";
import { ElementPlusResolver } from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/unplugin-vue-components/dist/resolvers.js";
import transformerDirectives from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/@unocss/transformer-directives/dist/index.mjs";
import { VitePWA } from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/vite-plugin-pwa/dist/index.js";
import UnoCSS from "file:///C:/Users/vdcam/Documents/codium/template/node_modules/unocss/dist/vite.mjs";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      shortcuts: {
        "b-base": "border-gray-200 dark:border-dark-100",
        "b-dark-only": "border-transparent dark:border-dark-100",
        "bg-base": "bg-white dark:bg-[#181818]",
        "c-base": "text-gray-900 dark:text-gray-300",
        "c-fade": "text-gray-900:50 dark:text-gray-300:50",
        "i-btn": "op60 hover:op100"
      },
      theme: {
        colors: {
          dark: {
            100: "#222",
            200: "#333",
            300: "#444",
            400: "#555",
            500: "#666",
            600: "#777",
            700: "#888",
            800: "#999",
            900: "#aaa"
          }
        }
      },
      transformers: [transformerDirectives()]
    }),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "VictorCam Template",
        short_name: "VC Template",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    }),
    webfontDownload([])
    //https://www.cdnfonts.com/
  ],
  css: {
    postcss: {
      plugins: [autoPrefixer()]
    }
  },
  assetsInclude: ["**/*.{jpg,jpeg,png,gif,svg}"],
  server: {
    port: 2020
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2ZGNhbVxcXFxEb2N1bWVudHNcXFxcY29kaXVtXFxcXHRlbXBsYXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFx2ZGNhbVxcXFxEb2N1bWVudHNcXFxcY29kaXVtXFxcXHRlbXBsYXRlXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy92ZGNhbS9Eb2N1bWVudHMvY29kaXVtL3RlbXBsYXRlL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XHJcbmltcG9ydCB3ZWJmb250RG93bmxvYWQgZnJvbSBcInZpdGUtcGx1Z2luLXdlYmZvbnQtZGxcIjtcclxuaW1wb3J0IGF1dG9QcmVmaXhlciBmcm9tIFwiYXV0b3ByZWZpeGVyXCI7XHJcbmltcG9ydCBDb21wb25lbnRzIGZyb20gXCJ1bnBsdWdpbi12dWUtY29tcG9uZW50cy92aXRlXCI7XHJcbmltcG9ydCB7IEVsZW1lbnRQbHVzUmVzb2x2ZXIgfSBmcm9tIFwidW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvcmVzb2x2ZXJzXCI7XHJcbmltcG9ydCB0cmFuc2Zvcm1lckRpcmVjdGl2ZXMgZnJvbSAnQHVub2Nzcy90cmFuc2Zvcm1lci1kaXJlY3RpdmVzJztcclxuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSc7XHJcbmltcG9ydCBVbm9DU1MgZnJvbSAndW5vY3NzL3ZpdGUnO1xyXG4vLyBpbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xyXG5cclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBVbm9DU1Moe1xyXG4gICAgICBzaG9ydGN1dHM6IHtcclxuICAgICAgICAnYi1iYXNlJzogJ2JvcmRlci1ncmF5LTIwMCBkYXJrOmJvcmRlci1kYXJrLTEwMCcsXHJcbiAgICAgICAgJ2ItZGFyay1vbmx5JzogJ2JvcmRlci10cmFuc3BhcmVudCBkYXJrOmJvcmRlci1kYXJrLTEwMCcsXHJcbiAgICAgICAgJ2JnLWJhc2UnOiAnYmctd2hpdGUgZGFyazpiZy1bIzE4MTgxOF0nLFxyXG4gICAgICAgICdjLWJhc2UnOiAndGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtZ3JheS0zMDAnLFxyXG4gICAgICAgICdjLWZhZGUnOiAndGV4dC1ncmF5LTkwMDo1MCBkYXJrOnRleHQtZ3JheS0zMDA6NTAnLFxyXG4gICAgICAgICdpLWJ0bic6ICdvcDYwIGhvdmVyOm9wMTAwJyxcclxuICAgICAgfSxcclxuICAgICAgdGhlbWU6IHtcclxuICAgICAgICBjb2xvcnM6IHtcclxuICAgICAgICAgIGRhcms6IHtcclxuICAgICAgICAgICAgMTAwOiAnIzIyMicsXHJcbiAgICAgICAgICAgIDIwMDogJyMzMzMnLFxyXG4gICAgICAgICAgICAzMDA6ICcjNDQ0JyxcclxuICAgICAgICAgICAgNDAwOiAnIzU1NScsXHJcbiAgICAgICAgICAgIDUwMDogJyM2NjYnLFxyXG4gICAgICAgICAgICA2MDA6ICcjNzc3JyxcclxuICAgICAgICAgICAgNzAwOiAnIzg4OCcsXHJcbiAgICAgICAgICAgIDgwMDogJyM5OTknLFxyXG4gICAgICAgICAgICA5MDA6ICcjYWFhJyxcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRyYW5zZm9ybWVyczogW3RyYW5zZm9ybWVyRGlyZWN0aXZlcygpXVxyXG4gICAgfSksXHJcbiAgICBWaXRlUFdBKHtcclxuICAgICAgcmVnaXN0ZXJUeXBlOiAnYXV0b1VwZGF0ZScsXHJcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXHJcbiAgICAgIG1hbmlmZXN0OiB7XHJcbiAgICAgICAgbmFtZTogJ1ZpY3RvckNhbSBUZW1wbGF0ZScsXHJcbiAgICAgICAgc2hvcnRfbmFtZTogJ1ZDIFRlbXBsYXRlJyxcclxuICAgICAgICB0aGVtZV9jb2xvcjogJyNmZmZmZmYnLFxyXG4gICAgICAgIGljb25zOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtMTkyeDE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgICAgcHVycG9zZTogJ2FueSBtYXNrYWJsZScsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe1xyXG4gICAgICByZXNvbHZlcnM6IFtFbGVtZW50UGx1c1Jlc29sdmVyKCldLFxyXG4gICAgfSksXHJcbiAgICB3ZWJmb250RG93bmxvYWQoW10pLCAvL2h0dHBzOi8vd3d3LmNkbmZvbnRzLmNvbS9cclxuICBdLFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbYXV0b1ByZWZpeGVyKCldLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi57anBnLGpwZWcscG5nLGdpZixzdmd9J10sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAyMDIwLFxyXG4gIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXNULFNBQVMsb0JBQW9CO0FBQ25WLE9BQU8sU0FBUztBQUNoQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGtCQUFrQjtBQUN6QixPQUFPLGdCQUFnQjtBQUN2QixTQUFTLDJCQUEyQjtBQUNwQyxPQUFPLDJCQUEyQjtBQUNsQyxTQUFTLGVBQWU7QUFDeEIsT0FBTyxZQUFZO0FBS25CLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLGVBQWU7QUFBQSxRQUNmLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTCxRQUFRO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSixLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsWUFDTCxLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjLENBQUMsc0JBQXNCLENBQUM7QUFBQSxJQUN4QyxDQUFDO0FBQUEsSUFDRCxRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxlQUFlLENBQUMsZUFBZSx1QkFBdUI7QUFBQSxNQUN0RCxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxZQUNOLFNBQVM7QUFBQSxVQUNYO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQztBQUFBLElBQ25DLENBQUM7QUFBQSxJQUNELGdCQUFnQixDQUFDLENBQUM7QUFBQTtBQUFBLEVBQ3BCO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsYUFBYSxDQUFDO0FBQUEsSUFDMUI7QUFBQSxFQUNGO0FBQUEsRUFDQSxlQUFlLENBQUMsNkJBQTZCO0FBQUEsRUFDN0MsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
