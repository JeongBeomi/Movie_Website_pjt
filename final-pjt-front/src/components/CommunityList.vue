<template>
  <div>
    <h1>CommunityList</h1>
    <CommunityListItem
      v-for="review in reviews"
      :key="review.id"
      :review="review"
    />
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
</style>