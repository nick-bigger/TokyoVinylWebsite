import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
  assetsInclude: ["**/*.m4a"],
  plugins: [
    react(),
    svgrPlugin(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
