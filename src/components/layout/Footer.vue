<template>
  <footer id="footer">
    <router-link to='/resources'>Resources</router-link>
    <p id="copyright">{{ `Copyright &copy; ${new Date().getUTCFullYear()} ${$store.state.app.app_name}` }}</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss" scoped>
  #footer {
    padding: 30px;
    #copyright {
      text-align: center;
      font-size: 14px;
    }
  }
</style>
