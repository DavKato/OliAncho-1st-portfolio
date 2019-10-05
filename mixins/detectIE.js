export default {
  data() {
    return {
      ie: false
    };
  },
  mounted() {
    const ua = window.navigator.userAgent;
    const isIE = /MSIE|Trident/.test(ua);

    if (isIE) {
      this.ie = true;
    }
  }
};
