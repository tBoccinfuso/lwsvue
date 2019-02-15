<template>
  <footer id="footer">
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
      font-size: 18px;
    }
    .nav {
      a{
        font-size: 16px;
      }
    }
  }
</style>
