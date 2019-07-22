<template functional>
  <v-lazy-image
    :srcset="`https://res.cloudinary.com/oliancho/image/upload/f_auto,q_auto,w_900,c_limit/bagushaus/baguspost/${props.src} 600w, https://res.cloudinary.com/oliancho/image/upload/f_auto,q_auto,w_1800,c_limit/bagushaus/baguspost/${props.src} 1200w`"
    sizes="45vw"
    :src="`https://res.cloudinary.com/oliancho/image/upload/f_auto,q_auto,w_600,c_limit/bagushaus/baguspost/${props.src}`"
    :src-placeholder="`https://res.cloudinary.com/oliancho/image/upload/f_auto,q_10,w_60/bagushaus/baguspost/${props.src}`"
    :alt="props.title"
    :title="props.title"
  ></v-lazy-image>
</template>

<style scoped>
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.2s;
  will-change: filter;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
</style>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false
    }
  }
};
</script>

