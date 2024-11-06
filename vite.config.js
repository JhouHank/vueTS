import path from 'path';
import { defineConfig } from 'vite';
import { fileURLToPath, URL } from 'node:url';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import tailwind from 'tailwindcss';
import ViteRestart from 'vite-plugin-restart';
import { visualizer } from 'rollup-plugin-visualizer';
import vueSetupExtend from 'vite-plugin-vue-setup-extend';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import { vitePluginFakeServer } from 'vite-plugin-fake-server';
// https://vite.dev/config/
export default defineConfig({
    // server: {
    //   proxy: {
    //     '/api': {
    //       target: '',
    //       changeOrigin: true,
    //       rewrite: (path) => {
    //         const newPath = path.replace(/^\/api/, '');
    //         console.log('Rewriting path from:', path, 'to:', newPath);
    //         return newPath;
    //       },
    //     },
    //   },
    // },
    plugins: [
        vue(),
        visualizer(),
        vueSetupExtend(),
        vitePluginFakeServer(),
        ViteRestart({
            restart: ['vite.config.js', '.env.development'],
        }),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            symbolId: '[name]',
        }),
    ],
    resolve: {
        extensions: ['.js', '.ts', '.json'], // 導入時想要省略的擴展名列表
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    css: {
        postcss: {
            plugins: [tailwind(), autoprefixer()],
        },
    },
    build: {
        // assetsInlineLimit: 4096, // 圖片轉 base64 編碼的閾值
        rollupOptions: {
            output: {
                chunkFileNames: 'js/[name]-[hash].js', // 打包文件的名稱
                entryFileNames: 'js/[name]-[hash].js', // 入口文件的名稱
                assetFileNames: '[ext]/[name]-[hash].[ext]', // 靜態資源如字體，圖片等
            },
        },
    },
    esbuild: {
        drop: ['console', 'debugger'],
    },
});
