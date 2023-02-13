import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

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
    async searchMovies({ state, commit }, payload) {
      const { title, type, number, year } = payload
      const OMDB_API_KEY = '7035c60c'
      
      const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=1`)
      const { Search, totalResults } = res.data
      commit('updateState', {
        movies: _uniqBy(Search, 'imdbID')
      })
      console.log(totalResults) 
      console.log(typeof totalResults)

      const total = parseInt(totalResults, 10)
      const pageLength = Math.ceil(total / 10)

      // 추가 요청
      if (pageLength > 1) {
        for (let page = 2; page <= pageLength; page += 1 ) {
          // 영화를 최대 30개까지만 가져오도록 if 사용
          if (page > (number / 10)) break
          const res = await axios.get(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`)
          const { Search } = res.data
          commit('updateState', {
            movies: [
              ...state.movies, 
              ..._uniqBy(Search, 'imdbID')]
          })
        }
      }
    }
  }
}