export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@vueuse/nuxt',
  ],

  tailwindcss:{
    config: {
      darkMode: 'class',
      plugins: [
        require('@tailwindcss/typography'),
        require("daisyui"),
      ],
      daisyui: {
        themes: ["light", "dark", "cupcake"]
      }
    }
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      }
    }
  }

})
