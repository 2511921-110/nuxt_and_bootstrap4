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
      { hid: 'description', name: 'description', content: pkg.description },
      { name: 'robot', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href:"https://use.fontawesome.com/releases/v5.6.1/css/all.css"}
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
    { src: '~/assets/sass/common.scss', lang: 'scss' }
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-parallax-js', ssr: false }
  ],
  // plugins: ['~/plugins/markdown-it'],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/font-awesome',
    ['nuxt-sass-resources-loader', [
      '~/assets/sass/variable.scss',
    ]],
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
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
      '~/assets/sass/common.scss'
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

// 追加
const config = require('./.contentful.json')

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'my-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'robot', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    ['bootstrap-vue/nuxt', { css: false }],
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/font-awesome',
    '@nuxtjs/markdownit',
    ['nuxt-sass-resources-loader', [
      '~/assets/sass/variable.scss',
    ]],
    '@ax2/dayjs-module',
    [
      "nuxt-compress",
      {
        gzip: {
          cache: true
        },
        brotli: {
          threshold: 10240
        }
      }
    ]
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
      '~/assets/sass/common.scss'
    ]
  },
  css: [
    { src: '~/assets/sass/bootstrap-grid.scss', lang: 'scss' },
    { src: '~/assets/sass/common.scss', lang: 'scss' }
  ],
  dayjs: {
    // Module options
  },
  // ここから
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  // ここまで追加
  markdownit: {
    preset: 'default',
    linkify: true, // URL文字列を自動でリンク化
    breaks: true, // 改行を<BR>や<P>タグに自動変換
    injected: true // 全ページで$md.renderを使えるようにする
  }
}
