<template>
  <div id="defaultLayout">
    <NavL />
    <NavR v-show="$vssWidth > $data.$tab" />
    <MainMenu v-show="$vssWidth <= $data.$tab" />
    <TheHeader id="bagus-top" />
    <main>
      <BagusTitle v-show="$vssWidth > $data.$tab" />
      <BagusWalls v-show="$vssWidth > $data.$tab" />
      <nuxt class="bagus-box" />
    </main>
    <Contact id="contact" v-show="$vssWidth > $data.$tab" />
    <TheFooter />
  </div>
</template>

<style lang="scss">
#defaultLayout {
  background-color: $green-p;
  max-width: 100vw;
  border: 0.7rem solid $gray-d;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;

  @include respond("tab") {
    border: none;
    padding: 3rem 2.5rem 0;
    min-height: 100vh;
    justify-content: flex-end;
  }
  @include respond("iphoneX") {
    padding: 0;
  }
}
main {
  height: 97vh;
  width: 100%;
  max-width: 150vh;
  max-height: 66.67vw;
  background-color: $white-p;
  border: 1.2rem solid $gray-d;
  border-top: none;
  position: relative;

  @include respond("tab") {
    height: auto;
    max-height: none;
    margin: -0.4rem 0 3rem;
    border: 0.8rem solid $gray-d;
    border-top: none;
  }
}

.bagus-box {
  height: 100%;
  width: 101%;
  margin-top: 0.6rem;
  margin-left: -0.5%;

  @include respond("tab") {
    margin-top: 0;
    height: auto;
  }
}
</style>


<script>
import NavL from "~/components/Top/NavL";
import TheHeader from "~/components/Header/TheHeader";
import BagusWalls from "~/components/Top/BagusWalls";
import BagusTitle from "~/components/Top/BagusTitle";
import TheFooter from "~/components/GlobalComponents/TheFooter";
import { TweenMax, TimelineLite } from "gsap";
export default {
  head() {
    return this.$nuxtI18nSeo();
  },
  components: {
    NavL,
    NavR: () => import("~/components/Top/NavR"),
    TheHeader,
    BagusWalls,
    BagusTitle,
    Contact: () => import("~/components/Contact/Contact"),
    TheFooter,
    MainMenu: () => import("~/components/Mobile/MainMenu")
  }
};
</script>
