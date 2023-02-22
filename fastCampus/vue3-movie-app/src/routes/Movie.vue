<template>
  <div class="container">
    <div class="skeletons">
    </div>
  </div>
</template>

<script>
export default {
  created() {
    console.log(this.$route)
    this.$store.dispatch('movie/searchMovieWithId', {
      id: this.$route.params.id
    })
  }
}
</script>