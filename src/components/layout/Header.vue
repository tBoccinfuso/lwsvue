<template>
  <header id="nav" class='nav'>
    <router-link to="/">Home</router-link> |
    <router-link to="/properties">Properties</router-link> |
    <router-link to='/contact'>Contact</router-link>
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    margin: 2px;
    text-decoration: none;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
