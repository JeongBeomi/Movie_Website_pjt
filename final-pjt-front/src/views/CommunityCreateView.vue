<!-- views/CreateView.vue -->

<template>
  <div class="createDiv">
    <form @submit.prevent="createReview" @keyup.enter="createReview">
      <div class="omrs-input-group">
        <label class="omrs-input-underlined">
          <input v-model.trim="title" required />
          <span class="omrs-input-label">제목</span>
          <span class="omrs-input-helper">제목을 쓰시오</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <circle cx="15.5" cy="9.5" r="1.5" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
            />
          </svg>
        </label>
      </div>
      <div class="omrs-input-group">
        <label class="omrs-input-underlined-two">
          <input v-model="content" required />
          <span class="omrs-input-label">내용</span>
          <span class="omrs-input-helper">내용을 쓰시오</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path fill="none" d="M0 0h24v24H0V0z" />
            <circle cx="15.5" cy="9.5" r="1.5" />
            <circle cx="8.5" cy="9.5" r="1.5" />
            <path
              d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z"
            />
          </svg>
        </label>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

const API_URL = "http://127.0.0.1:8000";

export default {
  name: "CreateView",
  data() {
    return {
      title: null,
      content: null,
    };
  },
  methods: {
    createReview() {
      const title = this.title;
      const content = this.content;
      if (!title) {
        alert("제목을 입력해주세요");
        return;
      } else if (!content) {
        alert("내용을 입력해주세요");
        return;
      }
      axios({
        method: "post",
        url: `${API_URL}/community/`,
        data: {
          title: title,
          content: content,
        },
        headers: {
          Authorization: `Token ${this.$store.state.token}`,
        },
      })
        .then((res) => {
          console.log(res);
          this.$router.push({ name: "CommunityView" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
/** BEGIN: Non Openmrs CSS **/
@import url("https://fonts.googleapis.com/css?family=Roboto&display=swap");
* {
  font-family: "Roboto";
}

.createDiv {
  position: absolute;
  left: 0%;
  width: 100vw;
  height: 100vh;
  /* background-image: url(../assets/img/wallpaper.jpg); */
  background-repeat: no-repeat;
  background-size: contain;
}

.createDiv form {
  left: 35%;
  position: absolute;
  top: 24%;
}

h4.title {
  text-align: center;
  margin-bottom: 45px;
}
:root {
  --omrs-color-ink-lowest-contrast: rgba(47, 60, 85, 0.18);
  --omrs-color-ink-low-contrast: rgba(60, 60, 67, 0.3);
  --omrs-color-ink-medium-contrast: rgba(19, 19, 21, 0.6);
  --omrs-color-interaction: #740000;
  --omrs-color-interaction-minus-two: #673c3c;
  --omrs-color-danger: #b50706;
  --omrs-color-bg-low-contrast: #eff1f2;
  --omrs-color-ink-high-contrast: #121212;
  --omrs-color-bg-high-contrast: #ffffff;
}
/** END: Non Openmrs CSS **/
div.omrs-input-group {
  margin-bottom: 1.5rem;
  position: relative;
  width: 20.4375rem;
}

/* Input*/
.omrs-input-underlined > input,
.omrs-input-filled > input {
  border: none;
  border-bottom: 0.125rem solid var(--omrs-color-ink-medium-contrast);
  width: 100%;
  height: 3.6rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 0.5rem;
}

.omrs-input-underlined > input:focus,
.omrs-input-filled > input:focus {
  outline: none;
}

.omrs-input-underlined > .omrs-input-label,
.omrs-input-filled > .omrs-input-label {
  position: absolute;
  top: 0.9375rem;
  left: 0.875rem;
  line-height: 147.6%;
  color: var(--omrs-color-ink-medium-contrast);
  transition: top 0.2s;
}

.omrs-input-underlined > svg,
.omrs-input-filled > svg {
  position: absolute;
  top: 0.9375rem;
  right: 0.875rem;
  fill: var(--omrs-color-ink-medium-contrast);
}

.omrs-input-underlined > .omrs-input-helper,
.omrs-input-filled > .omrs-input-helper {
  font-size: 0.9375rem;
  color: var(--omrs-color-ink-medium-contrast);
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
}

.omrs-input-underlined > input:hover,
.omrs-input-filled > input:hover {
  background: var(--omrs-color-interaction-minus-two);
  border-color: var(--omrs-color-ink-high-contrast);
}

.omrs-input-underlined > input:focus + .omrs-input-label,
.omrs-input-underlined > input:valid + .omrs-input-label,
.omrs-input-filled > input:focus + .omrs-input-label,
.omrs-input-filled > input:valid + .omrs-input-label {
  top: 0;
  font-size: 0.9375rem;
  margin-bottom: 32px;
}

.omrs-input-underlined:not(.omrs-input-danger)
  > input:focus
  + .omrs-input-label,
.omrs-input-filled:not(.omrs-input-danger) > input:focus + .omrs-input-label {
  color: var(--omrs-color-interaction);
}

.omrs-input-underlined:not(.omrs-input-danger) > input:focus,
.omrs-input-filled:not(.omrs-input-danger) > input:focus {
  border-color: var(--omrs-color-interaction);
}

.omrs-input-underlined:not(.omrs-input-danger) > input:focus ~ svg,
.omrs-input-filled:not(.omrs-input-danger) > input:focus ~ svg {
  fill: var(--omrs-color-ink-high-contrast);
}

/** DISABLED **/

.omrs-input-underlined > input:disabled {
  background: var(--omrs-color-bg-low-contrast);
  cursor: not-allowed;
}

.omrs-input-underlined > input:disabled + .omrs-input-label,
.omrs-input-underlined > input:disabled ~ .omrs-input-helper {
  color: var(--omrs-color-ink-low-contrast);
}

.omrs-input-underlined > input:disabled ~ svg {
  fill: var(--omrs-color-ink-low-contrast);
}

.omrs-input-underlined > input {
  background: var(--omrs-color-bg-high-contrast);
}

/* 내용 */

.omrs-input-underlined-two > input,
.omrs-input-filled > input {
  border: none;
  border-bottom: 0.125rem solid var(--omrs-color-ink-medium-contrast);
  width: 100%;
  height: 29.6rem;
  font-size: 1.0625rem;
  padding-left: 0.875rem;
  line-height: 147.6%;
  padding-top: 0.825rem;
  padding-bottom: 25.5rem;
}

.omrs-input-underlined-two > input:focus,
.omrs-input-filled > input:focus {
  outline: none;
}

.omrs-input-underlined-two > .omrs-input-label,
.omrs-input-filled > .omrs-input-label {
  position: absolute;
  top: 0.9375rem;
  left: 0.875rem;
  line-height: 147.6%;
  color: var(--omrs-color-ink-medium-contrast);
  transition: top 0.2s;
}

.omrs-input-underlined-two > svg,
.omrs-input-filled > svg {
  position: absolute;
  top: 0.9375rem;
  right: 0.875rem;
  fill: var(--omrs-color-ink-medium-contrast);
}

.omrs-input-underlined-two > .omrs-input-helper,
.omrs-input-filled > .omrs-input-helper {
  font-size: 0.9375rem;
  color: var(--omrs-color-ink-medium-contrast);
  letter-spacing: 0.0275rem;
  margin: 0.125rem 0.875rem;
}

.omrs-input-underlined-two > input:hover,
.omrs-input-filled > input:hover {
  background: var(--omrs-color-interaction-minus-two);
  border-color: var(--omrs-color-ink-high-contrast);
}

.omrs-input-underlined-two > input:focus + .omrs-input-label,
.omrs-input-underlined-two > input:valid + .omrs-input-label,
.omrs-input-filled > input:focus + .omrs-input-label,
.omrs-input-filled > input:valid + .omrs-input-label {
  top: 0;
  font-size: 0.9375rem;
  margin-bottom: 32px;
}

.omrs-input-underlined-two:not(.omrs-input-danger)
  > input:focus
  + .omrs-input-label,
.omrs-input-filled:not(.omrs-input-danger) > input:focus + .omrs-input-label {
  color: var(--omrs-color-interaction);
}

.omrs-input-underlined-two:not(.omrs-input-danger) > input:focus,
.omrs-input-filled:not(.omrs-input-danger) > input:focus {
  border-color: var(--omrs-color-interaction);
}

.omrs-input-underlined:not(.omrs-input-danger) > input:focus ~ svg,
.omrs-input-filled:not(.omrs-input-danger) > input:focus ~ svg {
  fill: var(--omrs-color-ink-high-contrast);
}

/** DISABLED **/

.omrs-input-underlined-two > input:disabled {
  background: var(--omrs-color-bg-low-contrast);
  cursor: not-allowed;
}

.omrs-input-underlined-two > input:disabled + .omrs-input-label,
.omrs-input-underlined-two > input:disabled ~ .omrs-input-helper {
  color: var(--omrs-color-ink-low-contrast);
}

.omrs-input-underlined-two > input:disabled ~ svg {
  fill: var(--omrs-color-ink-low-contrast);
}
</style>
