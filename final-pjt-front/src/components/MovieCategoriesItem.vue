<template>
  <!-- <div @click="toMovieDetail(movie.id)">
    <div class="card mx-auto" style="width:18em; height:30rem">
    <img :src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path" alt="" style="height:20em">
    <div class="card-body">
      <h2 class="card-title">{{ movie.title }}</h2>
       <p class="card-text">{{ movie.overview }}</p> -->
  <!-- </div>
    <hr>
  </div>
  </div> -->

  <div class="container" @click="toMovieDetail(movie.id)">
    <div class="card">
      <div class="imgBx">
        <img :src="'http://image.tmdb.org/t/p/w500/' + movie.poster_path" />
      </div>
      <div class="contentBx">
        <h3>{{ movie.title }}</h3>
        <div class="size">
          <h4>평점 :</h4>
          <span>{{ movie.vote_average }}</span>
        </div>
        <!-- <div class="size">
          <h3>평점 :</h3>
          <span>{{ movie.vote_average }}</span>
        </div>
        <div class="size">
          <h3>평점 :</h3>
          <span>{{ movie.vote_average }}</span>
        </div> -->
        <!-- <div class="color">
        <h3>Color :</h3>
        <span></span>
        <span></span>
        <span></span>
      </div> -->
        <!-- <a href="#">Buy Now</a> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCategoriesItem",
  props: {
    movie: Object,
  },
  methods: {
    toMovieDetail(movie_id) {
      this.$router.push({ name: "movieDetail", params: { id: movie_id } });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #131313;
}

.container {
  position: relative;
  
  padding: 0px;
  margin: 4px;
}

.container .card {
  position: relative;
  width: 290px;
  height: 420px;
  margin: 0px;
  background: #232323;
  border-radius: 20px;
  overflow: hidden;
}

.container .card:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /* background: #9bdc28; */
  /* clip-path: circle(150px at 80% 20%); */
  transition: 0.5s ease-in-out;
}
/* 
.container .card:hover:before {
  clip-path: circle(300px at 80% -20%);
} */

.container .card:after {
  content: "";
  position: absolute;
  top: 30%;
  left: -20%;
  font-size: 12em;
  font-weight: 800;
  font-style: italic;
  color: rgba(255, 255, 25, 0.05);
}

.container .card .imgBx {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 3;
  width: 100%;
  height: 220px;
  transition: 0.5s;
}

.container .card:hover .imgBx {
  top: 0%;
  transform: translateY(0%);
}

.container .card .imgBx img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 270px;
}

.container .card .contentBx {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 0px;
  text-align: center;
  transition: 1s;
  z-index: 2;
}

.container .card:hover .contentBx {
  height: 100px;
}

.container .card .contentBx h3 {
  position: relative;
  font-weight: 600;
  letter-spacing: 1px;
  color: #fff;
  margin: 0;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  transition: 0.5s;
  opacity: 0;
  visibility: hidden;
  padding-top: 0;
  padding-bottom: 0;
}

.container .card:hover .contentBx .size {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.5s;
}

.container .card:hover .contentBx .color {
  opacity: 1;
  visibility: visible;
  transition-delay: 0.6s;
}

.container .card .contentBx .size h4,
.container .card .contentBx .color h4 {
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-right: 10px;
}

.container .card .contentBx .size span {
  width: 26px;
  height: 26px;
  text-align: center;
  line-height: 26px;
  font-size: 14px;
  display: inline-block;
  color: #111;
  background: #fff;
  margin: 0 5px;
  transition: 0.5s;
  color: #111;
  border-radius: 4px;
  cursor: pointer;
}

.container .card .contentBx .size span:hover {
  background: #9bdc28;
}

.container .card .contentBx .color span {
  width: 20px;
  height: 20px;
  background: #ff0;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.container .card .contentBx .color span:nth-child(2) {
  background: #9bdc28;
}

.container .card .contentBx .color span:nth-child(3) {
  background: #03a9f4;
}

.container .card .contentBx .color span:nth-child(4) {
  background: #e91e63;
}

.container .card .contentBx a {
  display: inline-block;
  padding: 10px 20px;
  background: #fff;
  border-radius: 4px;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  color: #111;
  opacity: 0;
  transform: translateY(50px);
  transition: 0.5s;
  margin-top: 0;
}

.container .card:hover .contentBx a {
  opacity: 1;
  transform: translateY(0px);
  transition-delay: 0.75s;
}
</style>