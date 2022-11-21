<template>
  <div>
    <div>
      <b-button @click="orderedBy($event)" value="release_date"
        >최신순</b-button
      >
      <b-button @click="orderedBy($event)" value="vote_average"
        >평점순</b-button
      >
      <b-button @click="orderedBy($event)" value="popularity">인기순</b-button>
      <b-dropdown class="mx-0" right text="Genre">
        <b-dropdown-item @click="clickedGenre($event)" id="28"
          >action</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="12"
          >adventure</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="16"
          >animation</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <!-- movie -->
    <b-container class="my-4">
      <b-row>
        <b-col class="my-1" cols="3" v-for="movie in movies" :key="movie.id">
          <MovieCategoriesItem :movie="movie" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MovieCategoriesItem from "@/components/MovieCategoriesItem";

export default {
  name: "MovieCategories",
  components: {
    MovieCategoriesItem,
  },
  computed: {
    movies() {
      return this.$store.state.allMovieList;
    },
  },
  methods: {
    getGenreMovies(genre) {
      this.$store.dispatch("getGenreMovies", genre);
    },
    clickedGenre(event) {
      this.getGenreMovies(event.target.id);
    },
    orderedBy(event) {
      this.$store.dispatch("orderedBy", event.target.value);
    },
  },
  created() {},
};
</script>

<style>
.left {
  text-align: left;
}
</style>