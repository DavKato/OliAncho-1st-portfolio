<template>
  <div class="walls">
    <div class="wall walls__1"></div>
    <div class="wall walls__2"></div>
    <div class="wall walls__3"></div>
    <div class="wall walls__4"></div>
  </div>
</template>

<style lang="scss" scoped>
.walls {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}
.wall {
  &:not(:last-child) {
    $walls-border: 1.3rem;
    border-right: $walls-border solid $gray-d;
    margin-right: -($walls-border / 2);
  }
}
</style>
