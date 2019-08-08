<template>
  <div id="defaultLayout">
    <NavL @click="goHome" />
    <no-ssr>
      <NavR v-if="$vssWidth > $data.$tab" />
      <MainMenu v-else-if="$vssWidth <= $data.$tab" />
    </no-ssr>
    <TheHeader id="bagus-top" />
    <main>
      <no-ssr>
        <BagusTitle v-if="$vssWidth > $data.$tab" />
      </no-ssr>
      <no-ssr>
        <BagusWalls v-if="$vssWidth > $data.$tab" />
      </no-ssr>
      <nuxt class="bagus-box" />
    </main>
    <no-ssr>
      <Contact id="contact" v-if="$vssWidth > $data.$tab" />
    </no-ssr>
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
    padding: 3rem 0 0;
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
    margin: -0.5rem 0 3rem;
    border: 0.8rem solid $gray-d;
    border-top: none;
  }
  @include respond("mobile") {
    margin-top: -0.7rem;
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
    const i18nSeo = this.$nuxtI18nSeo();
    const pageDesc = this.$t("desc.portfolio");
    const url = "https://oliancho.com/";
    return {
      titleTemplate: "%s | OliAncho",
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { hid: "charset", charset: "utf-8" },
        {
          name: "viewport",
          hid: "viewport",
          content: "width=device-width, initial-scale=1"
        },
        { "http-equiv": "x-ua-compatible", content: "ie=edge" },
        {
          name: "format-detection",
          content: "telephone=no, email=no, address=no"
        },
        {
          hid: "description",
          name: "description",
          content: pageDesc
        },
        { hid: "og:title", property: "og:title", content: "OliAncho" },
        { hid: "og:type", property: "og:type", content: "website" },
        { hid: "og:site_name", property: "og:site_name", content: "OliAncho" },
        { hid: "og:url", property: "og:url", content: url },
        {
          hid: "og:description",
          property: "og:description",
          content: pageDesc
        },
        {
          hid: "og:image",
          property: "og:image",
          content: url + "images/top-thumbnail.jpg"
        },
        { name: "twitter:card", content: "summary_large_image" },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
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
  },
  methods: {
    goHome() {
      if (!this.$route.name.startsWith("index"))
        this.$router.push(this.localePath("index"));
    }
  }
};
</script>
