<template>
  <h1>OliAncho</h1>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 4.5rem;
  position: absolute;
  top: 0.5rem;
  left: 2.3rem;
  line-height: 1.5;
  z-index: 10;
  transition: all 0.2s;

  &:hover {
    @include tsh-m;
    transform: skewX(-3deg);
  }
}
</style>
