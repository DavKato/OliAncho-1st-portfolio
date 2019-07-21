<template>
  <nuxt-link
    class="window"
    :to="localePath(index.title)"
    :class="{ 'window-hover': index.hover, 'window-active': index.active }"
    @mouseenter.native="hovered(i)"
    @mouseleave.native="unHovered(i)"
    @mousedown.native="activated(i),$store.commit('toBagus')"
    @mouseup.native="unHovered(i)"
  >
    <div class="window__image-box window__image-box--glassL">
      <CldImg :src="`bagushaus/top/${index.glassL}.png`" width="237,474" sizes="20vw" />
    </div>
    <div class="window__image-box window__image-box--main">
      <CldImg
        :src="`bagushaus/top/${index.imgMono}.png`"
        width="237,474"
        sizes="20vw"
        :alt="`to ${index.title}`"
        class="main-mono"
        :class="{ 'image-hover': index.hover }"
      />
      <LazyImg
        :src="`bagushaus/top/${index.imgCol}.png`"
        :alt="`to ${index.title}`"
        width="237,474"
        sizes="20vw"
        class="main-color"
      />
    </div>
    <div class="window__image-box window__image-box--glassS">
      <CldImg :src="`bagushaus/top/${index.glassS}.png`" width="237,474" sizes="20vw" />
    </div>
    <div class="window__text-box">
      <p class="window__text">{{ $t(`main.${index.title}`) }}</p>
    </div>
    <div class="window__image-box window__image-box--glassL">
      <CldImg :src="`bagushaus/top/${index.glassS}.png`" width="237,474" sizes="20vw" />
    </div>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.window {
  margin: 3.5% 7.5% 0 7.5%;
  border: 1rem solid $black-p;
  transition: all 0.5s;
  display: grid;
  grid-template-rows: repeat(3, auto) 1fr auto;
  align-content: stretch;
  height: 96%;
  position: relative;
  z-index: 2;

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
    padding: 0.8rem 1.2rem;
  }

  &__text {
    font-size: 1.8rem;
    white-space: pre-wrap;
  }

  &__image-box {
    & > img {
      object-fit: fill;
      display: block;
      width: 100%;
      height: 100%;
    }

    &--main {
      position: relative;
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

.main-mono {
  position: relative;
  z-index: 2;
  transition: opacity 0.7s;
}
.main-color {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>


<script>
import { mapMutations } from "vuex";
export default {
  props: {
    index: {
      type: Object,
      required: true
    },
    i: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapMutations("bagusList", ["hovered", "unHovered", "activated"])
  }
};
</script>
