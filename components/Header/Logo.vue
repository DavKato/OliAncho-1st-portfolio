<template>
  <div class="logo-box">
    <nuxt-link
      :to="localePath('index')"
      class="logo-box__link"
      @click.native="scrollToTitle"
      tabindex="0"
    >
      <CldImg src="bagushaus/top/top-logo.png" alt="to Top page" class="logo-box__image" />
    </nuxt-link>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTitle() {
      if (this.$vssWidth > this.$data.$tab && this.$vssWidth > this.$vssHeight)
        this.$scrollTo("#bagus-title", 700, { easing: "ease-out" });
    }
  }
};
</script>


<style lang="scss" scoped>
.logo-box {
  &__link {
    &:hover,
    &:focus {
      outline: none;
      & .logo-box__image {
        filter: $fsh-m;
        transform: scale(1.04) skewY(-2deg);
      }
    }
    &:active .logo-box__image {
      filter: $fsh-s;
      transform: scale(0.98) skewY(2deg);
    }
  }

  &__image {
    width: 25vw;
    max-width: 33.3vh;
    height: 33.3vh;
    max-height: 25vw;
    filter: $fsh-s;
    transition: all 0.4s;
  }
}
</style>
