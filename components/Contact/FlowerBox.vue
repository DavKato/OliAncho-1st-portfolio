<template>
  <div class="flower-box">
    <img src="~/assets/img/2x/contact/contact-flower.png" alt="flower" class="flower-box__flower">
    <a href="#">
      <img
        src="~/assets/img/2x/contact/contact-instagram.png"
        alt="instagram logo"
        class="flower-box__insta"
      >
    </a>
  </div>
</template>

<style lang="scss" scoped>
.flower-box {
  position: absolute;
  bottom: 8%;
  right: 2%;

  &__flower {
    height: 51.3rem;
    width: 31.5rem;
    object-fit: 100%;
  }
  &__insta {
    height: 11.4rem;
    width: 11.4rem;
    position: absolute;
    left: 49.7%;
    top: 19.2%;
    transform: translateX(-50%);
    filter: $fsh-m;
    transition: transform 0.3s;

    &:hover {
      transform: translateX(-50%) rotate(90deg) scale(0.85);
      filter: $fsh-s;
    }
  }
}
</style>
