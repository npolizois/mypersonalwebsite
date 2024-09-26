import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    minify: "esbuild", // Vite defaults to esbuild for minification
    assetsInlineLimit: 4096, // Inlines assets below this size in bytes
    rollupOptions: {
      output: {
        manualChunks: undefined, // Adjust chunk splitting for optimization
      },
    },
  },
});
