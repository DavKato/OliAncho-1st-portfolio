<template>
  <section class="bagus">
    <BagusIndex v-show="$vssWidth > $data.$tab" />
    <BagusIndexMb v-show="$vssWidth <= $data.$tab" />
  </section>
</template>

<script>
import bagusScroll from "~/mixins/bagusScroll.js";
export default {
  components: {
    BagusIndex: () => import("~/components/Top/BagusIndex"),
    BagusIndexMb: () => import("~/components/Mobile/BagusIndexMb")
  },
  mixins: [bagusScroll]
};
</script>

<style lang="scss" scoped>
// .bagus {
// @include respond("tab") {
//   height: 70vh;
//   width: 50%;
//   margin: 0 auto;
// }
// }
</style>
