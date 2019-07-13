<template>
  <section class="footer">
    <div class="trees">
      <img src="~/assets/img/2x/posts/1tree.png" />
      <img src="~/assets/img/2x/posts/2tree.png" />
      <img src="~/assets/img/2x/posts/3tree.png" />
      <img src="~/assets/img/2x/posts/4tree.png" />
    </div>
    <div class="footer__tail">
      <img src="~/assets/img/2x/posts/footer-telescope.png" class="scope" />
      <ul class="footer__tail-links">
        <li>
          <a href="#">
            <img class="insta" src="~/assets/img/2x/posts/insta.png" />
          </a>
        </li>
        <li>
          <a href="#">
            <img class="twitter" src="~/assets/img/2x/posts/twitter.png" />
          </a>
        </li>
        <li>
          <nuxt-link :to="localePath('index')">
            <img class="home" src="~/assets/img/2x/posts/oliancho-logo.png" />
          </nuxt-link>
        </li>
        <li>
          <a @click.prevent="toTop" href="#blog-layout">
            <img class="to-top" src="~/assets/img/2x/posts/top.png" />
          </a>
        </li>
      </ul>
      <TheFooter class="copyright" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.footer {
  width: 100%;
  background-color: transparent;
  display: flex;
  flex-direction: column;

  .trees {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-end;

    & > img {
      max-height: 53.75vh;
      max-width: 25vw;
      object-fit: contain;
    }
  }

  &__tail {
    height: 20vh;
    width: 100%;
    position: relative;
    background-color: $blog-bg;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 2.6%;

    .scope {
      position: absolute;
      bottom: 0;
      right: 59%;
      height: 73%;
      object-fit: contain;
    }

    &-links {
      display: flex;
      align-items: center;
      list-style: none;

      & img {
        filter: $fsh-s;
        transition: all 0.2s;

        &:hover {
          @include iconHover;
        }
        &:active {
          @include iconActive;
        }
      }

      & li:not(:last-child) {
        margin-right: 0.8rem;
      }

      .insta {
        height: 3.9rem;
        width: 3.9rem;
      }
      .twitter {
        height: 3.5rem;
        width: 4rem;
      }
      .home {
        height: 3.4rem;
        width: 3.3rem;
      }
      .to-top {
        height: 5.2rem;
        width: 5.2rem;
      }
    }

    .copyright {
      color: #fff;
      font-weight: 100;
      text-transform: lowercase;
      font-size: 2.4rem;
    }
  }
}
</style>

<script>
import TheFooter from "~/components/GlobalComponents/TheFooter";
export default {
  components: {
    TheFooter
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>
