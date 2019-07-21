<template>
  <div class="twitter">
    <CldImg
      src="v1563231771/bagushaus/contact/contact-shit.png"
      width="65,130"
      sizes="62px"
      class="twitter__shit"
    />
    <TwitterLink width="100,200" sizes="120px" class="twitter__logo" />
  </div>
</template>

<script>
import TwitterLink from "~/components/GlobalComponents/TwitterLink";
export default {
  components: {
    TwitterLink
  }
};
</script>


<style lang="scss" scoped>
.twitter {
  position: absolute;
  top: 7%;
  right: 25%;
  z-index: 5;

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
    transition: transform 0.2s;
    z-index: 10;
  }
  &__logo {
    height: 10rem;
    transition: transform 0.2s;
    transform: rotate(-8deg);
    filter: $fsh-m;
  }
}
</style>
