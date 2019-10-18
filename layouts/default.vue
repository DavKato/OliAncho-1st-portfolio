<template>
  <div id="defaultLayout">
    <div
      id="initialCover"
      style="width:100vw;height:100vh;background-color:#fff;position:fixed;top:0;left:0;z-index:2000;"
    ></div>
    <NoIe class="secondBody">
      <div class="ie" v-if="ie">{{ $t('ie') }}</div>
    </NoIe>
    <NavL @click="goHome" class="secondBody" />
    <NavR v-show="$vssWidth > $data.$tab" class="secondBody" />
    <MainMenu v-show="$vssWidth <= $data.$tab" />
    <TheHeader id="bagus-top" />
    <main class="firstBody">
      <BagusTitle v-show="$vssWidth > $data.$tab" />
      <no-ssr>
        <BagusWalls v-if="$vssWidth > $data.$tab" />
      </no-ssr>
      <nuxt class="bagus-box" />
    </main>
    <no-ssr>
      <Contact id="contact" v-if="$vssWidth > $data.$tab" class="secondBody" />
    </no-ssr>
    <TheFooter class="firstBody" />
  </div>
</template>

<style lang="scss">
// #initialCover {
// width=100vw;height=100vh;background-color:#eee;position:fixed;top:0;left:0;z-index:2000;
// }
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

.ie {
  position: absolute;
  top: 8rem;
  right: 1rem;
}
</style>


<script>
import NavL from "~/components/Top/NavL";
import NavR from "~/components/Top/NavR";
import TheHeader from "~/components/Header/TheHeader";
import BagusWalls from "~/components/Top/BagusWalls";
import BagusTitle from "~/components/Top/BagusTitle";
import Contact from "~/components/Contact/Contact";
import TheFooter from "~/components/GlobalComponents/TheFooter";

import detectIE from "~/mixins/detectIE.js";
import { TweenMax, TimelineLite } from "gsap";
import { setTimeout } from "timers";

export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    const pageDesc = this.$t("desc.portfolio");
    const url = "https://oliancho.com";
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
    NavR,
    TheHeader,
    BagusWalls,
    BagusTitle,
    Contact,
    TheFooter,
    MainMenu: () => import("~/components/Mobile/MainMenu"),
    NoIe: () => import("~/components/GlobalComponents/NoIe")
  },
  mixins: [detectIE],
  methods: {
    goHome() {
      if (!this.$route.name.startsWith("index"))
        this.$router.push(this.localePath("index"));
    },
    intro() {
      document.body.style.overflow = "hidden";
      const tl = new TimelineLite({
        onComplete: () => {
          document.body.style.overflow = "visible";
        }
      });
      tl.to("#initialCover", 0.3, { display: "none" })
        .from(".logo-box", 0.8, { y: -800, ease: Bounce.easeOut }, 0.5)
        .from(".firstBody", 1.4, { autoAlpha: 0, ease: Power1.easeIn }, 1.3)
        .from(
          "#defaultLayout",
          1.4,
          {
            backgroundColor: "#fff",
            borderColor: "#fff",
            ease: Power1.easeIn
          },
          "-=1"
        )
        .from(".secondBody", 0.2, { autoAlpha: 0, ease: Power1.easeOut });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.intro();
    });
  },
  destroyed() {
    document.getElementById("initialCover").style.display = "block";
  }
};
</script>
