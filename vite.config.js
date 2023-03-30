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
        omVildskud: resolve(__dirname, "src/omVildskud.html"),
        faq: resolve(__dirname, "src/faq.html"),
        billetsalg: resolve(__dirname, "src/billetsalg.html"),
        samarbejdspartnere: resolve(__dirname, "src/samarbejdspartnere.html"),
        kontakt: resolve(__dirname, "src/kontakt.html"),
        opencall: resolve(__dirname, "src/opencall.html"),
        rebirth: resolve(__dirname, "src/rebirth.html"),
        gogoyo: resolve(__dirname, "src/gogoyo.html"),
        mand_ligger: resolve(__dirname, "src/mand_ligger.html"),
        frygten_for_ikke: resolve(__dirname, "src/frygten_for_ikke.html"),
        what_fires_together: resolve(__dirname, "src/what_fires_together.html"),
        vild_med_dig: resolve(__dirname, "src/vild_med_dig.html"),
        det_levende_rum: resolve(__dirname, "src/det_levende_rum.html"),
        frivillig: resolve(__dirname, "src/frivillig.html"),
        program: resolve(__dirname, "src/program.html"),
        sitemap: resolve(__dirname, "src/sitemap.html"),
        findrundt: resolve(__dirname, "src/findrundt.html"),
      },
    },
  },
});
