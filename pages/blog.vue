<template>
  <section class="blog">
    <img :src="path2x('blog-starbacks')" alt="background image with stars" ref="stars">
    <div class="caption-box">
      <h2>{{ $t('blog.caption') }}</h2>
      <p class="latest-post">{{ $t('blog.latestPost') }}</p>
      <nuxt-link :to="localePath('blog')" class="cta">
        <p class="cta-btn">{{ $t('blog.readThis') }}</p>
      </nuxt-link>
    </div>
    <p class="middle">{{ $t('blog.intro') }}</p>
    <div class="categories">
      <nuxt-link :to="localePath('blog')" class="category">
        <img
          :src="path2x('blog-1tree')"
          alt="tallest tree"
          @mouseover="treeShake($event)"
          @mouseleave="restore($event)"
        >
        <p ref="life">{{ $t('blog.life') }}</p>
      </nuxt-link>
      <nuxt-link :to="localePath('blog')" class="category">
        <img
          :src="path2x('blog-2tree')"
          alt="tall tree"
          @mouseover="treeBump($event)"
          @mouseleave="restore($event)"
        >
        <p ref="work">{{ $t('blog.work') }}</p>
      </nuxt-link>
      <nuxt-link :to="localePath('blog')" class="category">
        <img
          :src="path2x('blog-3tree')"
          alt="short tree"
          @mouseover="treeGrow($event)"
          @mouseleave="restore($event)"
        >
        <p ref="teach">{{ $t('blog.teaching') }}</p>
      </nuxt-link>
      <nuxt-link :to="localePath('blog')" class="category">
        <img
          :src="path2x('blog-4tree')"
          alt="shortest tree"
          @mouseover="treeMario($event)"
          @mouseleave="restore($event)"
        >
        <p ref="recipe">{{ $t('blog.recipe') }}</p>
      </nuxt-link>
      <nuxt-link class="go-to" :to="localePath('blog')">
        <img :src="path2x('blog-moon')" alt="go to blog page">
        <p>{{ $t('blog.goto') }}</p>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { TweenMax, TimelineLite } from "gsap";
export default {
  methods: {
    path2x(img) {
      return require("../assets/img/2x/blog/" + img + ".png");
    },
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
    }
  },
  mounted() {
    const { stars } = this.$refs;

    TweenMax.from(stars, 5, {
      opacity: 0.7,
      scale: 0.95,
      repeat: -1,
      ease: Power1.easeOut,
      yoyo: true
    });
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
  padding: 3.3% 0;
  margin-top: 7%;
  background-image: url(~assets/img/2x/blog/blog-tiles.png);
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-color: $white-p;
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .latest-post {
    font-size: 1.9rem;
    line-height: 1.6;
    white-space: pre;
    text-align: center;
  }

  h2 {
    position: absolute;
    top: 1.4%;
    left: 12.8%;
    font-size: 2rem;
    font-family: "Times New Roman";
    color: #718bad;
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
      font-size: 1.4rem;
      color: $white-p;
      margin-left: 8%;
      letter-spacing: -0.8px;
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
      font-size: 1.9rem;
      text-align: center;
      pointer-events: none;
    }

    &:first-child > p {
      top: 32.5%;
      left: 32%;
    }
    &:nth-child(2) > p {
      top: 37%;
      left: 40%;
    }
    &:nth-child(3) > p {
      top: 34%;
      left: 33%;
    }
    &:nth-child(4) > p {
      top: 38%;
      left: 31%;
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
      filter: saturate(2);
      & + p {
        transform: translateY(-1px);
        text-shadow: none;
      }
    }
  }

  & > p {
    position: absolute;
    top: 30%;
    right: 15%;
    white-space: pre;
    font-size: 1.9rem;
    font-weight: bold;
    line-height: 1.4;
    letter-spacing: -0.4px;
    text-align: center;
    @include tsh-m;
    transition: transform 0.2s;
    pointer-events: none;
  }
}
</style>