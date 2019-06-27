<template>
  <section class="location">
    <h1 class="caption">
      {{ $t('location.caption') }}
      <span></span>
    </h1>
    <p class="intro">{{ $t('location.intro') }}</p>
    <div class="map-box">
      <img :src="path2x('maps')" class="map" alt="World map where we have been">
      <img :src="path2x('duck-orange')" class="orange" ref="orange">
      <p class="currentP">{{ $t('location.currentParagraph') }}</p>
      <img :src="path2x('wave')" class="wave">
      <div class="ship">
        <img :src="path2x('ship')">
        <div class="info">
          <p class="currentL">{{ $t('location.currentLocation') }}</p>
          <p class="time">15:00</p>
        </div>
      </div>
      <div class="plane">
        <img :src="path2x('plane')">
        <p class="number">
          <b>20</b>/
          <b>193</b>
          <span :class="$i18n.locale">{{ $t('location.numberVisited') }}</span>
        </p>
      </div>
      <div class="ducks__three">
        <img :src="path2x('duck-yellow')" class="duck duck-big">
        <img :src="path2x('duck-yellow')" class="duck duck-middle">
        <img :src="path2x('duck-yellow')" class="duck duck-small">
      </div>
      <div class="ducks__two">
        <img :src="path2x('duck-yellow')" class="duck duck-middle">
        <img :src="path2x('duck-yellow')" class="duck duck-small">
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
      top: 25.4%;
      left: 22.2%;
      filter: $fsh-s;
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
export default {
  methods: {
    path2x(img) {
      return require("../assets/img/2x/location/location-" + img + ".png");
    }
  }
};
</script>
