import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000,
    host: true,
  },
  base: '/portfolio/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    // Vite resolves .js/.ts/.jsx/.tsx by default; no need for "extensions"
  },
  build: {
    outDir: "dist",
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
});