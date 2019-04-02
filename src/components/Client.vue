<template>
  <div class="client">
    <h2>Get in touch</h2>
    <p>Email us: {{ this.$store.state.app.client.email }}</p>
    <button id="show-modal" @click="showModal = true">Contact Us</button>
    <!-- use the modal component, pass in the prop -->
    <ContactForm v-if="showModal" @close="showModal = false" ContactFormHeader="Contact Form">
      <!--
        you can use custom content here to overwrite
        default content by passing in slots
      -->
      <div class="footer-bottom" slot="client">
        <p>{{ get_client }}</p>
      </div>
    </ContactForm>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'client',
  data () {
    return {
      showModal: false
    }
  },
  components: {
    ContactForm
  },
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
  .footer-bottom{
    display: flex;
    justify-content: space-around;
  }
</style>
