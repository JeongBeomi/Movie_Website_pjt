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

.css-5brfx4 {
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 51;
  background: transparent;
  color: rgb(255, 255, 255);
  text-align: center;
  width: 100%;
  height: 62px;
  transition: background-color 200ms ease 0s;
}


.css-6k8tqb {
  display:none;
  position:fixed;
  top:0px;
  left:0;
  z-index:51;
  background:#fff;
  color:#fff;
  text-align:center;
  width:100%;
  height:62px;
  box-shadow:0 1px 0 0 rgba(0,0,0,0.08);
  -webkit-transition:background-color 200ms;
  transition:background-color 200ms;
  }
  /* @media (min-width:720px){.css-6k8tqb{display:block;}} */
</style>