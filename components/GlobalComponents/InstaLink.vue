<template functional>
  <a href="#">
    <CldImg
      src="v1563231771/bagushaus/global/instagram.png"
      :width="props.width"
      :sizes="props.sizes"
      alt="Jump to our Instagram page"
      :class="[data.class, data.staticClass]"
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
      v-on="listeners"
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

