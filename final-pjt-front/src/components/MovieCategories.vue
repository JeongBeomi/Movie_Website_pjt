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
          <label for="popup">
            <MovieCategoriesItem
              :movie="movie"
              @movie-to-modal="movieToModal"
            />
          </label>
        </b-col>
      </b-row>
    </b-container>

    <!-- modal detail -->
    <!-- @click="$bvModal.show('modal-scoped')" -->

    <!-- <b-button @click="$bvModal.show('modal-scoped')">Open Modal</b-button> -->

    <!-- <b-modal id="modal-scoped">
      <template #modal-header="{}">
        <div class="video">
          <iframe
            :src="detailvideo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            loop
          ></iframe>
        </div>
      </template>
      <template>
        <h1>{{ movieDetail.title }}</h1>
      </template>

      <template #modal-footer="{ close }">
        <b-button size="sm" variant="danger" @click="close()"> Back </b-button>
      </template>
    </b-modal> -->

    <!-- 지리는 딧테일 -->
    <input type="checkbox" id="popup" />
    <div>
      <div>
        <div class="movie-card">
          <div class="container">
            <!-- <a href="#"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg" alt="cover" class="cover" /></a> -->

            <div class="hero">
              <iframe
                :src="detailvideo"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loop="10"
              ></iframe>
              <div class="details">
                <div class="title1">{{ movieDetail.title }}</div>
                <!-- <div class="title2">The Battle of the Five Armies</div>     -->
                <fieldset class="rating">
                  <input
                    type="radio"
                    id="star5"
                    name="rating"
                    value="5"
                  /><label
                    class="full"
                    for="star5"
                    title="Awesome - 5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4half"
                    name="rating"
                    value="4 and a half"
                  /><label
                    class="half"
                    for="star4half"
                    title="Pretty good - 4.5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star4"
                    name="rating"
                    value="4"
                    checked
                  /><label
                    class="full"
                    for="star4"
                    title="Pretty good - 4 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star3half"
                    name="rating"
                    value="3 and a half"
                  /><label
                    class="half"
                    for="star3half"
                    title="Meh - 3.5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star3"
                    name="rating"
                    value="3"
                  /><label
                    class="full"
                    for="star3"
                    title="Meh - 3 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star2half"
                    name="rating"
                    value="2 and a half"
                  /><label
                    class="half"
                    for="star2half"
                    title="Kinda bad - 2.5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star2"
                    name="rating"
                    value="2"
                  /><label
                    class="full"
                    for="star2"
                    title="Kinda bad - 2 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star1half"
                    name="rating"
                    value="1 and a half"
                  /><label
                    class="half"
                    for="star1half"
                    title="Meh - 1.5 stars"
                  ></label>
                  <input
                    type="radio"
                    id="star1"
                    name="rating"
                    value="1"
                  /><label
                    class="full"
                    for="star1"
                    title="Sucks big time - 1 star"
                  ></label>
                  <input
                    type="radio"
                    id="starhalf"
                    name="rating"
                    value="half"
                  /><label
                    class="half"
                    for="starhalf"
                    title="Sucks big time - 0.5 stars"
                  ></label>
                </fieldset>
                <!-- <span class="likes">109 likes</span> -->
              </div>
              <!-- end details -->
            </div>
            <!-- end hero -->
            <!-- <div class="description">
              <div
                class="column1"
                v-for="genre in movieDetail.genres"
                :key="genre.id"
              >
                <span class="tag">{{ genre.name }}</span>
              </div>
               end column1 -->
            <!-- <div class="column2"> -->
            <!-- <p>
                  {{movieDetail.}} <a href="#">read more</a>
                </p> -->
            <!-- <div class="avatars">
                  <a href="#" data-tooltip="Person 1" data-placement="top">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
                  </a>
                  <a href="#" data-tooltip="Person 2" data-placement="top">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
                  </a>
                  <a href="#" data-tooltip="Person 3" data-placement="top">
                    <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
                  </a>
                </div> end avatars -->
            <!-- </div> -->
            <!-- end column2 -->
            <!-- </div> -->
            <!-- end description -->
          </div>
          <!-- end container -->
        </div>
        <!-- end movie-card -->
      </div>
      <label for="popup"></label>
    </div>
  </div>
</template>

<script>
import MovieCategoriesItem from "@/components/MovieCategoriesItem";
import axios from "axios";

export default {
  name: "MovieCategories",
  components: {
    MovieCategoriesItem,
  },
  data() {
    return {
      genre: "Genre",
      movieDetail: "",
      backdrop_path: null,
      detailvideo: null,
    };
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
      this.genre = event.target.textContent;
      this.getGenreMovies(event.target.id);
    },
    orderedBy(event) {
      this.genre = "Genre";
      this.$store.dispatch("orderedBy", event.target.value);
    },
    movieToModal(movie_id) {
      axios({
        method: "get",
        url: `http://127.0.0.1:8000/movies/detail/${movie_id}/`,
      })
        .then((res) => {
          // console.log(res.data);
          // console.log(typeof(res.data))
          this.movieDetail = res.data;
          this.backdrop_path = res.data.backdrop_path;
        })
        .catch((err) => {
          console.log(err);
        });

      axios({
        method: "get",
        url: `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=d1d99f07a889e254f0bdcbf18c0530bb&language=ko-KR`,
      })
        .then((res) => {
          console.log(res.data.results[0].key);
          this.detailvideo = `https://www.youtube.com/embed/${res.data.results[0].key}?rel=0&amp;autoplay=1&mute=1;loop=1`;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {},
};
</script>

<style>
/* 기울이기 핵심기술 */
/* transform: skewY(-2.2deg); */

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

.modal-scoped {
  text-align: center;
}

.modal {
  padding: 20px;
}

.modal-dialog {
  max-width: none;
}

.modal-content {
  width: 60%;
  margin: 4px auto;
}

/* iframe {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -100;
  background: url(polina.jpg) no-repeat;
  background-size: cover;
} */

iframe {
  position: absolute;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

iframe + div {
  width: 10;
}

/* img {
  width: 50vw;
} */

.modal-header {
  padding: 0px;
  height: 50%;
}

.video {
  width: 1930px;
  height: 700px;
  overflow: hidden;
}

/* 지리는 딧테일 */
input[type="checkbox"] {
  display: none;
  box-sizing: border-box;
  padding: 0;
}

input[id="popup"] {
  display: none;
}

/* modal 창 배경*/
input[id="popup"] + div,
input[id="popup"]:checked + div {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}

input[id="popup"] + div {
  display: none;
}

input[id="popup"]:checked + div {
  display: block;
}

/* modal 창 내용 */
input[id="popup"] + div > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 57%;
  height: 70%;
  background: #232323;
  z-index: 2;
}

input[id="popup"] + div > label {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgbe(0, 0, 0, 0.9);
  z-index: 1;
}

.movie-card .container {
  width: 100%;
  margin: 0;
}
</style>

<style lang='scss'>
@import "../assets/css/movieDetail.scss";
</style>