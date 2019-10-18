<template>
  <section class="blog">
    <MobileTitle v-show="$vssWidth <= $data.$tab" />

    <CldImg
      src="bagushaus/blog/blog-starbacks"
      width="1187,2374"
      :sizes="`(max-width: ${$data.$tab}) 95vw, 1180px`"
      alt="background image with stars"
      id="blog-stars"
    />
    <div class="caption-box">
      <picture class="caption-box-tiles">
        <source
          :media="`(max-width: ${$data.$tab}px)`"
          :srcset="`https://res.cloudinary.com/oliancho/image/upload/${options}381/v1564665891/bagushaus/Mobile/tile-blog2.png 381w, https://res.cloudinary.com/oliancho/image/upload/${options}762/v1564665891/bagushaus/Mobile/tile-blog2.png 762w, https://res.cloudinary.com/oliancho/image/upload/${options}1141/v1564665891/bagushaus/Mobile/tile-blog2.png 1141w`"
          sizes="94vw"
        />
        <CldImg src="bagushaus/blog/blog-tiles.png" width="729,1458" sizes="58vw" />
      </picture>
      <client-only>
        <LazyImg
          :src="latestPost.thumbnail"
          width="103, 206, 309"
          options="q_auto,f_auto,ar_2:3,c_fill,g_auto"
          class="latest-thumbnail"
          v-if="$vssWidth <= $data.$tab"
        />
      </client-only>
      <div class="latest-title" v-show="$vssWidth > $data.$tab">
        <h3>{{ $t('blog.caption') }}</h3>
      </div>
      <div class="latest-post">
        <h3 class="latest-post-text latest-post-top">
          <span class="date">{{ latestPost.date | date($i18n.locale) }}</span>
          <span class="title">【{{ latestPost.title }}】</span>
        </h3>
        <p class="latest-post-text latest-post-low">{{ latestPost.summary }}</p>
      </div>
      <nuxt-link :to="`blog-posts/${latestPost.link}`" class="cta" tabindex="0">
        <p class="cta-btn">{{ $t('blog.readThis') }}</p>
      </nuxt-link>
    </div>
    <p class="middle">{{ $t('blog.intro') }}</p>
    <div class="categories">
      <nuxt-link class="go-to" :to="localePath('blog-posts')" tabindex="0">
        <CldImg
          src="bagushaus/blog/blog-moon.png"
          width="221,442"
          sizes="221px"
          alt="go to blog page"
          @click.native="selectTag({tag: 'all', reset: false})"
        />
        <p class="go-to__text">Check It Out!</p>
      </nuxt-link>
      <nuxt-link class="category" :to="localePath('blog-posts')" tabindex="0">
        <CldImg
          src="bagushaus/blog/blog-1tree.png"
          width="287,574"
          sizes="287px"
          alt="to Nomad Life page"
          @mouseenter.native="treeShake($event)"
          @mouseleave.native="restore($event)"
          @click.native="selectTag({tag: 'life', reset: false})"
        />
        <p :class="`life-${$i18n.locale}`" ref="life">{{ $t('blog.life') }}</p>
      </nuxt-link>
      <nuxt-link class="category" :to="localePath('blog-posts')" tabindex="0">
        <CldImg
          src="bagushaus/blog/blog-2tree.png"
          width="301,602"
          sizes="301px"
          alt="tall tree"
          @mouseenter.native="treeBump($event)"
          @mouseleave.native="restore($event)"
          @click.native="selectTag({tag: 'web', reset: false})"
        />
        <p :class="`work-${$i18n.locale}`" ref="work">{{ $t('blog.work') }}</p>
      </nuxt-link>
      <nuxt-link class="category" :to="localePath('blog-posts')" tabindex="0">
        <CldImg
          src="bagushaus/blog/blog-3tree.png"
          width="202,404"
          sizes="202px"
          alt="short tree"
          @mouseenter.native="treeGrow($event)"
          @mouseleave.native="restore($event)"
          @click.native="selectTag({tag: 'japanese', reset: false})"
        />
        <p :class="`teach-${$i18n.locale}`" ref="teach">{{ $t('blog.teaching') }}</p>
      </nuxt-link>
      <nuxt-link class="category" :to="localePath('blog-posts')" tabindex="0">
        <CldImg
          src="bagushaus/blog/blog-4tree.png"
          width="167,334"
          sizes="167px"
          alt="shortest tree"
          @mouseenter.native="treeMario($event)"
          @mouseleave.native="restore($event)"
          @click.native="selectTag({tag: 'glutenFree', reset: false})"
        />
        <p :class="`recipe-${$i18n.locale}`" ref="recipe">{{ $t('blog.recipe') }}</p>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import bagusScroll from "~/mixins/bagusScroll.js";
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";
export default {
  head() {
    return {
      title: "Blog"
    };
  },
  async asyncData({ app }) {
    const postList = app.i18n.locale === "en" ? postsEn : postsJa;

    async function awaitImport(slug) {
      const latestMD = await import(
        `~/contents/${app.i18n.locale}/posts/${slug}.md`
      );
      const rawThum = latestMD.attributes.thumbnail.split("/");
      const newThum = rawThum.slice(-3).join("/");
      return {
        link: slug,
        date: latestMD.attributes.date,
        title: latestMD.attributes.title,
        summary: latestMD.attributes.summary,
        thumbnail: newThum
      };
    }

    const latestPost = await awaitImport(postList[0].slug);

    return { latestPost };
  },
  data() {
    return {
      options: "f_auto,q_auto,w_"
    };
  },
  mixins: [bagusScroll],
  components: {
    MobileTitle: () => import("~/components/Mobile/BagusTitle.vue")
  },
  methods: {
    treeShake(event) {
      const { life } = this.$refs;
      TweenMax.to([event.target, life], 1.8, {
        rotation: 4,
        ease: Back.easeIn.config(4),
        repeat: -1,
        yoyo: true
      });
    },
    treeBump(event) {
      const { work } = this.$refs;
      TweenMax.to(event.target, 0.8, {
        scale: 1.05,
        ease: Elastic.easeOut.config(2, 0.4)
      });
      TweenMax.to(work, 0.8, {
        scale: 1.05,
        y: -15,
        ease: Elastic.easeOut.config(2, 0.3)
      });
    },
    treeGrow(event) {
      const { teach } = this.$refs;
      TweenMax.to(event.target, 0.5, { scaleY: 1.3 });
      TweenMax.to(teach, 0.5, { y: -60, scaleY: 1.3 });
    },
    treeMario(event) {
      const { recipe } = this.$refs;
      TweenMax.to([event.target, recipe], 0.7, {
        scaleX: 1.5,
        ease: Bounce.easeOut
      });
    },
    restore(event) {
      const { life, work, teach, recipe } = this.$refs;
      TweenMax.to([event.target, life, work, teach, recipe], 0.2, {
        scale: 1,
        rotation: 0,
        x: 0,
        y: 0
      });
    },
    ...mapMutations("posts", ["selectTag"])
  },
  mounted() {
    this.$nextTick(() => {
      const stars = document.getElementById("blog-stars");
      TweenMax.from(stars, 5, {
        opacity: 0.6,
        scale: 0.95,
        repeat: -1,
        ease: Power1.easeInOut,
        yoyo: true
      });
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.name.startsWith("blog-posts")) {
      this.$scrollTo("#defaultLayout", 400, { easing: "ease-out" });
      TweenLite.to("#defaultLayout", 0.4, { opacity: 0, onComplete: next });
    } else next();
  }
};
</script>

<style lang="scss" scoped>
.blog {
  color: $black-d;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  & * {
    outline: none;
  }

  & > img {
    position: absolute;
    top: -25%;
    left: -1%;
    width: 102%;
    height: 128%;
  }
}
.caption-box {
  width: 61%;
  height: 22%;
  padding: 3.3% 4% 3.4%;
  margin-top: 7%;
  background-color: $white-p;
  position: relative;

  @include respond("tab") {
    margin-top: 0;
    padding: 4.5rem;
    width: 100%;
    height: 39rem;
    background-color: transparent;
    display: flex;
  }

  &-tiles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    @include respond("tab") {
      z-index: 2;
    }

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  .latest {
    &-thumbnail {
      height: 100%;
      object-fit: contain;
    }

    &-post {
      width: 100%;
      height: 100%;
      line-height: 1.6;
      text-align: center;

      @include respond("tab") {
        display: flex;
        flex-direction: column;
        padding-top: 4rem;
        text-align: left;
      }

      &-text {
        overflow: hidden;
        text-overflow: ellipsis;

        @include respond("tab") {
          overflow: visible;
          .date {
            display: inline-block;
            position: relative;
            color: $white-p;
            background-color: $black-d;
            margin-left: -3rem;
            z-index: 2;
            padding: 0.2rem 1rem;
            font-family: $font-h;
            font-weight: 100;
            font-size: 2rem;

            &::before {
              content: "NEW!";
              color: inherit;
              background-color: inherit;
              font-style: italic;
              margin-right: 1rem;
            }
          }
          .title {
            display: block;
            margin-top: 1.5rem;
            margin-left: 1rem;
            letter-spacing: -0.5px;
            text-align: center;
          }
        }
      }

      &-top {
        font-size: 1.8rem;
        white-space: nowrap;
        height: 35%;
      }
      &-low {
        height: 60%;
        font-size: 1.6rem;
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: center;

        @include respond("tab") {
          padding: 0 2rem;
          font-size: 1.9rem;
        }
      }
    }

    &-title {
      height: 21%;
      width: 23%;
      position: absolute;
      top: 0.4%;
      left: 9%;
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        font-size: 1.9rem;
        font-weight: 600;
        color: #718bad;
      }
    }
  }
  .cta {
    height: 21%;
    width: 23%;
    position: absolute;
    bottom: 2%;
    right: 9%;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: all 0.2s;

    @include respond("tab") {
      height: 11%;
      z-index: 3;
    }

    &:hover {
      transform: translateY(-1px);
      background-color: rgba(12, 13, 15, 0.1);
    }

    &:focus {
      @include focus-ol;
    }

    &-btn {
      font-size: 1.6rem;
      color: $white-p;
      margin-left: 12.5%;
      letter-spacing: -0.3px;
      @include respond("tab") {
        font-size: 2.2rem;
        margin-left: 9%;
        border-bottom: 1px solid #fff;
        line-height: 1.3;
      }
    }
  }
}

.categories {
  width: 100%;
  flex: 1;
  display: grid;
  grid-template-columns: 24% 25% 17% 14%;
  justify-content: center;
  align-items: flex-end;
  gap: 1rem;
  position: relative;
  font-feature-settings: "palt";
  line-height: 1.3;

  @include respond("tab") {
    height: 46rem;
    gap: 0;
    grid-template-columns: 28% 29% 21% 18%;
  }

  .category {
    display: block;
    width: 100%;
    position: relative;

    &:focus {
      @include focus-ol;
    }

    & > img {
      width: 100%;
      object-fit: contain;
      transform-origin: bottom;
    }

    & > p {
      position: absolute;
      white-space: pre;
      font-size: 1.8rem;
      text-align: center;
      pointer-events: none;
      color: #000;

      @include respond("tab") {
        font-size: 2rem;
        line-height: 1.2;
        text-shadow: -1px -1px 1px $yellow-bg, 1px -1px 1px $yellow-bg,
          -1px 1px 1px $yellow-bg, 1px 1px 1px $yellow-bg;
      }
      @include respond("mobile") {
        font-size: 1.8rem;
      }
    }

    .life {
      &-ja {
        top: 33.5%;
        left: 34.5%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 33%;
          left: 32%;
        }
        @include respond("tab") {
          top: 33%;
          left: 30%;
        }
        @include respond("mobile") {
          top: 32.5%;
          left: 29%;
        }
      }
      &-en {
        top: 34.5%;
        left: 39%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 34%;
          left: 37%;
        }
        @include respond("tab") {
          left: 36%;
        }
      }
    }
    .work {
      &-ja {
        top: 37%;
        left: 41%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 36%;
          left: 40%;
        }
        @include respond("tab") {
          top: 36%;
          left: 38.5%;
        }
        @include respond("mobile") {
          top: 36%;
          left: 37%;
        }
      }
      &-en {
        top: 37%;
        left: 44%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 36%;
          left: 43%;
        }
        @include respond("tab") {
          left: 42.5%;
        }
        @include respond("mobile") {
          top: 36.5%;
          left: 42%;
        }
      }
    }
    .teach {
      &-ja {
        top: 36%;
        left: 35.5%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 34%;
          left: 32%;
        }
        @include respond("tab") {
          top: 35%;
          left: 32%;
        }
        @include respond("mobile") {
          top: 35%;
          left: 31%;
        }
      }
      &-en {
        top: 36%;
        left: 29%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 34%;
          left: 25%;
        }
        @include respond("tab") {
          top: 35%;
          left: 24%;
        }
      }
    }
    .recipe {
      &-ja {
        top: 35%;
        left: 28%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 34%;
          left: 25%;
        }
        @include respond("tab") {
          top: 35.5%;
          left: 26%;
        }
        @include respond("mobile") {
          top: 34%;
          left: 25%;
        }
      }
      &-en {
        top: 35%;
        left: 32%;
        @media only screen and (max-aspect-ratio: 1/1) {
          top: 34%;
          left: 29%;
        }
        @include respond("tab") {
          left: 30%;
        }
      }
    }
  }
}

.middle {
  position: absolute;
  top: 36%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.9rem;

  @include respond("tab") {
    top: 49%;
    text-align: center;
    width: 30%;
    font-size: 2rem;
    font-weight: 500;
  }
  @include respond("mobile") {
    top: 51%;
  }
}

.go-to {
  position: absolute;
  top: -1%;
  right: 3%;
  height: 42%;

  &:focus {
    @include focus-ol;
  }

  @include respond("tab") {
    top: 2%;
    height: 38%;
    right: 5%;
  }

  & > img {
    height: 100%;
    object-fit: contain;
    transition: all 0.2s;

    &:hover {
      filter: saturate(1.5);
      & + p {
        transform: translateY(-1px);
        text-shadow: none;
      }
    }
  }

  &__text {
    position: absolute;
    top: 30%;
    right: 17%;
    width: 50%;
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    text-align: center;
    @include tsh-m;
    transition: transform 0.2s;
    pointer-events: none;
    color: #000;
  }
}
</style>