<template>
  <nuxt-link :to="`posts/${link}`" class="postcard" tag="div">
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
  width: 70.5%;
  height: 18rem;
  cursor: pointer;

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
    font-size: 3rem;
    margin-top: 1rem;
    margin-left: 4rem;
  }
  .summary {
    color: #000;
    margin-top: 1.5rem;
    margin-left: 4rem;
    width: 60%;
    font-size: 1.8rem;
  }
  .thumbnail {
    position: absolute;
    top: -3rem;
    right: 2rem;
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
