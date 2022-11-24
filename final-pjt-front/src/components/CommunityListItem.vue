<template>
  <div>
    <!-- <h5>{{ review.id }}</h5>
    <p>작성자 : {{ review.username }}</p>
    <p>{{ review.title }}</p> -->
    <router-link
      :to="{ name: 'CommunityDetailView', params: { id: review.id } }"
    >
    </router-link>
    <hr />

    <div class="container" @click="toDetail()" id="community">
      <div class="card">
        <div class="card__header">
          <img
            :src="randImg"
            alt="card__image"
            class="card__image"
            width="600"
          />
        </div>
        <div class="card__body">
          <span class="tag tag-blue">Technology</span>
          <h4>{{ review.title }}</h4>
        </div>
        <div class="card__footer">
          <div class="user">
            <img
              src="https://cdn.huffingtonpost.kr/news/photo/201808/73250_139472.jpeg"
              alt="user__image"
              class="user__image"
              width="50"
            />
            <div class="user__info">
              <h5>{{ review.username }}</h5>
              <small>2h ago</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommunityListItem",
  props: {
    review: Object,
  },
  computed: {
    randImg() {
      console.log(this.review.id);
      const id = this.review.id % 3;
      const imgList = [
        "https://source.unsplash.com/600x400/?computer",
        "https://source.unsplash.com/600x400/?food",
        "https://source.unsplash.com/600x400/?car,automobile",
      ];
      return imgList[id];
    },
  },
  methods: {
    toDetail() {
      console.log(this.review.id);
      this.$router.push({
        name: "CommunityDetailView",
        params: { id: this.review.id },
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap");

.container[id="community"] {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin-block: 2rem;
  gap: 2rem;
}

img {
  max-width: 100%;
  display: block;
  object-fit: cover;
}

.card {
  display: flex;
  flex-direction: column;
  width: clamp(20rem, calc(20rem + 2vw), 22rem);
  overflow: hidden;
  box-shadow: 0 0.1rem 1rem rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  background: #ece9e6;
  background: linear-gradient(to right, #ffffff, #ece9e6);
}

.card__body {
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.tag {
  align-self: flex-start;
  padding: 0.25em 0.75em;
  border-radius: 1em;
  font-size: 0.75rem;
}

.tag + .tag {
  margin-left: 0.5em;
}

.tag-blue {
  background: #56ccf2;
  background: linear-gradient(to bottom, #2f80ed, #56ccf2);
  color: #fafafa;
}

.tag-brown {
  background: #d1913c;
  background: linear-gradient(to bottom, #ffd194, #d1913c);
  color: #fafafa;
}

.tag-red {
  background: #cb2d3e;
  background: linear-gradient(to bottom, #ef473a, #cb2d3e);
  color: #fafafa;
}

.card__body h4 {
  font-size: 1.5rem;
  text-transform: capitalize;
}

.card__footer {
  display: flex;
  padding: 1rem;
  margin-top: auto;
}

.user {
  display: flex;
  gap: 0.5rem;
}

.user__image {
  border-radius: 50%;
}

.user__info > small {
  color: #666;
}
</style>