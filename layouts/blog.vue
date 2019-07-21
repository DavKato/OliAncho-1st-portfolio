<template>
  <div id="blog-layout">
    <CldImg
      src="v1563231774/bagushaus/posts/starbuck.png"
      width="1280,2560"
      alt="Background image with stars"
      id="blog-bg"
    />
    <nuxt />
    <BlogFooter />
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
}
</style>


<script>
import BlogFooter from "~/components/Blog/BlogFooter";
export default {
  components: {
    BlogFooter
  }
};
</script>

