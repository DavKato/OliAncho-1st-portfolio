<template>
  <div class="white-out">
    <div class="thanks">
      <h1>{{ $t('thanks.caption') }}</h1>
      <p>{{ $t('thanks.message') }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.white-out {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;
}
.thanks {
  height: 15rem;
  width: 30rem;
  padding: 2rem 3rem;
  text-align: center;
  background-color: $white-p;
  border-radius: 1rem;

  & h1 {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 2.5rem;
  }

  & p {
    font-size: 2rem;
  }
}
</style>
