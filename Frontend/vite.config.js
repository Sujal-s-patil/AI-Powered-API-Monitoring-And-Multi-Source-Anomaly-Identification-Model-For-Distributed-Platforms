import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      usePolling: true,   // force file watching even on WSL2/Docker
      interval: 100,      // check for changes every 100ms
    },
     open: '/',  // open browser on server start
    host: true,           // allows access from network devices
    port: 5173,           // default vite port (change if needed)
  },
})
