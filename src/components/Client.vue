<template>
  <div class="client">
    <h2>Get in touch</h2>
    <p><b>{{ get_client }}</b></p>
    <p>Email us: {{ this.$store.state.app.client.email }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'client',
  computed: { // Computed properties are by default getter-only, but you can also provide a setter when you need it
    ...mapGetters({
      get_client: 'app/get_normalized_client_name' // map this.get_client to this.$store.getters['app/get_normalized_client_name']
    })
  }
}
</script>

<style lang="scss" scoped>
  .client {
    margin: 0 auto;
  }
</style>
