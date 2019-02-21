<template>
  <div class="resources">
    <a v-for="resource in resources" class="resource" :class="resource.name" :key="resource.name" :href="resource.link" target="_blank">
      <h3>{{ resource.name }}</h3>
      <p>{{ resource.desc }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'resources',
  data () {
    return {
      resources: [
        {
          name: 'Vue Docs',
          link: 'https://vuejs.org/v2/guide/',
          desc: 'Documentaion for Vue.js'
        },
        {
          name: 'Vuex',
          link: 'https://vuex.vuejs.org/',
          desc: 'Documentaion for Vuex.'
        },
        {
          name: 'Vue Router',
          link: 'https://router.vuejs.org/guide/',
          desc: 'Documentaion for Vue Router.'
        },
        {
          name: 'Vuetify',
          link: 'https://vuetifyjs.com/en/getting-started/quick-start',
          desc: 'Documentaion for the Material based componenet library Vuetify.'
        },
        {
          name: 'Vue bootstrap',
          link: 'https://bootstrap-vue.js.org/docs',
          desc: 'Documentaion for the Vue Bootstrap library.'
        },
        {
          name: 'Nuxt JS',
          link: 'https://nuxtjs.org/',
          desc: 'Documentaion for a Vue framework, Nuxt.'
        },
        {
          name: 'Axios',
          link: 'https://vuejs.org/v2/cookbook/using-axios-to-consume-apis.html',
          desc: 'A promise based HTTP client that allows your front end to consume apis.'
        },
        {
          name: 'Awesome Vue',
          link: 'https://github.com/vuejs/awesome-vue',
          desc: '🎉 A curated list of awesome things related to Vue.js'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scpoed>
  .resources {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    margin: 0 auto;

    .resource{
      width: 20%;
      padding: 25px;
      border: 1px solid $dark-blue;
      margin: 5px;

      @media #{$mobile} {
        width: 100%;
      }

      @media #{$small} {
        width: 31%;
      }
    }
  }
</style>
