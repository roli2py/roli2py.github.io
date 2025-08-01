import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { plugin as mdPlugin, Mode } from "vite-plugin-markdown";

import { fileURLToPath, URL } from "url";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdPlugin({
      mode: [
        Mode.REACT,
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    }
  },
  css: {
    modules: {
      localsConvention: "camelCaseOnly",
    },
  },
})
