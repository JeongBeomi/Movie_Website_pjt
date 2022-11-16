<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <MovieFavoriteItem

      />
    </b-carousel>
  </div>
</template>

<script>
import MovieFavoriteItem from '@/components/MovieFavoriteItem'

export default {
  name: 'MoviePosters',
  components: {
    MovieFavoriteItem,
  },
}
</script>

<style>
  
</style>