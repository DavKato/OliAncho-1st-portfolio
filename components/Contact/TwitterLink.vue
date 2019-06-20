<template>
  <div class="twitter">
    <img src="~/assets/img/2x/contact/contact-shit.png" alt class="twitter__shit">
    <a href="#" class="twitter__logo">
      <img src="~/assets/img/2x/contact/contact-twitter.png" alt class="twitter__logo--image">
    </a>
  </div>
</template>

<style lang="scss" scoped>
.twitter {
  position: absolute;
  top: 7%;
  right: 25%;

  &:hover {
    & .twitter__logo {
      transform: rotate(4deg);
    }
    & .twitter__shit {
      transform: translateX(-0.6rem) rotate(6deg);
    }
  }
  &__shit {
    position: absolute;
    height: 4.7rem;
    width: 6.2rem;
    top: 9.2rem;
    left: -5.2rem;
    filter: $fsh-m;
    transition: transform 0.2s;
  }
  &__logo {
    display: block;
    height: 10rem;
    width: 11.6rem;
    transition: transform 0.2s;
    transform: rotate(-8deg);

    &--image {
      height: 100%;
      width: 100%;
      filter: $fsh-m;
    }
  }
}
</style>
