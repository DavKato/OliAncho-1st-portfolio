<template>
  <section class="top">
    <PostCard
      v-for="(post, index) in postList"
      :key="index"
      :date="post.date"
      :title="post.title"
      :summary="post.summary"
      :thumbnail="post.thumbnail"
    />
  </section>
</template>

<script>
import postsEn from `~/content/en/posts.js`;
import postsJa from `~/content/ja/posts.js`;
import PostCard from '~/components/Blog/PostCard';
export default {
  async asyncData({ app }) {
const posts = app.$i18n.locale === 'en' ? postsEn : postsJa;

    async function awaitImport(post) {
      const wholeMD = await import(`~/content/${app.$i18n.locale}/post/${post.slug}.md`)
      return wholeMD.attributes
    }

    const postList = await Promise.all(
      posts.map(post => awaitImport(post))
    ).then(res => {
      return {
        postList: res
      }
    })

    return postList;
  },
  layout: "blog"
}
</script>
