<template>
  <div class="properties">

    <h1>Properties</h1>
    <hr>
    
    <div class="property-list">
      <div v-for="property in get_properties" :key='property.id' class="property" :class="property.id.toString()">

        <p><b>ID:</b> {{ property.id }}</p>
        <p><b>Permalink:</b> {{ property.permalink }}</p>
        <p><b>Name:</b> {{ property.name }}</p>
        <p><b>Price:</b> ${{ property.min_rate }}</p>
        <p><b>Number of Suites:</b> {{ property.suite_count }}</p>
        <p><b>Status:</b> {{ get_property_status(property) }}</p>
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
import PropertyPage from '@/views/Property.vue'

export default {
  name: 'properties',
  props: {
    property: {}
  },
  computed: {
    ...mapGetters({
      get_properties: 'buildings/get_properties'
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
