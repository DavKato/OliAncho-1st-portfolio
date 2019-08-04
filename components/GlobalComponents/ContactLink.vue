<template functional>
  <div v-scroll-to="{ el: '#contact', duration: 500, offset: -30 }">
    <CldImg
      src="v1563231775/bagushaus/global/email.png"
      :width="props.width"
      :sizes="props.sizes"
      alt="jump to contact form"
      style="cursor:pointer;"
      title="Contact Us"
      :class="[data.class, data.staticClass]"
      :style="[data.style, data.staticStyle]"
      v-bind="data.attrs"
      v-on="listeners"
    />
  </div>
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