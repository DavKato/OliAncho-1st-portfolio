<template>
  <nav class="sticky">
    <TextLogo :selectTag="selectTag" @click="$emit('click', $event)" />

    <ul class="filter">
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'life'}"
        tag="li"
      >
        <h2
          @click="$emit('click', {tag: 'life', reset: true})"
          class="filter__list-text"
        >{{ $t('posts.life') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'web'}"
        tag="li"
      >
        <h2
          @click="$emit('click', {tag: 'web', reset: true})"
          class="filter__list-text"
        >{{ $t('posts.web') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'japanese'}"
        tag="li"
      >
        <h2
          @click="$emit('click', {tag: 'japanese', reset: true})"
          class="filter__list-text"
        >{{ $t('posts.japanese') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        :class="{ active: selectedTag === 'glutenFree'}"
        tag="li"
        class="filter__list"
      >
        <h2
          @click="$emit('click', {tag: 'glutenFree', reset: true})"
          class="filter__list-text"
        >{{ $t('posts.glutenFree') }}</h2>
      </nuxt-link>
    </ul>

    <BlogNavLinks />
  </nav>
</template>

<style lang="scss" scoped>
.sticky {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 9.5rem;
  background-image: linear-gradient(
    to bottom,
    $mud-b,
    $mud-b 55%,
    transparent 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  z-index: 10;

  .filter {
    align-self: center;
    margin-top: -1.3rem;
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    list-style: none;
    gap: 4.4rem;

    &__list {
      cursor: pointer;
      position: relative;

      &-text {
        font-family: $font-h;
        font-size: 2rem;
        color: $white-p;
      }

      &:hover {
        &::before {
          width: 100%;
        }
      }

      &::before {
        content: "";
        height: 2px;
        width: 0;
        background-color: #fff;
        position: absolute;
        bottom: -0.5rem;
        left: 50%;
        transform: translateX(-50%);
        transition: width 0.4s;
        transform-origin: center bottom;
      }

      &:not(:last-child)::after {
        content: "";
        height: 1.9rem;
        width: 1.9rem;
        position: absolute;
        top: 50%;
        right: -3.2rem;
        transform: translateY(-50%);
        background-image: url(~assets/img/2x/posts/star-black.png);
        background-size: contain;
        cursor: default;
      }
    }
  }
}

.active::before {
  content: "";
  width: 100% !important;
  height: 2px;
  background-color: #fff;
  position: absolute;
  bottom: -0.5rem;
}
</style>


<script>
import { mapState, mapMutations } from "vuex";
import TextLogo from "~/components/Blog/TextLogo";
import BlogNavLinks from "~/components/Blog/BlogNavLinks";
export default {
  components: {
    TextLogo,
    BlogNavLinks
  },
  computed: {
    ...mapState("posts", ["selectedTag"])
  },
  methods: {
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>
