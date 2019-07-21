<template>
  <div class="post-page">
    <StickyHeader @click="$emit('click', $event)" />
    <section class="post">
      <div class="intro">
        <div class="intro__info">
          <p class="date">{{ date | date($i18n.locale) }}</p>
          <figure class="author">
            <CldImg
              v-if="author === 'Gobu'"
              src="bagushaus/about/about-gobu.png"
              options="q_auto,f_auto,c_thumb,g_face"
              width="100,200"
              alt="Gobu's picture"
              class="author-img"
            />
            <CldImg
              v-if="author === 'Davide'"
              src="bagushaus/about/about-davi.png"
              options="q_auto,f_auto,c_thumb,g_face"
              width="100,200"
              alt="Davide's picture"
              class="author-img"
            />
            <figcaption class="author-name">{{ author }}</figcaption>
          </figure>
        </div>
        <div class="intro__title">
          <h1 class="intro__title-heading">{{ title }}</h1>
          <p class="intro__title-sub">{{ summary }}</p>
        </div>
        <img class="thumbnail" :src="thumbnail" alt />
      </div>
      <article class="post__content" v-html="html"></article>
      <div class="post__links">
        <PrevPost v-if="prev" :prev="prev" />
        <div class="empty" v-else-if="!prev">{{ $t('posts.noPrev') }}</div>
        <NextPost v-if="next" :next="next" />
        <div class="empty" v-else-if="!next">{{ $t('posts.noNext') }}</div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
$green-pre: #d9ebde80;

.post-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 21rem;

  .post {
    background-color: $white-p;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 94rem;
    min-width: 20rem;
    position: relative;

    .intro {
      height: 23rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      background-color: $gray-l;

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .date {
          text-align: center;
          font-size: 3rem;
          font-family: $font-h;
          color: #fff;
          background-color: #000;
          padding: 0.2rem 1.5rem;
          margin-left: -4rem;
        }
        .author {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 1.6rem;
          margin-bottom: 2.4rem;

          &-img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            border: 1px solid $black-l;
          }

          &-name {
            font-size: 1.8rem;
            color: $black-p;
            margin-top: 0.4rem;
          }
        }
      }

      &__title {
        align-self: center;
        display: flex;
        flex-direction: column;
        padding: 3rem;

        &-heading {
          font-size: 3.1rem;
          line-height: 1.3;
        }
        &-sub {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: $gray-d;
        }
      }

      .thumbnail {
        width: 36rem;
        height: 125%;
        margin-right: -5rem;
        object-fit: cover;
        object-position: center;
        align-self: flex-end;
        border-radius: 1px;
      }
    }

    &__links {
      --links-padding: 2rem;
      --links-height: 14.2rem;
      height: calc(var(--links-height) + var(--links-padding) * 2);
      width: 100%;
      display: grid;
      grid-template-columns: 49% 49%;
      justify-content: space-between;
      padding: var(--links-padding);
    }
  }
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 3rem;
    font-family: $font-h;
    color: $gray-d;
    width: 100%;
    height: 100%;
    border: 2px solid #000;
    font-style: italic;
  }

  ////////////////////////////////
  //Markdown Styling
  ////
  & /deep/ .post__content {
    width: 75%;
    margin: 8rem auto 0;
    font-size: 1.6rem;
    line-height: 1.7;
    word-spacing: 1px;

    & * {
      margin-bottom: 2.8rem;
    }

    & > *:first-child {
      margin-top: 0 !important;
    }

    & h1,
    h2,
    h3 {
      font-weight: 600;
      font-family: $font-p;
      line-height: 1.25;
      margin-top: 4rem;
    }

    & h1 {
      font-size: 2.9rem;
    }
    & h2 {
      font-size: 2.3rem;
    }
    & h3 {
      font-size: 1.8rem;
    }

    & ol,
    & ul {
      padding-left: 2rem;
    }

    & ol ol,
    & ul ol {
      list-style-type: lower-roman;
    }

    & li {
      margin-bottom: 0;
      & + li {
        margin-top: 0.25rem;
      }
    }

    & ol ol,
    & ol ul,
    & ul ol,
    & ul ul,
    & pre code {
      margin-bottom: 0;
    }

    & pre,
    & code {
      font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier,
        monospace;
      word-spacing: normal;
    }
    & pre {
      padding: 2.2rem;
      border-radius: 3px;
      background-color: $green-pre;
      border: 2px solid $gray-l;
      line-height: 1.5;
      margin: 2.8rem 0;
    }
    & code {
      border-radius: 3px;
      padding: 0.2em 0.4em;
      background-color: $green-pre;
    }
    & pre > code {
      border-radius: 0;
      padding: 0;
      background-color: transparent;
    }

    & a {
      color: inherit;
      box-shadow: inset 0 -1px 0 currentColor;
      transition: color 0.8s ease-in, box-shadow 0.13s ease-in-out;

      &:hover {
        box-shadow: inset 0 0 0 currentcolor, 0 2px 0 currentcolor;
      }
      &:link,
      &:visited {
        text-decoration: none;
      }
    }

    & blockquote {
      border-left: 8px solid darken($green-pre, 5%);
      padding: 2rem;

      & > p:last-child {
        margin-bottom: 0;
      }
    }

    & img {
      display: block;
      max-width: 100%;
      margin: 4rem 0;
    }
  }
}
</style>


<script>
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";

import hljs from "highlight.js/lib/highlight";
import javascript from "highlight.js/lib/languages/javascript";
import xml from "highlight.js/lib/languages/xml";
import css from "highlight.js/lib/languages/css";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("css", css);

import { TweenLite } from "gsap";
import StickyHeader from "~/components/Blog/StickyHeader";
import PrevPost from "~/components/Blog/PrevPost";
import NextPost from "~/components/Blog/NextPost";
import blogScroll from "~/mixins/blogScroll.js";

export default {
  layout: "blog",
  head() {
    return {
      title: `${this.title} - OliAncho`,
      link: [
        {
          rel: "stylesheet",
          href:
            "//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.8/styles/default.min.css"
        }
      ]
    };
  },
  async asyncData({ params, app }) {
    const lang = app.i18n.locale;
    //For main post
    const post = await import(`~/contents/${lang}/posts/${params.slug}.md`);
    const attr = post.attributes;
    const slug = params.slug;
    const { author, date, update, summary, thumbnail, title, tag } = attr;

    //For prev/next links
    const postList = app.i18n.locale === "en" ? postsEn : postsJa;
    const sortedList = postList.filter(el => el.tag === tag);

    const curIndex = sortedList.findIndex(el => el.slug === slug);
    const prevPost = sortedList[curIndex + 1];
    const nextPost = sortedList[curIndex - 1];

    const importAdjacentPosts = async tar => {
      const post = await import(`~/contents/${lang}/posts/${tar}.md`);
      const attr = post.attributes;
      return {
        link: tar,
        title: attr.title,
        date: attr.date,
        thumbnail: attr.thumbnail
      };
    };
    // const prev = prevPost ? await importAdjacentPosts(prevPost.slug) : false;
    // const next = nextPost ? await importAdjacentPosts(nextPost.slug) : false;
    let prev, next;
    if (prevPost) {
      prev = await importAdjacentPosts(prevPost.slug);
    } else {
      var curPostg = postList.findIndex(el => el.slug === slug);
      const prevPostg = postList[curPostg + 1];
      if (prevPostg) {
        prev = await importAdjacentPosts(prevPostg.slug);
      } else {
        prev = false;
      }
    }

    if (nextPost) {
      next = await importAdjacentPosts(nextPost.slug);
    } else {
      var curPostg = postList.findIndex(el => el.slug === slug);
      const nextPostg = postList[curPostg - 1];
      if (nextPostg) {
        next = await importAdjacentPosts(nextPostg.slug);
      } else {
        next = false;
      }
    }

    return {
      title,
      author,
      date,
      update,
      tag,
      thumbnail,
      summary,
      slug,
      html: post.html,
      prev,
      next
    };
  },
  mixins: [blogScroll],
  mounted() {
    this.initHighlightJs;
  },
  components: {
    StickyHeader,
    PrevPost,
    NextPost
  }
};
</script>

