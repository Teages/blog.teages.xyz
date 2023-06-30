// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],

  tailwindcss: {
    config: {
      plugins: [
        require('@tailwindcss/typography')({
          skip: ['pre']
        }),
        require("daisyui"),
      ],
    }
  },

  content: {
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark'
      }
    }
  }

})
