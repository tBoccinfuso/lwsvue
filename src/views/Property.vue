<template>
  <div class="property">
    <h1>{{ property.name }}</h1>
    <p><b>ID:</b> {{ property.id }}</p>
    <p><b>Permalink:</b> {{ property.permalink }}</p>
    <p><b>Price:</b> ${{ property.min_rate }}</p>
    <p><b>Number of Suites:</b> {{ property.suite_count }}</p>
    <p><b>Status:</b> {{ userFriendlyStatus(property.status) }} </p>

    <hr>
    <h2>Suites</h2>

    <div class="suites">
      <div class="suite" v-for="suite in property.suites" :key="suite.type_name">
        <p><b>Type Name:</b> {{ suite.type_name }}</p>
        <p><b>Beds:</b> {{ suite.rbedate }}</p>
        <p><b>Baths:</b> {{ suite.bath }}</p>
        <p><b>Rate:</b> ${{ suite.rate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import mixin from '../mixins/propertyStatus.js'

export default {
  name: 'property',
  data () {
    return {
      property: {}
    }
  },
  mixins: [
    mixin
  ],
  async created () {
    try {
      const windowPath = window.location.pathname
      const response = await axios.get(`https://my-json-server.typicode.com/tBoccinfuso/demo/properties`)

      for (let index = 0; index < response.data.length; index++) {
        if (windowPath.includes(response.data[index].permalink)) {
          this.property = response.data[index]
          break
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style lang="scss" scoped>
  .suites{
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    max-width: 80%;
    margin: 0 auto;
  }
</style>
