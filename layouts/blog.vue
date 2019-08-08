<template>
  <div id="blog-layout">
    <picture>
      <source
        :media="`(max-width: ${$data.$tab}px)`"
        :srcset="`https://res.cloudinary.com/oliancho/image/upload/${options}414/bagushaus/Mobile/starback-mb 414w, https://res.cloudinary.com/oliancho/image/upload/${options}828/bagushaus/Mobile/starback-mb 828w, https://res.cloudinary.com/oliancho/image/upload/${options}1242/bagushaus/Mobile/starback-mb 1242w`"
        sizes="100vw"
      />
      <CldImg
        src="v1563231774/bagushaus/posts/starbuck.png"
        width="828,1280,1536,2560"
        sizes="100vw"
        alt="Background image with stars"
        id="blog-bg"
      />
    </picture>
    <nuxt />
    <BlogFooter id="blog-footer" />
  </div>
</template>

<style lang="scss" scoped>
#blog-layout {
  max-width: 100vw;
  background-color: $blog-bg;
}
#blog-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>


<script>
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo();
    return {
      titleTemplate: "%s | OliAncho",
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "x-ua-compatible", content: "ie=edge" },
        {
          name: "format-detection",
          content: "telephone=no, email=no, address=no"
        },
        { hid: "og:type", property: "og:type", content: "blog" },
        {
          hid: "og:image",
          property: "og:image",
          content: "~/static/images/blog-thumbnail.jpg"
        },
        { name: "twitter:card", content: "summary_large_image" },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    };
  },
  components: {
    BlogFooter: () => import("~/components/Blog/BlogFooter")
  },
  data() {
    return {
      options: "f_auto,q_auto,w_"
    };
  }
};
</script>

