import Vue from 'vue'
import Vuetify from 'vuetify/lib'

// Translation provided by Vuetify (javascript)
import es from 'vuetify/es5/locale/es'

Vue.use(Vuetify, {
    customProperties: true,
    lang: {
        locales: { es },
        current: 'es'
    }
})
