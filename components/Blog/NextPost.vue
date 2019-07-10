<template>
  <nuxt-link :to="next.link" class="postcard">
    <div class="desc">
      <div class="date-box">
        <p>{{ next.date | date($i18n.locale) }}</p>
      </div>
      <h2 class="title">{{ next.title }}</h2>
    </div>
    <img class="thumbnail" :src="next.thumbnail" />
  </nuxt-link>
</template>

<style lang="scss" scoped>
.postcard {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr var(--links-height);
  border: 2px solid #000;
  transition: outline-offset 0.05s;
  outline-offset: 0;

  &:hover {
    outline: solid 2px $blue-l;
    outline-offset: 0.9rem;
  }

  &:link,
  &:active {
    text-decoration: none;
  }

  .desc {
    width: 100%;
    height: 100%;
    padding-top: 6%;
    text-align: right;

    .date-box {
      background-color: #000;
      width: calc(100% + 3rem);
      height: 3.4rem;
      margin-right: -3rem;
      padding-right: 0.5rem;
      position: relative;

      & > p {
        font-family: $font-h;
        font-size: 2.5rem;
        color: #fff;
      }

      &::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: -0;
        right: -2.8rem;
        border-left: 2.8rem solid #000;
        border-bottom: 1.7rem solid transparent;
        border-top: 1.7rem solid transparent;
      }
    }
  }
  .title {
    color: #000;
    font-size: 2rem;
    padding: 1.2rem 1.6rem;
  }
  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>

<script>
export default {
  props: {
    next: {
      type: Object,
      required: true
    }
  }
};
</script>
