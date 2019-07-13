export default {
  scrollToTop: false,
  async mounted() {
    if (this.$store.state.toBagus) {
      TweenLite.to(window, 0.6, {
        scrollTo: { y: '#bagus-title', offsetY: 35 }
      });
      this.$store.commit('toBagus');
    }
    //  else if (this.$store.state.toContact) {
    //   TweenLite.to(window, 1, { scrollTo: { y: '#contact', offsetY: 40 } });
    //   this.$store.commit('toContact');
    // }
  }
};
