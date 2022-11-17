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
  },
  actions: {
    getMovies(context) {
      const API_URL = "https://api.themoviedb.org/3/movie/top_rated?api_key=d1d99f07a889e254f0bdcbf18c0530bb&language=ko-KR"

      axios({
        method: 'get',
        url: API_URL,
      })
        .then((res) => {
          context.commit("GET_MOVIES", res.data.results)
          console.log(res.data.results)
        })
        .catch((err) => {
          console.log(err)
        })
    },
    getGenreMovies(context, genre) {
      const API_URL = "https://api.themoviedb.org/3/genre/movie/list?api_key=d1d99f07a889e254f0bdcbf18c0530bb&language=ko-KR"

      axios({
        method: 'get',
        url: API_URL,
      })
        .then((res) => {
          console.log(res.data, context, genre)
        })
        .catch((err) => {
          console.log(err)
        })
    },
  },
  modules: {
  }
})
