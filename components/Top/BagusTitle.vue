<template>
  <nav>
    <ul class="title-box">
      <li v-for="(index, i) of bagusList" :key="index.title">
        <nuxt-link
          class="link"
          :to="localePath(index.title)"
          tabindex="0"
          @focus.native="hovered(i)"
          @blur.native="unHovered(i)"
        >
          <h2
            id="bagus-title"
            @mouseover="hovered(i)"
            @mouseout="unHovered(i)"
            @mousedown="activated(i), $store.commit('toBagus')"
            @mouseup="unHovered(i)"
          >{{ index.title }}</h2>
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.link {
  &:hover h2,
  &:focus h2 {
    @include tsh-m;
  }
}
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
      top: -4.3rem;
      transform: translateX(-50%);
      font-size: 3.2rem;
      z-index: 50;
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
    currentPage() {
      const cur = this.$route.name.split("___")[0];
      return cur === "index" ? "menu" : cur;
    },
    ...mapState("bagusList", {
      bagusList: state => state.list
    })
  },
  methods: {
    ...mapMutations("bagusList", ["hovered", "unHovered", "activated"])
  }
};
</script>
