// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: resolve(__dirname, "src"),
  base: "./",
  preview: {
    host: true,
  },
  publicDir: resolve("public"),
  build: {
    outDir: resolve("dist"),
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        faq: resolve(__dirname, "src/faq.html"),
        billetsalg: resolve(__dirname, "src/billetsalg.html"),
        samarbejdspartnere: resolve(__dirname, "src/samarbejdspartnere.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
