import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    allMovieList: null,
  },
  getters: {
    
  },
  mutations: {
    GET_MOVIES(state, movies) {
      state.allMovieList = movies
    },
    ORDER_BY(state, movies) {
      state.allMovieList = movies
    }
  },
  actions: {
    getMovies(context) {
      const API_URL = "http://127.0.0.1:8000/movies/order/release_date/"

      axios({
        method: 'get',
        url: API_URL,
      })
        .then((res) => {
          context.commit("GET_MOVIES", res.data)
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // genre_id => string
    getGenreMovies(context, genre_id) {
      const API_URL = `http://127.0.0.1:8000/movies/genres/${genre_id}/`

      axios({
        method: 'get',
        url: API_URL,
      })
        .then((res) => {
          console.log(res.data, context, genre_id)
          context.commit("ORDER_BY", res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // 인기순 최신순 평점순 영화 요청
    orderedBy(context, item) {
      const API_URL = `http://127.0.0.1:8000/movies/order/${item}/`

      axios({
        method: 'get',
        url: API_URL,
      })
        .then((res) => {
          console.log(res.data)
          context.commit("ORDER_BY", res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
