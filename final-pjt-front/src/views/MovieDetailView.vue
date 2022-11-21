<template>
  <div>
    {{ movieDetail }}
    
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'MovieDetailView',
  data() {
    return {
      movieDetail: null,
    }
  },
  methods: {
    movie() {
      const movie_id = this.$route.params.id
      const API_URL = `http://127.0.0.1:8000/movies/detail/${movie_id}/`
      
      axios({
        method: 'get',
        url: API_URL
      })
        .then((res) => {
          console.log(res)
          this.movieDetail = res
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  created() {
    this.movie()
  }
}

</script>

<style>


</style>