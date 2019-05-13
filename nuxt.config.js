import pkg from './package'

export default {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  router: {
    base: '/nuxt/'
  },
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/bootstrap-grid.scss', lang: 'scss' },
    { src: '~/assets/sass/common.scss', lang: 'scss' },
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src :'~/plugins/vue-parallax-js', ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt',{ css: false }],
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
   scss: [
    '~/assets/sass/_functions.scss',
    '~/assets/sass/_variables.scss',
    '~/assets/sass/mixins/_breakpoints.scss',
    '~/assets/sass/mixins/_grid.scss',
    '~/assets/sass/mixins/_grid-framework.scss',
    '~/assets/sass/mixins/_hover.scss',
    '~/assets/sass/mixins/_text-emphasis.scss',
    '~/assets/sass/mixins/_text-hide.scss',
    '~/assets/sass/mixins/_text-truncate.scss',
    '~/assets/sass/utilities/_display.scss',
    '~/assets/sass/utilities/_flex.scss',
    '~/assets/sass/utilities/_spacing.scss',
    '~/assets/sass/utilities/_text.scss',
    '~/assets/sass/_grid.scss',
    '~/assets/sass/bootstrap-grid.scss',
    '~/assets/sass/_variable.scss',
    '~/assets/sass/common.scss',
    ]
  },
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
