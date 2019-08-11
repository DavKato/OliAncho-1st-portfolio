<template functional>
  <nuxt-link :to="props.src" tabindex="0">{{ props.title }}</nuxt-link>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
};
</script>
