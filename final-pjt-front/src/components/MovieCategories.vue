<template>
  <div>
    <div class="movieMenu">
      <b-button>최신순</b-button>
      <b-button>평점순</b-button>
      <b-button>인기순</b-button>
      <b-dropdown class="mx-0" right text="Genre">
        <b-dropdown-item @click="clickedGenre($event)" value="action">action</b-dropdown-item>
        <b-dropdown-item @click="clickedGenre($event)" value="romance">romance</b-dropdown-item>
        <b-dropdown-item @click="clickedGenre($event)" value="drama">drama</b-dropdown-item>
      </b-dropdown>
    </div>
    
    <b-container style="width: 80em">
      <b-row>
        <b-col cols="4" v-for="movie in movies" :key="movie.id">
          <MovieCategoriesItem :movie="movie"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MovieCategoriesItem from '@/components/MovieCategoriesItem'

export default {
  name: 'MovieCategories',
  components: {
    MovieCategoriesItem,
  },
  data() {
    return {
      movies: this.$store.state.allMovieList,
    }
  },
  methods: {
    getGenreMovies(genre) {
      this.$store.dispatch("getGenreMovies", genre)
    },
    clickedGenre(event) {
      this.getGenreMovies(event.target.textContent)
    }
  },
  create() {

  }
}
</script>

<style>
.movieMenu {
  text-align: left;
  padding: 0px 0px 0px 10px;
}

</style>