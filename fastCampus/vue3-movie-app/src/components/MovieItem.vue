<template>
  <div>{{ movie.imdbID }}</div>
</template>

<script>
export default {
  props: {
    movie: {
      type: Object,
      default: () => ({})
      // default: function () { return {} }
    }
  }
}
</script>