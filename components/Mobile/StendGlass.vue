<template functional>
  <div class="glass">
    <CldImg
      :src="props.src"
      width="84,168,252"
      sizes="84px"
      v-for="num of 12"
      :key="num"
      class="img"
    />
  </div>
</template>

<style lang="scss" scoped>
.glass {
  width: 23.3%;
  height: 100%;
  .img {
    display: block;
    width: 100%;
    object-fit: contain;
    border: 2px solid $black-p;

    &:not(:last-child) {
      border-bottom: none;
    }
  }
}
</style>

