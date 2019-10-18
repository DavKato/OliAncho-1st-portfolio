<template functional>
  <p
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
  >2019 &copy; OliAncho</p>
</template>

<style lang="scss" scoped>
p {
  font-size: 2.5rem;
  color: $black-l;
  line-height: 1.6;
}
</style>
