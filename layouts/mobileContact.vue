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
    const i18nSeo = this.$nuxtI18nSeo();
    const pageTitle = "contact form | OliAncho";
    return {
      title: pageTitle,
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { hid: "charset", charset: "utf-8" },
        {
          name: "viewport",
          hid: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        {
          name: "format-detection",
          content: "telephone=no, email=no, address=no"
        },
        {
          hid: "description",
          name: "description",
          content: this.$t("desc.portfolio")
        },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
  },
  components: {
    NavL,
    TheFooter,
    MainMenu
  }
};
</script>
