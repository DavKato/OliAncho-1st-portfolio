<template>
  <div id="blog-layout">
    <picture>
      <source
        :media="`(max-width: ${$data.$tab}px)`"
        :srcset="
          `https://res.cloudinary.com/oliancho/image/upload/${options}414/bagushaus/Mobile/starback-mb 414w, https://res.cloudinary.com/oliancho/image/upload/${options}828/bagushaus/Mobile/starback-mb 828w, https://res.cloudinary.com/oliancho/image/upload/${options}1242/bagushaus/Mobile/starback-mb 1242w`
        "
        sizes="100vw"
      />
      <CldImg
        src="v1563231774/bagushaus/posts/starbuck.png"
        width="828,1280,1536,2560"
        sizes="100vw"
        alt="Background image with stars"
        id="blog-bg"
      />
    </picture>
    <noscript>
      <style>
        #initialCover {
          display: none;
        }
      </style>
      <div class="noscript">{{ $t('noscript') }}</div>
    </noscript>
    <NoIe>
      <div class="ie" v-if="ie">{{ $t('ie') }}</div>
    </NoIe>
    <nuxt />
    <BlogFooter id="blog-footer" />
  </div>
</template>

<style lang="scss" scoped>
#blog-layout {
  max-width: 100vw;
  background-color: $blog-bg;
}
#blog-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ie {
  position: absolute;
  top: 8rem;
  right: 1rem;
}

.noscript {
  position: absolute;
  top: 10rem;
  left: 1rem;
  z-index: 1000;
  white-space: pre;
  border: 1px solid #333;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 0.9rem 1.3rem;
  background-color: rgba(255, 255, 255, 0.7);
  border-radius: 3px;
  font-size: 1.3rem;
  text-align: center;
}
</style>

<script>
import detectIE from '~/mixins/detectIE.js'
export default {
  head() {
    const i18nSeo = this.$nuxtI18nSeo()
    const url = 'https://oliancho.com/'
    return {
      titleTemplate: '%s | OliAncho',
      htmlAttrs: { ...i18nSeo.htmlAttrs },
      meta: [
        { hid: 'charset', charset: 'utf-8' },
        {
          name: 'viewport',
          hid: 'viewport',
          content: 'width=device-width, initial-scale=1'
        },
        { 'http-equiv': 'x-ua-compatible', content: 'ie=edge' },
        {
          name: 'format-detection',
          content: 'telephone=no, email=no, address=no'
        },
        { hid: 'og:type', property: 'og:type', content: 'article' },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: 'OliAnchoBlog'
        },
        { hid: 'og:url', property: 'og:url', content: url + 'ja/blog-posts/' },
        {
          hid: 'og:image',
          property: 'og:image',
          content: url + 'images/blog-thumbnail.jpg'
        },
        { name: 'twitter:card', content: 'summary_large_image' },
        ...i18nSeo.meta
      ],
      link: [...i18nSeo.link]
    }
  },
  layoutTransition: 'blog-post',
  components: {
    NoIe: () => import('~/components/GlobalComponents/NoIe'),
    BlogFooter: () => import('~/components/Blog/BlogFooter')
  },
  mixins: [detectIE],
  data() {
    return {
      options: 'f_auto,q_auto,w_'
    }
  }
}
</script>
