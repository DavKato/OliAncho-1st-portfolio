<template>
  <section class="works">
    <MobileTitle v-show="$vssWidth <= $data.$tab" />
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
  head() {
    return {
      title: "Works"
    };
  },
  components: {
    Popup: () => import("~/components/Works/Popup.vue"),
    MobileTitle: () => import("~/components/Mobile/BagusTitle.vue")
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
      TweenLite.to(el, 0.4, {
        opacity: 1,
        scale: 1,
        ease: Power2.easeOut,
        onComplete: done
      });
    },
    popdown(el, done) {
      TweenLite.to(el, 0.3, {
        opacity: 0,
        scale: 0,
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
  border: 3rem solid;
  border-image: url("../assets/img/tiles44.png") 72 repeat;

  @include respond("tab") {
    width: 100%;
    height: 19.3rem;
    margin: 0;
  }

  @include respond("mobile") {
    height: 16.7rem;
  }

  &-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    @include respond("tab") {
      object-fit: contain;
    }
  }

  .caption {
    font-size: 1.8rem;
    line-height: 1.6;
    white-space: pre;
    text-align: center;
    @include respond("tab") {
      font-size: 2.3rem;
      line-height: 1.3;
    }
  }

  &:before,
  &:after {
    content: "";
    width: 30rem;
    height: 30rem;
    background-image: url("https://res.cloudinary.com/oliancho/image/upload/q_auto,f_auto/v1563231777/bagushaus/works/works-oliveanchovy.png");
    background-size: contain;
    position: absolute;
    top: -80%;

    @include respond("long-scr") {
      width: 25rem;
      height: 25rem;
    }
    @include respond("tab") {
      content: none;
    }
  }
  &:before {
    left: -28rem;
    transform: rotateY(180deg);
    @include respond("long-scr") {
      left: -23rem;
    }
  }
  &:after {
    right: -28rem;
    @include respond("long-scr") {
      right: -23rem;
    }
  }
}

.worklist {
  width: 100%;
  height: 45%;
  margin-top: 3%;
  display: flex;
  align-items: center;
  transition: $trs;

  //for now
  justify-content: center;

  @include respond("tab") {
    margin: 9rem 0 12rem;
    width: 75%;
    height: auto;
    flex-direction: column;
    justify-content: flex-start;
  }

  &-each {
    width: 30rem;
    height: 100%;
    position: relative;
    cursor: pointer;
    @include respond("tab") {
      height: auto;
      width: 100%;
    }

    &:not(:last-child) {
      margin-right: 10rem;
      @include respond("tab") {
        margin-right: 0;
        margin-bottom: 11rem;
      }

      &::after {
        content: "";
        background-color: #eaea5d;
        width: 1.1rem;
        height: 1.1rem;
        border: 2px solid #707070;
        position: absolute;
        top: 40%;
        right: -5rem;
        transform: rotate(45deg);

        @include respond("tab") {
          content: none;
        }
      }
    }

    &:hover img {
      transform: scale(1.05);
    }

    img {
      width: 100%;
      height: 85%;
      object-fit: contain;
      transition: transform 0.2s;
      @include respond("tab") {
        height: auto;
      }
    }

    &__caption {
      font-size: 1.5rem;
      text-align: center;
      @include respond("tab") {
        font-size: 2.6rem;
      }
    }
    @include respond("tab") {
      &::before {
        content: "";
        position: absolute;
        top: 30%;
        right: -13rem;
        min-width: 34rem;
        min-height: 34rem;
        width: 60%;
        height: 80%;
        background-image: url("https://res.cloudinary.com/oliancho/image/upload/q_auto,f_auto/v1563231777/bagushaus/works/works-oliveanchovy.png");
        background-size: contain;
        background-color: transparent;
        background-repeat: no-repeat;
        z-index: 9;
        opacity: 0.8;
      }
      &:nth-child(2n)::before {
        transform: rotateY(180deg);
        right: unset;
        left: -13rem;
      }
    }
  }
}

.blur {
  filter: blur(20px);
  opacity: 0.7;
}
</style>