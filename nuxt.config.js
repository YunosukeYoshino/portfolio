export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Yoshino Yuunosuke',
    htmlAttrs: {
      lang: 'ja',
    },
    titleTemplate: '%s - ' + 'タイトル',

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'サイトの説明' || '' },
      { hid: 'keywords', name: 'keywords', content: 'キーワード1,キーワード2,キーワード3' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'サイト名' },
      { hid: 'og:type', property: 'og:type', content: 'サイトのタイプ' },
      { hid: 'og:url', property: 'og:url', content: 'サイトURL' },
      { hid: 'og:title', property: 'og:title', content: 'サイトタイトル' },
      { hid: 'og:description', property: 'og:description', content: 'サイトの説明' },
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },

      { hid: 'fb:app_id', property: 'fb:app_id', content: 'App-ID' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:site', name: 'twitter:site', content: '@Twitter' }

    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  head() {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js',
        },
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js',
        },
        {
          src: 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.topology.min.js',
        },
        {
          src: 'height.js',
        },
      ],
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    { src: '~/assets/scss/common.scss' },
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts' //追加
  ],
  googleFonts: {
    // families: {
    //   Lato: [100, 200, 300, 400, 700] //読み込みたいGoogle　Fontsを指定
    // }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'nuxt-webfontloader'
  ],
  webfontloader: {
    google: {
      families: ['Lato:100,200,300']
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

}
