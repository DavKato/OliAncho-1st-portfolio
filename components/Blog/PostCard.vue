<template>
  <nuxt-link :to="`posts/${link}`" class="postcard">
    <div class="date-box">
      <p>{{ date | date($i18n.locale) }}</p>
    </div>
    <h1 class="title">{{ title }}</h1>
    <p class="summary">{{ summary }}</p>
    <img class="thumbnail" :src="thumbnail" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.postcard {
  padding: 1rem 0;
  background-color: $post-bg;
  position: relative;
  height: 18rem;
  width: 70.5%;
  margin-bottom: 11rem;

  &:link,
  &:active {
    text-decoration: none;
  }

  .date-box {
    background-color: #000;
    width: calc(100% + 3rem);
    margin-left: -3rem;

    & > p {
      font-family: $font-h;
      font-size: 3rem;
      color: #fff;
      margin-left: 3rem;
    }
  }
  .title {
    color: #000;
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-left: 2.4rem;
  }
  .summary {
    color: $gray-d;
    margin-top: 0.3rem;
    margin-left: 2.4rem;
    width: 60%;
    font-size: 1.5rem;
  }
  .thumbnail {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 29.6%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>


<script>
export default {
  props: {
    date: String,
    title: String,
    summary: String,
    thumbnail: String,
    link: String
  }
};
</script>
