<template>
  <div class="bagus-box">
    <BagusIndex
      v-for="(index, i) of bagusIndex"
      :key="index.title"
      :index="index"
      @mouseover.native="hovered(i)"
      @mouseout.native="hovered(i)"
      @mousedown.native="activated(i)"
      @mouseup.native="activated(i)"
    />
  </div>
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
    ...mapMutations("bagusList", ["hovered", "activated"])
  }
};
</script>

<style lang="scss" scoped>
.bagus-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  padding: 0 0.2%;
}
</style>
