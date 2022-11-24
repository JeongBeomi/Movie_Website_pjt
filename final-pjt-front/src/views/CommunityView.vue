<template>
  <div id="communityView">
    <!-- <h1>COMMUNITY</h1> -->
    <!-- <router-link :to="{ name: 'CommunityCreateView' }">[CREATE]</router-link> -->
    <div class="communityFooter">
      <div class="createButton" @click="toCreate">
        <div class="flex-1 h-full">
          <div
            class="
              flex
              items-center
              justify-center
              flex-1
              h-full
              p-2
              border
              wine
              rounded-lg
            "
          >
            <div class="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr />
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
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
  },
  created() {
    this.getReviews();
    this.getRandomImg();
  },
  methods: {
    getReviews() {
      if (this.isLogin === true) {
        this.$store.dispatch("getReviews");
      } else {
        alert("로그인이 필요한 서비스 입니다.");
        this.$router.push({ name: "LogInView" });
      }
    },
    getRandomImg() {
      this.$store.dispatch("getRandomImg");
    },
    toCreate() {
      this.$router.push({ name: "CommunityCreateView" });
    },
  },
};
</script>

<style>
div[id="communityView"] {
  margin: auto;
}

.createButton {
  right: -8%;
  top: 197%;
  position: absolute;
  width: 4rem;
  height: 4rem;
}

.relative {
  color: #740000;
}

.wine {
  border: 1px solid #740000 !important;
}
</style>
