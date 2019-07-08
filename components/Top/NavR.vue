<template>
  <nav class="main-nav">
    <a class="main-nav__mail" href="mailto:#" target="_blank">
      <img src="~/assets/img/2x/top/top-email.png" alt="send an email" />
    </a>
    <LangSwitch class="flag" />
  </nav>
</template>

<script>
import LangSwitch from "~/components/GlobalComponents/LangSwitch";
export default {
  components: {
    LangSwitch
  }
};
</script>

<style lang="scss">
.main-nav {
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

  & img {
    height: 100%;
    filter: $fsh-s;
    transition: all 0.2s;

    &:hover {
      @include iconHover;
    }
    &:active {
      @include iconActive;
    }
  }

  .flag {
    width: 5.5rem;
    height: 4.1rem;
  }
}
</style>
