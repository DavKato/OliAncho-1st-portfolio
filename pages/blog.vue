<template>
  <section class="blog">
    <CldImg
      src="bagushaus/blog/blog-starbacks"
      width="1187,2374"
      sizes="1180px"
      alt="background image with stars"
      id="blog-stars"
    />
    <div class="caption-box">
      <CldImg
        src="bagushaus/blog/blog-tiles.png"
        width="729,1458"
        sizes="729px"
        class="caption-box-tiles"
      />
      <div class="latest-title">
        <h3>{{ $t('blog.caption') }}</h3>
      </div>
      <div class="latest-post">
        <p
          class="latest-post-text latest-post-top"
        >{{ latestPost.date | date($i18n.locale) }} 【{{ latestPost.title }}】</p>
        <p class="latest-post-text latest-post-low">{{ latestPost.summary }}</p>
      </div>
      <nuxt-link :to="`posts/${latestPost.link}`" class="cta">
        <p class="cta-btn">{{ $t('blog.readThis') }}</p>
      </nuxt-link>
    </div>
    <p class="middle">{{ $t('blog.intro') }}</p>
    <div class="categories">
      <nuxt-link class="category" :to="localePath('posts')">
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
      <nuxt-link class="category" :to="localePath('posts')">
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
      <nuxt-link class="category" :to="localePath('posts')">
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
      <nuxt-link class="category" :to="localePath('posts')">
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
      <nuxt-link class="go-to" :to="localePath('posts')">
        <CldImg
          src="bagushaus/blog/blog-moon.png"
          width="221,442"
          sizes="221px"
          alt="go to blog page"
          @click.native="selectTag({tag: 'all', reset: false})"
        />
        <p class="go-to__text">{{ $t('blog.goto') }}</p>
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
  async asyncData({ app }) {
    const postList = app.i18n.locale === "en" ? postsEn : postsJa;

    async function awaitImport(slug) {
      const latestMD = await import(
        `~/contents/${app.i18n.locale}/posts/${slug}.md`
      );
      return {
        link: slug,
        date: latestMD.attributes.date,
        title: latestMD.attributes.title,
        summary: latestMD.attributes.summary
      };
    }

    const latestPost = await awaitImport(postList[0].slug);

    return { latestPost };
  },
  mixins: [bagusScroll],
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
    const stars = document.getElementById("blog-stars");

    TweenMax.from(stars, 5, {
      opacity: 0.7,
      scale: 0.95,
      repeat: -1,
      ease: Power1.easeOut,
      yoyo: true
    });
  },
  beforeRouteLeave(to, from, next) {
    if (to.name.startsWith("posts")) {
      // TweenLite.set("#dummy-sky", { display: "block" });
      window.scrollTo({ top: 0, behavior: "smooth" });
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
  z-index: 2;

  &-tiles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .latest {
    &-post {
      width: 100%;
      height: 100%;
      line-height: 1.6;
      text-align: center;

      &-text {
        overflow: hidden;
        text-overflow: ellipsis;
      }

      &-top {
        font-size: 1.8rem;
        white-space: nowrap;
        height: 35%;
      }
      &-low {
        height: 60%;
        font-size: 1.7rem;
        line-height: 1.4;
        display: flex;
        flex-direction: column;
        justify-content: center;
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

    &:hover {
      transform: translateY(-1px);
      background-color: rgba(12, 13, 15, 0.1);
    }

    &-btn {
      font-size: 1.6rem;
      color: $white-p;
      margin-left: 12.5%;
      letter-spacing: -0.3px;
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

  .category {
    display: block;
    width: 100%;
    position: relative;

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
    }

    .life {
      &-ja {
        top: 33.5%;
        left: 34.5%;
      }
      &-en {
        top: 34.5%;
        left: 39%;
      }
    }
    .work {
      &-ja {
        top: 37%;
        left: 41%;
      }
      &-en {
        top: 37%;
        left: 44%;
      }
    }
    .teach {
      &-ja {
        top: 36%;
        left: 35.5%;
      }
      &-en {
        top: 36%;
        left: 29%;
      }
    }
    .recipe {
      &-ja {
        top: 35%;
        left: 28%;
      }
      &-en {
        top: 35%;
        left: 32%;
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
}

.go-to {
  position: absolute;
  top: -1%;
  right: 3%;
  height: 42%;

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
    white-space: pre;
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