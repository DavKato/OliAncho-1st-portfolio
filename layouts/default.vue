<template>
  <div id="defaultLayout">
    <!-- <div id="dummy-sky"></div> -->
    <NavL />
    <NavR />
    <TheHeader id="bagus-top" />
    <main>
      <BagusTitle />
      <BagusWalls />
      <nuxt class="bagus-box" />
    </main>
    <Contact id="contact" />
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
}

.bagus-box {
  height: 100%;
  width: 101%;
  margin-top: 0.6rem;
  margin-left: -0.5%;
}
</style>


<script>
import NavL from "~/components/Top/NavL";
import NavR from "~/components/Top/NavR";
import TheHeader from "~/components/Header/TheHeader";
import BagusWalls from "~/components/Top/BagusWalls";
import BagusTitle from "~/components/Top/BagusTitle";
// import Contact from "~/components/Contact/Contact";
import TheFooter from "~/components/GlobalComponents/TheFooter";
import { TweenMax, TimelineLite } from "gsap";
export default {
  head() {
    return this.$nuxtI18nSeo();
  },
  components: {
    NavL,
    NavR,
    TheHeader,
    BagusWalls,
    BagusTitle,
    Contact: () => import("~/components/Contact/Contact"),
    TheFooter
  }
};
</script>
