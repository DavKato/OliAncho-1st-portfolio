<template>
  <section class="about">
    <p class="caption">{{ $t('about.caption') }}</p>
    <div class="us">
      <div class="text-box">
        <p class="position">{{ $t('about.daviPosition') }}</p>
        <h3 class="name">Davide</h3>
      </div>
      <div class="image-box">
        <div class="select-davide" @mouseover="daviHover = true" @mouseleave="daviHover = false"></div>
        <div class="select-gobu" @mouseover="gobuHover = true" @mouseleave="gobuHover = false"></div>
        <LazyImg
          src="bagushaus/about/about-davigobu.png"
          alt="DavideとGobuのイラスト"
          width="713,1426"
          sizes="700"
          placeholder
        />
      </div>
      <div class="text-box">
        <p class="position">{{ $t('about.gobuPosition') }}</p>
        <h3 class="name">Gobu</h3>
      </div>
      <transition name="davi">
        <DavideProfile v-if="daviHover" />
      </transition>
      <transition name="gobu">
        <GobuProfile v-if="gobuHover" />
      </transition>
    </div>
  </section>
</template>

<script>
// import vueScreenSize from "~/mixins/vueScreenSize.js";
import bagusScroll from "~/mixins/bagusScroll.js";
import DavideProfile from "~/components/About/DavideProfile";
import GobuProfile from "~/components/About/GobuProfile";
export default {
  components: {
    DavideProfile,
    GobuProfile
  },
  mixins: [bagusScroll],
  data() {
    return {
      daviHover: false,
      gobuHover: false
    };
  }
};
</script>

<style lang="scss" scoped>
.about {
  padding: 0 7%;
  color: $black-d;
  background-image: url("https://res.cloudinary.com/oliancho/image/upload/f_auto,q_auto/v1563231770/bagushaus/about/about-middle-square.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
}

.caption {
  font-size: 1.9rem;
  line-height: 1.6;
  display: block;
  width: 65%;
  padding-top: 5rem;
  margin: 0 auto;
  text-align: center;
  white-space: pre;
}

.us {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: -2rem;
  position: relative;

  & .image-box {
    object-fit: cover;
    height: 100%;
    width: 70%;
    pointer-events: none;

    & img {
      width: 100%;
    }
    & .select-davide {
      position: absolute;
      top: 10%;
      left: 15%;
      width: 23%;
      height: 75%;
      pointer-events: all;
    }
    & .select-gobu {
      position: absolute;
      top: 10%;
      right: 15%;
      width: 22%;
      height: 75%;
      pointer-events: all;
    }
  }
  & .text-box {
    text-align: center;
    width: 15%;
    padding-bottom: 8%;
  }
  & .name {
    font-size: 3rem;
  }
  & .position {
    font-size: 1.8rem;
  }
}

.gobu-enter,
.gobu-leave-to {
  opacity: 0;
  transform: translate3D(5rem, 0, 0);
  backface-visibility: hidden;
}
.gobu-enter-active {
  transition: all 0.3s;
}
.gobu-leave-active {
  transition: all 0.5s;
}
.davi-enter,
.davi-leave-to {
  opacity: 0;
  transform: translate3D(-5rem, 0, 0);
  backface-visibility: hidden;
}
.davi-enter-active {
  transition: all 0.3s;
}
.davi-leave-active {
  transition: all 0.5s;
}
</style>
