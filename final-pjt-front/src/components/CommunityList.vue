<template>
  <div class="communityList">
    <!-- <h1>CommunityList</h1> -->
    <b-container>
      <b-row>
        <b-col
          cols="3"
          v-for="review in reviews"
          :key="review.id"
          id="community"
        >
          <CommunityListItem :review="review" />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CommunityListItem from "@/components/CommunityListItem";

export default {
  name: "CommunityList",
  components: {
    CommunityListItem,
  },
  computed: {
    reviews() {
      return this.$store.state.reviews;
    },
  },
};
</script>

<style>
.communityList {
  position: absolute;
  top: 463%;
}
</style>