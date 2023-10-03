import path from "path";
import react from "@vitejs/plugin-react";
import {defineConfig} from "vite";
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig({
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
