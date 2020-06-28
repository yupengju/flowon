
module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        // href: '//at.alicdn.com/t/font_1113798_0532l8oa6jqp.css'
        href: '//at.alicdn.com/t/font_1113798_nklzr6lk7z.css' // add ECharts
      },
      {
        rel: 'stylesheet',
        href: '//at.alicdn.com/t/font_1331132_5lvbai88wkb.css'
      }
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
    'element-ui/lib/theme-chalk/index.css',
    './assets/css/base.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/element-ui',
    '@/plugins/axios'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error'
  },
  parserOptions: {},
  extends: ['@nuxtjs'],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    'cookie-universal-nuxt'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api/': 'http://topology.le5le.com/',
    '/image/': 'http://topology.le5le.com/'
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/, /^@topology/],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
