<template>
  <nav class="sticky">
    <TextLogo @click="$emit('click', $event)" />
    <ul class="filter" v-show="$vssWidth > $data.$tab && $vssWidth >= $vssHeight">
      <li class="filter__list">
        <nuxt-link
          :to="localePath('blog-posts')"
          :class="{ active: selectedTag === 'life'}"
          tabindex="0"
          class="filter__link"
        >
          <h2
            @click="$emit('click', {tag: 'life', reset: true})"
            class="filter__list-text"
          >{{ $t('posts.life') }}</h2>
        </nuxt-link>
      </li>
      <li class="filter__list">
        <nuxt-link
          :to="localePath('blog-posts')"
          :class="{ active: selectedTag === 'web'}"
          tabindex="0"
          class="filter__link"
        >
          <h2
            @click="$emit('click', {tag: 'web', reset: true})"
            @keydown.enter="$emit('click', {tag: 'glutenFree', reset: true})"
            class="filter__list-text"
          >{{ $t('posts.web') }}</h2>
        </nuxt-link>
      </li>
      <li class="filter__list">
        <nuxt-link
          :to="localePath('blog-posts')"
          :class="{ active: selectedTag === 'japanese'}"
          tabindex="0"
          class="filter__link"
        >
          <h2
            @click="$emit('click', {tag: 'japanese', reset: true})"
            @keydown.enter="$emit('click', {tag: 'glutenFree', reset: true})"
            class="filter__list-text"
          >{{ $t('posts.japanese') }}</h2>
        </nuxt-link>
      </li>
      <li class="filter__list">
        <nuxt-link
          :to="localePath('blog-posts')"
          :class="{ active: selectedTag === 'glutenFree'}"
          tabindex="0"
          class="filter__link"
        >
          <h2
            @click="$emit('click', {tag: 'glutenFree', reset: true})"
            @keydown.enter="$emit('click', {tag: 'glutenFree', reset: true})"
            class="filter__list-text"
          >{{ $t('posts.glutenFree') }}</h2>
        </nuxt-link>
      </li>
    </ul>

    <client-only>
      <BlogNavLinks v-if="$vssWidth > $data.$tab && $vssWidth >= $vssHeight" />
      <BlogMainMenu v-else @filter="$emit('click', $event)" />
    </client-only>
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

  @include respond("mobile") {
    height: 12rem;
  }

  .filter {
    align-self: center;
    margin-top: -1.3rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;

    &__link {
      text-decoration: none;
      outline: none;
    }

    &__list {
      cursor: pointer;
      position: relative;

      &:not(:last-child) {
        margin-right: 4.4rem;
      }

      &-text {
        font-family: $font-h;
        font-size: 2rem;
        color: $white-p;
      }

      &:hover,
      &:focus-within {
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
        background-image: url(~assets/img/star-black.png);
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
export default {
  components: {
    TextLogo,
    BlogNavLinks: () => import("~/components/Blog/BlogNavLinks"),
    BlogMainMenu: () => import("~/components/Mobile/BlogMainMenu.vue")
  },
  computed: {
    ...mapState("posts", ["selectedTag"])
  },
  methods: {
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>
