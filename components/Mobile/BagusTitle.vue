<template>
  <h2 class="mb" :class="{ 'mb-menu': currentPage === 'menu' }">
    <span class="mb-welcome" v-if="currentPage === 'menu'">Welcome</span>
    <span class="mb-title">{{ currentPage }}</span>
  </h2>
</template>

<style lang="scss" scoped>
.mb {
  position: absolute;
  top: -5.6rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  font-size: 5rem;
  text-transform: uppercase;
  line-height: 1;
  color: $black-p;

  &-welcome {
    display: block;
    font-size: 2rem;
    letter-spacing: 0.2rem;
  }

  &-title {
    display: block;
  }

  &-menu {
    color: $blue-p;
    top: -8.5%;

    @include respond("mobile") {
      top: -9%;
    }
  }
}
</style>

<script>
export default {
  computed: {
    currentPage() {
      const cur = this.$route.name.split("___")[0];
      return cur === "index" ? "menu" : cur;
    }
  }
};
</script>
