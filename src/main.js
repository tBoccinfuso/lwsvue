import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false

// Set the document title equal to the meta.title set in route, or use fallback.
// This event fires when you begin navigating to a new route.
router.afterEach(async (to, from) => {
  // If going to a property page...
  if (to.name === 'property') {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/tBoccinfuso/demo/properties')
      let propertyName

      for (let index = 0; index < response.data.length; index++) {
        if (response.data[index].permalink === to.params.permalink) {
          propertyName = response.data[index].name
          break
        }
      }

      document.title = propertyName + to.meta.title || 'LWS-Vue'
    } catch (err) {
      console.log(err)
      document.title = 'Property Page' || 'LWS-Vue'
    }
  } else {
    document.title = to.meta.title || 'LWS-Vue'
  }

  store.dispatch('app/changePageName', to.name)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
