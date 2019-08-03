<template>
  <div class="container">
    <!-- <h2 class="post">
      <span class="welcome">Welcome</span>
      <span class="menu">Menu</span>
    </h2>-->
    <StendGlass src="bagushaus/Mobile/top/glass-blue.png" />
    <div class="window">
      <nuxt-link
        v-for="item in windowList"
        :to="localePath(item.link)"
        :key="item.link"
        class="window-box"
      >
        <span class="window-box__text">{{ item.link }}</span>
        <LazyImg class="window-box__img" :src="item.img" width="184,368,552" sizes="50vw" />
      </nuxt-link>
    </div>
    <StendGlass src="bagushaus/Mobile/top/glass-red.png" />
  </div>
</template>

<script>
import StendGlass from "~/components/Mobile/StendGlass";
export default {
  components: {
    StendGlass
  },
  data() {
    return {
      windowList: [
        {
          link: "about",
          img: "bagushaus/Mobile/top/glass-about.png"
        },
        {
          link: "works",
          img: "bagushaus/Mobile/top/glass-works.png"
        },
        {
          link: "blog",
          img: "bagushaus/Mobile/top/glass-blog.png"
        },
        {
          link: "location",
          img: "bagushaus/Mobile/top/glass-location.png"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
// .post {
//   position: absolute;
//   top: -8.5%;
//   left: 50%;
//   transform: translateX(-50%);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   text-transform: uppercase;
//   line-height: 1;
//   color: $blue-p;

//   @include respond("mobile") {
//     top: -9%;
//   }

//   .welcome {
//     display: block;
//     font-size: 2rem;
//     letter-spacing: 0.2rem;
//   }

//   .menu {
//     display: block;
//     font-size: 5rem;
//   }
// }
.container {
  position: relative;
  display: flex;
  justify-content: space-around;
  padding: 0 0.1%;

  .window {
    width: 49.7%;
    box-shadow: 0.75rem 0 0 $gray-d, -0.75rem 0 0 $gray-d;
    display: flex;
    flex-direction: column;

    @include respond("mobile") {
      width: 49.5%;
      box-shadow: 0.7rem 0 0 $gray-d, -0.7rem 0 0 $gray-d;
    }

    &-box {
      width: 100%;
      border-left: 2px solid $black-p;
      border-right: 2px solid $black-p;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      flex: auto;

      &:link,
      &:visited {
        text-decoration: none;
        color: $black-d;
      }

      &__text {
        display: flex;
        position: relative;
        width: 100%;
        text-align: center;
        font-size: 5.1rem;
        text-transform: uppercase;
        font-family: $font-h;
        align-items: center;
        justify-content: center;
        border-bottom: 2px solid $black-p;
        border-top: 2px solid $black-p;
        box-shadow: 2px 3px 10px rgba($black-p, 0.75);
        z-index: 2;
        flex: auto;

        @include respond("mobile") {
          font-size: 4.5rem;
        }
        @include respond("iphoneX") {
          font-size: 4rem;
        }
      }

      &__img {
        width: 100%;
        display: block;
      }
    }
  }
}
</style>
