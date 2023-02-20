import axios from 'axios'
import _uniqBy from 'lodash/uniqBy'

export default {
  namespaced: true,
  state: () => ({
    movies: [],
    message: 'Search for the movie title!',
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
      if (state.loading) return

      commit('updateState', {
        message: '',
        loading: true
      })

      try {
        const res = await _fetchMovie({
          ...payload,
          page: 1
        })
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
            if (page > (payload.number / 10)) break
            const res = await _fetchMovie({
              ...payload,
              page
            })
            const { Search } = res.data
            commit('updateState', {
              movies: [
                ...state.movies, 
                ..._uniqBy(Search, 'imdbID')]
            })
          }
        }
      } catch (message) {
        commit('updateState', {
          movies: [],
          message
        })
      } finally {
        commit('updateState', {
          loading: false
        })
      }
    }
  }
}

// 해당 내용이 복잡해질수록 재활욜성이 높아진다.
// 안에 내용들을 반복적으로 작성할 필요가 없다는 이야기니까.
function _fetchMovie(payload) {
  const { title, type, year, page } = payload
  const OMDB_API_KEY = '7035c60c'
  const url = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${title}&type=${type}&y=${year}&page=${page}`

  return new Promise((resolve, reject) => {
    axios.get(url)
      .then(res => {
        if (res.data.Error) {
          reject(res.data.Error)
        }
        resolve(res)
      })
      .catch(err => {
        reject(err.message)
      })
  })
}