import axios from 'axios'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: '',
    loading: false
  }),
  getters: {},
  mutations: {
    updateState(state, payload) {
      // ['movies', 'message', 'loading']
      Object.keys(payload).forEach(key => { // 새로운 배열데이터를 만들어냄
        state[key] = payload[key]
      })
    },
    resetMovies(state) {
      state.movies = [] // 빈 배열로 초기화
    }
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: Search
      })
    }
  }
}