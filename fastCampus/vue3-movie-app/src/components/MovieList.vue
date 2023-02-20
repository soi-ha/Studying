<template>
  <div class="container">
    <div class="inner">
      <div class="message">
        {{ message }}
      </div>
      <MovieItem
        v-for="movie in movies"
        :key="movie.imdbID" 
        :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieItem from '~/components/MovieItem'
export default {
  components: {
    MovieItem
  },
  computed: {
    movies() {
      return this.$store.state.movie.movies
      // store에 접근해서 스토어의 state(상태)중에 
      // movie 모듈에 접근하여 moives 데이터를 가져와서 moives라는 계산된 메소드에 사용한다.
    },
    message() {
      return this.$store.state.movie.message
    }
  }
}
</script>