<template>
  <section class="about">
    <MobileTitle v-show="$vssWidth <= $data.$tab" class="top-title" />
    <p class="caption">{{ $t('about.caption') }}</p>
    <div class="us">
      <div class="text-box text-box-davide">
        <p class="position">{{ $t('about.daviPosition') }}</p>
        <h3 class="name">Davide</h3>
      </div>
      <div class="image-box">
        <no-ssr>
          <div
            class="select-davide"
            @mouseover="daviHover = true"
            @focus="daviHover = true"
            @mouseleave="daviHover = false"
            @blur="daviHover = false"
            tabindex="0"
            v-if="$vssWidth > $data.$tab"
          ></div>
        </no-ssr>
        <no-ssr>
          <div
            class="select-gobu"
            @mouseover="gobuHover = true"
            @focus="gobuHover = true"
            @mouseleave="gobuHover = false"
            @blur="gobuHover = false"
            tabindex="0"
            v-if="$vssWidth > $data.$tab"
          ></div>
        </no-ssr>
        <LazyImg
          src="bagushaus/about/about-davigobu.png"
          alt="DavideとGobuのイラスト"
          width="713,1426"
          sizes="700"
          placeholder
        />
      </div>
      <div class="text-box text-box-gobu">
        <p class="position">{{ $t('about.gobuPosition') }}</p>
        <h3 class="name">Gobu</h3>
      </div>
    </div>

    <transition name="davi">
      <DavideProfile v-show="$vssWidth <= $data.$tab || daviHover" />
    </transition>
    <transition name="gobu">
      <GobuProfile v-show="$vssWidth <= $data.$tab || gobuHover" />
    </transition>
  </section>
</template>

<script>
import bagusScroll from "~/mixins/bagusScroll.js";
export default {
  head() {
    return {
      title: "About"
    };
  },
  components: {
    DavideProfile: () => import("~/components/About/DavideProfile"),
    GobuProfile: () => import("~/components/About/GobuProfile"),
    MobileTitle: () => import("~/components/Mobile/BagusTitle.vue")
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
@include respond("tab") {
  .top-title {
    top: calc(-5.6rem - 24px) !important;
  }
}
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

  @include respond("tab") {
    background-image: none;
    border: 3rem solid;
    border-image: url("../assets/img/tiles44.png") 72 repeat;
    padding: 4rem 0 6rem;
  }

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
  max-width: 85%;
  padding-top: 5rem;
  margin: 0 auto;
  text-align: center;
  white-space: pre-wrap;

  @include respond("tab") {
    font-size: 2.8rem;
    width: 80%;
    line-break: strict;
    padding-top: 0;
    margin-bottom: 2rem;
  }
}

.us {
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: -2rem;
  position: relative;

  @include respond("tab") {
    flex-wrap: wrap;
    margin-bottom: 4rem;
    width: 87%;
    align-self: center;
  }

  & .image-box {
    object-fit: cover;
    width: 70%;
    pointer-events: none;

    @include respond("tab") {
      width: 100%;
    }

    & img {
      width: 100%;
    }
    & .select-davide,
    & .select-gobu {
      position: absolute;
      top: 10%;
      height: 75%;
      pointer-events: all;

      @include respond("tab") {
        display: none;
      }
    }
    & .select-davide {
      left: 15%;
      width: 23%;
    }
    & .select-gobu {
      right: 15%;
      width: 22%;
    }
  }
  & .text-box {
    text-align: center;
    width: 15%;
    padding-bottom: 8%;

    @include respond("tab") {
      width: 30%;
      margin-top: -5.5rem;
      line-height: 1.3;
      padding: 0;
    }

    &-davide {
      @include respond("tab") {
        order: 1;
      }
    }
    &-gobu {
      @include respond("tab") {
        order: 2;
      }
    }
  }
  & .name {
    font-size: 3rem;
    @include respond("tab") {
      font-size: 3.2rem;
    }
  }
  & .position {
    font-size: 1.8rem;
    @include respond("tab") {
      font-size: 2.2rem;
    }
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
