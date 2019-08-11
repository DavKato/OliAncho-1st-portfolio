<template>
  <div class="nav-r">
    <ContactLink class="link" width="23,55" sizes="55px" />
    <LangSwitch class="link" width="23,55" sizes="55px" />
  </div>
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
.nav-r {
  display: flex;
  align-items: center;
  position: absolute;
  top: 2.5rem;
  right: 1rem;
  z-index: 10;

  & > * {
    margin-right: 1.5rem;
  }

  .link {
    transition: all 0.2s;
    &:hover,
    &:focus {
      @include iconHover;
      outline: none;
    }
    &:active {
      @include iconActive;
    }
  }
  & img {
    height: 100%;
    filter: $fsh-s;
  }
}
</style>
