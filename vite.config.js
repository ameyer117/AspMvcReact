import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import plugin from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '^/api': {
        target: 'http://localhost:5172/',
        secure: false,
      },
    },
    port: 5174,
  },
})
