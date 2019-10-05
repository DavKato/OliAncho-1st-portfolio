export default {
  data() {
    return {
      ie: false
    };
  },
  mounted() {
    if (process.client) {
      const ua = window.navigator.userAgent;
      const isIE = /MSIE|Trident/.test(ua);

      if (isIE) {
        this.ie = true;
      }
    }
  }
};
