import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import inspector from 'vite-plugin-inspector'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [inspector(), svelte()]
})
