import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import define from "./vite.define";
import ufonts from "unplugin-fonts/vite";
import uicons from "unplugin-icons/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
    tailwindcss(),
    ufonts({
      google: { families: ["Roboto"] },
    }),
    uicons({
      autoInstall: true,
      compiler: "vue3",
    }),
  ],

  define,
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@ui": fileURLToPath(new URL("./src/components/ui", import.meta.url)),
    },
  },
  server: {
    port: 8080,
  },
});
