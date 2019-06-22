<template>
  <div class="about">
    <p class="caption">{{ $t('about.caption') }}</p>
    <div class="us">
      <div class="text-box">
        <p class="position">{{ $t('about.daviPosition') }}</p>
        <h3 class="name">Davide</h3>
      </div>
      <div class="image-box">
        <div class="select-davide" @mouseover="daviHover = true" @mouseleave="daviHover = false"></div>
        <div class="select-gobu" @mouseover="gobuHover = true" @mouseleave="gobuHover = false"></div>
        <img src="~/assets/img/2x/about/about-davigobu.png" alt="私たちの写真です。">
      </div>
      <div class="text-box">
        <p class="position">{{ $t('about.gobuPosition') }}</p>
        <h3 class="name">Gobu</h3>
      </div>
      <transition name="davi">
        <DavideProfile v-if="daviHover"/>
      </transition>
      <transition name="gobu">
        <GobuProfile v-if="gobuHover"/>
      </transition>
    </div>
  </div>
</template>

<script>
import DavideProfile from "~/components/About/DavideProfile";
import GobuProfile from "~/components/About/GobuProfile";
export default {
  components: {
    DavideProfile,
    GobuProfile
  },
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
  height: calc(100% - 0.6rem);
  margin-top: 0.6rem;
  padding: 0 7%;

  color: $black-d;

  background-image: url("~assets/img/2x/about/about-middle-square.png");
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.gobu-enter {
  opacity: 0;
  transform: translateX(5rem);
}
.gobu-enter-active {
  transition: all 0.4s;
}
.gobu-leave-active {
  transition: all 0.7s;
}
.gobu-leave-to {
  opacity: 0;
  transform: translateX(5rem);
}
.davi-enter {
  opacity: 0;
  transform: translateX(-5rem);
}
.davi-enter-active {
  transition: all 0.4s;
}
.davi-leave-active {
  transition: all 0.7s;
}
.davi-leave-to {
  opacity: 0;
  transform: translateX(-5rem);
}
</style>
