<template></template>

<script>
export default {
  async asyncData({ params, app }) {
    const post = await import(
      `~/content/${app.$i18n.locale}/posts/${params.slug}.md`
    );
    const attr = post.attributes;
    const slug = params.slug;

    const { author, date, summary, thumbnail, title, tag, update } = attr;

    // const dateOptions = {
    //   year: 'numeric',
    //   month: 'short',
    //   day: 'numeric'
    // }

    // const published = new Date(date)
    // const updated = new Date(update)
    // const published = app.$i18n.locale === 'en' ? publishedDate.toLocaleDateString('en-GB', dateOptions) : publishedDate.toLocaleDateString('ja-JP')
    // const updated = app.$i18n.locale === 'en' ? publishedDate.toLocaleDateString('en-GB', dateOptions) : updatedDate.toLocaleDateString('ja-JP')

    return {
      title,
      author,
      date,
      update,
      tag,
      thumbnail,
      summary,
      slug,
      html: post.html
    };
  }
};
</script>

