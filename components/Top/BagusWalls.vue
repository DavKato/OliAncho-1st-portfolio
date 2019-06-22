<template>
  <div class="walls" :class="currentRoute">
    <div class="walls__1" :class="`${currentRoute}__wall`"></div>
    <div class="walls__2" :class="`${currentRoute}__wall`"></div>
    <div class="walls__3" :class="`${currentRoute}__wall`"></div>
    <div class="walls__4" :class="`${currentRoute}__wall`"></div>
  </div>
</template>

<style lang="scss" scoped>
.walls {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  // left: -0.24%;
  // width: 101.7%;
  // grid-template-columns: repeat(4, 1fr);
}

@mixin commonW {
  width: 24%;
}

.index {
  &__wall {
    @include commonW;
    &:not(:last-child) {
      border-right: $bdw-p solid $gray-d;
      margin-left: $bdw-p;
    }
  }
}
.about {
  box-shadow: inset 0 0.7rem 0 $gray-d;
  &__wall {
    @include commonW;
    &:first-child {
      background-color: $white-p;
    }
  }
}
</style>

<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.name.split("___")[0];
    }
  }
};
</script>
