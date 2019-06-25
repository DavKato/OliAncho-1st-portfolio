<template>
  <div id="lang-switcher">
    <transition name="fade" mode="out-in">
      <nuxt-link v-if="$i18n.locale == 'ja'" :to="switchLocalePath('en')" key="ja">
        <img class="nav__img" src="~/assets/img/2x/top/top-english.png" alt="Switch to English">
      </nuxt-link>
      <nuxt-link v-if="$i18n.locale == 'en'" :to="switchLocalePath('ja')" key="en">
        <img class="nav__img" src="~/assets/img/2x/top/top-japanese.png" alt="Switch to Japanese">
      </nuxt-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#lang-switcher {
  width: 5.5rem;
  height: 4.1rem;

  & img {
    height: 100%;
  }
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
