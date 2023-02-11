import { createStore } from 'vuex'
import movie from './movie' // index.js 생략
import about from './about' // index.js 생략

export default createStore ({
  modules: {
    movie,
    about
  }
})