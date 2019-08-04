<template>
  <nuxt-link :to="`blog-posts/${link}`" class="postcard">
    <div class="date-box">
      <p>{{ date | date($i18n.locale) }}</p>
    </div>
    <h1 class="title">{{ title }}</h1>
    <p class="summary" v-show="$vssWidth > $data.$tab">{{ summary }}</p>
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

  @include respond("long-scr") {
    width: 82%;
  }

  @include respond("tab") {
    width: 87%;
    margin-bottom: 9rem;
  }

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
      @include respond("tab") {
        font-size: 3.2rem;
      }
    }
  }
  .title {
    color: #000;
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-left: 2.4rem;
    @include respond("long-scr") {
      font-size: 2.3rem;
      width: 65%;
    }
    @include respond("tab") {
      font-size: 2.7rem;
      width: 57%;
      font-family: $font-p;
      margin-top: 2rem;
    }
  }
  .summary {
    color: $gray-d;
    margin-top: 0.3rem;
    margin-left: 2.4rem;
    width: 60%;
    font-size: 1.5rem;
    @include respond("long-scr") {
      width: 63%;
      margin-top: 1.5rem;
    }
  }
  .thumbnail {
    position: absolute;
    top: 0;
    right: 1rem;
    width: 29.6%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    @include respond("long-scr") {
      width: 31%;
    }
    @include respond("tab") {
      width: 35%;
    }
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
