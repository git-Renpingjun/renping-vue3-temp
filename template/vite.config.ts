import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 9000,
    proxy: {
      '/knowledge-api': {
        target: 'http://172.20.48.84:8088',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/knowledge-api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ['vue', 'vue-router', 'pinia'],
          editor: ['@wangeditor/editor', '@wangeditor/editor-for-vue'],
          vendor: ['axios'],
        },
      },
    },
  },
})
