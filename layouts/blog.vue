<template>
  <div id="blog-layout">
    <TopHeader />
    <StickyHeader />
    <nuxt />
    <BlogFooter />
  </div>
</template>

<style lang="scss" scoped>
#blog-layout {
  max-width: 100vw;
  background-color: $blog-bg;
  background-image: url(~assets/img/2x/posts/starbucks.png);
  background-attachment: fixed;
  background-size: cover;
  background-repeat: repeat;
}
</style>


<script>
import TopHeader from "~/components/Blog/TopHeader";
import StickyHeader from "~/components/Blog/StickyHeader";
import BlogFooter from "~/components/Blog/BlogFooter";
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" }
      ],
      ...this.$nuxtI18nSeo()
    };
  },
  components: {
    TopHeader,
    StickyHeader,
    BlogFooter
  },
  mounted() {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  }
};
</script>

