import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../cartolex_user_app/static/canvas',
    emptyOutDir: true,
    lib: {
      entry: resolve(__dirname, 'src/index.tsx'),
      name: 'CartolexCanvas',
      fileName: 'cartolex-canvas',
      formats: ['es']
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  },
  server: {
    port: 5173,
    cors: true
  }
})
