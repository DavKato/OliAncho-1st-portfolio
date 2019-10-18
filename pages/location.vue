<template>
  <section class="location">
    <MobileTitle class="top-title" v-show="$vssWidth <= $data.$tab" />
    <h1 class="caption">
      {{ $t('location.caption') }}
      <span></span>
    </h1>
    <p class="intro">{{ $t('location.intro') }}</p>
    <div class="map-box">
      <CldImg
        src="bagushaus/location/location-maps"
        width="833,1000,1666"
        sizes="80vw"
        class="map"
        alt="World map"
      />
      <CldImg
        src="bagushaus/location/location-duck-orange.png"
        class="orange"
        ref="orange"
        @click.native="highlightShip"
        @mouseover.native="orangeHover"
        @mouseleave.native="orangeSilence"
        @mousedown.native="orangeActive"
        @mouseup.native="orangeInActive"
      />
      <p class="currentP">{{ $t('location.currentParagraph') }}</p>
      <CldImg src="bagushaus/location/location-wave.png" class="wave" />
      <div class="ship" ref="ship" @mouseover="orangeFlicker" @mouseleave="orangeSilence">
        <CldImg src="bagushaus/location/location-ship.png" width="250,500" sizes="250px" />
        <div class="info">
          <p class="currentL">{{ $t('location.currentLocation') }}</p>
          <p class="time">{{ time }}</p>
        </div>
      </div>
      <div class="plane" ref="plane">
        <CldImg src="bagushaus/location/location-plane.png" width="410,820" sizes="410px" />
        <p
          class="number"
          @mouseover="planeHover"
          @mouseleave="planeSilence"
          @mousedown="planeActive"
          @mouseup="planeInActive"
          @click="bonVoyage"
        >
          <b>20</b>/
          <b>193</b>
          <span :class="$i18n.locale">{{ $t('location.numberVisited') }}</span>
        </p>
      </div>
      <div class="ducks__three" @mouseover="threeDOn">
        <CldImg src="bagushaus/location/location-duck-yellow.png" class="duck duck-big" />
        <CldImg src="bagushaus/location/location-duck-yellow.png" class="duck duck-middle" />
        <CldImg src="bagushaus/location/location-duck-yellow.png" class="duck duck-small" />
      </div>
      <client-only>
        <div class="ducks__two" @mouseover="twoDOn" v-if="$vssWidth > $data.$tab">
          <CldImg src="bagushaus/location/location-duck-yellow.png" class="duck duck-middle" />
          <CldImg src="bagushaus/location/location-duck-yellow.png" class="duck duck-small" />
        </div>
      </client-only>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$yellow-location: #eaea5d;
@mixin wh100 {
  width: 100%;
  height: 100%;
  @include respond("tab") {
    object-fit: contain;
    height: auto;
  }
}

.location {
  background-image: url("https://res.cloudinary.com/oliancho/image/upload/f_auto,q_auto/v1563231770/bagushaus/location/location-middle-square.png");
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.5;
  padding: 3.5rem;

  @include respond("tab") {
    background-image: none;
    padding: 0;
    border: 3.5rem solid;
    border-image: url("../assets/img/tiles44.png") 72 repeat;
    .top-title {
      top: -8.6rem !important;
      font-size: 4.1rem !important;
    }
  }

  & img {
    object-fit: contain;
  }

  .caption {
    font-size: 2.9rem;
    font-family: $font-p;
    display: inline-block;
    margin-top: 2%;
    position: relative;
    font-style: italic;
    transition: transform 0.2s;

    @include respond("tab") {
      width: 58%;
      text-align: center;
      font-size: 2.8rem;
      margin-top: 3%;
    }

    &:hover {
      transform: skewX(15deg) translateY(-1px);

      & > span {
        background-color: darken($yellow-location, 15);
      }
    }

    span {
      position: absolute;
      bottom: -12%;
      left: -4%;
      width: 105%;
      height: 0.5rem;
      background-color: $yellow-location;
      border: none;
      border-radius: 1rem;

      @include respond("tab") {
        width: 100%;
        left: 0;
      }

      &::after {
        content: "";
        background-image: url("https://res.cloudinary.com/oliancho/image/upload/q_auto,f_auto/bagushaus/location/location-fart.png");
        background-size: contain;
        position: absolute;
        background-repeat: no-repeat;
        right: -7rem;
        top: 50%;
        height: 10rem;
        width: 8rem;
        transform: translateY(-47%);

        @include respond("tab") {
          height: 8rem;
          width: 6.5rem;
          right: -6rem;
        }
      }
    }
  }

  .intro {
    font-size: 1.9rem;
    text-align: center;
    margin-top: 2%;
    white-space: pre;
    @include respond("tab") {
      font-size: 2.5rem;
      white-space: pre-wrap;
      width: 85%;
      margin-top: 6%;
      line-height: 1.6;
    }
  }

  .map-box {
    width: 100%;
    height: 69%;
    position: relative;

    @include respond("tab") {
      margin: 8% 0 4%;
      height: auto;
      width: 99%;
    }

    & > *:not(.map) {
      position: absolute;
      display: block;
    }

    &:hover > .map {
      filter: $fsh-m;
    }

    .map {
      @include wh100;
      filter: $fsh-s;
      transition: all 0.2s;
    }

    .orange {
      width: 2.8%;
      top: 46%;
      left: 37.6%;
      filter: $fsh-s;
      cursor: pointer;
      @include respond("tab") {
        width: 4%;
        left: 33.4%;
      }
      @include respond("mobile") {
        top: 44%;
        width: 5%;
      }
    }

    .currentP {
      left: 20.5%;
      bottom: 5.5%;
      font-size: 2rem;
      white-space: pre;
      text-align: right;
      transform: rotate(-35deg);
      @include respond("long-scr") {
        left: 18.5%;
        bottom: 5%;
      }
      @include respond("tab") {
        left: 9%;
        bottom: 4%;
        font-size: 1.8rem;
      }
      @include respond("mobile") {
        font-size: 1.8rem;
      }
    }

    .wave {
      width: 10%;
      left: 18%;
      bottom: 2%;
      @include respond("long-scr") {
        left: 17%;
      }
      @include respond("tab") {
        width: 13%;
        left: 6.5%;
        bottom: 1%;
      }
      @include respond("mobile") {
        width: 14%;
      }
    }

    .ship {
      bottom: -4%;
      left: 26%;
      width: 23%;
      transform-origin: 45% 70%;
      @include respond("long-scr") {
        width: 25%;
        left: 24%;
      }
      @include respond("tab") {
        bottom: -4%;
        left: 15.5%;
        width: 30%;
      }
      @include respond("mobile") {
        width: 35%;
      }

      & > img {
        @include wh100;
      }

      .info {
        position: absolute;
        top: 48%;
        left: -2%;
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: none;

        & > p {
          font-size: 2.2rem;
          line-height: 1.2;
          @include respond("tab") {
            font-size: 2rem;
          }
          @include respond("mobile") {
            font-size: 2rem;
          }
        }
        .time {
          font-weight: 600;
        }
      }
    }

    .plane {
      top: 0;
      right: 2%;
      width: 25%;
      transform: rotate(30deg);
      will-change: transform;
      z-index: 9;
      cursor: pointer;

      @include respond("long-scr") {
        width: 27%;
        top: -3%;
        right: 0;
      }
      @include respond("tab") {
        width: 33%;
        right: -2%;
        top: -16%;
      }
      @include respond("mobile") {
        width: 36%;
      }

      & > img {
        @include wh100;
      }
      .number {
        position: absolute;
        top: 34%;
        left: 27%;
        font-size: 2rem;
        color: $black-p;
        margin-left: -0.9rem;
        letter-spacing: -0.5px;

        @include respond("tab") {
          font-size: 1.9rem;
          letter-spacing: normal;
          top: 34%;
        }

        & > b,
        & > .ja {
          margin-left: -0.7rem;
        }
        & > .en {
          display: inline-block;
          text-transform: uppercase;
          font-size: 1.8rem;
          margin-left: -0.2rem;
          @include respond("tab") {
            font-size: 1.4rem;
          }
        }
      }
    }

    .ducks {
      &__two {
        bottom: 0;
        right: 10%;
        height: 15%;
        transform: rotateY(180deg) rotate(12deg);
      }
      &__three {
        top: 52%;
        left: 54%;
        height: 15%;
        transform: rotate(12deg);
        @include respond("tab") {
          height: 14%;
          top: 48%;
          left: 55%;
        }
      }
    }
    .duck {
      filter: drop-shadow(0 0 1px rgba(0, 0, 0, 0.1));
      pointer-events: none;

      &-big {
        height: 100%;
      }
      &-middle {
        height: 75%;
      }
      &-small {
        height: 50%;
      }
    }
  }
}
</style>

<script>
import bagusScroll from "~/mixins/bagusScroll.js";
export default {
  head() {
    return {
      title: "Location"
    };
  },
  data() {
    return {
      planeToggle: false,
      time: ""
    };
  },
  mixins: [bagusScroll],
  mounted() {
    this.timeCatcher();
    setInterval(this.timeCatcher, 5000);
  },
  components: {
    MobileTitle: () => import("~/components/Mobile/BagusTitle.vue")
  },
  methods: {
    timeCatcher() {
      const diffFromUTC = 7;
      const formatter = cli => {
        if (cli < 10) {
          return "0" + cli;
        } else {
          return cli;
        }
      };
      const t = new Date().getUTCHours() + diffFromUTC;
      const m = new Date().getUTCMinutes();
      this.time = `${formatter(t)}：${formatter(m)}`;
    },
    orangeFlicker() {
      const orange = document.getElementsByClassName("orange")[0];
      TweenMax.to(orange, 1.1, {
        scale: 1.3,
        opacity: 0,
        y: -15,
        repeat: -1
      });
    },
    orangeHover() {
      const orange = document.getElementsByClassName("orange")[0];
      TweenMax.to(orange, 0.2, { y: -3, rotation: 0 });
    },
    orangeActive() {
      const orange = document.getElementsByClassName("orange")[0];
      TweenMax.to(orange, 0.2, { rotation: 10 });
    },
    orangeInActive() {
      const orange = document.getElementsByClassName("orange")[0];
      TweenMax.to(orange, 0.2, { rotation: 0 });
    },
    orangeSilence() {
      const orange = document.getElementsByClassName("orange")[0];
      TweenMax.to(orange, 0.5, { scale: 1, opacity: 1, y: 0 });
    },
    highlightShip() {
      const { ship } = this.$refs;
      TweenMax.killTweensOf(ship);
      const tl = new TimelineLite();
      tl.to(ship, 0.6, {
        rotation: -6,
        x: -6,
        ease: Power1.easeInOut
      })
        .to(ship, 1.2, {
          rotation: 9,
          x: 3,
          ease: Power1.easeInOut
        })
        .to(ship, 0.8, { rotation: 0, x: 0, ease: Power1.easeInOut }, "+=0.1");
    },
    planeHover() {
      if (this.planeToggle) {
        return false;
      }
      const { plane } = this.$refs;
      TweenMax.to(plane, 0.3, { rotation: 40 });
    },
    planeActive() {
      if (this.planeToggle) {
        return false;
      }
      const { plane } = this.$refs;
      TweenMax.to(plane, 0.1, { y: 5 });
    },
    planeInActive() {
      if (this.planeToggle) {
        return false;
      }
      const { plane } = this.$refs;
      TweenMax.to(plane, 0.1, { y: 0 });
    },
    planeSilence() {
      if (this.planeToggle) {
        return false;
      }
      const { plane } = this.$refs;
      TweenMax.to(plane, 0.3, { rotation: 30 });
    },
    bonVoyage() {
      const { plane } = this.$refs;
      const tl = new TimelineLite({
        onComplete: () => (this.planeToggle = false)
      });
      this.planeToggle = true;
      TweenMax.set(plane, { force3D: true });
      tl.to(plane, 3.4, {
        x: -1600,
        y: -800,
        rotation: 30.001,
        ease: Power4.easeIn
      })
        .set(plane, { x: 1000, y: 400, rotation: 30.002 })
        .to(plane, 2, {
          x: 0,
          y: 0,
          rotation: 30,
          ease: Power4.easeOut
        });
    },
    threeDOn(ev) {
      const tar = [...ev.target.childNodes];
      const tl = new TimelineLite();
      tl.staggerTo(tar, 0.4, { y: -20, ease: Power1.easeInOut }, 0.1)
        .staggerTo(tar, 0.7, { y: 40, ease: Power1.easeInOut }, 0.1, "-=0.4")
        .staggerTo(tar, 0.5, { y: 0, ease: Power1.easeInOut }, 0.1, "-=0.7");
    },
    twoDOn(ev) {
      const tar = [...ev.target.childNodes];
      const tl = new TimelineLite();
      tl.staggerTo(tar, 0.4, { y: -20, ease: Power1.easeInOut }, 0.1)
        .staggerTo(tar, 0.7, { y: 40, ease: Power1.easeInOut }, 0.1, "-=0.2")
        .staggerTo(tar, 0.5, { y: 0, ease: Power1.easeInOut }, 0.1, "-=0.5");
    }
  }
};
</script>
