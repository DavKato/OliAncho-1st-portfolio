<template>
  <div class="header">
    <picture id="port-bg" class="firstBody">
      <source
        :media="`(max-width: ${$data.$tab}px)`"
        :srcset="`https://res.cloudinary.com/oliancho/image/upload/${options}400/bagushaus/Mobile/top/top.png 400w, https://res.cloudinary.com/oliancho/image/upload/${options}800/bagushaus/Mobile/top/top.png 800w, https://res.cloudinary.com/oliancho/image/upload/${options}1153/bagushaus/Mobile/top/top.png 1153w`"
        sizes="100vw"
      />
      <CldImg src="bagushaus/top/top-pic.png" width="1206,2412" sizes="1200px" />
    </picture>
    <Logo class="header__logo" />
  </div>
</template>

<script>
import Logo from "~/components/Header/Logo";
export default {
  data() {
    return {
      options: "f_auto,q_auto,w_"
    };
  },
  components: {
    Logo
  }
};
</script>


<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: 150vh;
  height: 100vh;
  max-height: 66.67vw;
  position: relative;

  @include respond("wide-scr") {
    max-width: none;
    width: 75%;
    height: auto;
  }
  @include respond("tab") {
    max-height: none;
    height: auto;
  }

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @include respond("tab") {
      top: 44%;
    }
  }
}
#port-bg {
  width: 100%;
  height: 100%;

  & > * {
    width: 100%;
    height: 100%;

    @include respond("tab") {
      object-fit: contain;
      height: auto;
    }
  }
}
</style>
