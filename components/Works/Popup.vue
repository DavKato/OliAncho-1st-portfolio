<template>
  <div class="popup" @click="selected.toggled = false">
    <!-- <div class="exitBox" @click="selected.toggled = false">
      <span class="span1"></span>
      <span class="span2"></span>
    </div>-->
    <div class="image-roll">
      <LazyImg
        v-for="(image, i) in selected.img"
        :key="image"
        :src="`bagushaus/worklist/${selected.imgF}/${image}`"
        width="474,948"
        sizes="30vw"
        :alt="`selected work's image ${i+1}`"
      />
    </div>
    <div class="textrow">
      <dl class="textrow__left">
        <div class="textrow__left--box">
          <dt>{{ $t('works.clientCap') }}：</dt>
          <dd>{{ selected.client }}</dd>
        </div>
        <div class="textrow__left--box">
          <dt>{{ $t('works.techCap') }}：</dt>
          <dd>{{ selected.tech }}</dd>
        </div>
        <div>
          <a :href="selected.url" class="textrow__left--box textrow__left--link">
            <dt>URL：</dt>
            <dd>{{ selected.url }}</dd>
          </a>
        </div>
      </dl>
      <p class="textrow__right">{{ selected.description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.popup {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 9%;

  opacity: 0;
  transform: scale(0);
  will-change: transform;
  transform-origin: bottom;

  @include respond("tab") {
    justify-content: flex-start;
    padding: 3% 10%;
  }
  @include respond("mobile") {
    padding: 9% 10%;
  }

  .image-roll {
    width: 100%;
    height: 38%;
    margin-top: 6%;
    display: flex;
    justify-content: center;

    @include respond("tab") {
      width: 85%;
      height: 58%;
      flex-direction: column;
      margin-top: 10%;
    }

    & img {
      width: 40%;
      height: 100%;
      object-fit: contain;
      &:first-child {
        margin-right: 4rem;
        @include respond("tab") {
          margin-right: 0;
          margin-bottom: 4rem;
        }
      }

      @include respond("tab") {
        width: 100%;
        height: auto;
      }
    }
  }

  .textrow {
    width: 100%;
    margin-top: 6%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    font-size: 1.8rem;
    line-height: 1.5;
    color: #000;

    @include respond("tab") {
      order: -1;
      flex-direction: column;
      align-items: center;
      font-size: 2.1rem;
      margin-top: 10%;
    }

    &__left {
      width: 35%;
      margin-right: 6rem;
      @include respond("tab") {
        width: 100%;
        margin-right: 0;
      }

      &--box {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;

        &:nth-child(2) {
          margin: 5% 0;
          @include respond("tab") {
            margin: 3% 0;
          }
        }

        dt {
          white-space: nowrap;
        }
        dd {
          white-space: pre-wrap;
        }
      }
      &--link {
        color: inherit;

        & > dd {
          box-shadow: inset 0 -1px 0 currentColor;
          transition: color 0.8s ease-in, box-shadow 0.13s ease-in-out;
        }

        &:hover > dd {
          box-shadow: inset 0 0 0 currentcolor, 0 2px 0 currentcolor;
        }
        &:link,
        &:visited {
          text-decoration: none;
        }
      }
    }

    &__right {
      width: 35%;
      white-space: pre-wrap;

      @include respond("tab") {
        width: 100%;
        margin-left: 0;
        margin-top: 5%;
      }
    }
  }
}

// @mixin exitButton {
//   height: 0;
//   width: 6rem;
//   border-top: 8px solid $blue-p;
//   position: absolute;
//   top: 2.5rem;
//   left: -0.2rem;
// }

// .exitBox {
//   width: 6rem;
//   height: 6rem;
//   border: 2px solid $gray-d;
//   position: absolute;
//   top: 2rem;
//   right: 2.6rem;
//   cursor: pointer;

//   .span1 {
//     @include exitButton;
//     transform: rotate(45deg);
//   }
//   .span2 {
//     @include exitButton;
//     transform: rotate(-45deg);
//   }

//   &:hover > span {
//     border-color: darken($blue-p, 15%);
//   }
// }
</style>

<script>
export default {
  props: {
    selected: Object
  },
  methods: {
    path2x(img) {
      return require("../../assets/img/" + img + ".png");
    }
  }
};
</script>
