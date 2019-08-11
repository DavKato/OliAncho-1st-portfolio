<template>
  <nuxt-link :to="localePath('index')" tabindex="0" style="outline: none;">
    <CldImg
      src="v1563231773/bagushaus/global/oliancho-logo.png"
      :width="width"
      :sizes="sizes"
      alt="Jump to our portfolio"
    />
  </nuxt-link>
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


