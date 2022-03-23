import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import ViteVisualizer from "rollup-plugin-visualizer";
import Components from "unplugin-vue-components/vite"
import {AntDesignVueResolver} from "unplugin-vue-components/resolvers"
import svgLoader from 'vite-svg-loader'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    svgLoader(),
    ViteVisualizer({
      filename: "./dist/report.html",
      open: true,
      template: "network",
    }),
    Components({
      resolvers: [
        AntDesignVueResolver({
          importStyle: "less"
        })
      ]
    })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  envDir: resolve(__dirname, "./env"),
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '@/app/styles/global';
          @import '@/app/styles/mixins';
        `,
      },
      less: {
        javascriptEnabled: true,
        modifyVars: {
          'primary-color': '#1DA57A',
          'link-color': '#1DA57A'
        },
      },
    },
  }
});
