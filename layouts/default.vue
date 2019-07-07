<template>
  <div id="defaultLayout">
    <NavL />
    <NavR />
    <TheHeader />
    <main>
      <BagusTitle />
      <BagusWalls />
      <nuxt class="bagus-box" />
    </main>
    <Contact />
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
  transition: all 1s;
}
.page-leave-active {
  transition: all 0.3s ease-in;
}
.page-enter,
.page-leave-active {
  opacity: 0;
  transform: translateZ(0);
  backface-visibility: hidden;
}
</style>


<script>
import NavL from "~/components/Nav/NavL";
import NavR from "~/components/Nav/NavR";
import TheHeader from "~/components/Header/TheHeader";
import BagusWalls from "~/components/Top/BagusWalls";
import BagusTitle from "~/components/Top/BagusTitle";
import Contact from "~/components/Contact/Contact";
import TheFooter from "~/components/TheFooter";
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
  }
};
</script>
