<template>
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
</template>

<style lang="scss" scoped>
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
</style>

<script>
import LangSwitch from "~/components/GlobalComponents/LangSwitch";
export default {
  components: {
    LangSwitch
  }
};
</script>
