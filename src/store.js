// This file is here to show how you would build your store in 1 file.

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //  state
  state: {
    app_name: 'LWS-VUE',
    current_page_name: 'home',
    client: {
      name: 'Test-Client-#1',
      id: 1,
      email: 'hi@tc1.com'
    },
    properties: [
      {
        id: 1234,
        permalink: 'highrise',
        name: 'Highrise',
        min_rate: 1300,
        suite_count: 5,
        status: 1
      },
      {
        id: 1337,
        permalink: 'duplex-2',
        name: 'Duplex 2',
        min_rate: 900,
        suite_count: 1,
        status: 0
      }
    ]
  },

  // Getters
  getters: {
    get_normalized_client_name: (state) => { 
      return state.client.name.replace(/-/g, ' ')
    },
    get_properties: (state) => { 
      return state.properties
    },
    get_status: (state) => (propertyObj) => {
      let property = state.properties.find( property => propertyObj.name === property.name )
      return property.status === 1 ? 'Available' : 'Not Available'
    },
    get_property_name: (state) => (permalink) => {
      let property = state.properties.find( property => permalink === property.permalink )
      return property.name
    },
    get_property: (state) => (permalink) => {
      let property = state.properties.find( property => permalink === property.permalink )
      return property
    }
  },

  // Mutations - Update state with a new value.
  mutations: {
    CHANGE_PAGE_NAME: (state, payload) => {
      state.current_page_name = payload
    }
  },

  // Actions - Commit a mutation and pass data. Can also perform any business logic before.
  actions: {
    changePageName: ({ commit }, payload) => { // update page name to use in class name on divs
      commit('CHANGE_PAGE_NAME', payload)
    }
  }
})