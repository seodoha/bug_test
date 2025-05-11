import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light'
    },
    icons: {
      defaultSet: 'mdi',
    },
  })
  nuxtApp.vueApp.use(vuetify)
}) 