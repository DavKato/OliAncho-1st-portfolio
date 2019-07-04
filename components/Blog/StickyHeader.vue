<template>
  <nav>
    <h1>
      OliAncho.
      <span>blog</span>
    </h1>

    <ul class="filter">
      <li>{{ $t('posts.all') }}</li>
      <li>{{ $t('posts.life') }}</li>
      <li>{{ $t('posts.web') }}</li>
      <li>{{ $t('posts.teaching') }}</li>
      <li>{{ $t('posts.glutenFree') }}</li>
    </ul>

    <ul class="links">
      <li>
        <a href="#">
          <img class="insta" src="~/assets/img/2x/posts/insta.png" />
        </a>
      </li>
      <li>
        <a href="#">
          <img class="twitter" src="~/assets/img/2x/posts/twitter.png" />
        </a>
      </li>
      <nuxt-link class="home" :to="localePath('index')" tag="li">
        <img src="~/assets/img/2x/posts/oliancho-logo.png" />
      </nuxt-link>
      <LangSwitch class="flag" />
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 10rem;
  background-image: linear-gradient(
    to bottom,
    $mud-b,
    $mud-b 60%,
    transparent 100%
  );
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    color: $white-p;
  }

  ul {
    display: flex;
    list-style: none;
  }

  .filter {
    color: $white-p;
  }

  .links {
    & img {
    }
  }
}
</style>


<script>
import LangSwitch from "~/components/Nav/LangSwitch";
export default {
  components: {
    LangSwitch
  }
};
</script>
