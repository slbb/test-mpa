import { defineConfig } from 'vite';
import { createMpaPlugin } from 'vite-plugin-virtual-mpa';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    // 页面自动识别打包，见 https://github.com/emosheeep/vite-plugin-virtual-mpa/blob/master/workspaces/plugin/README.zh_CN.md
    createMpaPlugin({
      template: 'template.html',
      scanOptions: {
        scanDirs: 'src/pages',
        entryFile: 'main.js',
        filename: name => `${name}.html`,
      }
    })
  ],
  base: './',
  resolve: {
    alias:{
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3898,
  },
  build: {
    minify: false,
    target: 'esnext',
  },
});
