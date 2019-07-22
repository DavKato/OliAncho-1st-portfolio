import postsEn from './contents/en/posts.json';
import postsJa from './contents/ja/posts.json';
export default {
  mode: 'universal',

  head: {
    title: 'OliAncho',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: "Web tech team OliAncho's official website"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon32.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Abril+Fatface&display=swap'
      }
    ]
  },

  loading: false,

  css: ['@assets/scss/main.scss'],

  plugins: [
    '~/plugins/dateFormatter',
    '~/plugins/CustomImg',
    '~/plugins/VLazyImage'
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      //to any of '/posts' pages
      if (!from.name.startsWith('posts') && to.name.startsWith('posts')) {
        // return { x: 0, y: 1800 };
        return new Promise(resolve => {
          setTimeout(() => {
            resolve({ x: 0, y: 1500 });
          }, 400);
        });
      }
      // between potfolio pages
      const mainNames = ['index', 'about', 'blog', 'works', 'location'];
      if (
        mainNames.some(name => name === from.name.split('___')[0]) &&
        mainNames.some(name => name === to.name.split('___')[0])
      ) {
        return false;
      }
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 300);
      });
      // if (
      //   to.matched.some(r => r.components.default.options.scrollToTop !== false)
      // ) {
      //   return { x: 0, y: 0 };
      // }
    }
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'en',
            iso: 'en-GB',
            file: 'en-GB.js'
          },
          {
            code: 'ja',
            iso: 'ja-JP',
            file: 'ja-JP.js'
          }
        ],
        defaultLocale: 'en',
        strategy: 'prefix_and_default',
        detectBrowserLanguage: {
          fallbackLocale: 'en'
        },
        seo: false,
        lazy: true,
        langDir: 'locale/'
      }
    ]
  ],

  axios: {},

  styleResources: {
    scss: ['@assets/scss/_variables.scss']
  },

  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        options: {
          vue: true
        }
      });
    }
  },

  generate: {
    routes: [
      '/about',
      '/location',
      '/works',
      '/blog',
      '/posts',
      '/ja',
      '/ja/about',
      '/ja/location',
      '/ja/works',
      '/ja/blog',
      '/ja/posts'
    ]
      .concat(postsEn.map(post => `/posts/${post.slug}`))
      .concat(postsJa.map(post => `ja/posts/${post.slug}`)),
    subFolder: false
  },

  ssr: false,

  resourceHints: true
};
