<template>
  <section class="bagus-box">
    <BagusIndex
      v-for="(index, i) of bagusIndex"
      :key="index.title"
      :index="index"
      @mouseover.native="hovered(i)"
      @mouseout.native="unHovered(i)"
      @mousedown.native="activated(i)"
      @mouseup.native="deActivated(i)"
      @click.native="unHovered(i)"
    />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BagusIndex from "~/components/Top/BagusIndex";
export default {
  components: {
    BagusIndex
  },
  computed: {
    ...mapState("bagusList", {
      bagusIndex: state => state.list
    })
  },
  methods: {
    ...mapMutations("bagusList", [
      "hovered",
      "unHovered",
      "activated",
      "deActivated"
    ])
  }
};
</script>

<style lang="scss" scoped>
.bagus-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  margin: 0 -1rem;
}
</style>
