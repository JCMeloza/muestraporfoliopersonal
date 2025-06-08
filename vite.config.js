import { defineConfig } from 'vite'

export default defineConfig({
  base: "/muestraporfoliopersonal/",
  server: {
    watch: {
      usePolling: true
    }
  }
})