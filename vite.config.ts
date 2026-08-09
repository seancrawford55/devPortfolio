import { resolve } from "node:path"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, "index.html"),
        projects: resolve(import.meta.dirname, "projects.html"),
        resume: resolve(import.meta.dirname, "resume.html"),
        contact: resolve(import.meta.dirname, "contact.html"),
      },
    },
  },
})
