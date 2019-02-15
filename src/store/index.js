import Vue from 'vue'
import Vuex from 'vuex'

// Import store modules
import app from './modules/app'
import buildings from './modules/buildings'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    buildings
  }
})
