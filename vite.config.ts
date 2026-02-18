import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "node:path";
import { visualizer } from "rollup-plugin-visualizer"

export default defineConfig({
  define: {
    __VUE_I18N_FULL_INSTALL__: false,
    __VUE_I18N_LEGACY_API__: false,
    __INTLIFY_PROD_DEVTOOLS__: false,
  },
  plugins: [
    vue(),
    visualizer({ open: true })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      'vue-i18n': 'vue-i18n/dist/vue-i18n.runtime.esm-bundler.js'
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/assets/scss/breakpoints" as *;`
      }
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3001",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
