<template>
  <nuxt-link
    :to="localePath('blog-posts')"
    tabindex="0"
    @click="$emit('click', {tag: 'all', reset: true})"
    @keydown.enter="$emit('click', {tag: 'all', reset: true})"
    class="logo-link"
  >
    <h1 class="logo-text" style="outline: none;">
      OliAncho
      <span>.blog</span>
    </h1>
  </nuxt-link>
</template>

<style lang="scss" scoped>
.logo {
  &-link {
    text-decoration: none;
    outline: none;
    transition: transform 0.2s;
    &:hover,
    &:focus {
      @include tsh-m;
      transform: skewX(-8deg);
    }
  }

  &-text {
    color: $white-p;
    font-size: 4.5rem;
    font-feature-settings: "palt";
    margin-left: 1.5rem;
    margin-top: 0.4rem;
    cursor: pointer;
    position: relative;
    z-index: 11;

    span {
      font-size: 3rem;
      margin-left: -0.8rem;
    }
  }
}
</style>
