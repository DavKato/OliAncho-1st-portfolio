<template>
  <div class="header">
    <Logo class="header__logo"/>
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
  background-image: url("../../assets/img/2x/top/top-pic.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;

  &__logo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
