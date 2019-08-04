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

  manifest: {
    name: 'OliAncho Web App',
    short_name: 'OliAncho',
    theme_color: '#6180aa',
    icons: []
  },

  plugins: [
    '~/plugins/breakpoints.js',
    '~/plugins/dateFormatter',
    '~/plugins/CustomImg',
    '~/plugins/VLazyImage',
    '~/plugins/vueScreenSize.js'
  ],

  router: {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      }
      //to any of '/blog-posts' pages
      if (
        !from.name.startsWith('blog-posts') &&
        to.name.startsWith('blog-posts')
      ) {
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
    'vue-scrollto/nuxt',
    '@nuxtjs/pwa',
    // '@nuxtjs/google-analytics',
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
    ],
    '@nuxtjs/sitemap'
  ],

  // googleAnalytics: {
  // },

  sitemap: {
    gzip: true
  },

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://res.cloudinary.com/oliancho/image/upload/.*',
        handler: 'cacheFirst'
      },
      {
        urlPattern: '^https://fonts.(?:googleapis|gstatic).com/(.*)',
        handler: 'cacheFirst'
      }
    ]
  },

  axios: {},

  styleResources: {
    scss: ['@assets/scss/_variables.scss', '@assets/scss/_mixins.scss']
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
    },
    postcss: {
      plugins: {
        'postcss-preset-env': {
          autoprefixer: { grid: false }
        }
      }
    }
  },

  generate: {
    routes: [
      '/about',
      '/location',
      '/works',
      '/blog',
      '/blog-posts',
      '/ja',
      '/ja/about',
      '/ja/location',
      '/ja/works',
      '/ja/blog',
      '/ja/blog-posts',
      '/contact',
      '/ja/contact'
    ]
      .concat(postsEn.map(post => `/blog-posts/${post.slug}`))
      .concat(postsJa.map(post => `ja/blog-posts/${post.slug}`)),
    subFolder: false
  },

  ssr: false,

  resourceHints: true
};
