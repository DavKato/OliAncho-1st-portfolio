export default {
  mounted() {
    this.$nextTick(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  },
  beforeRouteLeave(to, from, next) {
    if (!to.name.startsWith('posts')) {
      window.scrollTo({ top: 2000, behavior: 'smooth' });
      TweenLite.to('#blog-layout', 0.4, { opacity: 0, onComplete: next });
    } else next();
  }
};
