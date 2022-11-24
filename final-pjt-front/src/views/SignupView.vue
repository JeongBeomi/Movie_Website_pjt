<template>
  <div>
    <form class="form" @submit.prevent="signUp">
      <div class="title">SIGNUP</div>
      <div class="subtitle">Welcome! Let's create your account!</div>
      <div class="input-container ic1">
        <input
          id="username"
          class="input"
          type="text"
          v-model="username"
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="username" class="placeholder">User ID</label>
      </div>
      <div class="input-container ic2">
        <input
          id="password1"
          class="input"
          type="password"
          v-model="password1"
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="password1" class="placeholder">password1</label>
      </div>
      <div class="input-container ic2">
        <input
          id="password2"
          class="input"
          type="password"
          v-model="password2"
          placeholder=" "
        />
        <div class="cut"></div>
        <label for="password2" class="placeholder">password2</label>
      </div>
      <input type="submit" class="submit" value="Submit" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SignUpView",
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
      email: null,
    };
  },
  methods: {
    signUp() {
      const username = this.username;
      const password1 = this.password1;
      const password2 = this.password2;

      const payload = {
        username: username,
        password1: password1,
        password2: password2,
      };

      this.$store.dispatch("signUp", payload);
    },
  },
};
</script>
