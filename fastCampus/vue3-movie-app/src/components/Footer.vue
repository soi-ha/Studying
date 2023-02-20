<template>
  <footer>
    <Logo />
    <a
      href="https://github.com/soi-ha"
      target="_blank">
      (c){{ new Date().getFullYear() }} SOHA
    </a>
  </footer>
</template>

<script>
import Logo from '~/components/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="scss" scoped>
footer {
  padding: 70px 0;
  text-align: center;
  opacity: .3;
  .logo {
    display: black;
    margin-bottom: 4px;
  }
}
</style>