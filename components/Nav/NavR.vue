<template>
  <nav class="nav">
    <a class="nav__mail" href="mailto:#" target="_blank">
      <img class="nav__img" src="~/assets/img/2x/top/top-email.png" alt="send an email">
    </a>
    <LangSwitch/>
  </nav>
</template>

<script>
import LangSwitch from "~/components/Nav/LangSwitch";
export default {
  components: {
    LangSwitch
  }
};
</script>

<style lang="scss">
.nav {
  display: flex;
  align-items: center;
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  z-index: 10;

  & > * {
    margin-right: 1.5rem;
  }

  &__mail {
    width: 5.5rem;
    height: 4.1rem;
  }

  &__img {
    height: 100%;
    filter: $fsh-s;
    transition: all 0.2s;

    &:hover {
      filter: $fsh-m;
      transform: translate3D(0, -3px, 0);
      backface-visibility: hidden;
    }
    &:active {
      transform: translate3D(0, -1px, 0);
      filter: $fsh-s;
      backface-visibility: hidden;
    }
  }
}
</style>
