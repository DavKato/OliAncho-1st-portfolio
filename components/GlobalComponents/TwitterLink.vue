<template functional>
  <a href="#">
    <CldImg
      src="v1563231772/bagushaus/global/twitter.png"
      :width="props.width"
      :sizes="props.sizes"
      alt="jump to our twitter"
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
