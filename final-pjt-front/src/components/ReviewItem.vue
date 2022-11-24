<template>
  <div>
    <div class="card_container">
      <div class="card">
        <div class="box">
          <div class="content">
            <h2>{{ myreview.id }}</h2>
            <h3>{{ myreview.title }}</h3>
            <p>{{ myreview.content }}</p>
            <a href="#">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewItem",
  props: {
    myreview: Object,
  },
};
</script>

<style>
</style>