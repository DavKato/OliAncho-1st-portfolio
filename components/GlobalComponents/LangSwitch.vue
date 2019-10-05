<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="$i18n.locale == 'ja'"
      @click="changeLocale('en')"
      key="ja"
      tabindex="0"
      style="outline: none; cursor:pointer;"
    >
      <CldImg
        src="v1563231776/bagushaus/global/english.png"
        :width="width"
        :sizes="sizes"
        alt="Switch to English"
        title="Switch to English"
      />
    </div>
    <div
      v-if="$i18n.locale == 'en'"
      @click="changeLocale('ja')"
      key="en"
      tabindex="0"
      style="outline: none; cursor:pointer;"
    >
      <CldImg
        src="v1563231774/bagushaus/global/japanese.png"
        :width="width"
        :sizes="sizes"
        alt="Switch to Japanese"
        title="Switch to Japanese"
      />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: false,
      default: "auto"
    },
    sizes: {
      type: String,
      required: false,
      default: ""
    }
  },
  methods: {
    changeLocale(to) {
      this.$i18n.setLocale(to);
    }
  }
};
</script>

<style lang="scss" scoped>
img {
  height: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>