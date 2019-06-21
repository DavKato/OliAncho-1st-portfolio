<template>
  <div class="bagus-box">
    <BagusWalls/>
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
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import BagusIndex from "~/components/Top/BagusIndex";
import BagusWalls from "~/components/Top/BagusWalls";
export default {
  components: {
    BagusIndex,
    BagusWalls
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
  position: relative;
}
</style>
