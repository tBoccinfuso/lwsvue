import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

Vue.config.productionTip = false

// Set the document title equal to the meta.title set in route, or use fallback.
// This event fires when you begin navigating to a new route.
router.afterEach((to, from) => {
  // If going to a property page...
  if (to.name === 'property') {
    let propertyName = store.getters['buildings/get_property_name'](to.params.permalink)
    document.title = propertyName + to.meta.title || 'LWS-Vue'

    // Set params (data) named property to be used on the new route. In this case it is the matching property data from getter.
    to.params.property = store.getters['buildings/get_property'](to.params.permalink)
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
