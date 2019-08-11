<template>
  <ul class="links">
    <li class="links-image">
      <LangSwitch
        width="35,70"
        sizes="35px"
        v-if="$route.path === '/blog-posts' || $route.path=== '/ja/blog-posts'"
      />
    </li>
    <li class="links-image">
      <InstaLink width="39,78" sizes="39px" />
    </li>
    <li class="links-image">
      <TwitterLink width="40,80" sizes="40px" />
    </li>
    <li class="links-image">
      <HomeLink width="33,66" sizes="33px" />
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

    &:hover,
    &:focus-within {
      @include iconHover;
    }
    &:active {
      @include iconActive;
    }
  }
}
</style>

<script>
import LangSwitch from "~/components/GlobalComponents/LangSwitch";
import HomeLink from "~/components/GlobalComponents/HomeLink";
import TwitterLink from "~/components/GlobalComponents/TwitterLink";
import InstaLink from "~/components/GlobalComponents/InstaLink";
export default {
  components: {
    LangSwitch,
    HomeLink,
    TwitterLink,
    InstaLink
  }
};
</script>
