<template>
  <div id="app">
    <div class="menu">
      logo
      <nav>
        <router-link to="/">Home</router-link>
        <hr />
        <router-link v-if="isLogin === false" to="/login">Login</router-link>
        <a v-else @click.prevent="logOut">Logout</a>
        <hr />
        <router-link v-if="isLogin === false" to="/signup">Signup</router-link>
        <router-link v-else :to="{ name: 'MyProfileView' }">MyPage</router-link>
        <hr />
        <router-link :to="{ name: 'CommunityView' }">Community</router-link>
      </nav>
    </div>
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logOut() {
      this.$store.commit("DELETE_TOKEN");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@keyframes text-pop-up-top {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: none;
  }
  100% {
    -webkit-transform: translateY(-50px);
    transform: translateY(-50px);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    text-shadow: 0 1px 0 #cccccc, 0 2px 0 #cccccc, 0 3px 0 #cccccc,
      0 4px 0 #cccccc, 0 5px 0 #cccccc, 0 6px 0 #cccccc, 0 7px 0 #cccccc,
      0 8px 0 #cccccc, 0 9px 0 #cccccc, 0 50px 30px rgba(0, 0, 0, 0.3);
  }
}

nav {
  padding: 30px;
  animation: text-pop-up-top 0.5s cubic-bezier;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.menu {
  float: left;
  width: 10%;
}

.content {
  float: left;
  width: 85%;
}
</style>


