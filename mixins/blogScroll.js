export default {
  mounted() {
    this.$nextTick(() => {
      this.$scrollTo('#blog-layout', 500, { easing: 'ease-out' });
    });
  },
  beforeRouteLeave(to, from, next) {
    if (!to.name.startsWith('blog-posts')) {
      this.$scrollTo('#blog-footer', 500, { easing: 'ease-in' });
      TweenLite.to('#blog-layout', 0.4, { opacity: 0, onComplete: next });
    } else next();
  }
};
