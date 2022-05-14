import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), vuejsx()],
  server: {
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    proxy: {
      '/api': {
        target: 'https://xunlei.com', // 接口服务地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
