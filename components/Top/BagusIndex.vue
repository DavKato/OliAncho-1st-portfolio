<template>
  <nuxt-link
    class="window"
    :to="localePath(index.title)"
    :class="{ 'window-hover': index.hover, 'window-active': index.active }"
  >
    <div class="window__image-box window__image-box--glassL">
      <img :src="path2x(index.glassL)" alt="stend glass">
    </div>
    <div
      class="window__image-box window__image-box--main"
      :style="{ backgroundImage: `url(${path2x(index.imgCol)})` }"
    >
      <img
        :src="path2x(index.imgMono)"
        alt="our picture"
        class="main-image"
        :class="{ 'image-hover': index.hover }"
      >
    </div>
    <div class="window__image-box window__image-box--glassS">
      <img :src="path2x(index.glassS)" alt="stend glass">
    </div>
    <div class="window__text-box">
      <p class="window__text">{{ $t(index.title) }}</p>
    </div>
    <div class="window__image-box window__image-box--glassL">
      <img :src="path2x(index.glassL)" alt="stend glass">
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.window {
  margin: 0 7%;
  text-align: center;
  position: relative;
  border: 1rem solid $black-p;
  transition: all 0.7s;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;
  height: 96%;

  &:link,
  &:visited {
    color: $black-p;
    text-decoration: none;
  }

  &-hover {
    @include box-hover;
  }

  &-active {
    @include box-active;
  }

  &__text-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__text {
    font-size: 2rem;
  }

  &__image-box {
    object-fit: cover;

    & > img {
      display: block;
      width: 100%;
      height: 100%;
    }

    &--main {
      background-size: 100% 100%;
      background-repeat: no-repeat;
    }
  }

  & > *:not(:first-child) {
    border-top: 1rem solid $black-p;
    box-sizing: content-box;
  }
}

.image-hover {
  opacity: 0;
}

.main-image {
  transition: all 0.7s;
}
</style>


<script>
export default {
  props: {
    index: {
      type: Object,
      required: true
    }
  },
  methods: {
    path2x(img) {
      return require("../../assets/img/2x/top/" + img + ".png");
    }
  },
  computed: {
    imgCol2x() {
      const img = this.path2x(this.index.imgCol);
      return `url(${img})`;
    }
  }
};
</script>
