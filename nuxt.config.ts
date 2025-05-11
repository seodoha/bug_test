import { defineNuxtConfig } from 'nuxt/config'
import vuetify from 'vite-plugin-vuetify'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['vuetify/styles'],
  plugins: [
    '~/plugins/vuetify.ts'
  ],
  vite: {
    plugins: [
      vuetify({ autoImport: true })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/variables.css";'
        }
      }
    }
  },
  build: {
    transpile: ['vuetify']
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
      ]
    }
  }
})
