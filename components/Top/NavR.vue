<template>
  <nav class="main-nav">
    <ContactLink class="contact" />
    <LangSwitch class="flag" />
  </nav>
</template>

<script>
import ContactLink from "~/components/GlobalComponents/ContactLink";
import LangSwitch from "~/components/GlobalComponents/LangSwitch";
export default {
  components: {
    LangSwitch,
    ContactLink
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

  .contact {
    width: 5.5rem;
    height: 4.1rem;
  }

  .flag {
    width: 5.5rem;
    height: 4.1rem;
  }
}
</style>
