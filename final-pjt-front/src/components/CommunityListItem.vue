<template>
  <div>
    <h1>CommunityListItem</h1>
    <h5>{{ review.id }}</h5>
    <p>작성자 : {{ review.username }}</p>
    <p>{{ review.title }}</p>
    <router-link
      :to="{ name: 'CommunityDetailView', params: { id: review.id } }"
    >
      [DETAIL]
    </router-link>
    <hr />
  </div>
</template>

<script>
export default {
  name: "CommunityListItem",
  props: {
    review: Object,
  },
};
</script>

<style>
</style>