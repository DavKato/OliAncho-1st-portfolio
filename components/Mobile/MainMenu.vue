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
        <NavL @click="goHome" />
        <ul class="menu-list">
          <li class="menu-list-box" @click="showMenu = !showMenu">
            <nuxt-link class="menu-list-item" :to="localePath('index')" tabindex="0">
              <span class="menu-list-text">Top</span>
              <MenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="showMenu = !showMenu">
            <nuxt-link class="menu-list-item" :to="localePath('about')" tabindex="0">
              <span class="menu-list-text">About</span>
              <MenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="showMenu = !showMenu">
            <nuxt-link class="menu-list-item" :to="localePath('works')" tabindex="0">
              <span class="menu-list-text">Works</span>
              <MenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="showMenu = !showMenu">
            <nuxt-link class="menu-list-item" :to="localePath('blog')" tabindex="0">
              <span class="menu-list-text">Blog</span>
              <MenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
          <li class="menu-list-box" @click="showMenu = !showMenu">
            <nuxt-link class="menu-list-item" :to="localePath('location')" tabindex="0">
              <span class="menu-list-text">Location</span>
              <MenuArrow class="menu-list-arrow" />
            </nuxt-link>
          </li>
        </ul>
        <ul class="external-list">
          <li class="external-list-box" @click="showMenu = !showMenu">
            <a href="#" class="external-list-box" tabindex="0">
              <CldImg
                src="bagushaus/Mobile/twitter-blue.png"
                width="35,70,105"
                sizes="(maxwidth: 440px) 35px, 3.7rem"
                class="twitter"
                alt="Jump to our twitter"
              />
            </a>
          </li>
          <li class="external-list-item" @click="showMenu = !showMenu">
            <a href="https://www.instagram.com/oliancho/" class="external-list-box" tabindex="0">
              <CldImg
                src="bagushaus/Mobile/instagram-blue.png"
                width="30,60,90"
                sizes="(maxwidth: 440px) 30px, 3.2rem"
                class="insta"
                alt="Jump to our instagram"
              />
            </a>
          </li>
          <li class="external-list-item" @click="showMenu = !showMenu">
            <nuxt-link :to="localePath('contact')" class="external-list-box" tabindex="0">
              <CldImg
                src="bagushaus/Mobile/email-blue.png"
                width="35,70,107"
                sizes="(maxwidth: 440px) 35px, 3.5rem"
                class="email"
                alt="Contact us"
              />
            </nuxt-link>
          </li>
          <li class="external-list-item lang" @click="showMenu = !showMenu">
            <LangSwitch
              width="35,70,110"
              sizes="(maxwidth: 440px) 35px, 3.1rem"
              class="external-list-box"
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
  top: 2rem;
  right: 3rem;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient($green-p 30%, transparent 100%);
  transition: transform 0.2s;
  z-index: 100;

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
  background-color: $white-p;
  min-height: 50vh;
  width: 100vw;
  padding: 16% 17% 10%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
  z-index: 10;
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
      border-bottom: 1px dashed $gray-d;
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
        color: $black-d;
      }

      &:focus {
        @include focus-ol;
      }
    }

    &-text {
      font-size: 3.6rem;
      font-family: $font-h;
      text-transform: uppercase;
      line-height: 1.6;
      letter-spacing: 0.2rem;

      @include respond("mobile") {
        font-size: 4.3rem;
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
  margin-top: 9%;

  &-box:focus {
    @include focus-ol;
  }

  & .twitter {
    @include respond("mobile") {
      width: 35px;
    }
  }

  & .insta {
    @include respond("mobile") {
      width: 30px;
    }
  }

  & .email {
    margin-top: 1rem;
    @include respond("mobile") {
      width: 35px;
    }
  }

  & .lang {
    @include respond("mobile") {
      height: 25px;
    }

    & > * {
      height: 100%;
    }
  }
}
</style>

<script>
import MenuArrow from "~/components/GlobalComponents/Svg/MenuArrow";
import NavL from "~/components/Top/NavL";
export default {
  data() {
    return {
      showMenu: false
    };
  },
  components: {
    MenuArrow,
    NavL,
    LangSwitch: () => import("~/components/GlobalComponents/LangSwitch")
  },
  methods: {
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
    },
    goHome() {
      if (!this.$route.name.startsWith("index")) {
        this.$router.push(this.localePath("index"));
      }
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
