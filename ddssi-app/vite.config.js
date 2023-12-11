import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: /\.(png|jpe?g|gif|svg)$/i, // Include image files
  
})
