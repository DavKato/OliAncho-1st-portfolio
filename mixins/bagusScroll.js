export default {
  beforeDestroy() {
    if (
      this.$vssWidth > this.$data.$tab &&
      this.$vssWidth > this.$vssHeight &&
      this.$store.state.toBagus
    ) {
      this.$scrollTo('#bagus-title', 500, { easing: 'ease-out' });
      this.$store.commit('toBagus');
    }
    //  else if (this.$store.state.toContact) {
    //   TweenLite.to(window, 1, { scrollTo: { y: '#contact', offsetY: 40 } });
    //   this.$store.commit('toContact');
    // }
  }
};
