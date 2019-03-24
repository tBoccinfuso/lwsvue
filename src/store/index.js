import Vue from 'vue'
import Vuex from 'vuex'

// Import store modules
import app from './modules/app'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
})
