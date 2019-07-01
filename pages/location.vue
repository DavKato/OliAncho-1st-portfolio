<template>
  <section class="location">
    <h1 class="caption">
      {{ $t('location.caption') }}
      <span></span>
    </h1>
    <p class="intro">{{ $t('location.intro') }}</p>
    <div class="map-box">
      <img :src="path2x('maps')" class="map" alt="World map where we have been" />
      <img
        :src="path2x('duck-orange')"
        class="orange"
        ref="orange"
        @click="highlightShip"
        @mouseover="orangeHover"
        @mouseleave="orangeSilence"
        @mousedown="orangeActive"
        @mouseup="orangeInActive"
      />
      <p class="currentP">{{ $t('location.currentParagraph') }}</p>
      <img :src="path2x('wave')" class="wave" />
      <div class="ship" ref="ship" @mouseover="orangeFlicker" @mouseleave="orangeSilence">
        <img :src="path2x('ship')" />
        <div class="info">
          <p class="currentL">{{ $t('location.currentLocation') }}</p>
          <p class="time">{{ time }}</p>
        </div>
      </div>
      <div class="plane" ref="plane">
        <img :src="path2x('plane')" />
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
        <img :src="path2x('duck-yellow')" class="duck duck-big" />
        <img :src="path2x('duck-yellow')" class="duck duck-middle" />
        <img :src="path2x('duck-yellow')" class="duck duck-small" />
      </div>
      <div class="ducks__two" @mouseover="twoDOn">
        <img :src="path2x('duck-yellow')" class="duck duck-middle" />
        <img :src="path2x('duck-yellow')" class="duck duck-small" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
$yellow-location: #eaea5d;
@mixin wh100 {
  width: 100%;
  height: 100%;
}

.location {
  background-image: url("../assets/img/2x/location/location-middle-square.png");
  background-size: 100% 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.6;

  & img {
    object-fit: contain;
  }

  .caption {
    font-size: 2.9rem;
    font-family: $font-p;
    display: inline-block;
    margin-top: 5%;
    position: relative;
    font-style: italic;
    transition: transform 0.2s;

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

      &::after {
        content: "";
        background-image: url(~assets/img/2x/location/location-fart.png);
        background-size: contain;
        position: absolute;
        background-repeat: no-repeat;
        right: -7rem;
        top: 50%;
        height: 10rem;
        width: 8rem;
        transform: translateY(-47%);
      }
    }
  }

  .intro {
    font-size: 1.9rem;
    text-align: center;
    margin-top: 1.5%;
    white-space: pre;
  }

  .map-box {
    height: 62%;
    margin-top: -1%;
    margin-left: -6%;
    position: relative;

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
      width: 2.3%;
      top: 25.8%;
      left: 22.2%;
      filter: $fsh-s;
      cursor: pointer;
    }

    .currentP {
      left: 23%;
      bottom: 6%;
      font-size: 1.9rem;
      white-space: pre;
      text-align: right;
      transform: rotate(-40deg);
    }

    .wave {
      width: 9.5%;
      left: 20%;
      bottom: 2%;
    }

    .ship {
      bottom: -3%;
      left: 27%;
      height: 37.5%;
      width: 21%;
      transform-origin: 45% 70%;

      & > img {
        @include wh100;
      }

      .info {
        position: absolute;
        top: 50%;
        left: -2%;
        height: 50%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        pointer-events: none;

        & > p {
          font-size: 2.4rem;
          line-height: 1.2;
        }
        .time {
          font-weight: 600;
        }
      }
    }

    .plane {
      top: 0;
      right: 4%;
      height: 43%;
      width: 25%;
      transform: rotate(30deg);
      z-index: 300;
      cursor: pointer;

      & > img {
        @include wh100;
      }
      .number {
        position: absolute;
        top: 34%;
        left: 27%;
        font-size: 2.2rem;
        color: $black-p;
        margin-left: -0.5rem;
        letter-spacing: -0.5px;

        & > b,
        & > .ja {
          margin-left: -0.7rem;
        }
        & > .en {
          font-size: 2rem;
          margin-bottom: -5px;
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
import { TweenMax, TimelineLite, CSSPlugin } from "gsap";
export default {
  data() {
    return {
      planeToggle: false,
      time: ""
    };
  },
  mounted() {
    this.timeCatcher();
    setInterval(this.timeCatcher, 5000);
  },
  methods: {
    path2x(img) {
      return require("../assets/img/2x/location/location-" + img + ".png");
    },
    timeCatcher() {
      const diffFromUTC = 2;
      const t = new Date().getUTCHours() + diffFromUTC;
      const m = new Date().getUTCMinutes();
      this.time = `${t}：${m}`;
    },
    orangeFlicker() {
      const { orange } = this.$refs;
      TweenMax.to(orange, 1.1, {
        scale: 1.3,
        opacity: 0,
        y: -15,
        repeat: -1
      });
    },
    orangeHover() {
      const { orange } = this.$refs;
      TweenMax.to(orange, 0.2, { y: -3, rotation: 0 });
    },
    orangeActive() {
      const { orange } = this.$refs;
      TweenMax.to(orange, 0.2, { rotation: 10 });
    },
    orangeInActive() {
      const { orange } = this.$refs;
      TweenMax.to(orange, 0.2, { rotation: 0 });
    },
    orangeSilence() {
      const { orange } = this.$refs;
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
      TweenMax.to(plane, 0.3, { rotation: 33 });
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
      tl.to(plane, 3.4, { x: -1600, y: -800, ease: Power4.easeIn })
        .set(plane, { x: 1000, y: 400 })
        .to(plane, 2, { x: 0, y: 0, ease: Power4.easeOut });
    },
    threeDOn(ev) {
      const tar = [...ev.target.childNodes];
      const tl = new TimelineLite();
      tl.staggerTo(tar, 0.4, { y: -15, ease: Power1.easeInOut }, 0.1)
        .staggerTo(tar, 0.7, { y: 30, ease: Power1.easeInOut }, 0.1, "-=0.4")
        .staggerTo(tar, 0.5, { y: 0, ease: Power1.easeInOut }, 0.1, "-=0.7");
    },
    twoDOn(ev) {
      const tar = [...ev.target.childNodes];
      const tl = new TimelineLite();
      tl.staggerTo(tar, 0.4, { y: -15, ease: Power1.easeInOut }, 0.1)
        .staggerTo(tar, 0.7, { y: 30, ease: Power1.easeInOut }, 0.1, "-=0.2")
        .staggerTo(tar, 0.5, { y: 0, ease: Power1.easeInOut }, 0.1, "-=0.5");
    }
  }
};
</script>
