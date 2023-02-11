<template>
  <div class="container">
    <div class="inner">
      <MovieItem
        v-for="movie in moives"
        :key="movie.imdbID" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
  components: {
    MovieItem
  },
  data() {
    return {
      movies: []
    }
  }
}
</script>