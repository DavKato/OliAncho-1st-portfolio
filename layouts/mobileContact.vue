<template>
  <div id="contactLayout">
    <NavL />
    <MainMenu />
    <nuxt />
    <TheFooter />
  </div>
</template>

<style lang="scss" (scoped)>
#contactLayout {
  background-color: $green-p;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>


<script>
import NavL from "~/components/Top/NavL";
import MainMenu from "~/components/Mobile/MainMenu";
import TheFooter from "~/components/GlobalComponents/TheFooter";
export default {
  head() {
    return this.$nuxtI18nSeo();
  },
  components: {
    NavL,
    TheFooter,
    MainMenu
  }
};
</script>