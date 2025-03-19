import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr(),],
  server: {
    allowedHosts: ["86c3-189-28-69-243.ngrok-free.app", "05cb-189-28-71-196.ngrok-free.app", "00cb-189-28-71-196.ngrok-free.app"]
  }
})
