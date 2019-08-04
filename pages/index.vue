<template>
  <section class="bagus">
    <MobileTitle v-show="$vssWidth <= $data.$tab" />
    <BagusIndex v-show="$vssWidth > $data.$tab" />
    <BagusIndexMb v-show="$vssWidth <= $data.$tab" />
  </section>
</template>

<script>
import bagusScroll from "~/mixins/bagusScroll.js";
export default {
  components: {
    BagusIndex: () => import("~/components/Top/BagusIndex"),
    BagusIndexMb: () => import("~/components/Mobile/BagusIndexMb"),
    MobileTitle: () => import("~/components/Mobile/BagusTitle.vue")
  },
  mixins: [bagusScroll]
};
</script>