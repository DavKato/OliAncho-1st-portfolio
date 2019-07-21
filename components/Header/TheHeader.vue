<template>
  <div class="header">
    <CldImg src="bagushaus/top/top-pic.png" width="1206,2412" sizes="1200px" id="port-bg" />
    <Logo class="header__logo" />
  </div>
</template>

<script>
import Logo from "~/components/Header/Logo";
export default {
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

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
#port-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
