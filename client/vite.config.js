// client/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path" // <--- Import the 'path' module

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { // <--- Add this 'resolve' object
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})