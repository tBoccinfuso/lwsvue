<template>
  <div class="contact">
    <Client/>  
  </div>
</template>

<script>
import Client from '@/components/Client.vue'

export default {
  name: 'contact',
  components: { // Allow rendering of the Client component
    Client
  }
}
</script>


<style lang="scss" scoped>
  .contact {
    display: flex;
  }
</style>
