import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  root: fileURLToPath(new URL("./site", import.meta.url)),
  plugins: [react()],
  appType: "mpa",
  build: {
    outDir: "../dist",
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        main: fileURLToPath(new URL("./site/index.html", import.meta.url)),
        cv: fileURLToPath(new URL("./site/cv.html", import.meta.url)),
        resumeRedirect: fileURLToPath(new URL("./site/resume.html", import.meta.url)),
        notFound: fileURLToPath(new URL("./site/404.html", import.meta.url)),
      },
    },
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test-setup.js"],
  },
  server: {
    host: "127.0.0.1",
    port: 8000,
    strictPort: true,
  },
});
