<template>
  <ul class="title-box">
    <nuxt-link
      :tag="'li'"
      :to="localePath(index.title)"
      v-for="(index, i) of bagusList"
      :key="index.title"
    >
      <h1
        @mouseover="hovered(i)"
        @mouseout="unHovered(i)"
        @mousedown="activated(i)"
        @mouseup="deActivated(i)"
        @click.native="unHovered(i)"
      >{{ index.title }}</h1>
    </nuxt-link>
  </ul>
</template>

<style lang="scss" scoped>
.title-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & li {
    position: relative;
    list-style: none;
    cursor: pointer;

    & h1 {
      text-transform: uppercase;
      position: absolute;
      left: 50%;
      top: -4rem;
      transform: translateX(-50%);
      font-size: 3rem;
      z-index: 50;

      &:hover {
        @include tsh-m;
      }
    }
  }
}
.active {
  @include tsh-m;
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState("bagusList", {
      bagusList: state => state.list
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
