<template>
  <section class="works">
    <div class="caption-box" :class="{ blur: selected.toggled }">
      <CldImg
        src="bagushaus/works/works-tiles.png"
        width="729,1458"
        sizes="58vw"
        class="caption-box-img"
      />
      <p class="caption">{{ $t('works.caption') }}</p>
    </div>
    <div class="worklist" :class="{ blur: selected.toggled }">
      <figure
        class="worklist-each"
        v-for="(work, i) in workList"
        :key="work.name"
        @click="showDetail(i)"
      >
        <LazyImg
          :src="`bagushaus/worklist/${work.imageFolder}/${work.images[0]}`"
          width="474,948"
          sizes="474px"
          :alt="work.name"
        />
        <figcaption class="worklist-each__caption">{{ work.name }}</figcaption>
      </figure>
    </div>
    <transition name="popup" @enter="popup" @leave="popdown" :css="false">
      <Popup v-show="selected.toggled" :selected="selected" />
    </transition>
  </section>
</template>

<script>
import bagusScroll from "~/mixins/bagusScroll.js";
export default {
  components: {
    Popup: () => import("~/components/Works/Popup.vue")
  },
  data() {
    return {
      selected: {
        toggled: false,
        img: [],
        imgF: "",
        client: "",
        tech: "",
        description: "",
        url: ""
      }
    };
  },
  mixins: [bagusScroll],
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
        imgF: list.imageFolder,
        client: list.client,
        tech: list.tech,
        description: list.description,
        url: list.url
      };
    },
    popup(el, done) {
      TweenLite.from(el, 0.5, {
        opacity: 0,
        y: 200,
        scale: 0,
        ease: Power2.easeOut,
        onComplete: done
      });
    },
    popdown(el, done) {
      TweenLite.to(el, 0.4, {
        opacity: 0,
        y: 200,
        scale: 0,
        ease: Power1.easeIn,
        onComplete: done
      });
    }
  }
};
</script>

<style lang="scss" scoped>
$trs: all 0.4s;

.works {
  color: $black-d;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.caption-box {
  width: 61%;
  height: 22%;
  margin: 7%;
  position: relative;
  transition: $trs;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .caption {
    font-size: 1.8rem;
    line-height: 1.6;
    white-space: pre;
    text-align: center;
  }

  &:before,
  &:after {
    content: "";
    width: 30rem;
    height: 30rem;
    background-image: url("https://res.cloudinary.com/oliancho/image/upload/q_auto,f_auto/v1563231777/bagushaus/works/works-oliveanchovy.png");
    background-size: contain;
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
  height: 45%;
  margin-top: 3%;
  display: grid;
  grid-auto-columns: 30rem;
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

    &:hover img {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 85%;
      object-fit: contain;
      transition: transform 0.2s;
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
      right: -3rem;
      transform: rotate(45deg);
    }
  }
}

.blur {
  filter: blur(20px);
  opacity: 0.7;
}
</style>