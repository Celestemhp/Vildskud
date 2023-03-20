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
        team: resolve(__dirname, "src/team.html"),
        findrundt: resolve(__dirname, "src/findrundt.html"),
        om: resolve(__dirname, "src/om.html"),
        test: resolve(__dirname, "src/test.html"),
        // about: resolve(__dirname, "src/about.html"),
      },
    },
  },
});
