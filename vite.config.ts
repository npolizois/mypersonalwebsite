import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import createHtmlMinifier from "vite-plugin-html-minifier";

export default defineConfig({
  plugins: [
    react(),
    createHtmlMinifier({
      minify: true,
      filter: /\.html$/,
    }),
  ],
  build: {
    sourcemap: false,
    minify: "esbuild",
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});
