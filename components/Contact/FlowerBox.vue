<template>
  <div class="flower-box">
    <LazyImg
      src="v1563231772/bagushaus/contact/Contact-flower.png"
      width="200,400"
      sizes="31.5rem"
      alt="hand-written flower"
      placeholder
      class="flower-box__flower"
    />
    <InstaLink width="84,168" sizes="11.4rem" class="flower-box__insta" />
  </div>
</template>

<script>
import InstaLink from "~/components/GlobalComponents/InstaLink";
export default {
  components: {
    InstaLink
  }
};
</script>


<style lang="scss" scoped>
.flower-box {
  position: absolute;
  bottom: 8%;
  right: 2%;

  &__flower {
    width: 31.5rem;
    object-fit: 100%;
  }
  &__insta {
    width: 11.4rem;
    position: absolute;
    left: 49.7%;
    top: 19.2%;
    transform: translateX(-50%);
    filter: $fsh-m;
    transition: all 0.3s;

    & > img {
      width: 100%;
    }

    &:hover,
    &:focus {
      transform: translateX(-50%) rotate(90deg) scale(0.85);
      filter: $fsh-s;
    }
  }
}
</style>
