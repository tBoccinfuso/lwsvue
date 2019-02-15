//  state
const state = {
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
}

// getters
const getters = {
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
}

// mutations
const mutations = {
}

// actions
const actions = {
}

// export our 'buildings' store
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
