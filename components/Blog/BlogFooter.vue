<template>
  <section class="footer">
    <div class="trees">
      <CldImg src="v1563231773/bagushaus/posts/1tree.png" width="242,484" sizes="25vw" />
      <CldImg src="v1563231773/bagushaus/posts/2tree.png" width="294,587" sizes="25vw" />
      <CldImg src="v1563231773/bagushaus/posts/3tree.png" width="243,486" sizes="25vw" />
      <CldImg src="v1563231773/bagushaus/posts/4tree.png" width="282,563" sizes="25vw" />
    </div>
    <div class="footer__tail">
      <CldImg
        src="v1563231774/bagushaus/posts/footer-telescope.png"
        width="116,232"
        sizes="14.6vh"
        class="scope"
        v-show="$vssWidth > $data.$tab && $vssWidth >= $vssHeight"
      />
      <ul class="footer__tail-links">
        <li class="footer__tail-links--list">
          <TwitterLink width="40,80" sizes="40px" />
        </li>
        <li class="footer__tail-links--list">
          <InstaLink width="39,78" sizes="39px" />
        </li>
        <li class="footer__tail-links--list">
          <HomeLink width="33,66" sizes="33px" />
        </li>
        <li v-scroll-to="{ el: '#blog-layout', duration: 500, easing: 'ease-in-out' }">
          <CldImg
            class="to-top footer__tail-links--list"
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
    position: relative;
    z-index: 1;

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

    @include respond("long-scr") {
      height: 15rem;
      justify-content: flex-end;
    }

    @include respond("tab") {
      height: 20rem;
      justify-content: flex-end;
    }

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
      @include respond("long-scr") {
        margin-bottom: 2rem;
      }
      @include respond("tab") {
        margin-bottom: 3rem;
      }

      &--list {
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
        @include respond("long-scr") {
          margin-right: 6rem;
        }
        @include respond("tab") {
          margin-right: 6rem;
        }
      }

      .to-top {
        cursor: pointer;
        margin-left: -0.5rem;
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
  }
};
</script>
