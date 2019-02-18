<template>
  <div class="property">
    <h1>{{ property.name }}</h1>
    <p><b>ID:</b> {{ property.id }}</p>
    <p><b>Permalink:</b> {{ property.permalink }}</p>
    <p><b>Price:</b> ${{ property.min_rate }}</p>
    <p><b>Number of Suites:</b> {{ property.suite_count }}</p>
    <p><b>Status:</b> {{ this.$store.getters['buildings/get_status'](property) }}</p>
  </div>
</template>

<script>
export default {
  name: 'property',
  created () { // When this instance is created but before even being mounted and rendered, Set property = to the params set in main.js
    this.property = this.$route.params.property
  }
}
</script>
