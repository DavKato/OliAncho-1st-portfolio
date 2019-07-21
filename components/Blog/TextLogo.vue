<template functional>
  <h1
    class="text-logo"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
    v-on="listeners"
  >
    OliAncho
    <span>.blog</span>
  </h1>
</template>

<style lang="scss" scoped>
.text-logo {
  color: $white-p;
  font-size: 4.5rem;
  font-feature-settings: "palt";
  margin-left: 1.5rem;
  margin-top: 0.4rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    @include tsh-s;
    transform: skewX(-3deg);
  }

  span {
    font-size: 3rem;
    margin-left: -0.8rem;
  }
}
</style>
