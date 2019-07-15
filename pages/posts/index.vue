<template>
  <section id="blog-top">
    <TopHeader class="top__header" @click="destroyList($event)" />
    <StickyHeader v-show="scrollY > 230" :style="stickyStyle" @click="destroyList($event)" />
    <PostCard
      v-for="(post, i) in sortedList"
      :key="post.title + i"
      :date="post.date"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :link="post.link"
      tag="postcard"
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
    this.renderList();
    this.scrollY = window.scrollY;
    window.addEventListener("scroll", () => (this.scrollY = window.scrollY));
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
    renderList() {
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
    &:first-of-type {
      margin-top: 10.5%;
    }
  }
}
</style>
