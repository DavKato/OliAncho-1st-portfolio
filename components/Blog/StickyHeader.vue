<template>
  <nav class="sticky">
    <nuxt-link :to="localePath('posts')" tag="div">
      <h1 @click="selectTag('all')" class="sticky-name">
        OliAncho
        <span>.blog</span>
      </h1>
    </nuxt-link>

    <ul class="filter">
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'life'}"
        tag="li"
      >
        <h2 @click="selectTag('life')" class="filter__list-text">{{ $t('posts.life') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'web'}"
        tag="li"
      >
        <h2 @click="selectTag('web')" class="filter__list-text">{{ $t('posts.web') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        class="filter__list"
        :class="{ active: selectedTag === 'japanese'}"
        tag="li"
      >
        <h2 @click="selectTag('japanese')" class="filter__list-text">{{ $t('posts.teaching') }}</h2>
      </nuxt-link>
      <nuxt-link
        :to="localePath('posts')"
        :class="{ active: selectedTag === 'glutenFree'}"
        tag="li"
        class="filter__list"
      >
        <h2 @click="selectTag('glutenFree')" class="filter__list-text">{{ $t('posts.glutenFree') }}</h2>
      </nuxt-link>
    </ul>

    <ul class="links">
      <LangSwitch
        class="links-image flag"
        v-if="$route.path === '/posts' || $route.path === '/ja/posts'"
      />
      <li>
        <a href="#">
          <img class="links-image insta" src="~/assets/img/2x/posts/insta.png" />
        </a>
      </li>
      <li>
        <a href="#">
          <img class="links-image twitter" src="~/assets/img/2x/posts/twitter.png" />
        </a>
      </li>
      <li>
        <nuxt-link :to="localePath('index')">
          <img class="links-image home" src="~/assets/img/2x/posts/oliancho-logo.png" />
        </nuxt-link>
      </li>
    </ul>
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
  z-index: 100;

  &-name {
    color: $white-p;
    font-size: 4.5rem;
    font-feature-settings: "palt";
    margin-left: 1.5rem;
    margin-top: 0.4rem;
    cursor: pointer;

    span {
      font-size: 3rem;
      margin-left: -0.8rem;
    }
  }

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

  .links {
    display: grid;
    grid-auto-flow: column;
    align-items: center;
    gap: 1.1rem;
    margin-right: 2.5rem;
    margin-top: 1.2rem;
    list-style: none;

    &-image {
      filter: $fsh-s;
      transition: all 0.2s;

      &:hover {
        @include iconHover;
      }
      &:active {
        @include iconActive;
      }
    }

    .insta {
      height: 3.9rem;
      width: 3.9rem;
    }
    .twitter {
      height: 3.5rem;
      width: 4rem;
    }
    .home {
      height: 3.4rem;
      width: 3.3rem;
    }
    .flag {
      height: 2.6rem;
      width: 3.5rem;
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
import LangSwitch from "~/components/Nav/LangSwitch";
export default {
  components: {
    LangSwitch
  },
  computed: {
    ...mapState("posts", ["selectedTag"])
  },
  methods: {
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>
