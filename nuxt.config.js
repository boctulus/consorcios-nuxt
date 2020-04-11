const pkg = require('./package')

const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')

//import webpack from 'webpack'

module.exports = {
  mode: 'spa',
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Administración de consorcios de La Plata | El Grove',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {
        hid: 'description', name: 'description', content: 'Empresa administradora de consorcios en la ciudad de La Plata, Argentina'
      }
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ],
    script: [
      {src: 'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.0.4/echarts-en.min.js'}
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: {color: '#3adced'},

  /*
  ** Global CSS
  */
  css: [
    '~/assets/style/theme.styl',
    '~/assets/style/app.styl',
    'font-awesome/css/font-awesome.css',
    'roboto-fontface/css/roboto/roboto-fontface.css',
    '~/static/fonts/Engravers/engravers.css',
    '~/static/fonts/Pontano/pontano.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '@/plugins/vuetify',
    '@/plugins/bootstrap',
    
    {
      src: '~plugins/scrollto.js',
      ssr: false
    }    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-fullpage.js',
    'vue-scrollto/nuxt',
    '@nuxtjs/axios',
    //'@nuxtjs/auth',
    ['nuxt-vuex-localstorage', {
      mode: process.env.NODE_ENV,                  //////////////
      localStorage: ['auth']
    }]
  ],

  // local ó dominio real
  //
  // process.env.NODE_ENV === 'development' ? "http://elgrove.co/v1" : "https://api.administracionelgrove.com/v1"
  axios: {
    baseURL: "https://api.administracionelgrove.com/api/v1"
  },

  router: {
    middleware: [
      'protegeRutas'
    ]
  },

  dev: process.env.NODE_ENV !== 'production',

  /*
  ** Build configuration
  */
  build: {
    extractCSS: process.env.NODE_ENV === 'production',

    transpile: [
      'vuetify/lib',
      'vee-validate/dist/rules',
    ],

    plugins: [
      new VuetifyLoaderPlugin(),
      /*
      new webpack.ProvidePlugin({
        '$': 'jquery',
        '_': 'lodash'
      })
      */
    ],

    loaders: {
      stylus: {
        import: ["~assets/style/variables.styl"]
      }
    },


    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  }
}
