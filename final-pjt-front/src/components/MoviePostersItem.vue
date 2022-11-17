<template>
  <b-carousel-slide
    :img-src="'http://image.tmdb.org/t/p/w500/'+ movie.poster_path"
  ></b-carousel-slide>
</template>

<script>
export default {
  name: 'MoviePosterItem',
  props: {
    movie: Object,
  },
}
</script>

<style>

</style>