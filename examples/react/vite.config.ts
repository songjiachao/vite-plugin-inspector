import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import inspector from 'vite-plugin-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inspector(), react()]
})
