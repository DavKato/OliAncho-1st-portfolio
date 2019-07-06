<template>
  <section class="top">
    <PostCard
      v-for="(post, index) in sortedList"
      :key="index"
      :date="post.date"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
      :link="post.link"
      class="card"
      @click.native="selectTag('all')"
    />
  </section>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";
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
  components: {
    PostCard
  },
  computed: {
    sortedList() {
      if (this.selectedTag === "all") {
        return this.postList;
      } else {
        return this.postList.filter(post => post.tag === this.selectedTag);
      }
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
.top {
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 40.5rem;

  .card {
    &:not(last-child) {
      margin-bottom: 12rem;
    }
  }
}
</style>
