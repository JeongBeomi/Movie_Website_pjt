<template>
  <div>
    <body>
      <div class="area"></div>
      <nav class="main-menu">
        <ul class="pos">
          <li @click="movies">
            <router-link to="/" >
              <i class="fa fa-home fa-2x"></i>                    
              <span class="nav-text">
                Home
              </span>
            </router-link>
          </li>
          <li>
            <router-link v-if="isLogin===false" to="/login">
              <i class="fa fa-laptop fa-2x"></i>
              <span class="nav-text">
                Login
              </span>                    
            </router-link>
            <a v-else @click.prevent="logOut" href="#">
              <i class="fa fa-laptop fa-2x"></i>
              <span class="nav-text">
                Logout
              </span>                    
            </a>                  
          </li>
          <li class="has-subnav">
            <router-link v-if="isLogin===false" to="/signup">
              <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">
                Signup
              </span>
            </router-link>
            <router-link v-else :to="{ name: 'MyProfileView' }">
              <i class="fa fa-list fa-2x"></i>
              <span class="nav-text">
                MyProfile
              </span>
            </router-link>
          </li>
          <li class="has-subnav">
            <router-link :to="{ name: 'CommunityView' }">                    
              <i class="fa fa-folder-open fa-2x"></i>
              <span class="nav-text">
                Community
              </span>
            </router-link>
          </li>
        </ul>
      </nav>
    </body>
  </div>     
</template>

<script>
export default {
  name: "NavBar",

  computed: {
    isLogin() {
      return this.$store.getters.isLogin
    }
  },
  methods: {
    logOut() {
      this.$store.commit('DELETE_TOKEN')      
    },
    movies() {
      this.$store.dispatch("getMovies")
    }
  },
}  

</script>

<style>

</style>