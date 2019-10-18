<template functional>
  <h1
    v-on="listeners"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
  >
    <span class="desc">WEB Creator</span>
    <span class="title">OliAncho</span>
  </h1>
</template>

<style lang="scss" scoped>
h1 {
  position: absolute;
  top: 2rem;
  left: 2.3rem;
  z-index: 10;
  transition: all 0.2s;
  line-height: 1.1;

  @include respond("mobile") {
    top: 1rem;
    left: 1.2rem;
    line-height: 1;
  }

  .desc {
    display: block;
    font-size: 2.3rem;

    @include respond("mobile") {
      font-size: 2.5rem;
    }
  }

  .title {
    display: block;
    font-size: 4.5rem;

    @include respond("tab") {
      font-size: 4.2rem;
    }
  }

  &:hover {
    @include tsh-s;
    transform: skewX(-3deg);
  }
}
</style>
