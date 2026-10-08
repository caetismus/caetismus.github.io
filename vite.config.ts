import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // CRITICAL: Ensures assets resolve correctly when deployed to a subpath (e.g. GitHub Pages)
  base: './',
})
