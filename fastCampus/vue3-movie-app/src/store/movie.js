export default {
  // module
  namespaced: true,
  // data
  state: () => ({
    movies: []
  }),
  // computed
  getters: {
    movieIds(state) {
      return state.movies.map(m => m.imdbID)
    }
  },
  // methods
  // 변이
  mutations: {
    resetMovies(state) {
      state.movies = [] // 빈 배열로 초기화
    }
  },
  // 비동기
  actions: {
    searchMovies() {
    }
  }
}