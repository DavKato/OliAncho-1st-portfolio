<template>
  <section class="bagus-box">
    <BagusIndex
      v-for="(index, i) of bagusIndex"
      :key="index.title"
      :index="index"
      @mouseover.native="hovered(i)"
      @mouseout.native="unHovered(i)"
      @mousedown.native="activated(i)"
      @mouseup.native="unHovered(i)"
      @click.native="$store.commit('toBagus')"
    />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import "gsap/src/uncompressed/plugins/ScrollToPlugin";
import bagusScroll from "~/mixins/bagusScroll.js";
import BagusIndex from "~/components/Top/BagusIndex";
export default {
  components: {
    BagusIndex
  },
  mixins: [bagusScroll],
  computed: {
    ...mapState("bagusList", {
      bagusIndex: state => state.list
    })
  },
  methods: {
    ...mapMutations("bagusList", ["hovered", "unHovered", "activated"])
  }
};
</script>

<style lang="scss" scoped>
.bagus-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0.2%;
  height: 100%;
  // margin: 0 -1rem;
}
</style>
