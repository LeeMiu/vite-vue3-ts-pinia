import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuejsx from '@vitejs/plugin-vue-jsx'
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 别名设置
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  plugins: [vue(), vuejsx()],
  build: {
    terserOptions: {
      compress: {
        //生产环境时移除console
        drop_console: true,
        drop_debugger: true,
      },
    },
    // 取消计算文件大小，加快打包速度
    reportCompressedSize: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: '[ext]/[name]-[hash].[ext]',
      },
    },
  },
  server: {
    // 设置启动端口
    port: 8080,
    hmr: {
      host: '127.0.0.1',
      port: 8080
    },
    // 设置代理
    proxy: {
      '/api': {
        target: 'https://xunlei.com', // 接口服务地址
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/api/, '')
      }
    }
  }
})
