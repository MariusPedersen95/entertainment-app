import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'entertainment-app',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      script: [],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://awesome-lib.css',
        },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon-32x32.png' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
  css: ['@/assets/scss/import.scss'],
  // vite: {
  //   css: {
  //     preprocessorOptions: {
  //       scss: {
  //         additionalData: `@import "@/assets/scss/import";`,
  //       },
  //     },
  //   },
  // },
})
