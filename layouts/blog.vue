<template>
  <div id="blog-layout">
    <img id="blog-bg" src="~/assets/img/2x/posts/starbucks.png" alt />
    <nuxt />
    <BlogFooter />
  </div>
</template>

<style lang="scss" scoped>
#blog-layout {
  max-width: 100vw;
  // background-color: $blog-bg;
  // background-image: url(~assets/img/2x/posts/starbucks.png);
  // background-attachment: fixed;
  // background-size: cover;
  // background-repeat: repeat;
  opacity: 0;

  #blog-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;

    background-color: $blog-bg;
    z-index: -1;
  }
}
.page-enter-active {
  transition: opacity 0.5s ease-out;
}
.page-leave-active {
  transition: opacity 0.3s ease-in;
}
.page-enter,
.page-leave-active {
  opacity: 0;
}
</style>


<script>
import BlogFooter from "~/components/Blog/BlogFooter";
import { TweenLite } from "gsap";
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
    this.$nextTick(() => {
      TweenLite.to("#blog-layout", 0.9, { opacity: 1 });
    });
  }
};
</script>

