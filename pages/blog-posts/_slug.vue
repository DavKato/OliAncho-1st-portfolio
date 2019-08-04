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
              src="bagushaus/about/gobu.png"
              options="q_auto,f_auto,c_thumb,g_face"
              width="100,200"
              alt="Gobu's picture"
              class="author-img"
            />
            <CldImg
              v-if="author === 'Davide'"
              src="bagushaus/about/davi.png"
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
        <no-ssr>
          <img class="thumbnail" :src="thumbnail" v-if="$vssWidth > $data.$tab" />
        </no-ssr>
      </div>
      <Markdown
        class="post__content"
        :renderFunc="renderFunc"
        :staticRenderFuncs="staticRenderFuncs"
      />
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
@import "../../assets/scss/markdown-style";

.post-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 21rem;
  @include respond("tab") {
    padding-top: 15rem;
    margin-bottom: 3rem;
  }

  .post {
    background-color: $white-p;
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 94rem;
    min-width: 20rem;
    position: relative;
    @include respond("tab") {
      width: 87%;
      padding-bottom: 2rem;
    }
    @include respond("mobile") {
      width: 100%;
      padding-bottom: 0;
    }

    .intro {
      height: 23rem;
      display: flex;
      justify-content: space-between;
      padding-top: 2rem;
      background-color: $gray-l;
      @include respond("tab") {
        position: relative;
        justify-content: space-between;
        padding: 4rem 3% 3rem;
        height: auto;
      }

      &__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        @include respond("tab") {
          order: 2;
          justify-content: flex-start;
          align-self: center;
        }

        .date {
          text-align: center;
          font-size: 3rem;
          font-family: $font-h;
          color: #fff;
          background-color: #000;
          padding: 0.2rem 1.5rem;
          margin-left: -4rem;
          @include respond("tab") {
            margin-left: 0;
            font-size: 1.6rem;
            background-color: inherit;
            color: inherit;
            font-family: $font-p;
            margin-bottom: 1rem;
          }
        }
        .author {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-left: 1.6rem;
          margin-bottom: 2.4rem;
          @include respond("tab") {
            margin: 0;
          }

          &-img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
            border: 1px solid $black-l;
            @include respond("tab") {
              width: 9rem;
              height: 9rem;
            }
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
        align-items: center;
        padding: 3rem;
        @include respond("tab") {
          order: 1;
          padding: 0;
        }

        &-heading {
          font-size: 3.1rem;
          line-height: 1.3;
          @include respond("tab") {
            line-height: 1.5;
            color: #111;
            font-size: 3.8rem;
            font-weight: 600;
          }
        }
        &-sub {
          margin-top: 1rem;
          font-size: 1.4rem;
          color: $gray-d;
          @include respond("tab") {
            width: 90%;
            padding-top: 1.7rem;
            margin-top: 2rem;
            font-size: 2.2rem;
            color: $black-d;
            border-top: 1px solid $gray-p;
          }
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
      width: 100%;
      display: grid;
      grid-template-columns: 49% 49%;
      justify-content: space-between;
      padding: 2rem;

      @include respond("tab") {
        padding: 1rem;
        height: 18.3rem;
      }
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
    @include respond("tab") {
      width: 90%;
      font-size: 2rem;
      margin-top: 5rem;
    }
    @include respond("mobile") {
      font-size: 2.4rem;
    }
  }
}
</style>


<script>
import postsEn from "~/contents/en/posts.json";
import postsJa from "~/contents/ja/posts.json";

import { TweenLite } from "gsap";
import StickyHeader from "~/components/Blog/StickyHeader";
import Markdown from "~/components/Blog/Markdown";
import PrevPost from "~/components/Blog/PrevPost";
import NextPost from "~/components/Blog/NextPost";
import blogScroll from "~/mixins/blogScroll.js";

export default {
  layout: "blog",
  head() {
    return {
      title: `${this.title} - OliAncho`
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
      renderFunc: post.vue.render,
      staticRenderFuncs: post.vue.staticRenderFns,
      prev,
      next
    };
  },
  mixins: [blogScroll],
  components: {
    StickyHeader,
    Markdown,
    PrevPost,
    NextPost
  }
};
</script>

