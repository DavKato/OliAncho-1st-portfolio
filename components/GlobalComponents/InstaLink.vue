<template functional>
  <a
    href="https://www.instagram.com/oliancho/"
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
      src="v1563231771/bagushaus/global/instagram.png"
      :width="props.width"
      :sizes="props.sizes"
      alt="Jump to our Instagram page"
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

