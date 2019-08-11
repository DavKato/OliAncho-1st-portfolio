<template>
  <div>
    <div
      class="burger"
      @click="showMenu = !showMenu"
      @keydown.enter="showMenu = !showMenu"
      aria-label="menu"
      tabindex="0"
    >
      <svg
        class="hamburger"
        viewBox="0 0 8 8"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <g class="lines" style="stroke:#fff;stroke-width:1">
          <line class="line1" x1="0" x2="8" y1="1" y2="1" />
          <line class="line2" x1="0" x2="8" y1="4" y2="4" />
          <line class="line3" x1="0" x2="8" y1="7" y2="7" />
        </g>
      </svg>
    </div>
    <transition @enter="expandMenu" @leave="foldMenu">
      <nav class="menu" v-show="showMenu">
        <ul class="menu-list">
          <li class="menu-list-box" @click="filterPosts('all')">
            <nuxt-link class="menu-list-item" :to="localePath('blog-posts')" tabindex="0">
              <span class="menu-list-text">{{ $t('posts.all') }}</span>
              <BlogMenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="filterPosts('life')">
            <nuxt-link class="menu-list-item" :to="localePath('blog-posts')" tabindex="0">
              <span class="menu-list-text">{{ $t('posts.life') }}</span>
              <BlogMenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="filterPosts('web')">
            <nuxt-link class="menu-list-item" :to="localePath('blog-posts')" tabindex="0">
              <span class="menu-list-text">{{ $t('posts.web') }}</span>
              <BlogMenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="filterPosts('japanese')">
            <nuxt-link class="menu-list-item" :to="localePath('blog-posts')" tabindex="0">
              <span class="menu-list-text">{{ $t('posts.japanese') }}</span>
              <BlogMenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="filterPosts('glutenFree')">
            <nuxt-link class="menu-list-item" :to="localePath('blog-posts')" tabindex="0">
              <span class="menu-list-text">{{ $t('posts.glutenFree') }}</span>
              <BlogMenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
        </ul>
        <ul class="external-list">
          <li class="external-list-box" @click="showMenu = !showMenu">
            <TwitterLink
              width="35,70,105"
              sizes="(maxwidth: 440px) 35px, 3.7rem"
              class="twitter external-list-box"
            />
          </li>
          <li class="external-list-item" @click="showMenu = !showMenu">
            <InstaLink
              width="30,60,90"
              sizes="(maxwidth: 440px) 30px, 3.2rem"
              class="insta external-list-box"
            />
          </li>
          <li class="external-list-item" @click="showMenu = !showMenu">
            <nuxt-link :to="localePath('contact')" class="external-list-box" tabindex="0">
              <CldImg
                src="bagushaus/global/email.png"
                width="35,70,107"
                sizes="(maxwidth: 440px) 30px, 3.5rem"
                class="email"
              />
            </nuxt-link>
          </li>
          <li
            class="external-list-item lang"
            @click="showMenu = !showMenu"
            v-if="$route.path === '/blog-posts' || $route.path=== '/ja/blog-posts'"
          >
            <LangSwitch
              width="35,70,110"
              sizes="(maxwidth: 440px) 35px, 3.1rem"
              class="external-list-box"
            />
          </li>
          <li class="external-list-item">
            <HomeLink
              width="33,66,100"
              sizes="(max-width: 440px) 32px, 3.2rem"
              class="home external-list-box"
            />
          </li>
        </ul>
      </nav>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.burger {
  position: fixed;
  top: 1rem;
  right: 2rem;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 200;
  transition: transform 0.2s;

  &:focus {
    outline: none;
    transform: scale(1.15) translateY(-1px);
  }

  .hamburger {
    width: 4.2rem;
  }
}

.menu {
  position: fixed;
  top: 0;
  left: 0;
  max-height: 105vh;
  width: 100vw;
  padding: 10% 17% 8%;
  z-index: 10;
  background-image: linear-gradient(
    to bottom,
    $mud-b,
    $mud-b 90%,
    transparent 100%
  );
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  transform: scaleY(0);
  transform-origin: center top;
  opacity: 0;

  &-list {
    width: 100%;
    height: 65%;
    padding: 0 14%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    list-style: none;

    @include respond("mobile") {
      padding: 0 8%;
    }

    &-box {
      width: 100%;
      border-bottom: 1px dashed $white-p;
      margin-bottom: 5%;

      @include respond("mobile") {
        margin-bottom: 6%;
      }
    }

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 1rem;

      &:link,
      &:visited {
        text-decoration: none;
        color: #000;
      }
      &:focus {
        @include focus-ol;
      }
    }

    &-text {
      font-size: 3.6rem;
      font-family: $font-h;
      line-height: 1.6;
      letter-spacing: 0.2rem;

      @include respond("mobile") {
        font-size: 4rem;
      }
    }

    &-arrow {
      margin-right: 2rem;
    }
  }
}

.external-list {
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  margin-top: 5%;

  &-box:focus-within {
    @include focus-ol;
  }

  & .twitter {
    // width: 9rem;
    @include respond("mobile") {
      width: 31px;
    }
  }

  & .insta {
    @include respond("mobile") {
      width: 26px;
    }
  }

  & .email {
    @include respond("mobile") {
      width: 29px;
    }
  }

  & .lang {
    @include respond("mobile") {
      height: 21px;
    }

    & > * {
      height: 100%;
    }
  }

  & .home {
    & img {
      margin-bottom: 0.3rem;
    }
    @include respond("mobile") {
      width: 32px;
    }
  }
}
</style>

<script>
import BlogMenuArrow from "~/components/GlobalComponents/Svg/BlogMenuArrow";
import HomeLink from "~/components/GlobalComponents/HomeLink";
import TwitterLink from "~/components/GlobalComponents/TwitterLink";
import InstaLink from "~/components/GlobalComponents/InstaLink";
import ContactLink from "~/components/GlobalComponents/ContactLink";
export default {
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    BlogMenuArrow,
    LangSwitch: () => import("~/components/GlobalComponents/LangSwitch"),
    HomeLink,
    TwitterLink,
    InstaLink,
    ContactLink
  },
  methods: {
    filterPosts(tag) {
      this.$emit("filter", { tag, reset: true });
      this.showMenu = !this.showMenu;
    },
    expandBurger() {
      TweenLite.to(".line1", 0.2, {
        rotation: 45,
        scaleX: 1.1,
        x: 0.2,
        y: -0.2,
        transformOrigin: "0px 1px"
      });
      TweenLite.to(".line3", 0.2, {
        rotation: -45,
        scaleX: 1.1,
        x: -0.1,
        y: -0.1,
        transformOrigin: "1px -1px"
      });
      TweenLite.to(".line2", 0.2, { opacity: 0 });
    },
    foldBurger() {
      TweenLite.to(".line1", 0.2, {
        rotation: 0,
        scaleX: 1,
        x: 0,
        y: 0,
        transformOrigin: "0px 1px"
      });
      TweenLite.to(".line3", 0.2, {
        rotation: 0,
        scaleX: 1,
        x: 0,
        y: 0,
        transformOrigin: "1px -1px"
      });
      TweenLite.to(".line2", 0.2, { opacity: 1 });
    },
    expandMenu(el, done) {
      this.expandBurger();
      TweenLite.to(".menu", 0.4, {
        opacity: 1,
        scaleY: 1,
        onComplete: done,
        ease: Power2.easeOut
      });
    },
    foldMenu(el, done) {
      this.foldBurger();
      TweenLite.to(".menu", 0.4, {
        opacity: 0,
        scaleY: 0,
        onComplete: done
      });
    }
  }
};
</script>

