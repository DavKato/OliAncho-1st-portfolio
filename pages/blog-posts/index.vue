<template>
  <section id="blog-top">
    <TopHeader class="top__header" @click="destroyList($event)" v-show="$vssWidth > $data.$tab" />
    <StickyHeader
      v-show="scrollY > 230 || $vssWidth <= $data.$tab"
      :style="stickyStyle"
      @click="destroyList($event)"
    />
    <PostCard
      v-for="(post, i) in sortedList"
      :key="post.title + i"
      :date="post.date"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :link="post.link"
      tag="postcard"
      @mouseenter.native="cardHover($event)"
      @focus.native="cardHover($event)"
      @mouseleave.native="cardLeave($event)"
      @blur.native="cardLeave($event)"
      tabindex="0"
    />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import { TweenLite, TimelineLite } from "gsap";
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";
import TopHeader from "~/components/Blog/TopHeader";
import StickyHeader from "~/components/Blog/StickyHeader";
import PostCard from "~/components/Blog/PostCard";
import blogScroll from "~/mixins/blogScroll.js";
export default {
  layout: "blog",
  head() {
    const pageTitle = "OliAnchoBlog";
    const pageDesc = this.$t("desc.blog");
    return {
      title: pageTitle,
      titleTemplate: null,
      meta: [
        {
          hid: "description",
          name: "description",
          content: pageDesc
        },
        { hid: "og:title", property: "og:title", content: pageTitle },
        { hid: "og:description", property: "og:description", content: pageDesc }
      ]
    };
  },
  async asyncData({ app }) {
    const postList = app.i18n.locale === "en" ? postsEn : postsJa;

    async function awaitImport(slug) {
      const wholeMD = await import(
        `~/contents/${app.i18n.locale}/posts/${slug}.md`
      );
      return {
        link: slug,
        ...wholeMD.attributes
      };
    }

    return Promise.all(postList.map(post => awaitImport(post.slug))).then(
      res => {
        return {
          postList: res
        };
      }
    );
  },
  mixins: [blogScroll],
  data() {
    return {
      scrollY: 0
    };
  },
  components: {
    TopHeader,
    StickyHeader,
    PostCard
  },
  mounted() {
    this.$nextTick(() => {
      this.renderList();
      this.scrollY = window.scrollY;
      window.addEventListener("scroll", this.attachScroll);
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.attachScroll);
  },
  computed: {
    sortedList() {
      if (this.selectedTag === "all") {
        return this.postList;
      } else {
        return this.postList.filter(post => post.tag === this.selectedTag);
      }
    },
    stickyStyle() {
      if (this.$vssWidth <= this.$data.$tab) {
        return {
          visibility: "visible",
          opacity: 1
        };
      }

      if (this.scrollY <= 230) {
        return { visibility: "hidden" };
      }

      let op;
      if (this.scrollY > 270) {
        op = 1;
      } else {
        op = 1 - (270 - this.scrollY) / 40;
      }
      return {
        visibility: "visible",
        opacity: op
      };
    },
    ...mapState("posts", {
      selectedTag: state => state.selectedTag
    })
  },
  methods: {
    attachScroll() {
      this.scrollY = window.scrollY;
    },
    cardHover(e) {
      const tar = e.target;
      TweenLite.to(tar, 0.2, { scale: 1.02 });
    },
    cardLeave(e) {
      const tar = e.target;
      TweenLite.to(tar, 0.3, { scale: 1 });
    },
    renderList(e) {
      let tar = document.getElementsByClassName("postcard");

      if (tar.length < 1);
      else if (tar.length === 1) {
        TweenLite.fromTo(
          tar,
          0.5,
          { x: -200, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: Power4.easeOut }
        );
      } else if (tar.length > 1) {
        const tl = new TimelineLite();
        tl.staggerFromTo(
          tar,
          0.5,
          { x: -200, autoAlpha: 0 },
          { x: 0, autoAlpha: 1, ease: Power4.easeOut },
          0.2
        );
      }
    },
    destroyList(payload) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      let tar = document.getElementsByClassName("postcard");

      if (tar.length < 1) {
        this.renewList(payload);
      } else if (tar.length === 1) {
        TweenLite.to(tar[0], 0.3, {
          x: 200,
          autoAlpha: 0,
          onComplete: this.renewList,
          onCompleteParams: [payload]
        });
      } else if (tar.length > 1) {
        const tl = new TimelineLite();
        tl.staggerTo(
          tar,
          0.2,
          { x: 200, autoAlpha: 0 },
          0.1,
          0,
          this.renewList,
          [payload]
        );
      }
    },
    renewList(payload) {
      this.selectTag(payload);
      this.$nextTick(() => this.renderList());
    },
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>

<style lang="scss" scoped>
#blog-top {
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;

  .postcard {
    opacity: 0;
    transform-origin: bottom;

    &:focus {
      outline: none;
    }

    &:first-of-type {
      margin-top: 9%;
      @include respond("tab") {
        margin-top: 18rem;
      }
    }
  }
}
</style>
