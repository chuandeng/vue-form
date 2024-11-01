import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons()
      ]
    })
  ]
})