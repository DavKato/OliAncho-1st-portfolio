<template functional>
  <a href="#" tabindex="0" v-on="listeners" style="outline: none;">
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
