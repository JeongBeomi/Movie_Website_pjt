<template>
  <div>
    <div class="card mx-auto" style="width:18em; height:30rem">
    <img :src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path" alt="" style="height:20em">
    <div class="card-body">
      <h5 class="card-title">{{ movie.title }}</h5>
      <p class="card-text">{{ movie.overview }}</p>
    </div>
    <hr>
  </div>
  </div>
</template>

<script>
export default {
  name: 'MovieCategoriesItem',
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>