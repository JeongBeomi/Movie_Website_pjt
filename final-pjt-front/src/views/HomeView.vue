<template>
  <div>
    <MovieSearch/>
    <!-- <MoviePosters/> -->
    <MovieCategories/>
    <!-- <MovieFavorite/> -->
  </div>
</template>

<script>
import MovieSearch from '@/components/MovieSearch'
// import MoviePosters from '@/components/MoviePosters'
import MovieCategories from '@/components/MovieCategories'
// import MovieFavorite from '@/components/MovieFavorite'

export default {
  name: 'HomeView',
  components: {
    MovieSearch,
    // MoviePosters,
    MovieCategories,
    // MovieFavorite,
  },
  
  methods: {
    movies() {
      this.$store.dispatch("getMovies")
    }
  },
  created() {
    this.movies()
  },
}
</script>

<style>
  
</style>