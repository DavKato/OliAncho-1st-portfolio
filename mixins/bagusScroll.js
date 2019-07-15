export default {
  mounted() {
    if (this.$store.state.toBagus) {
      document
        .getElementById('bagus-title')
        .scrollIntoView({ behavior: 'smooth' });
      this.$store.commit('toBagus');
    }
    //  else if (this.$store.state.toContact) {
    //   TweenLite.to(window, 1, { scrollTo: { y: '#contact', offsetY: 40 } });
    //   this.$store.commit('toContact');
    // }
  }
};
