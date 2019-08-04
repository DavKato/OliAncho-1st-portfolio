<template>
  <div id="blog-layout">
    <CldImg
      src="v1563231774/bagushaus/posts/starbuck.png"
      width="828,1280,1536,2560"
      sizes="100vw"
      alt="Background image with stars"
      id="blog-bg"
    />
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
    return this.$nuxtI18nSeo();
  },
  components: {
    BlogFooter: () => import("~/components/Blog/BlogFooter")
  }
};
</script>

