<template>
  <section class="blog-top">
    <TopHeader class="top__header" />
    <transition name="topbar">
      <StickyHeader v-if="scrollY > 230" :style="stickyStyle" />
    </transition>
    <PostCard
      v-for="(post, index) in sortedList"
      :key="index"
      :date="post.date"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :link="post.link"
      class="blog-top__card"
      @click.native="selectTag('all')"
    />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";
import TopHeader from "~/components/Blog/TopHeader";
import StickyHeader from "~/components/Blog/StickyHeader";
import PostCard from "~/components/Blog/PostCard";
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
    this.scrollY = window.scrollY;
    if (process.browser) {
      window.addEventListener("scroll", () => (this.scrollY = window.scrollY));
    }
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
    ...mapMutations("posts", ["selectTag"])
  }
};
</script>

<style lang="scss" scoped>
.blog-top {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  &__card {
    margin-bottom: 11rem;

    &:first-of-type {
      margin-top: 10.5%;
    }
  }
}
</style>
