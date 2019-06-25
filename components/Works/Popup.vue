<template>
  <div class="popup">
    <div class="exitBox" @click="selected.toggled = false">
      <span class="span1"></span>
      <span class="span2"></span>
    </div>
    <div class="image-roll">
      <img
        v-for="(image, i) in selected.img"
        :key="image"
        :src="path2x(image)"
        :alt="`selected work's image ${i+1}`"
      >
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
        <div class="textrow__left--box">
          <dt>URL：</dt>
          <dd>{{ selected.url }}</dd>
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

  .image-roll {
    width: 100%;
    height: 38%;
    margin-top: 4%;
    display: grid;
    grid-template-columns: repeat(2, 38%);
    justify-content: center;
    gap: 4rem;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .textrow {
    width: 100%;
    margin: 5% auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.8rem;
    line-height: 1.7;

    &__left {
      width: 31%;
      margin-left: 5%;

      &--box {
        display: flex;
        margin-top: 3%;
        // &:not(:last-child) {
        //   margin-bottom: 3%;
        // }

        dt {
          white-space: nowrap;
        }
        dd {
          white-space: pre;
          font-size: 1.7rem;
        }
      }
    }

    &__right {
      width: 40%;
      margin-left: 7%;
    }
  }
}

@mixin exitButton {
  height: 0;
  width: 6rem;
  border-top: 8px solid $blue-p;
  position: absolute;
  // top: 1rem;
  // right: 1rem;
  top: 2.5rem;
  left: -0.2rem;
}

.exitBox {
  width: 6rem;
  height: 6rem;
  border: 2px solid $gray-d;
  position: absolute;
  top: 1.4rem;
  right: 2rem;
  cursor: pointer;

  .span1 {
    @include exitButton;
    transform: rotate(45deg);
  }
  .span2 {
    @include exitButton;
    transform: rotate(-45deg);
  }

  &:hover > span {
    border-color: darken($blue-p, 15%);
  }
}
</style>

<script>
import { TweenLite } from "gsap";
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
