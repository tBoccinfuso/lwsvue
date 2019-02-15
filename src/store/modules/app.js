//  state
const state = {
  app_name: 'LWS-VUE',
  current_page_name: 'home',
  client: {
    name: 'Test-Client-Properties',
    id: 1,
    email: 'hi@tc1.com'
  }
}

// getters
const getters = {
  get_normalized_client_name: (state) => { 
    return state.client.name.replace(/-/g, ' ')
  }
}

// mutations
const mutations = {
  CHANGE_PAGE_NAME: (state, payload) => {
    state.current_page_name = payload
  }
}

// actions
const actions = {
  changePageName: ({ commit }, payload) => { // update page name to use in class name on divs
    commit('CHANGE_PAGE_NAME', payload)
  }
}


// export our 'app' store
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
