import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store/index'

// Import views
import Home from '@/views/Home.vue'
import Contact from '@/views/Contact.vue'
import Properties from '@/views/Properties.vue'
import Property from '@/views/Property.vue'

// Set ending for the document.title = to our App Name
const titleEnding = `| ${store.state.app.app_name}`

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/', // route in url
      name: 'home',
      meta: { // meta tag values
        title: `Home ${titleEnding}`,
        description: 'Home page.'
      },
      component: Home // what component (view) to render
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: `Contact us ${titleEnding}`,
        description: 'Reach out to us.'
      },
      component: Contact
    },
    {
      path: '/properties',
      name: 'properties',
      meta: {
        title: `Properties ${titleEnding}`,
        description: 'Look how cool I am.'
      },
      component: Properties
    },
    {
      path: '/property/:permalink', // dynamic route using /:
      name: 'property',
      meta: {
        title: ` ${titleEnding}`,
        description: 'Look how cool I am.'
      },
      component: Property
    }
  ]
})
