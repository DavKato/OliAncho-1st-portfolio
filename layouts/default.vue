<template>
  <no-ssr>
    <div id="defaultLayout">
      <NavL/>
      <NavR/>
      <TheHeader/>
      <main>
        <BagusTitle/>
        <nuxt class="bagus-box"/>
      </main>
      <Contact/>
      <TheFooter/>
    </div>
  </no-ssr>
</template>

<style lang="scss" scoped>
#defaultLayout {
  background-color: $green-p;
  color: $gray-d;
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
  background-image: url("~assets/img/2x/top/main-middle-square.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>


<script>
import NavL from "~/components/Nav/NavL";
import NavR from "~/components/Nav/NavR";
import TheHeader from "~/components/Header/TheHeader";
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
    BagusTitle,
    Contact,
    TheFooter
  }
};
</script>
