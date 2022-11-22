<template>
  <div>
    <h1>COMMUNITY</h1>
    <router-link :to="{ name: 'CommunityCreateView' }">[CREATE]</router-link>
    <hr>
    <CommunityList />
  </div>
</template>

<script>
import CommunityList from "@/components/CommunityList";

export default {
  name: "CommunityView",
  components: {
    CommunityList,
  },
  computed:{
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  created() {
    this.getReviews()
  },
  methods: {
    getReviews() {
      if (this.isLogin === true) { 
        this.$store.dispatch('getReviews')
      } else {
        alert('로그인이 필요한 서비스 입니다.')
        this.$router.push({ name: 'LogInView'})
      }
    }
  }

};
</script>

<style>
</style>