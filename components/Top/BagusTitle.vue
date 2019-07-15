<template>
  <ul class="title-box">
    <nuxt-link
      :to="localePath(index.title)"
      v-for="(index, i) of bagusList"
      :key="index.title"
      tag="li"
    >
      <h2
        id="bagus-title"
        @mouseover="hovered(i)"
        @mouseout="unHovered(i)"
        @mousedown="activated(i)"
        @mouseup="unHovered(i)"
        @click="$store.commit('toBagus')"
      >{{ index.title }}</h2>
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

    & h2 {
      text-transform: uppercase;
      position: absolute;
      left: 50%;
      top: -4rem;
      transform: translateX(-50%);
      font-size: 3rem;
      z-index: 50;

      &:hover {
        @include tsh-s;
      }
    }
  }
}
.active {
  @include tsh-s;
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
    ...mapMutations("bagusList", ["hovered", "unHovered", "activated"])
  }
};
</script>
