import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath, URL} from 'node:url'

const srcPath = fileURLToPath(new URL('./src', import.meta.url))

export default defineConfig(async ({command}) => {
    if (command === 'build') {
        return {
            plugins: [vue()],
            build: {
                lib: {
                    entry: fileURLToPath(new URL('./src/index.ts', import.meta.url)),
                    name: 'UiCat',
                    fileName: 'uicat',
                    formats: ['es', 'umd'],
                },
                rollupOptions: {
                    external: ['vue', 'element-plus'],
                    output: {
                        globals: {
                            vue: 'Vue',
                            'element-plus': 'ElementPlus',
                        },
                    },
                },
            },
            resolve: {
                alias: {
                    '@': srcPath,
                },
            },
        }
    }

    const [{default: tailwindcss}, {federation}] = await Promise.all([
        import('@tailwindcss/vite'),
        import('@module-federation/vite'),
    ])

    return {
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
    }
})
