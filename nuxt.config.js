export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'pwahandson',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/pwa'
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  manifest: {
    name: 'nuxt-pwaのテスト',
    lang: 'ja',
    short_name: 'nuxt-pwa',
    title: 'nuxt-startです',
    'og:title': 'nuxt-startです',
    description: 'nuxt-startです',
    'og:description': 'nuxt-startです',
    theme_color: '#ffffff',
    background_color: '#ffffff'
  },
  workbox: {
    dev: true, //開発環境でもPWA
  },
}
