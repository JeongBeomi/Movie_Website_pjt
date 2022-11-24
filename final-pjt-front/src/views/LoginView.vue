<template>
  <div>
    <form class="form" @submit.prevent="logIn">
      <div class="title">LOGIN</div>
      <div class="subtitle">Welcome! Let's go movieworld!</div>
      <div class="input-container ic1">
        <input id="username" class="input" type="text" v-model="username" placeholder=" " />
        <div class="cut"></div>
        <label for="username" class="placeholder">User ID</label>
      </div>
      <div class="input-container ic2">
        <input id="password" class="input" type="password" v-model="password" placeholder=" " />
        <div class="cut"></div>
        <label for="password" class="placeholder">Password</label>
      </div>
      <input type="submit" class="submit" value="LogIn">
    </form>

    <!-- <form @submit.prevent="logIn">
      <label for="username">username : </label>
      <input type="text" id="username" v-model="username" /><br />

      <label for="password"> password : </label>
      <input type="password" id="password" v-model="password" /><br />

      <input type="submit" value="logIn" />
    </form> -->
  </div>
</template>

<script>
export default {
  name: "LogInView",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    logIn() {
      const username = this.username;
      const password = this.password;

      const payload = {
        username: username,
        password: password,
      };
      this.$store.dispatch("logIn", payload);
    },
  },
};
</script>

<style>
  
</style>
