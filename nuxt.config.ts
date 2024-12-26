// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt'
  ],
  css: [ '~/assets/css/custom.css', '~/assets/scss/app.scss' ],
  app: {
    head:{
      title: 'Blog Arcádio',
      charset: 'utf-8',
      meta: [
        {
          name: 'description',
          content: 'O blog possui artigos a respeito da da legislação tributária do estado do Maranhão'
        },
        {
          name: 'keywords',
          content: 'blog, artigos, legislação, tributário, reforma, maranhão'
        },
        {
          name: 'og:title',
          content: 'Blog Arcádio'
        },
        {
          name: 'og:description',
          content: 'O blog possui artigos a respeito da da legislação tributária do estado do Maranhão'
        },
        {
          name: 'og:site_name',
          content: 'Blog Arcádio'
        },
        {
          name: 'og:image',
          content: 'http://localhost:3000/imgs/logo.png'
        }
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css'
        }
      ],
      script: [
        {
          type: 'text/javascript',
          src: 'js/custom.js'
        }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'in-out' }
  },
  runtimeConfig:{
    secreteKey: '',
    public: {
      apiBase: ''
    }
  }
})
