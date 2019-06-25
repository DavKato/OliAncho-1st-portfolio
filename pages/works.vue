<template>
  <section class="works">
    <div class="caption-box" :class="{ blur: selected.toggled }">
      <p class="caption">{{ $t('works.caption') }}</p>
    </div>
    <div class="worklist" :class="{ blur: selected.toggled }">
      <figure
        class="worklist-each"
        v-for="(work, i) in workList"
        :key="work.name"
        @click="showDetail(i)"
      >
        <img :src="path2x(work.images[0])" :alt="work.name">
        <figcaption class="worklist-each__caption">{{ work.name }}</figcaption>
      </figure>
    </div>
    <transition name="popup" @enter="popup" @leave="popdown" :css="false">
      <Popup v-if="selected.toggled" :selected="selected"/>
    </transition>
  </section>
</template>

<script>
import { TweenLite, CSSPlugin } from "gsap";
import Popup from "~/components/Works/Popup";
export default {
  components: {
    Popup
  },
  data() {
    return {
      selected: {
        toggled: false,
        img: [],
        client: "",
        tech: "",
        description: "",
        url: ""
      }
    };
  },
  computed: {
    workList() {
      return this.$t("works.list");
    }
  },
  methods: {
    path2x(img) {
      return require("../assets/img/" + img + ".png");
    },
    showDetail(i) {
      const list = this.workList[i];
      this.selected = {
        toggled: true,
        img: [...list.images],
        client: list.client,
        tech: list.tech,
        description: list.description,
        url: list.url
      };
    },
    popup(el, done) {
      TweenLite.from(el, 0.3, {
        opacity: 0,
        y: 200,
        scale: 0,
        onComplete: done
      });
    },
    popdown(el, done) {
      TweenLite.to(el, 0.3, {
        opacity: 0,
        y: 200,
        scale: 0,
        onComplete: done
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$trs: all 0.3s;

.works {
  color: $black-d;

  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caption-box {
  width: 61%;
  padding: 3.3% 0;
  margin: 8% auto;
  background-image: url(~assets/img/2x/works/works-tiles.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  transition: $trs;

  .caption {
    font-size: 1.9rem;
    line-height: 1.6;
    white-space: pre;
    text-align: center;
  }

  &:before,
  &:after {
    content: "";
    width: 30rem;
    height: 30rem;
    background-image: url(~assets/img/2x/works/works-oliveanchovy.png);
    background-size: 100% 100%;
    position: absolute;
    top: -40%;
  }
  &:before {
    left: -24rem;
    transform: rotateY(180deg);
  }
  &:after {
    right: -24rem;
  }
}

.worklist {
  width: 100%;
  height: 25%;
  margin-top: 5%;
  display: grid;
  grid-auto-columns: 25rem;
  grid-auto-flow: column;
  gap: 5rem;
  align-items: center;
  transition: $trs;

  //for now
  justify-content: center;

  &-each {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;

    img {
      width: 100%;
      height: 85%;
      object-fit: contain;
    }

    &__caption {
      font-size: 1.5rem;
      text-align: center;
    }
    &:not(last-child)::after {
      content: "";
      background-color: #eaea5d;
      width: 1.1rem;
      height: 1.1rem;
      border: 2px solid #707070;
      position: absolute;
      top: 40%;
      right: -2.5rem;
      transform: rotate(45deg);
    }
  }
}

.blur {
  filter: blur(20px);
  opacity: 0.7;
}
</style>