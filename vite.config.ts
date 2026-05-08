import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { federation } from '@module-federation/vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig({
  base: '/uicat/',
  plugins: [
    vue(),
    tailwindcss(),
    federation({
      name: 'uicat',
      manifest: true,
      exposes: {
        './CatGifModal': './src/components/CatGifModal.vue',
        './UiCatInitializer': './src/composables/useUiCatInitializer.ts',
      },
      shared: ['vue', 'element-plus'],
    }),
  ],
  resolve: {
    alias: {
      '@': srcPath,
    },
  },
})
