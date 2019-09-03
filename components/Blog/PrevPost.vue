<template>
  <nuxt-link :to="prev.link" class="postcard">
    <img class="thumbnail" :src="prev.thumbnail" />
    <div class="desc">
      <div class="date-box">
        <p>{{ prev.date | date($i18n.locale) }}</p>
      </div>
      <h2 class="title">{{ prev.title }}</h2>
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.postcard {
  width: 49%;
  display: grid;
  grid-template-columns: 14rem 1fr;
  border: 2px solid #000;
  transition: outline-offset 0.1s;
  outline-offset: 0;

  &:hover,
  &:focus {
    outline: solid 2px $blue-l;
    outline-offset: 0.9rem;
  }

  &:link,
  &:active {
    text-decoration: none;
  }

  .desc {
    width: 100%;
    padding-top: 6%;
    @include respond("mobile") {
      padding-top: 4%;
    }

    .date-box {
      background-color: #000;
      width: calc(100% + 3rem);
      height: 3.4rem;
      margin-left: -3rem;
      padding-left: 0.5rem;
      position: relative;

      & > p {
        font-family: $font-h;
        font-size: 2.5rem;
        color: #fff;
      }

      &::before {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        top: -0;
        left: -2.8rem;
        border-right: 2.8rem solid #000;
        border-bottom: 1.7rem solid transparent;
        border-top: 1.7rem solid transparent;
      }
    }
  }
  .title {
    color: #000;
    font-size: 2rem;
    padding: 1.2rem 1.6rem;
    display: flex;
    align-items: center;
    @include respond("tab") {
      font-size: 1.9rem;
      padding: 1rem 1.2rem;
      height: 11rem;
      font-family: $font-p;
    }
    @include respond("mobile") {
      font-size: 2.1rem;
      padding: 1rem;
    }
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
    prev: {
      type: Object,
      required: true
    }
  }
};
</script>
