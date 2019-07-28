import Vue from 'vue';

Vue.mixin({
  data() {
    return {
      $mobile: 460,
      $tab: 768,
      $tabLand: 1200,
      $bigScr: 1800
    };
  }
});
