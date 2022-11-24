import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import createPersistedState from 'vuex-persistedstate'


Vue.use(Vuex)

const Django_URL = 'http://127.0.0.1:8000'

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    allMovieList: null,
    token: null,
    reviews: [],
  },
  getters: {
    isLogin(state) {
      return state.token ? true : false
    }
  },
  mutations: {
    SAVE_TOKEN(state, token) {
      state.token = token
      router.push({ name: 'home' })
    },
    DELETE_TOKEN(state) {
      state.token = null
      router.push({ name: 'home' }).catch(() => { })
    },
    GET_REVIEWS(state, reviews) {
      state.reviews = reviews
    },
    GET_MOVIES(state, movies) {
      state.allMovieList = movies
    },
    ORDER_BY(state, movies) {
      state.allMovieList = movies
    },

  },
  actions: {
    signUp(context, payload) {
      axios({
        method: 'post',
        url: `${Django_URL}/accounts/signup/`,
        data: {
          username: payload.username,
          password1: payload.password1,
          password2: payload.password2,
        }
      })
        .then((res) => {
          // console.log(res)
          console.log("gd")
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })

    },

    logIn(context, payload) {
      axios({
        method: 'post',
        url: `${Django_URL}/accounts/login/`,
        data: {
          username: payload.username,
          password: payload.password,
        }
      })
        .then((res) => {
          // console.log(res)
          context.commit('SAVE_TOKEN', res.data.key)
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getReviews(context) {
      axios({
        method: 'get',
        url: `${Django_URL}/community/`,
        headers: {
          Authorization: `Token ${context.state.token}`
        }
      })
        .then((res) => {
          // console.log(res, context)
          // console.log(res.data)
          context.commit('GET_REVIEWS', res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    },

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
    searchMovie(context, searchword) {
      console.log(searchword)
      axios({
        method: 'get',
        url: `${Django_URL}/movies/search/`,
        params: {
          searchword: searchword,
        }
      })
        .then((res) => {
          console.log(res)
          context.commit('GET_MOVIES', res.data)
        })
        .catch((err) => {
          console.log(err)
        })      
    }
  },
  modules: {
  }
})
