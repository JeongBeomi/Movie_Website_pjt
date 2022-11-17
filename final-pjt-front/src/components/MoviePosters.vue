<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <MoviePostersItem 
      v-for="movie in movies" 
      :key="movie.id"
      :movie = "movie"
    />
    </b-carousel>
  </div>
</template>

<script>
import MoviePostersItem from '@/components/MoviePostersItem'

export default {
  name: 'MoviePosters',
  components: {
    MoviePostersItem,
  },
  data() {
    return {
      movies: this.$store.state.allMovieList,
      slide: 0,
      sliding: null,
    }
  },
  methods: {
    onSlideStart() {
        this.sliding = true
    },
    onSlideEnd() {
      this.sliding = false
    },
  }
}
</script>

<style>
  
</style>