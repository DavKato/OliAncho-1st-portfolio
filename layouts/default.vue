<template>
  <div id="defaultLayout">
    <div id="dummy-sky"></div>
    <NavL />
    <NavR />
    <TheHeader id="bagus-top" />
    <main>
      <BagusTitle id="bagus-title" />
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
  opacity: 0;
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

.page-enter-active {
  transition: opacity 0.5s ease-out;
}
.page-leave-active {
  transition: opacity 0.3s ease-out;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
#dummy-sky {
  width: 100%;
  height: 100rem;
  display: none;
  background: linear-gradient(to top, transparent 0%, $white-p 100%);
}
</style>


<script>
import { TweenLite } from "gsap";
import "~/node_modules/gsap/src/uncompressed/plugins/ScrollToPlugin";
import NavL from "~/components/Top/NavL";
import NavR from "~/components/Top/NavR";
import TheHeader from "~/components/Header/TheHeader";
import BagusWalls from "~/components/Top/BagusWalls";
import BagusTitle from "~/components/Top/BagusTitle";
import Contact from "~/components/Contact/Contact";
import TheFooter from "~/components/GlobalComponents/TheFooter";
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
    Contact,
    TheFooter
  },
  mounted() {
    this.$nextTick(() => {
      TweenLite.set("#dummy-sky", { display: "block" });
      TweenLite.to("#defaultLayout", 1, { opacity: 1, delay: 0.3 });
      TweenLite.to(window, 1.2, {
        scrollTo: "#bagus-top",
        ease: Power2.easeOut
      });
      TweenLite.set("#dummy-sky", { display: "none", delay: 1.1 });
    });
  }
};
</script>
