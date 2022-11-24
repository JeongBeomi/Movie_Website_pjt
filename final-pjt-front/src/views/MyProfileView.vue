<template>
  <div>
    <div class="infocardContainer">
      <div id="main">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ea/Dog_coat_variation.png"
        />
      </div>
      <div id="textbois">
        <h2>Emil Alicic</h2>
        <h4>Professional Memeologist</h4>
        <a href="mailto:limecicila@gmail.com">limecicila@gmail.com</a>
        <div id="hotlinks">
          <a href="https://codepen.io/LIMESTA"
            ><img
              id="codepenio"
              src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
              target="_blank"
            />
          </a>
          <a href="https://codepen.io/LIMESTA">
            <img
              id="codepenio"
              src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
              target="_blank"
            />
          </a>
          <a href="https://codepen.io/LIMESTA">
            <img
              id="codepenio"
              src="https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Small.png"
              target="_blank"
            />
          </a>
        </div>
      </div>
    </div>
    <hr />
    <h1>profile</h1>
    <p>{{ myinfo }}</p>
    <p>{{ myreviews }}</p>
  </div>
</template>

<script>
import axios from "axios";

const Django_URL = "http://127.0.0.1:8000";

export default {
  name: "MyProfileView",
  data() {
    return {
      myinfo: "",
      myreviews: "",
    };
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.getProfile();
  },
  methods: {
    getProfile() {
      if (this.isLogin === true) {
        axios({
          method: "get",
          url: `${Django_URL}/accounts/user`,
          headers: {
            Authorization: `Token ${this.$store.state.token}`,
          },
        })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            this.myinfo = res.data;
            this.getReview();
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("로그인이 필요한 서비스 입니다.");
        this.$router.push({ name: "LogInView" });
      }
    },
    getReview() {
      if (this.isLogin === true) {
        axios({
          method: "get",
          url: `${Django_URL}/community/my_review/${this.myinfo.pk}`,
        })
          .then((res) => {
            console.log(res);
            console.log(res.data);
            this.myreviews = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        alert("로그인이 필요한 서비스 입니다.");
        this.$router.push({ name: "LogInView" });
      }
    },
  },
};
</script>

<style>
@import "../assets/css/profile.css";
</style>