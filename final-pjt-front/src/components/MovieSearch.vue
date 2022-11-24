<template>
  <div>
    <!-- <input type="text" placeholder="검색" style="width: 80%">
    <button >search</button> -->
    <div class="search-box">
      <button class="btn-search"><i class="fa fa-search" aria-hidden="true"></i></button>
      <input type="text" v-model="searchword" class="input-search" placeholder="Type to Search..." @keyup.enter="searchMovie">
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieSearch',
  data() {
    return {
      searchword: "",
    }
  },
  methods: {
    searchMovie() {
      const searchword = this.searchword
      console.log(this.searchword)
      this.$store.dispatch('searchMovie', searchword)
    }
  },
}
</script>

<style>
@import "../assets/css/search.css";
</style>