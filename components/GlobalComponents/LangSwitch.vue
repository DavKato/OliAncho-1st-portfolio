<template>
  <transition name="fade" mode="out-in">
    <nuxt-link
      v-if="$i18n.locale == 'ja'"
      :to="switchLocalePath('en')"
      key="ja"
      tabindex="0"
      style="outline: none;"
    >
      <CldImg
        src="v1563231776/bagushaus/global/english.png"
        :width="width"
        :sizes="sizes"
        alt="Switch to English"
      />
    </nuxt-link>
    <nuxt-link
      v-if="$i18n.locale == 'en'"
      :to="switchLocalePath('ja')"
      key="en"
      tabindex="0"
      style="outline: none;"
    >
      <CldImg
        src="v1563231774/bagushaus/global/japanese.png"
        :width="width"
        :sizes="sizes"
        alt="Switch to Japanese"
      />
    </nuxt-link>
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
