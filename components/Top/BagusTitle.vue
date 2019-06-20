<template>
  <ul class="title-box">
    <li
      v-for="(index, i) of bagusList"
      :key="index.title"
      @mouseover="hovered(i)"
      @mouseout="hovered(i)"
      @mousedown="activated(i)"
      @mouseup="activated(i)"
    >
      <h1>{{ index.title }}</h1>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.title-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  & li {
    position: relative;
    list-style: none;

    & h1 {
      text-transform: uppercase;
      position: absolute;
      left: 50%;
      top: -4rem;
      transform: translateX(-50%);
      font-size: 3rem;

      &:hover {
        @include tsh-m;
      }
    }
  }
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
    ...mapMutations("bagusList", ["hovered", "activated"])
  }
};
</script>
