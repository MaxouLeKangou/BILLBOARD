// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],

  runtimeConfig: {
    API_SPOTIFY_CLIENT: process.env.SPOTIFY_CLIENT,
    API_SPOTIFY_SECRET: process.env.SPOTIFY_SECRET,
  },

})
