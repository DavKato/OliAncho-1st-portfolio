<template functional>
  <a
    href="https://twitter.com/DOKs62"
    target="_blank"
    rel="noopener"
    tabindex="0"
    style="outline: none;"
    v-on="listeners"
    :class="[data.class, data.staticClass]"
    :style="[data.style, data.staticStyle]"
    v-bind="data.attrs"
  >
    <CldImg
      src="v1563231772/bagushaus/global/twitter.png"
      :width="props.width"
      :sizes="props.sizes"
      alt="jump to our twitter"
      :class="[data.class, data.staticClass]"
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
    />
  </a>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "auto"
    },
    sizes: {
      type: String,
      required: false,
      default: ""
    }
  }
};
</script>
