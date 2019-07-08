<template>
  <transition name="fade" mode="out-in">
    <nuxt-link v-if="$i18n.locale == 'ja'" :to="switchLocalePath('en')" key="ja">
      <img src="~/assets/img/2x/top/top-english.png" alt="English flag" />
    </nuxt-link>
    <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('ja')" key="en">
      <img src="~/assets/img/2x/top/top-japanese.png" alt="Japanese flag" />
    </nuxt-link>
  </transition>
</template>

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
