<template>
  <li class="filter">
    <div class="filter__container" @click="$emit('click',{ tag, reset: true })">
      <CldImg
        :id="tag"
        class="filter__container-img"
        :class="{'light-on': selectedTag === tag}"
        src="v1563231774/bagushaus/posts/window.png"
        width="230,460"
        sizes="17vw"
      />
      <h2 class="filter__container-text">{{ $t(text) }}</h2>
    </div>
  </li>
</template>

<style lang="scss" scoped>
.filter {
  width: 22%;
  &__container {
    width: 100%;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      & .filter__container-img {
        transform: scale(1.02);
      }
      & .filter__container-text {
        @include tsh-m;
      }
    }
    &:link,
    &:visited {
      text-decoration: none;
    }

    &-img {
      width: 100%;
      object-fit: contain;
      transition: all 0.3s;
      transform-origin: bottom;
    }

    &-text {
      font-size: 2rem;
      color: $white-p;
      transition: filter 0.3s;
      margin-top: -0.5rem;
    }
  }
}
.light-on {
  transform: scale(1.02);
  filter: drop-shadow(0 0 2.7rem rgba($yellow-bg, 0.5));
}
</style>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  props: {
    tag: String,
    text: String
  },
  computed: {
    ...mapState("posts", ["selectedTag"])
  },
  methods: {
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>
