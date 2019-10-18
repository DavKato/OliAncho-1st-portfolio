<template functional>
  <client-only>
    <slot
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
      :class="[data.class, data.staticClass]"
    ></slot>
  </client-only>
</template>

<style lang="scss">
.ie {
  z-index: 1000;
  white-space: pre-wrap;
  border: 1px solid #333;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 1rem 1.4rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  font-size: 1.3rem;
}
</style>
