/*
 * @Description:
 * @Author: ma.cq
 * @Date: 2021-12-31 15:22:01
 * @LastEditors: ma.cq
 * @LastEditTime: 2022-03-28 16:16:41
 */
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import pxtovw from 'postcss-px-to-viewport'

const pxtovwLoader = pxtovw({
  viewportWidth: 375,
  viewportUnit: 'vw'
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), styleImport({ resolves: [VantResolve()] })],
  css: {
    postcss: {
      plugins: [pxtovwLoader]
    }
  },
  server: {
    port: 8888
  },
  resolve: {
    alias: {
      '@': resolve('/src')
    }
  }
})
