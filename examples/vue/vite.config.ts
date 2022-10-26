import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import inspector from 'vite-plugin-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inspector(), vue()]
})
