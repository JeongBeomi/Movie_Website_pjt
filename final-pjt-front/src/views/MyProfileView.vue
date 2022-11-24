<template>
  <div>
    <hr />
    <h1>Hello! {{ myinfo.username }} user</h1>
    <br />
    <br />
    <br />
    <h3>My Review</h3>
    <ReviewItem
      v-for="myreview in myreviews"
      :key="myreview.id"
      :myreview="myreview"
    />
  </div>
</template>

<script>
import axios from "axios";
import ReviewItem from "@/components/ReviewItem";

const Django_URL = "http://127.0.0.1:8000";

export default {
  name: "MyProfileView",

  components: {
    ReviewItem,
  },
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