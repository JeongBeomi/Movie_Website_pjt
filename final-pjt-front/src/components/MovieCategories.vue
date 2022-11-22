<template>
  <div class="movies">
    <!-- movie order -->
    <div class="order">
      <b-button @click="orderedBy($event)" value="release_date"
        >최신순</b-button
      >
      <b-button @click="orderedBy($event)" value="vote_average"
        >평점순</b-button
      >
      <b-button @click="orderedBy($event)" value="popularity">인기순</b-button>
      <b-dropdown class="mx-0" right :text="genre">
        <b-dropdown-item @click="clickedGenre($event)" id="28"
          >action</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="12"
          >adventure</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="16"
          >animation</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="35"
          >comedy</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="80"
          >crime</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="99"
          >documentary</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="18"
          >drama</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="10751"
          >family</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="14"
          >fantasy</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="36"
          >history</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="27"
          >horror</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="10402"
          >music</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="9648"
          >mystery</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="10749"
          >romance</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="878"
          >SF</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="10770"
          >TV movie</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="53"
          >thriller</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="10752"
          >war</b-dropdown-item
        >
        <b-dropdown-item @click="clickedGenre($event)" id="37"
          >western</b-dropdown-item
        >
      </b-dropdown>
    </div>
    <!-- movie -->
    <b-container>
      <b-row>
        <b-col v-for="movie in movies" :key="movie.id">
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
  data() {
    return {
      genre: "Genre",
    }
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
      this.genre = event.target.textContent
      this.getGenreMovies(event.target.id);
    },
    orderedBy(event) {
      this.genre = "Genre"
      this.$store.dispatch("orderedBy", event.target.value);
    },
  },
  created() {},
};
</script>

<style>
.movies {
  padding: 6px;
}

.order {
  text-align: left;
}

div .container {
  margin: 4px;
}

.row {
  width: 80vw;
}

.col {
  padding: 0px;
  width: 290px;
  height: 420px;
  margin: 0px 5px;
}
</style>