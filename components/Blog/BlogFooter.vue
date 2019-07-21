<template>
  <section class="footer">
    <div class="trees">
      <LazyImg
        src="v1563231773/bagushaus/posts/1tree.png"
        width="242,484"
        sizes="25vw"
        placeholder
      />
      <LazyImg
        src="v1563231773/bagushaus/posts/2tree.png"
        width="294,587"
        sizes="25vw"
        placeholder
      />
      <LazyImg
        src="v1563231773/bagushaus/posts/3tree.png"
        width="243,486"
        sizes="25vw"
        placeholder
      />
      <LazyImg
        src="v1563231773/bagushaus/posts/4tree.png"
        width="282,563"
        sizes="25vw"
        placeholder
      />
    </div>
    <div class="footer__tail">
      <LazyImg
        src="v1563231774/bagushaus/posts/footer-telescope.png"
        width="116,232"
        sizes="14.6vh"
        placeholder
        class="scope"
      />
      <ul class="footer__tail-links">
        <li>
          <InstaLink width="39,78" sizes="39px" />
        </li>
        <li>
          <TwitterLink width="40,80" sizes="40px" />
        </li>
        <li>
          <HomeLink width="33,66" sizes="33px" />
        </li>
        <li @click.prevent="toTop">
          <CldImg
            class="to-top"
            src="v1563231774/bagushaus/posts/top.png"
            width="52,104"
            sizes="52px"
          />
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

      .to-top {
        cursor: pointer;
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
import TwitterLink from "~/components/GlobalComponents/TwitterLink";
import HomeLink from "~/components/GlobalComponents/HomeLink";
import InstaLink from "~/components/GlobalComponents/InstaLink";
export default {
  components: {
    TheFooter,
    TwitterLink,
    HomeLink,
    InstaLink
  },
  methods: {
    toTop() {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  }
};
</script>
