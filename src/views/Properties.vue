<template>
  <div class="properties">

    <h1>Properties</h1>
    <hr>

    <div class="property-list">
      <div v-for="property in properties" :key='property.id' class="property" :class="property.id.toString()">

        <p><b>ID:</b> {{ property.id }}</p>
        <p><b>Permalink:</b> {{ property.permalink }}</p>
        <p><b>Name:</b> {{ property.name }}</p>
        <p><b>Price:</b> ${{ property.min_rate }}</p>
        <p><b>Number of Suites:</b> {{ property.suite_count }}</p>
        <p><b>Status:</b> {{ userFriendlyStatus(property.status) }}</p>
        <p>
          <router-link :to="{ name: 'property', params: { permalink: property.permalink } }" :title="property.name">
            View Property
          </router-link>
        </p>

      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import mixin from '../mixins/propertyStatus.js' // import our custom mixin for formatting the property status

export default {
  name: 'properties',
  data () {
    return {
      properties: []
    }
  },
  props: {
    property: {}
  },
  mixins: [ // by exposing our custom made mixin for the property status, we are able to use it in our template by calling the method.
    mixin
  ],
  async created () { // on the created life cycle we use axios to make a get request to our mock database and set the results in our data. This happened BEFORE the DOM is rendered (mounted lifecycle)
    try {
      const response = await axios.get('https://my-json-server.typicode.com/tBoccinfuso/demo/properties')
      this.properties = response.data
    } catch (err) {
      console.log(err)
    }
  },
  computed: { // Computed properties are by default getter-only, but you can also provide a setter when you need it
    ...mapGetters({
      get_properties: 'buildings/get_properties' // map this.get_properties to this.$store.getters['buildings/get_properties']
    })
  },
  methods: { // aka functions
    get_property_status (propertyObject) {
      return this.$store.getters['buildings/get_status'](propertyObject)
    }
  }
}
</script>

<style lang="scss" scoped>
  hr {
    width: 50%;
  }
  .property-list {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    font-weight: bold;
    color: #42b983;
    padding: 10px;
    margin: 2px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
</style>
